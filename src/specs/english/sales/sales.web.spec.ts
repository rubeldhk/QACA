import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Sales Page", () => {
  const scenario1 = getDataSet(
    "sales.web",
    "salesTestData",
    "0001-verify-sales"
  );
  const scenario2 = getDataSet(
    "sales.web",
    "salesTestData",
    "0002-verify-sales-heading-and-description"
  );
  const scenario3 = getDataSet(
    "sales.web",
    "salesTestData",
    "0003-verify-sales-prices-are-sorted-ascending"
  );
  const scenario4 = getDataSet(
    "sales.web",
    "salesTestData",
    "0004-verify-sales-prices-are-sorted-descending"
  );
  const scenario5 = getDataSet(
    "sales.web",
    "salesTestData",
    "0005-add-product-to-cart-and-verify-price-and-description"
  );
  test.beforeEach(async ({ homepagePage, commonUtils }) => {
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user navigates to best Sellers page", async () => {
      await homepagePage.navigateToPage(scenario1.verifyPage.pageName);
    });
  });

  test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user verifies that the user is on the sales page", async () => {
      await homepagePage.verifyPage(scenario1.verifyPage);
    });
  });

  test(`Test case: '${scenario2.testCaseData.testCase}'
    Summary: ${scenario2.testCaseData.testSummary}
    Description: ${scenario2.testCaseData.testDescription}
    Tags: '${scenario2.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario2.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user verifies that the sales heading and description is visible on the sales page", async () => {
      await homepagePage.verifyHeading(scenario2.salesHeading);
      await homepagePage.verifyText(scenario2.salesDescription);
      await homepagePage.verifyText(scenario2.salesPrice);
    });
  });

  test(`Test case: '${scenario3.testCaseData.testCase}'
    Summary: ${scenario3.testCaseData.testSummary}
    Description: ${scenario3.testCaseData.testDescription}
    Tags: '${scenario3.testCaseData.tags}'
  `, async ({ commonUtils, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user sorts the product prices by ascending", async () => {
      await bestSellersPage.sortByPrice(scenario3.sortByPrice, scenario3.sortOrder);
    });

    await test.step("AND the user verifies that product prices are sorted ascending on the best Sellers page", async () => {
      await bestSellersPage.verifyProductPricesAreSorted(scenario3.sortOrder);
    });
  });

  test(`Test case: '${scenario4.testCaseData.testCase}'
    Summary: ${scenario4.testCaseData.testSummary}
    Description: ${scenario4.testCaseData.testDescription}
    Tags: '${scenario4.testCaseData.tags}'
  `, async ({ commonUtils, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario4.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario4.sortByPrice, scenario4.sortOrder);
    });

    await test.step("AND the user verifies that product prices are sorted descending on the best Sellers page", async () => {
      await bestSellersPage.verifyProductPricesAreSorted(scenario4.sortOrder);
    });
  });

  test(`Test case: '${scenario5.testCaseData.testCase}'
    Summary: ${scenario5.testCaseData.testSummary}
    Description: ${scenario5.testCaseData.testDescription}
    Tags: '${scenario5.testCaseData.tags}'
  `, async ({ commonUtils, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario5.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user adds a product to cart and verifies that product price and description visible on the cart page is the same as the product price and description on the sales page", async () => {
      await bestSellersPage.addProductToCartAndVerifyPriceAndDescription(scenario5.addToCartButton, scenario5.proceedToCheckoutButton);
    });
  });

});
