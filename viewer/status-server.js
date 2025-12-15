const http = require('http');
const { URL } = require('url');
const { execFile } = require('child_process');

const PORT = process.env.PORT || 3001;
const STAGING_BUCKET = process.env.STAGING_BUCKET;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type,x-qaca-token',
  'Access-Control-Allow-Methods': 'GET,OPTIONS'
};

function sendJson(res, statusCode, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
    ...corsHeaders
  });
  res.end(body);
}

function handleOptions(res) {
  res.writeHead(200, corsHeaders);
  res.end();
}

async function handleStatus(req, res, urlObj) {
  const executionId = urlObj.searchParams.get('executionId');
  if (!executionId) {
    return sendJson(res, 400, { error: 'executionId required' });
  }
  if (!STAGING_BUCKET) {
    return sendJson(res, 503, { error: 'STAGING_BUCKET not configured' });
  }

  try {
    const data = await fetchJsonFromS3(`status/${executionId}.json`);
    if (!data) {
      return sendJson(res, 404, { error: 'not found' });
    }
    return sendJson(res, 200, data);
  } catch (err) {
    console.error('Failed to read status', err);
    return sendJson(res, 500, { error: 'internal error' });
  }
}

async function handleSummary(_req, res) {
  if (!STAGING_BUCKET) {
    return sendJson(res, 200, {});
  }

  try {
    const latestKeys = (await listLatestKeys()) || [];
    const summary = {};

    for (const key of latestKeys) {
      const parts = key.split('/');
      if (parts.length < 5) continue;
      const env = parts[1];
      const locale = parts[2];
      const groupId = parts[3];

      const latestData = (await fetchJsonFromS3(key)) || {};
      const prevData = (await fetchJsonFromS3(key.replace('/latest.json', '/prev.json'))) || {};

      summary[env] = summary[env] || {};
      summary[env][locale] = summary[env][locale] || {};
      summary[env][locale][groupId] = {
        latest: latestData.executionId || null,
        prev: prevData.executionId || null,
        status: latestData.status || null,
        durationSeconds: latestData.durationSeconds ?? null
      };
    }

    return sendJson(res, 200, summary);
  } catch (err) {
    console.error('Failed to build summary', err);
    return sendJson(res, 500, { error: 'internal error' });
  }
}

function createServer() {
  return http.createServer(async (req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'OPTIONS') {
      return handleOptions(res);
    }

    if (urlObj.pathname === '/api/status') {
      return handleStatus(req, res, urlObj);
    }
    if (urlObj.pathname === '/api/summary') {
      return handleSummary(req, res);
    }

    res.writeHead(404, corsHeaders);
    res.end();
  });
}

async function fetchJsonFromS3(key) {
  return new Promise((resolve, reject) => {
    const args = ['s3api', 'get-object', '--bucket', STAGING_BUCKET, '--key', key, '/dev/stdout'];
    const proc = execFile('aws', args, { maxBuffer: 5 * 1024 * 1024 }, (error, stdout) => {
      if (error) {
        if (error.code === 254 || error.code === 255) {
          return resolve(null);
        }
        return reject(error);
      }
      try {
        const parsed = JSON.parse(stdout.toString());
        return resolve(parsed);
      } catch (parseErr) {
        return reject(parseErr);
      }
    });

    proc.stdin && proc.stdin.end();
  });
}

async function listLatestKeys() {
  return new Promise((resolve, reject) => {
    const query = 'Contents[?ends_with(Key, `latest.json`)].Key';
    const args = [
      's3api',
      'list-objects-v2',
      '--bucket',
      STAGING_BUCKET,
      '--prefix',
      'status/',
      '--query',
      query,
      '--output',
      'json'
    ];

    execFile('aws', args, { maxBuffer: 5 * 1024 * 1024 }, (error, stdout) => {
      if (error) {
        if (error.code === 254 || error.code === 255) {
          return resolve([]);
        }
        return reject(error);
      }
      try {
        const parsed = JSON.parse(stdout.toString());
        return resolve(Array.isArray(parsed) ? parsed : []);
      } catch (err) {
        return reject(err);
      }
    });
  });
}

createServer().listen(PORT, () => {
  console.log(`Status server running on ${PORT}`);
});
