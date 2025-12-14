import { TestCaseData } from "@interfaces/testcase.data.interface";
import { verifyPage } from "@interfaces/bestSellers/bestSellers.inrerface";

interface SalesTestCaseData {
  testCaseData: TestCaseData;
  verifyPage?: verifyPage;
  salesHeading?: string;
  salesDescription?: string;
  salesPrice?: string;
  bestSellerBadge?: string;
  sortOrder?: "Ascending" | "Descending";
  sortByPrice?: string;
  addToCartButton?: string;
  proceedToCheckoutButton?: string;
}

const salesTestData: { [key: string]: SalesTestCaseData } = {

  "0001-verify-sales": {
    verifyPage: {
      pageName: "VENTE!",
      title: "VENTE! by Bloomex Canada",
      url: "/vente/",
    },
    testCaseData: {
      tags: "@regression @sales @french",
      testCase: "BM-0170",
      testDescription:
        "Verify that User can navigate to sales page in French ",
      testSummary:
        "Verify that User can navigate to sales page in French ",
    },
  },
  "0002-verify-sales-heading-and-description": {
    salesHeading: "VENTE!",
    salesDescription: "Choisissez parmi une large sélection de fleurs fraîchement coupées et de paniers-cadeaux gastronomiques qui sauront plaire à la fois à l'acheteur soucieux de son budget et à l'heureux destinataire.",
    salesPrice: "Prix Bloomex",
    testCaseData: {
      tags: "@regression @sales @french",
      testCase: "BM-0171",
      testDescription:
        "Verify that sales heading and description is visible on the sales page in French ",
      testSummary:
        "Verify that sales heading and description is visible on the sales page in French ",
    },
  },
  "0003-verify-sales-prices-are-sorted-ascending": {
    sortByPrice: "trier par prix",
    sortOrder: "Ascending",
    testCaseData: {
      tags: "@regression @sales @french",
      testCase: "BM-0172",
      testDescription:
        "Verify that product prices are sorted ascending on the sales page in French ",
      testSummary:
        "Verify that product prices are sorted ascending on the sales page in French ",
    },
  },
  "0004-verify-sales-prices-are-sorted-descending": {
    sortByPrice: "trier par prix",
    sortOrder: "Descending",
    testCaseData: {
      tags: "@regression @sales @french",
      testCase: "BM-0173",
      testDescription:
        "Verify that product prices are sorted descending on the sales page in French ",
      testSummary:
        "Verify that product prices are sorted descending on the sales page in French ",
    },
  },
  "0005-add-product-to-cart-and-verify-price-and-description": {
    addToCartButton: "Magasinez",
    proceedToCheckoutButton: "Passer à la caisse",
    testCaseData: {
      tags: "@regression @sales @french",
      testCase: "BM-0174",
      testDescription:
        "Verify that product price and description visible on the cart page is the same as the product price and description on the sales page in French ",
      testSummary:
        "Verify that product price and description visible on the cart page is the same as the product price and description on the sales page in French ",
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
