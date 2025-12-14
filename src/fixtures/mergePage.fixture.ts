
import { defaultTest } from '@fixtures/page.fixtures';

import { mergeTests } from '@playwright/test';

export const test = mergeTests(
  defaultTest
);
