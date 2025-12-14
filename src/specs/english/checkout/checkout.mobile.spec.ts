import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { deleteAllEmails } from "@utilities/mailosaur/mailosaur.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Add to Cart", () => {
  const scenario1 = getDataSet(
    "checkout.mobile",
    "checkoutTestData",
    "0001-verify-checkout"
  );
  const scenario2 = getDataSet(
    "checkout.mobile",
    "checkoutTestData",
    "0002-verify-checkout-and-pay"
  );
  const scenario3 = getDataSet(
    "checkout.mobile",
    "checkoutTestData",
    "0003-verify-expired-coupon-code"
  );
  const scenario4 = getDataSet(
    "checkout.mobile",
    "checkoutTestData",
    "0004-verify-checkout-with-increased-product-quantity"
  );
  const scenario5 = getDataSet(
    "checkout.mobile",
    "checkoutTestData",
    "0004-verify-checkout-with-decreased-product-quantity"
  );
  const scenario6 = getDataSet(
    "checkout.mobile",
    "checkoutTestData",
    "0005-verify-checkout-and-pay"
  );
  test.beforeEach(async ({ homepagePage, commonUtils }) => {
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
      await homepagePage.navigateToHomepage();
    });
  });

  test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ commonUtils, addToCartPage, checkoutPage }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user Adds a product to the cart 🛒", async () => {
      await addToCartPage.addProductToCart(
        scenario1.addtocart,
        scenario1.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page ✅", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario1.cartHeading,
        scenario1.productQuantity
      );
    });

    await test.step("AND the user proceeds to checkout 💳", async () => {
      await addToCartPage.proceedToCheckout(
        scenario1.proceedToCheckoutButtonOnCartPage
      );
    });
  });

  test(`Test case: '${scenario2.testCaseData.testCase}'
    Summary: ${scenario2.testCaseData.testSummary}
    Description: ${scenario2.testCaseData.testDescription}
    Tags: '${scenario2.testCaseData.tags}'
  `, async ({ commonUtils, addToCartPage, checkoutPage }) => {
    test.setTimeout(240000);
    await logTestCaseData(test.info(), scenario2.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user Adds a product to the cart 🛒", async () => {
      await addToCartPage.addProductToCart(
        scenario1.addtocart,
        scenario1.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page ✅", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario2.cartHeading,
        scenario2.productQuantity
      );
    });

    await test.step("AND the user proceeds to checkout 💳", async () => {
      await addToCartPage.proceedToCheckout(
        scenario2.proceedToCheckoutButtonOnCartPage
      );
    });

    await test.step("AND the user fills the Create Account form 📝", async () => {
      await checkoutPage.fillCreateAccountForm(
        scenario2.emailAddress,
        scenario2.password,
        scenario2.firstName,
        scenario2.phone
      );
    });

    await test.step("AND the user verifies confirmation email 📧", async () => {
      await checkoutPage.verifyConfirmationEmail(
        scenario2.emailAddress,
        scenario2.emailBody,
        scenario2.emailSubject
      );
    });

    await test.step("AND the user fills the Last Name form 📝", async () => {
      await checkoutPage.typeLastName(scenario2.lastName);
    });

    await test.step("AND the user fills the Shipping address form 📝", async () => {
      await checkoutPage.typeCity(scenario2.city);
    });

    await test.step("AND the user fills the Street Number form 📝", async () => {
      await checkoutPage.typeStreetNumber(scenario2.streetNumber);
    });

    await test.step("AND the user fills the Street Name form 📝", async () => {
      await checkoutPage.typeStreetName(scenario2.streetName);
    });

    await test.step("AND the user fills the Postcode form 📝", async () => {
      await checkoutPage.typePostcode(scenario2.postcode);
    });
    await test.step("AND the user clicks the next step button 📝", async () => {
      await checkoutPage.clickNextStepButton();
    });

    await test.step("AND the user adds valid coupon code 📝", async () => {
      await checkoutPage.addCouponCode(scenario2.couponCode);
    });

    await test.step("AND the user verifies the coupon code is valid 📝", async () => {
      await checkoutPage.verifyCouponCodeIsApplied();
    });

    await test.step("AND the user adds delivery date 📝", async () => {
      await checkoutPage.addDeliveryDate();
    });

    await test.step("AND the user clicks on Pay Button 📝", async () => {
      await checkoutPage.clickPayButton();
    });

    await test.step("AND the user adds his card details 📝", async () => {
      await checkoutPage.addCardDetails(scenario2.cardDetails);
    });

    await test.step("AND the user completes the order 📝", async () => {
      await checkoutPage.completeOrder(scenario2.completeOrder);
    });
  });
  test(`Test case: '${scenario3.testCaseData.testCase}'
    Summary: ${scenario3.testCaseData.testSummary}
    Description: ${scenario3.testCaseData.testDescription}
    Tags: '${scenario3.testCaseData.tags}'
  `, async ({ commonUtils, addToCartPage, checkoutPage, loginPage }) => {
    test.setTimeout(240000);
    await logTestCaseData(test.info(), scenario3.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user Adds a product to the cart 🛒", async () => {
      await addToCartPage.addProductToCart(
        scenario3.addtocart,
        scenario3.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page ✅", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario3.cartHeading,
        scenario3.productQuantity
      );
    });

    await test.step("AND the user proceeds to checkout 💳", async () => {
      await addToCartPage.proceedToCheckout(
        scenario3.proceedToCheckoutButtonOnCartPage
      );
    });
    await test.step("AND the user logs in with credentials 📝", async () => {
      await loginPage.loginTheUser(scenario3.credentials);
      await loginPage.verifyUserIsLoggedIn();
    });
    await test.step("AND the user adds delivery City 📝", async () => {
      await checkoutPage.typeCity(scenario3.city);
    });
    await test.step("AND the user fills the Last Name form 📝", async () => {
      await checkoutPage.typeLastName(scenario3.lastName);
    });

    await test.step("AND the user fills the Shipping address form 📝", async () => {
      await checkoutPage.typeCity(scenario3.city);
    });

    await test.step("AND the user fills the Street Number form 📝", async () => {
      await checkoutPage.typeStreetNumber(scenario3.streetNumber);
    });

    await test.step("AND the user fills the Street Name form 📝", async () => {
      await checkoutPage.typeStreetName(scenario3.streetName);
    });

    await test.step("AND the user fills the Postcode form 📝", async () => {
      await checkoutPage.typePostcode(scenario3.postcode);
    });
    await test.step("AND the user clicks the next step button 📝", async () => {
      await checkoutPage.clickNextStepButton();
    });
    await test.step("AND the user adds expired coupon code 📝", async () => {
      await checkoutPage.addCouponCode(scenario3.couponCode);
    });
    await test.step("THEN the verifies the coupon code is expired 📝", async () => {
      await checkoutPage.verifyCouponCodeIsExpired(
        scenario3.isCouponCodeExpired
      );
    });
  });

  test(`Test case: '${scenario4.testCaseData.testCase}'
    Summary: ${scenario4.testCaseData.testSummary}
    Description: ${scenario4.testCaseData.testDescription}
    Tags: '${scenario4.testCaseData.tags}'
  `, async ({ commonUtils, addToCartPage, checkoutPage }) => {
    test.setTimeout(240000);
    await logTestCaseData(test.info(), scenario4.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await test.step("AND the user Adds a product to the cart 🛒", async () => {
      await addToCartPage.addProductToCart(
        scenario4.addtocart,
        scenario4.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page ✅", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario4.cartHeading,
        scenario4.productQuantity
      );
    });

    await test.step("AND the user proceeds to checkout 💳", async () => {
      await addToCartPage.proceedToCheckout(
        scenario4.proceedToCheckoutButtonOnCartPage
      );
    });

    await test.step("AND the user fills the Guest checkout form 📝", async () => {
      await checkoutPage.fillCreateAccountForm(
        scenario4.emailAddress,
        scenario4.password,
        scenario4.firstName,
        scenario4.phone
      );
    });

    await test.step("AND the user fills the Last Name form 📝", async () => {
      await checkoutPage.typeLastName(scenario4.lastName);
    });

    await test.step("AND the user fills the Shipping address form 📝", async () => {
      await checkoutPage.typeCity(scenario4.city);
    });

    await test.step("AND the user fills the Street Number form 📝", async () => {
      await checkoutPage.typeStreetNumber(scenario4.streetNumber);
    });

    await test.step("AND the user fills the Street Name form 📝", async () => {
      await checkoutPage.typeStreetName(scenario4.streetName);
    });

    await test.step("AND the user fills the Postcode form 📝", async () => {
      await checkoutPage.typePostcode(scenario4.postcode);
    });
    await test.step("AND the user clicks the next step button 📝", async () => {
      await checkoutPage.clickNextStepButton();
    });

    await test.step("AND the user adds valid coupon code 📝", async () => {
      await checkoutPage.addCouponCode(scenario4.couponCode);
    });

    await test.step("AND the user increases the product quantity in the cart 📝", async () => {
      await addToCartPage.increaseProductQuantity(
        scenario4.increasedProductQuantity
      );
    });

    await test.step("AND the user verifies the price increases on checkout page 📝", async () => {
      await addToCartPage.verifyPriceIncreasesOnCheckoutPage();
    });

    await test.step("AND the user adds delivery date 📝", async () => {
      await checkoutPage.addDeliveryDate();
    });

    await test.step("AND the user verifies the price increases on order price detail 📝", async () => {
      await addToCartPage.verifyPriceIncreasesOnOrderPriceDetail();
    });

    await test.step("AND the user clicks on Pay Button 📝", async () => {
      await checkoutPage.clickPayButton();
    });
  });

  test(`Test case: '${scenario5.testCaseData.testCase}'
    Summary: ${scenario5.testCaseData.testSummary}
    Description: ${scenario5.testCaseData.testDescription}
    Tags: '${scenario5.testCaseData.tags}'
  `, async ({ commonUtils, addToCartPage, checkoutPage }) => {
    test.setTimeout(240000);
    await logTestCaseData(test.info(), scenario5.testCaseData);
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();  
    await test.step("AND the user Adds a product to the cart 🛒", async () => {
      await addToCartPage.addProductToCart(
        scenario5.addtocart,
        scenario5.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page ✅", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario5.cartHeading,
        scenario5.productQuantity
      );
    });

    await test.step("AND the user proceeds to checkout 💳", async () => {
      await addToCartPage.proceedToCheckout(
        scenario5.proceedToCheckoutButtonOnCartPage
      );
    });

    await test.step("AND the user fills the Guest checkout form 📝", async () => {
      await checkoutPage.fillCreateAccountForm(
        scenario5.emailAddress,
        scenario5.password,
        scenario5.firstName,
        scenario5.phone
      );
    });

    await test.step("AND the user fills the Last Name form 📝", async () => {
      await checkoutPage.typeLastName(scenario5.lastName);
    });

    await test.step("AND the user fills the Shipping address form 📝", async () => {
      await checkoutPage.typeCity(scenario5.city);
    });

    await test.step("AND the user fills the Street Number form 📝", async () => {
      await checkoutPage.typeStreetNumber(scenario5.streetNumber);
    });

    await test.step("AND the user fills the Street Name form 📝", async () => {
      await checkoutPage.typeStreetName(scenario5.streetName);
    });

    await test.step("AND the user fills the Postcode form 📝", async () => {
      await checkoutPage.typePostcode(scenario5.postcode);
    });
    await test.step("AND the user clicks the next step button 📝", async () => {
      await checkoutPage.clickNextStepButton();
    });

    await test.step("AND the user adds valid coupon code 📝", async () => {
      await checkoutPage.addCouponCode(scenario5.couponCode);
    });

    await test.step("AND the user decreases the product quantity in the cart 📝", async () => {
      await addToCartPage.decreaseProductQuantity(
        scenario5.decreasedProductQuantity
      );
    });

    await test.step("AND the user verifies the price decreases on checkout page 📝", async () => {
      await addToCartPage.verifyPriceDecreasesOnCheckoutPage();
    });

    await test.step("AND the user adds delivery date 📝", async () => {
      await checkoutPage.addDeliveryDate();
    });

    await test.step("AND the user verifies the price increases on order price detail 📝", async () => {
      await addToCartPage.verifyPriceDecreasesOnOrderPriceDetail();
    });

    await test.step("AND the user clicks on Pay Button 📝", async () => {
      await checkoutPage.clickPayButton();
    });
  });
  test(`Test case: '${scenario6.testCaseData.testCase}'
    Summary: ${scenario6.testCaseData.testSummary}
    Description: ${scenario6.testCaseData.testDescription}
    Tags: '${scenario6.testCaseData.tags}'
  `, async ({ commonUtils, addToCartPage, checkoutPage, loginPage, homepagePage }) => {
    test.setTimeout(240000);
    await logTestCaseData(test.info(), scenario6.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user Adds a product to the cart 🛒", async () => {
      await addToCartPage.addProductToCart(
        scenario6.addtocart,
        scenario6.proceedToCheckout
      );
    });

    await test.step("AND the user verifies the cart page ✅", async () => {
      await addToCartPage.verifyProductCartPage(
        scenario6.cartHeading,
        scenario6.productQuantity
      );
    });

    await test.step("AND the user proceeds to checkout 💳", async () => {
      await addToCartPage.proceedToCheckout(
        scenario6.proceedToCheckoutButtonOnCartPage
      );
    });

    await test.step("AND the user fills the Guest checkout form 📝", async () => {
      await checkoutPage.fillCreateAccountForm(
        scenario6.emailAddress,
        scenario6.password,
        scenario6.firstName,
        scenario6.phone
      );
    });

    await test.step("AND the user fills the Last Name form 📝", async () => {
      await checkoutPage.typeLastName(scenario6.lastName);
    });

    await test.step("AND the user fills the Shipping address form 📝", async () => {
      await checkoutPage.typeCity(scenario6.city);
    });

    await test.step("AND the user fills the Street Number form 📝", async () => {
      await checkoutPage.typeStreetNumber(scenario6.streetNumber);
    });

    await test.step("AND the user fills the Street Name form 📝", async () => {
      await checkoutPage.typeStreetName(scenario6.streetName);
    });

    await test.step("AND the user fills the Postcode form 📝", async () => {
      await checkoutPage.typePostcode(scenario6.postcode);
    });
    await test.step("AND the user clicks the next step button 📝", async () => {
      await checkoutPage.clickNextStepButton();
     
    });
    await test.step("AND the user Navigates to Login Page 📝", async () => {
      await loginPage.navigateToAccountPage();
      await loginPage.logoutTheUser();
    })
    await test.step("AND the user verifies the user is logged in 📝", async () => {
      await deleteAllEmails();
      await loginPage.resetPassword(scenario6.emailAddress);
    });
    await test.step("AND the user verifies the email through Mailosaur 📝", async () => {
      await loginPage.verifyEmailThroughMailosaur(scenario6.emailAddress);
    });
    await test.step("AND the user Navigates to Verification Link 📝", async () => {
      await loginPage.navigateToVerificationLink();
    });
    await test.step("AND the user fills the New Password form 📝", async () => {
      await loginPage.changePassword(scenario6.newPassword, scenario6.confirmPassword);
    });
    await test.step("AND the user verifies the user is logged in 📝", async () => {
      await loginPage.navigateToAccountPage();
      await loginPage.verifyUserIsLoggedIn();
    });
  }); 
  
});
