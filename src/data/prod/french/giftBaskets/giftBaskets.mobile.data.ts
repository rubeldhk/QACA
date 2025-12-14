import { TestCaseData } from "@interfaces/testcase.data.interface";

import {
  SelectGiftBasketsItemDataFrench,
  ExpectedGiftBasketsValuesDataFrench,
  ExpectedGiftBasketsPageHeadingsDataFrench,
} from "@interfaces/giftBaskets/giftBaskets.interface";

interface GiftBasketsTestCaseData {
  giftBaskets?: { dropdown: string };
  selectGiftBasketsItem?: SelectGiftBasketsItemDataFrench;
  expectedGiftBasketsValues?: string[];
  expectedPageHeader?: ExpectedGiftBasketsValuesDataFrench;
  expectedPageHeadings?: ExpectedGiftBasketsPageHeadingsDataFrench;
  testCaseData: TestCaseData;
}

const giftBasketsTestData: { [key: string]: GiftBasketsTestCaseData } = {
  "0001-verify-gift-baskets": {
    giftBaskets: {
      dropdown: "Paniers Cadeaux",
    },
    expectedGiftBasketsValues: [
      "Collection Gourmet",
      "Paniers de Fruits",
      "Paniers de Bière et Vin",
      "Paniers Cadeaux Chocolat",
      "Collection de Paniers-Cadeaux Lindt",
      "Coffrets Cadeaux De Luxe",
      "Paniers Cadeaux Bonbons",
      "Paniers Cadeaux Fromage",
      "Paniers Cadeaux Collation",
      "Paniers à Café et thé",
      "Collection Make-A-Wish®",
      "Paniers Cadeaux d'entreprise",
    ],
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0040",
      testDescription: "Validate the Gift Baskets dropdown is visible",
      testSummary: "Validate the Gift Baskets dropdown is visible",
    },
  },
  "0002-gourmet-collection-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Collection Gourmet",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0041",
      testDescription: "Select Collection Gourmet from Gift Baskets dropdown",
      testSummary: "Verify navigation to Collection Gourmet page",
    },
  },
  "0003-fruit-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers de Fruits",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0042",
      testDescription: "Select Paniers de Fruits from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers de Fruits page",
    },
  },
  "0004-beer-and-wine-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers de Bière et Vin",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0043",
      testDescription: "Select Paniers de Bière et Vin from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers de Bière et Vin page",
    },
  },
  "0005-chocolate-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers Cadeaux Chocolat",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0044",
      testDescription: "Select Paniers Cadeaux Chocolat from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers Cadeaux Chocolat page",
    },
  },
  "0006-lindt-gift-basket-collection-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Collection de Paniers-Cadeaux Lindt",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0045",
      testDescription: "Select Collection de Paniers-Cadeaux Lindt from Gift Baskets dropdown",
      testSummary: "Verify navigation to Collection de Paniers-Cadeaux Lindt page",
    },
  },
  "0007-luxury-gift-boxes-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Coffrets Cadeaux De Luxe",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0046",
      testDescription: "Select Coffrets Cadeaux De Luxe from Gift Baskets dropdown",
      testSummary: "Verify navigation to Coffrets Cadeaux De Luxe page",
    },
  },
  "0008-sweets-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers Cadeaux Bonbons",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0047",
      testDescription: "Select Paniers Cadeaux Bonbons from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers Cadeaux Bonbons page",
    },
  },
  "0009-cheese-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers Cadeaux Fromage",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0048",
      testDescription: "Select Paniers Cadeaux Fromage from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers Cadeaux Fromage page",
    },
  },
  "0010-snack-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers Cadeaux Collation",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0049",
      testDescription: "Select Paniers Cadeaux Collation from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers Cadeaux Collation page",
    },
  },
  "0011-coffee-and-tea-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers à Café et thé",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0050",
      testDescription: "Select Paniers à Café et thé from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers à Café et thé page",
    },
  },
  "0012-make-a-wish-collection-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Collection Make-A-Wish®",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0051",
      testDescription: "Select Collection Make-A-Wish® from Gift Baskets dropdown",
      testSummary: "Verify navigation to Collection Make-A-Wish® page",
    },
  },
  "0013-corporate-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Paniers Cadeaux d'entreprise",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0052",
      testDescription: "Select Paniers Cadeaux d'entreprise from Gift Baskets dropdown",
      testSummary: "Verify navigation to Paniers Cadeaux d'entreprise page",
    },
  },
  "0014-gourmet-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Collection Gourmande",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0147",
      testDescription: "Verify Collection Gourmande page header",
      testSummary: 'Verify page header displays "Collection Gourmande"',
    },
  },
  "0015-fruit-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers de fruits",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0148",
      testDescription: "Verify Paniers de fruits page header",
      testSummary: 'Verify page header displays "Paniers de fruits"',
    },
  },
  "0016-wine-and-beer-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers Cadeaux Vin et Bière",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0149",
      testDescription: "Verify Paniers Cadeaux Vin et Bière page header",
      testSummary: 'Verify page header displays "Paniers Cadeaux Vin et Bière"',
    },
  },
  "0017-chocolate-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers cadeaux chocolats",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0150",
      testDescription: "Verify Paniers cadeaux chocolats page header",
      testSummary: 'Verify page header displays "Paniers cadeaux chocolats"',
    },
  },
  "0018-lindt-gift-basket-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers-Cadeaux de la Collection Lindt",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0151",
      testDescription: "Verify Paniers-Cadeaux de la Collection Lindt page header",
      testSummary: 'Verify page header displays "Paniers-Cadeaux de la Collection Lindt"',
    },
  },
  "0019-luxury-gift-box-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Boite Cadeaux de la Collection Luxe",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0152",
      testDescription: "Verify Boite Cadeaux de la Collection Luxe page header",
      testSummary: 'Verify page header displays "Boite Cadeaux de la Collection Luxe"',
    },
  },
  "0020-sweets-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers de friandises",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0153",
      testDescription: "Verify Paniers de friandises page header",
      testSummary: 'Verify page header displays "Paniers de friandises"',
    },
  },
  "0021-cheese-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers cadeaux de fromage",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0154",
      testDescription: "Verify Paniers cadeaux de fromage page header",
      testSummary: 'Verify page header displays "Paniers cadeaux de fromage"',
    },
  },
  "0022-snack-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers cadeaux de collations",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0155",
      testDescription: "Verify Paniers cadeaux de collations page header",
      testSummary: 'Verify page header displays "Paniers cadeaux de collations"',
    },
  },
  "0023-coffee-and-tea-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers de café et de thé",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0156",
      testDescription: "Verify Paniers de café et de thé page header",
      testSummary: 'Verify page header displays "Paniers de café et de thé"',
    },
  },
  "0024-make-a-wish-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: 'Collection "Fais un Vœux"',
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0157",
      testDescription: 'Verify Collection "Fais un Vœux" page header',
      testSummary: 'Verify page header displays "Collection "Fais un Vœux""',
    },
  },
  "0025-corporate-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Paniers cadeaux d'entreprise",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0158",
      testDescription: "Verify Paniers cadeaux d'entreprise page header",
      testSummary: 'Verify page header displays "Paniers cadeaux d\'entreprise"',
    },
  },
  "0026-verify-gift-baskets-page-elements": {
    expectedPageHeadings: {
      headings: [
        "Collection Gourmande",
        "Paniers de fruits",
        "Paniers Cadeaux Vin et Bière",
        "Paniers cadeaux chocolats",
        "Paniers-Cadeaux de la Collection Lindt",
        "Boite Cadeaux de la Collection Luxe",
        "Paniers de friandises",
        "Paniers cadeaux de fromage",
        "Paniers cadeaux de collations",
        "Paniers de café et de thé",
        'Collection "Fais un Vœux"',
        "Paniers cadeaux d'entreprise",
      ],
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0162",
      testDescription: "Verify Gift Baskets page elements",
      testSummary: 'Verify page header displays "Gift Baskets"',
    },
  },
};

export function getData(testCase: string): GiftBasketsTestCaseData {
  const data = giftBasketsTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
