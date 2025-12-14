import { TestCaseData } from "@interfaces/testcase.data.interface";

interface AddToCartTestCaseData {
  title?: string;
  testCaseData: TestCaseData;
  addtocart?: string;
  proceedToCheckout?: string;
  proceedToCheckoutButtonOnCartPage?: string;
  cartHeading?: string;
  productQuantity?: string;
  increasedProductQuantity?: string;
  decreasedProductQuantity?: string;
  updatedProductQuantity?: string;
}

const addToCartTestData: { [key: string]: AddToCartTestCaseData } = {
  "0001-verify-addtocart": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    cartHeading: " Shopping cart Summary",
    productQuantity: "1",
    testCaseData: {
      tags: "@regression @addtocart @english",
      testCase: "BM-0175",
      testDescription:
        "Validate that user can add product to cart and verify the product price and description on the cart page",
      testSummary:
        "Validate that user can add product to cart and verify the product price and description on the cart page",
    },
  },
  "0002-increase-product-quantity-in-cart": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    cartHeading: " Shopping cart Summary",
    productQuantity: "1",
    increasedProductQuantity: "2",
    testCaseData: {
      tags: "@regression @addtocart @english",
      testCase: "BM-0176",
      testDescription:
        "Validate that user can increase the product quantity in the cart",
      testSummary:
        "Validate that user can increase the product quantity in the cart",
    },
  },
  "0003-decrease-product-quantity-in-cart": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    cartHeading: " Shopping cart Summary",
    productQuantity: "1",
    decreasedProductQuantity: "1",
    testCaseData: {
      tags: "@regression @addtocart @english",
      testCase: "BM-0177",
      testDescription:
        "Validate that user can decrease the product quantity in the cart",
      testSummary:
        "Validate that user can decrease the product quantity in the cart",
    },
  },
  "0004-update-product-quantity-in-cart": {
    addtocart: "Add to Cart",
    proceedToCheckout: "Proceed to checkout",
    proceedToCheckoutButtonOnCartPage: "proceed to checkout",
    cartHeading: " Shopping cart Summary",
    productQuantity: "1",
    updatedProductQuantity: "2",
    testCaseData: {
      tags: "@regression @addtocart @english",
      testCase: "BM-0178",
      testDescription:
        "Validate that user can update the product quantity in the cart",
      testSummary:
        "Validate that user can update the product quantity in the cart",
    },
  },
};

export function getData(testCase: string): AddToCartTestCaseData {
  const data = addToCartTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
