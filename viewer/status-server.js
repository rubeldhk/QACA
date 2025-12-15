const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const STATUS_DIR = process.env.STATUS_DIR || '/var/www/status';
const REPORT_META = process.env.REPORT_META || '/var/www/reports/meta.json';

const app = express();
app.use(cors());

app.get('/api/status', (req, res) => {
  const executionId = req.query.executionId;
  if (!executionId) {
    return res.status(400).json({ error: 'executionId required' });
  }
  const file = path.join(STATUS_DIR, `${executionId}.json`);
  if (!fs.existsSync(file)) {
    return res.status(404).json({ error: 'not found' });
  }
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  return res.json(data);
});

app.get('/api/summary', (req, res) => {
  const env = req.query.env;
  const locale = req.query.locale;
  const groupId = req.query.groupId;

  if (!fs.existsSync(REPORT_META)) {
    return res.json({});
  }
  const meta = JSON.parse(fs.readFileSync(REPORT_META, 'utf8'));
  if (env && locale && groupId) {
    return res.json((meta[env] || {})[locale]?.[groupId] || {});
  }
  return res.json(meta);
});

app.listen(PORT, () => {
  console.log(`Status server running on ${PORT}`);
});
