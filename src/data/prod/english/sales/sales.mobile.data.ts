import { TestCaseData } from "@interfaces/testcase.data.interface";
import { verifyPage } from "@interfaces/bestSellers/bestSellers.inrerface";

interface SalesTestCaseData {
  testCaseData: TestCaseData;
  verifyPage?: verifyPage;
  salesHeading?: string;
  salesDescription?: string;
  salesPrice?: string;
  sortOrder?: "Ascending" | "Descending";
  sortByPrice?: string;
  addToCartButton?: string;
  proceedToCheckoutButton?: string;
}

const salesTestData: { [key: string]: SalesTestCaseData } = {

  "0001-verify-sales": {
    verifyPage: {
      pageName: "SALE!",
      title: "SALE! by Bloomex Canada",
      url: "/sale/",
    },
    testCaseData: {
      tags: "@regression @sales @english",
      testCase: "BM-0170",
      testDescription:
        "Verify that User can navigate to sales page ",
      testSummary:
        "Verify that User can navigate to sales page ",
    },
  },
  "0002-verify-sales-heading-and-description": {
    salesHeading: "SALE!",
    salesDescription: "Choose from a large selection of Fresh Cut Flowers and Gourmet Gift Baskets that are sure to please both the budget conscious purchaser and the lucky recipient.",
    salesPrice: "Bloomex Price",
    testCaseData: {
      tags: "@regression @sales @english",
      testCase: "BM-0171",
      testDescription:
        "Verify that sales heading and description is visible on the sales page ",
      testSummary:
        "Verify that sales heading and description is visible on the sales page ",
    },
  },
  "0003-verify-sales-prices-are-sorted-ascending": {
    sortByPrice: "Sort by price",
    sortOrder: "Ascending",
    testCaseData: {
      tags: "@regression @sales @english",
      testCase: "BM-0172",
      testDescription:
        "Verify that product prices are sorted ascending on the sales page ",
      testSummary:
        "Verify that product prices are sorted ascending on the sales page ",
    },
  },
  "0004-verify-sales-prices-are-sorted-descending": {
    sortByPrice: "Sort by price",
    sortOrder: "Descending",
    testCaseData: {
      tags: "@regression @sales @english",
      testCase: "BM-0173",
      testDescription:
        "Verify that product prices are sorted descending on the sales page ",
      testSummary:
        "Verify that product prices are sorted descending on the sales page ",
    },
  },
  "0005-add-product-to-cart-and-verify-price-and-description": {
    addToCartButton: "Add to Cart",
    proceedToCheckoutButton: "Proceed to checkout",
    testCaseData: {
      tags: "@regression @sales @english",
      testCase: "BM-0174",
      testDescription:
        "Verify that product price and description visible on the cart page is the same as the product price and description on the sales page",
      testSummary:
        "Verify that product price and description visible on the cart page is the same as the product price and description on the sales page",
    },
  },
};

export function getData(testCase: string): SalesTestCaseData {
  const data = salesTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
