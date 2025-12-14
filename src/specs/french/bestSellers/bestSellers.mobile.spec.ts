import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Best Sellers Page", () => {
  const scenario1 = getDataSet(
    "bestSellers.mobile",
    "bestSellersTestData",
    "0001-verify-bestSellers"
  );
  const scenario2 = getDataSet(
    "bestSellers.mobile",
    "bestSellersTestData",
    "0002-verify-bestSellers-heading-and-description"
  );
  const scenario3 = getDataSet(
    "bestSellers.mobile",
    "bestSellersTestData",
    "0003-verify-bestSellers-all-products-have-bestSellers-badge"
  );
  const scenario4 = getDataSet(
    "bestSellers.mobile",
    "bestSellersTestData",
    "0004-verify-bestSellers-prices-are-sorted-ascending"
  );
  const scenario5 = getDataSet(
    "bestSellers.mobile",
    "bestSellersTestData",
    "0005-verify-bestSellers-prices-are-sorted-descending"
  );
  const scenario6 = getDataSet(
    "bestSellers.mobile",
    "bestSellersTestData",
    "0006-add-product-to-cart-and-verify-price-and-description"
  );
  test.beforeEach(async ({ homepagePage, commonUtils }) => {
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user navigates to best Sellers page", async () => {
      await homepagePage.navigateToPageOnMobile(scenario1.verifyPage.pageName);
    });
  });

  test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user verifies that the user is on the best Sellers page", async () => {
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
    await commonUtils.closeTeaser();
    await test.step("AND the user verifies that the best Sellers heading and description is visible on the best Sellers page", async () => {
      await homepagePage.verifyHeading(scenario2.bestSellersHeading);
      await homepagePage.verifyText(scenario2.bestSellersDescription);
    });
  });

  test(`Test case: '${scenario3.testCaseData.testCase}'
    Summary: ${scenario3.testCaseData.testSummary}
    Description: ${scenario3.testCaseData.testDescription}
    Tags: '${scenario3.testCaseData.tags}'
  `, async ({ commonUtils, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user verifies that all products have best Sellers badge on the best Sellers page", async () => {
      await bestSellersPage.verifyAllProductsHaveBestSellersBadge(scenario3.bestSellerBadge);
    });
  });

  test(`Test case: '${scenario4.testCaseData.testCase}'
    Summary: ${scenario4.testCaseData.testSummary}
    Description: ${scenario4.testCaseData.testDescription}
    Tags: '${scenario4.testCaseData.tags}'
  `, async ({ commonUtils, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario4.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user sorts the product prices by ascending", async () => {
      await bestSellersPage.sortByPrice(scenario4.sortByPrice, scenario4.sortOrder);
    });

    await test.step("AND the user verifies that product prices are sorted ascending on the best Sellers page", async () => {
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
    await commonUtils.closeTeaser();
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario5.sortByPrice, scenario5.sortOrder);
    });

    await test.step("AND the user verifies that product prices are sorted descending on the best Sellers page", async () => {
      await bestSellersPage.verifyProductPricesAreSorted(scenario5.sortOrder);
    });
  });

  test(`Test case: '${scenario6.testCaseData.testCase}'
    Summary: ${scenario6.testCaseData.testSummary}
    Description: ${scenario6.testCaseData.testDescription}
    Tags: '${scenario6.testCaseData.tags}'
  `, async ({ commonUtils, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario6.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user adds a product to cart and verifies that product price and description visible on the cart page is the same as the product price and description on the best Sellers page", async () => {
      await bestSellersPage.addProductToCartAndVerifyPriceAndDescription(scenario6.addToCartButton, scenario6.proceedToCheckoutButton);
    });
  });

});
