import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Sales Page", () => {
  const scenario1 = getDataSet(
    "addtocart.mobile",
    "addtocartTestData",
    "0001-verify-addtocart"
  );
  const scenario2 = getDataSet(
    "addtocart.mobile",
    "addtocartTestData",
    "0002-increase-product-quantity-in-cart"
  );
  const scenario3 = getDataSet(
    "addtocart.mobile",
    "addtocartTestData",
    "0003-decrease-product-quantity-in-cart"
  );
  const scenario4 = getDataSet(
    "addtocart.mobile",
    "addtocartTestData",
    "0004-update-product-quantity-in-cart"
  );
  test.beforeEach(async ({ homepagePage, commonUtils }) => {
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await commonUtils.closePopup();
      await commonUtils.closeTeaser();
      await homepagePage.navigateToHomepage();
    });
  });

  test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ commonUtils, addToCartPage }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user adds product to cart ", async () => {
      await addToCartPage.addProductToCart(
        scenario1.addtocart,
        scenario1.proceedToCheckout
      );
    });
    await test.step("AND the user verifies the product price and description on the cart page", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario1.cartHeading,
        scenario1.productQuantity
      );
    });
    await test.step("AND the user proceeds to checkout", async () => {
      await addToCartPage.proceedToCheckout(
        scenario1.proceedToCheckoutButtonOnCartPage
      );
    });
  });
  test(`Test case: '${scenario2.testCaseData.testCase}'
    Summary: ${scenario2.testCaseData.testSummary}
    Description: ${scenario2.testCaseData.testDescription}
    Tags: '${scenario2.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, addToCartPage }) => {
    await logTestCaseData(test.info(), scenario2.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user Adds a product to the cart", async () => {
      await addToCartPage.addProductToCart(
        scenario2.addtocart,
        scenario2.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario2.cartHeading,
        scenario2.productQuantity
      );
    });

    await test.step("AND the user increases the product quantity in the cart", async () => {
      await addToCartPage.increaseProductQuantity(
        scenario2.increasedProductQuantity
      );
    });
  });
  test(`Test case: '${scenario3.testCaseData.testCase}'
    Summary: ${scenario3.testCaseData.testSummary}
    Description: ${scenario3.testCaseData.testDescription}
    Tags: '${scenario3.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, addToCartPage }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user Adds a product to the cart", async () => {
      await addToCartPage.addProductToCart(
        scenario3.addtocart,
        scenario3.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario3.cartHeading,
        scenario3.productQuantity
      );
    });

    await test.step("AND the user decreases the product quantity in the cart", async () => {
      await addToCartPage.decreaseProductQuantity(
        scenario3.decreasedProductQuantity
      );
    });
  });
  test(`Test case: '${scenario4.testCaseData.testCase}'
    Summary: ${scenario4.testCaseData.testSummary}
    Description: ${scenario4.testCaseData.testDescription}
    Tags: '${scenario4.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, addToCartPage }) => {
    await logTestCaseData(test.info(), scenario4.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user Adds a product to the cart", async () => {
      await addToCartPage.addProductToCart(
        scenario4.addtocart,
        scenario4.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario4.cartHeading,
        scenario4.productQuantity
      );
    });

    await test.step("AND the user updates the product quantity in the cart", async () => {
      await addToCartPage.updateProductQuantity(scenario4.addtocart);
    });
  });
});
