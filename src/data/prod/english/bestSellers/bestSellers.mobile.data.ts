import { TestCaseData } from "@interfaces/testcase.data.interface";
import { verifyPage } from "@interfaces/bestSellers/bestSellers.inrerface";

interface BestSellersTestCaseData {
  testCaseData: TestCaseData;
  verifyPage?: verifyPage;
  bestSellersHeading?: string;
  bestSellersDescription?: string;
  bestSellerBadge?: string;
  sortOrder?: "Ascending" | "Descending";
  sortByPrice?: string;
  addToCartButton?: string;
  proceedToCheckoutButton?: string;
}

const bestSellersTestData: { [key: string]: BestSellersTestCaseData } = {

  "0001-verify-bestSellers": {
    verifyPage: {
      pageName: "Best Sellers",
      title: "Best Sellers | Order and Buy Flowers Online at Bloomex",
      url: "/special-promotions/best-sellers/",
    },
    testCaseData: {
      tags: "@regression @bestSellers @english",
      testCase: "BM-0164",
      testDescription:
        "Verify that User can navigate to best Sellers page ",
      testSummary:
        "Verify that User can navigate to best Sellers page ",
    },
  },
  "0002-verify-bestSellers-heading-and-description": {
    bestSellersHeading: "Best Sellers",
    bestSellersDescription: "Explore Bloomex’s Best Selling Flower Bouquets – a vibrant selection of fresh blooms available in a variety of colors, sizes, and price points to suit every occasion and budget. From birthdays and anniversaries to sympathy and heartfelt moments, our bouquets are thoughtfully designed to convey your sentiments with beauty and grace. With same-day delivery across Canada, Bloomex offers affordable flower delivery at fair prices, ensuring your flowers arrive fresh and on time. Shop now to brighten someone’s day with stunning, hand-arranged bouquets delivered right to their door.",
    testCaseData: {
      tags: "@regression @bestSellers @english",
      testCase: "BM-0165",
      testDescription:
        "Verify that best Sellers heading and description is visible on the best Sellers page ",
      testSummary:
        "Verify that best Sellers heading and description is visible on the best Sellers page ",
    },
  },
  "0003-verify-bestSellers-all-products-have-bestSellers-badge": {
    bestSellerBadge: "Best Sellers",
    testCaseData: {
      tags: "@regression @bestSellers @english",
      testCase: "BM-0166",
      testDescription:
        "Verify that all products have best Sellers badge on the best Sellers page ",
      testSummary:
        "Verify that all products have best Sellers badge on the best Sellers page ",
    },
  },
  "0004-verify-bestSellers-prices-are-sorted-ascending": {
    sortByPrice: "Sort by price",
    sortOrder: "Ascending",
    testCaseData: {
      tags: "@regression @bestSellers @english",
      testCase: "BM-0167",
      testDescription:
        "Verify that product prices are sorted ascending on the best Sellers page ",
      testSummary:
        "Verify that product prices are sorted ascending on the best Sellers page ",
    },
  },
  "0005-verify-bestSellers-prices-are-sorted-descending": {
    sortByPrice: "Sort by price",
    sortOrder: "Descending",
    testCaseData: {
      tags: "@regression @bestSellers @english",
      testCase: "BM-0168",
      testDescription:
        "Verify that product prices are sorted descending on the best Sellers page ",
      testSummary:
        "Verify that product prices are sorted descending on the best Sellers page ",
    },
  },
  "0006-add-product-to-cart-and-verify-price-and-description": {
    addToCartButton: "Add to Cart",
    proceedToCheckoutButton: "Proceed to checkout",
    testCaseData: {
      tags: "@regression @bestSellers @english",
      testCase: "BM-0169",
      testDescription:
        "Verify that product price and description visible on the cart page is the same as the product price and description on the best Sellers page",
      testSummary:
        "Verify that product price and description visible on the cart page is the same as the product price and description on the best Sellers page",
    },
  },
};

export function getData(testCase: string): BestSellersTestCaseData {
  const data = bestSellersTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
