import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Search Web", () => {
  const testScenarios = [
    "1-verify-search",
    "2-verify-search",
    "3-verify-search",
    "4-verify-search",
    "5-verify-search",
    "6-verify-search",
    "7-verify-search",
  ];

  for (const scenarioKey of testScenarios) {
    const scenario = getDataSet("search.web", "searchTestData", scenarioKey);

    test.beforeEach(async ({ homepagePage, commonUtils }) => {
      await test.step("🏠 GIVEN the user navigates to Homepage", async () => {
        await commonUtils.closePopup();
        await homepagePage.navigateToHomepage();
        await homepagePage.verifyTitle(scenario.title);
      });
    });
    test(`Test case: '${scenario.testCaseData.testCase}'
      Summary: '${scenario.testCaseData.testSummary}'
      Description: '${scenario.testCaseData.testDescription}'
      Tags: '${scenario.testCaseData.tags}'
    `, async ({ searchPage, commonUtils }) => {
      await commonUtils.closePopup();
      test.setTimeout(240000);
      await logTestCaseData(test.info(), scenario.testCaseData);

      await test.step("🔍 AND the user searches for the product", async () => {
        await searchPage.searchForProduct(scenario.ProductName);
      });

      await test.step("📦 AND the user opens the search product", async () => {
        await searchPage.openSearchedproduct(scenario.ProductName);
      });

      await test.step("✅ AND the user verifies the product details are displayed", async () => {
        await searchPage.verifyProductNameIsDisplayed(scenario.ProductName);
        await searchPage.verifyProductPriceIsDisplayed(scenario.ProductPrice);
        await searchPage.verifyProductDescriptionIsDisplayed(
          scenario.ProductDescription
        );
      });

      await test.step("📸 AND the user performs visual comparison", async () => {
        await commonUtils.performVisualComparison(scenario.ProductName);
      });
    });
  }
});
