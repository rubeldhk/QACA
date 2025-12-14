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
      title: "Meilleures Ventes | Commandez et acheter des fleurs en ligne avec Bloomex",
      url: "/promotions-speciales/meilleures-ventes/",
    },
    testCaseData: {
      tags: "@regression @bestSellers @french",
      testCase: "BM-0164",
      testDescription:
        "Verify that User can navigate to best Sellers page in French ",
      testSummary:
        "Verify that User can navigate to best Sellers page in French ",
    },
  },
  "0002-verify-bestSellers-heading-and-description": {
    bestSellersHeading: "Meilleures Ventes",
    bestSellersDescription: "Découvrez la collection de bouquets les plus vendus de Bloomex – une sélection éclatante de fleurs fraîches, offertes en plusieurs couleurs, tailles et gammes de prix pour toutes les occasions et tous les budgets. Que ce soit pour un anniversaire, un anniversaire de mariage ou pour exprimer vos sympathies, nos bouquets sont conçus avec soin pour transmettre vos émotions avec beauté et élégance. Avec la livraison le jour même partout au Canada, Bloomex vous offre une livraison de fleurs abordable à des prix justes, garantissant des fleurs fraîches livrées à temps. Commandez dès maintenant pour illuminer la journée de quelqu’un avec un bouquet magnifique, livré directement à sa porte.",
    testCaseData: {
      tags: "@regression @bestSellers @french",
      testCase: "BM-0165",
      testDescription:
        "Verify that best Sellers heading and description is visible on the best Sellers page in French ",
      testSummary:
        "Verify that best Sellers heading and description is visible on the best Sellers page in French ",
    },
  },
  "0003-verify-bestSellers-all-products-have-bestSellers-badge": {
    bestSellerBadge: "Meilleures ventes",
    testCaseData: {
      tags: "@regression @bestSellers @french",
      testCase: "BM-0166",
      testDescription:
        "Verify that all products have best Sellers badge on the best Sellers page in French ",
      testSummary:
        "Verify that all products have best Sellers badge on the best Sellers page in French ",
    },
  },
  "0004-verify-bestSellers-prices-are-sorted-ascending": {
    sortByPrice: "trier par prix",
    sortOrder: "Ascending",
    testCaseData: {
      tags: "@regression @bestSellers @french",
      testCase: "BM-0167",
      testDescription:
        "Verify that product prices are sorted ascending on the best Sellers page ",
      testSummary:
        "Verify that product prices are sorted ascending on the best Sellers page ",
    },
  },
  "0005-verify-bestSellers-prices-are-sorted-descending": {
    sortByPrice: "trier par prix",
    sortOrder: "Descending",
    testCaseData: {
      tags: "@regression @bestSellers @french",
      testCase: "BM-0168",
      testDescription:
        "Verify that product prices are sorted descending on the best Sellers page ",
      testSummary:
        "Verify that product prices are sorted descending on the best Sellers page ",
    },
  },
  "0006-add-product-to-cart-and-verify-price-and-description": {
    addToCartButton: "Magasinez",
    proceedToCheckoutButton: "Passer à la caisse",
    testCaseData: {
      tags: "@regression @bestSellers @french",
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
