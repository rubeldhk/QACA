import { LoginData } from "@interfaces/login/login.interfaces";
import { TestCaseData } from "@interfaces/testcase.data.interface";
import {
  generateRandomAlphanumeric,
  generateRandomEmailAddress,
  generateRandomNumber,
} from "@utilities/random.utils";
import { TestDataUtils } from "@utilities/testData.generate.utils";
import { completeOrder , cardDetails} from "@interfaces/checkout/checkout.interface";

interface CheckoutTestCaseData {
  credentials?: LoginData;
  testCaseData: TestCaseData;
  cartHeading?: string;
  productQuantity?: string;
  emailAddress?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  emailBody?: string;
  city?: string;
  couponCode?: string;
  isCouponCodeExpired?: boolean;
  increasedProductQuantity?: string;
  decreasedProductQuantity?: string;
  orderNote?: string;
  completeOrder?: completeOrder;
  cardDetails?: cardDetails;
  addtocart?: string;
  proceedToCheckout?: string;
  proceedToCheckoutButtonOnCartPage?: string;
  password?: string;
  streetNumber?: string;
  streetName?: string;
  postcode?: string;
  emailSubject?: string;
  newPassword?: string;
  confirmPassword?: string;
  menuItem?: string;
}
const email1 = generateRandomEmailAddress();
const email2 = generateRandomEmailAddress();
const email3 = generateRandomEmailAddress();
const email4 = generateRandomEmailAddress();
const email5 = generateRandomEmailAddress();
const firstName = generateRandomAlphanumeric(10);
const lastName = generateRandomAlphanumeric(10);
const phone = generateRandomNumber(10);
const checkoutTestData: { [key: string]: CheckoutTestCaseData } = {
  "0001-verify-checkout": {
    cartHeading: "Shopping cart Summary",
    addtocart: "Add to Cart",
    productQuantity: "1",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    emailBody: `Hello ${firstName} ,

    Thank you for registering at bloomex.com.au. Your customer account has been created.
    You may login to https://bloomex.com.au using the following username and password:
    Username - ${email1}`,
    testCaseData: {
      tags: "@regression @checkout @english",
      testCase: "BMX-0181",
      testDescription: "Validate that user can proceed to checkout page after adding product to cart",
      testSummary: "Validate that user can proceed to checkout page after adding product to cart",
    },
  },
  "0002-verify-checkout-and-pay": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    completeOrder: {
      firstName: firstName,
      lastName: lastName,
      email: email2,
      phone: phone,
      companyName: generateRandomAlphanumeric(10),
      Suite: generateRandomAlphanumeric(10),
      StreetNumber: generateRandomNumber(10),
      StreetName: generateRandomAlphanumeric(10),
      city: TestDataUtils.generateRandomCity(),
      postcode: generateRandomNumber(6),
      Occasion: 'Corporate Gift',
      PersonalGreeting: generateRandomAlphanumeric(10),
      Signature: generateRandomAlphanumeric(10),
      DeliveryInstructions: 'TEST order by the Development team',
    },
    cartHeading: "Shopping cart Summary",
    productQuantity: "1",
    couponCode: "TESTCOUPON123",
    cardDetails: {
      cardNumber: process.env.TEST_CARD || "",
      cardExpiry: process.env.TEST_CARD_EXPIRY || "",
      cardCvc: process.env.TEST_CARD_CVC || "",
      cardName: process.env.TEST_CARD_NAME || "",
      cardCountry: process.env.TEST_CARD_COUNTRY || "",
    },
    orderNote: 'TEST order by the Development team',
    emailAddress: email2,
    password: "Password123!",
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    streetNumber: generateRandomNumber(10),
    streetName: generateRandomAlphanumeric(10),
    postcode: generateRandomNumber(10),
    city: TestDataUtils.generateRandomCity(),
    emailSubject:`Account details for ${firstName}  at Bloomex - Order Flowers Quickly and Securely for Canada Delivery :: Order from a Trusted Canadian Online Florist`,
    emailBody: `Hello ${firstName} ,

        Thank you for registering at Bloomex - Order Flowers Quickly and Securely for Canada Delivery :: Order from a Trusted Canadian Online Florist.

        You may now login to https://bloomex.ca using the username and password you registered with.`,
    testCaseData: {
      tags: "@regression @checkout @english",
      testCase: "BMX-0182",
      testDescription: "Validate that user can checkout and pay",
      testSummary: "Validate that user can checkout and pay",
    },
  },
  "0003-verify-expired-coupon-code": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    cartHeading: "Shopping cart Summary",
    lastName: generateRandomAlphanumeric(10),
    streetNumber: generateRandomNumber(10),
    streetName: generateRandomAlphanumeric(10),
    postcode: generateRandomNumber(10),
    city: TestDataUtils.generateRandomCity(),
    credentials: {
      username: 'ylhBgtS0@jcqpcrlu.mailosaur.net',
      password: "PGdJXC9Rvw",
    },
    couponCode: "TESTCOUPON456",
    isCouponCodeExpired: true,
    productQuantity: "1",
    emailAddress: email3,
    emailBody: `Hello ${firstName} ,

    Thank you for registering at bloomex.com.au. Your customer account has been created.
    You may login to https://bloomex.com.au using the following username and password:
    Username - ${email3}`,
    testCaseData: {
      tags: "@regression @coupon @english",
      testCase: "BMX-0183",
      testDescription: "Validate that user cannot use expired coupon code in the checkout page",
      testSummary: "Validate that user cannot use expired coupon code in the checkout page",
    },
  },
  "0004-verify-checkout-with-increased-product-quantity": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    lastName: generateRandomAlphanumeric(10),
    streetNumber: generateRandomNumber(10),
    streetName: generateRandomAlphanumeric(10),
    postcode: generateRandomNumber(10),
    city: TestDataUtils.generateRandomCity(),
    cartHeading: "Shopping cart Summary",
    productQuantity: "1",
    couponCode: "TESTCOUPON123",
    increasedProductQuantity: "2",
    firstName: firstName,
    phone: generateRandomNumber(10),
    emailAddress: email4,
    password: "Password123!",
    emailBody: `Hello ${firstName} ,

    Thank you for registering at bloomex.com.au. Your customer account has been created.
    You may login to https://bloomex.com.au using the following username and password:
    Username - ${email4}`,
    testCaseData: {
      tags: "@regression @checkout @english",
      testCase: "BMX-0184",
      testDescription: "Validate that price increases on checkout page with increased product quantity",
      testSummary: "Validate that price increases on checkout page with increased product quantity",
    },
  },
  "0004-verify-checkout-with-decreased-product-quantity": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    cartHeading: "Shopping cart Summary",
    lastName: generateRandomAlphanumeric(10),
    streetNumber: generateRandomNumber(10),
    streetName: generateRandomAlphanumeric(10),
    postcode: generateRandomNumber(10),
    city: TestDataUtils.generateRandomCity(),
    productQuantity: "1",
    couponCode: "TESTCOUPON123",
    decreasedProductQuantity: "1",
    firstName: firstName,
    phone: generateRandomNumber(10),
    emailAddress: email5,
    password: "Password123!",
    emailBody: `Hello ${firstName} ,

    Thank you for registering at bloomex.com.au. Your customer account has been created.
    You may login to https://bloomex.com.au using the following username and password:
    Username - ${email5}`,
    testCaseData: {
      tags: "@regression @checkout @english",
      testCase: "BMX-0185",
      testDescription: "Validate that price decreases on checkout page with decreased product quantity",
      testSummary: "Validate that price decreases on checkout page with decreased product quantity",
    },
  },
  "0005-verify-checkout-and-pay": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    completeOrder: {
      firstName: firstName,
      lastName: lastName,
      email: email2,
      phone: phone,
      companyName: generateRandomAlphanumeric(10),
      Suite: generateRandomAlphanumeric(10),
      StreetNumber: generateRandomNumber(10),
      StreetName: generateRandomAlphanumeric(10),
      city: TestDataUtils.generateRandomCity(),
      postcode: generateRandomNumber(6),
      Occasion: 'Corporate Gift',
      PersonalGreeting: generateRandomAlphanumeric(10),
      Signature: generateRandomAlphanumeric(10),
      DeliveryInstructions: 'TEST order by the Development team',
    },
    cartHeading: "Shopping cart Summary",
    productQuantity: "1",
    couponCode: "TESTCOUPON123",
    cardDetails: {
      cardNumber: process.env.TEST_CARD || "",
      cardExpiry: process.env.TEST_CARD_EXPIRY || "",
      cardCvc: process.env.TEST_CARD_CVC || "",
      cardName: process.env.TEST_CARD_NAME || "",
      cardCountry: process.env.TEST_CARD_COUNTRY || "",
    },
    orderNote: 'TEST order by the Development team',
    emailAddress: email2,
    password: "Password123!",
    credentials: {
      username: email2,
      password: "Password123!",
    },
    newPassword: "Password123!",
    confirmPassword: "Password123!",
    menuItem: "Lost Password?",
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    streetNumber: generateRandomNumber(10),
    streetName: generateRandomAlphanumeric(10),
    postcode: generateRandomNumber(10),
    city: TestDataUtils.generateRandomCity(),
    emailSubject:`Account details for ${firstName}  at Bloomex - Order Flowers Quickly and Securely for Canada Delivery :: Order from a Trusted Canadian Online Florist`,
    emailBody: `Hello ${firstName} ,

        Thank you for registering at Bloomex - Order Flowers Quickly and Securely for Canada Delivery :: Order from a Trusted Canadian Online Florist.

        You may now login to https://bloomex.ca using the username and password you registered with.`,
    testCaseData: {
      tags: "@regression @checkout @english",
      testCase: "BMX-0205",
      testDescription: "Verify that Lost Password can correctly send Email and change password properly and it's working properly",
      testSummary: "Verify that Lost Password can correctly send Email and change password properly and it's working properly",
    },
  },
};

export function getData(testCase: string): CheckoutTestCaseData {
  const data = checkoutTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
