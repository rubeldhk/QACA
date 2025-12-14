import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import dotenv from "dotenv";
import os from "node:os";

// Load environment variables
const env = process.env.NODE_ENV || "prod";
dotenv.config({ path: `./src/config/.env.${env}` });

const locale = process.env.NODE_locale;
const baseUrl = locale === "fr" ? process.env.FR_URL || "" : process.env.EN_URL || "";

const config: PlaywrightTestConfig = {
  testIgnore: locale === 'fr'
    ? /.*\/english\/.*/
    : locale === 'en'
    ? /.*\/french\/.*/
    : undefined,
  testDir: "./src/specs/",
  timeout: 150 * 1000,
  expect: {
    timeout: 30 * 1000,
  },
  fullyParallel: true, 
  forbidOnly: !!process.env.CI,
  retries:  0,
  workers: process.env.CI ? 2 : 2,

  reporter: [
    ["list", { printSteps: true }],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: true,
        environmentInfo: {
          OS: os.platform(),
          Architecture: os.arch(),
          NodeVersion: process.version,
          url: baseUrl,
        },
        categories: [
          {
            name: "Missing file errors",
            messageRegex: /^ENOENT: no such file or directory/,
          },
        ],
      },
    ],
    ["html", { open: "never" }],
  ],

  use: {
    video: "retain-on-failure",
    actionTimeout: 45 * 1000,
    baseURL: baseUrl,
    headless: process.env.CI ? true : false,
    trace: "retain-on-failure",
    viewport: { width: 1368, height: 768 },
  },

  projects: [
    {
      name: "Chromium",
      use: {
        ...devices['Desktop Chrome'], channel: 'chrome',
        viewport: { width: 1368, height: 768 },
        video: 'on',
      },
      testMatch: /.*\.web\.spec\.ts/,
    },
    {
      name: "firefox",
      use: {
        ...devices['Desktop Firefox'],
        video: 'on',
      },
      testMatch: /.*\.web\.spec\.ts/,
    },
    {
      name: "webkit",
      use: {
        ...devices['Desktop Safari'],
        video: 'on',
      },
      testMatch: /.*\.web\.spec\.ts/,
    },
    {
      name: "edge",
      use: {
        ...devices["Desktop Edge"], channel: 'msedge',
        video: 'on',
      },
      testMatch: /.*\.web\.spec\.ts/,
    },
    {
      name: 'Mobile Chrome',
      use: {
         ...devices['Pixel 5'],
          viewport: { width: 520, height: 912 },
          channel: 'chrome',
          video: 'on',
        },
      testMatch: /.*\.mobile\.spec\.ts/,
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'], viewport: { width: 390, height: 844 } },
      testMatch: /.*\.mobile\.spec\.ts/,
    }
  ],
};

export default config;


