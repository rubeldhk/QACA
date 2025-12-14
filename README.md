
# Bloomex Playwright Automation Framework

Focused E2E automation for Bloomex.

## Prerequisites

- Node.js LTS
- Playwright browsers: `npx playwright install`

## Setup

1) Install dependencies

```bash
npm install
```

2) Environment variables

- Create `src/config/.env.prod` with the following keys (examples shown):
  - EN_URL="https://bloomex.ca"               # Base URL for English
  - FR_URL="https://bloomex.ca/fr"            # Base URL for French
  - mailosaurServerId=""                      # Mailosaur server ID (email testing)
  - mailosaurDomain=""                        # Mailosaur domain (e.g., abcd1234.mailosaur.net)
  - mailosaurApiKey=""                        # Mailosaur API key
  - TEST_CARD=""                              # Test card number for checkout flows
  - TEST_CARD_EXPIRY=""                       # Card expiry (MM/YY)
  - TEST_CARD_CVC=""                          # Card CVC
  - TEST_CARD_NAME=""                         # Cardholder name
  - TEST_CARD_COUNTRY=""                      # Billing country

- The framework defaults to `NODE_ENV=prod`.

### How baseURL is picked

- `playwright.config.ts` loads `src/config/.env.$NODE_ENV` and sets `use.baseURL` based on `NODE_locale`:

```ts
// playwright.config.ts (excerpt)
import dotenv from "dotenv";
const env = process.env.NODE_ENV || "prod";
dotenv.config({ path: `./src/config/.env.${env}` });

// If NODE_locale === "fr" we use FR_URL, otherwise EN_URL
const baseUrl = process.env.NODE_locale === "fr"
  ? process.env.FR_URL || ""
  : process.env.EN_URL || "";

export default {
  use: { baseURL: baseUrl }
};
```

- In tests/pages, navigate with relative paths (e.g. `/`) so Playwright resolves against `use.baseURL`.

## Running tests

- English (uses `EN_URL`):

```bash
npm run test:prod:en
```

- French (uses `FR_URL`):

```bash
npm run test:prod:fr
```

- Run a specific spec:

```bash
npx playwright test src/specs/homepage/homepage.spec.ts
```

- Run by tag:

```bash
npx playwright test --grep "@smoke"

- Run by Playwright project (see projects in `playwright.config.ts`):

```bash
# desktop web (Chromium project)
npx playwright test --project="Chromium"

# mobile tests (files matching *.mobile.spec.ts)
npx playwright test --project="Mobile Chrome"
```

- Test file naming:
  - Web: `*.web.spec.ts` are targeted by desktop browser projects
  - Mobile: `*.mobile.spec.ts` are targeted by mobile projects
```

## Reports (Allure)

```bash
# after a test run
npm run allure:generate
npm run allure:open
```

If needed, clean results first:

```bash
npm run clean:allure
```

## Playwright HTML report

```bash
# after a test run
npx playwright show-report
```

## Project structure

```
bloomex.ca/
├── package.json
├── playwright.config.ts
├── README.md
├── tsconfig.json
├── allure-report/
├── allure-results/
├── src/
│   ├── config/
│   │   └── .env.prod
│   ├── data/
│   │   └── prod/
│   │       ├── english/
│   │       │   └── homepage/
│   │       │       ├── homepage.mobile.data.ts
│   │       │       └── homepage.web.data.ts
│   │       └── french/
│   │           └── homepage/
│   │               ├── homepage.mobile.data.ts
│   │               └── homepage.web.data.ts
│   ├── fixtures/
│   │   └── page.fixtures.ts
│   ├── interfaces/
│   │   ├── homepage/
│   │   │   └── homePage.interface.ts
│   │   ├── locator.info.interface.ts
│   │   ├── mailosaur.interface.ts
│   │   └── testcase.data.interface.ts
│   ├── page/
│   │   └── homepage/
│   │       └── homepage.page.ts
│   ├── specs/
│   │   ├── english/
│   │   │   └── homepage/
│   │   │       ├── homepage.mobile.spec.ts
│   │   │       └── homepage.web.spec.ts
│   │   └── french/
│   │       └── homepage/
│   │           ├── homepage.mobile.spec.ts
│   │           └── homepage.web.spec.ts
│   └── utilities/
│       ├── env.utils.ts
│       ├── general.utils.ts
│       ├── playwright.actions.utils.ts
│       ├── playwright.verifications.utils.ts
│       └── test.helper.utils.ts
```

## Scripts

From `package.json`:

 - `test:prod:en`: sets `NODE_ENV=prod`, `NODE_locale=en`, runs tests
 - `test:prod:fr`: sets `NODE_ENV=prod`, `NODE_locale=fr`, runs tests
 - `test:prod:clean:en`: clean Allure results, then English run
 - `test:prod:clean:fr`: clean Allure results, then French run
 - `clean:allure`: remove Allure results
 - `allure:copy:history`: copy prior report history
 - `allure:generate`: generate Allure report
 - `allure:open`: open Allure report

## Notes

- Base URL is selected in `playwright.config.ts` using `NODE_locale`:
  - `NODE_locale=fr` → `FR_URL`
  - any other value → `EN_URL`
- Use relative navigation in page objects: `page.goto('/')` or helper methods that pass `"/"`, so Playwright applies `use.baseURL`.
- To debug, print effective values at startup:

```ts
console.log('ENV DEBUG', {
  NODE_ENV: process.env.NODE_ENV,
  NODE_locale: process.env.NODE_locale,
  EN_URL: process.env.EN_URL,
  FR_URL: process.env.FR_URL,
});
```
- Test data is resolved per `NODE_ENV` in `src/utilities/env.utils.ts` (default: `prod`).
 - Set `EmbedScreenshotsInReport=true` in your `.env` to embed screenshots into Allure attachments when available.
 - HTML reporter is enabled; open it with `npx playwright show-report` after a run.
