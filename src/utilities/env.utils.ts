import * as fs from 'fs';
import * as path from 'path';

export function getEnvVariable(env: string, defaultValue?: string): string {
  const value = process.env[env];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${env} is not set`);
  }
  return value;
}

function findDataFile(dir: string, targetFile: string): null | string {
  if (!fs.existsSync(dir)) {
    return null;
  }
  console.log(`Searching in directory: ${dir} for file: ${targetFile}`);
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      console.log(`Found directory: ${fullPath}`);
      const found = findDataFile(fullPath, targetFile);
      if (found) {
        return found;
      }
    } else if (file === targetFile) {
      console.log(`Found target file: ${fullPath}`);
      return fullPath;
    }
  }
  return null;
}

export function getDataSet(filename: string, datasetName: string, testCase: string) {
  const env = process.env.NODE_ENV || 'prod';
  const locale = process.env.NODE_locale === "fr" ? "french" : "english";
  const envDir = `${env}`;
  const baseDir = path.resolve(__dirname, `../data/${envDir}/${locale}`);
  const targetFile = `${filename}.data.ts`;

  console.log(`Looking for data file in environment: ${env}`);
  console.log(`Base directory: ${baseDir}`);   
  console.log(`Target file: ${targetFile}`);

  const dataFilePath = findDataFile(baseDir, targetFile);

  if (!dataFilePath) {
    // Check if the environment directory exists
    if (!fs.existsSync(baseDir)) {
      throw new Error(`Environment directory not found: ${baseDir}. Please check if NODE_ENV is set correctly.`);
    }
    throw new Error(`Data file not found: ${targetFile} in env: ${env}. Searched in: ${baseDir}`);
  }

  const dataModule = require(dataFilePath);

  // Check if the module has a function to get the data
  if (typeof dataModule.getData === 'function') {
    return dataModule.getData(testCase);
  }

  // Fallback to direct access if no function exists
  const data = dataModule[datasetName]?.[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase} in dataset: ${datasetName} for env: ${env}`);
  }
  return data;
}
