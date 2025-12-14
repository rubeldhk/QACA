import { TestCaseData } from "@interfaces/testcase.data.interface";

import {
  SelectGiftBasketsItemData,
  ExpectedGiftBasketsValuesData,
  ExpectedGiftBasketsPageHeadingsData,
} from "@interfaces/giftBaskets/giftBaskets.interface";

interface GiftBasketsTestCaseData {
  giftBaskets?: { dropdown: string };
  selectGiftBasketsItem?: SelectGiftBasketsItemData;
  expectedGiftBasketsValues?: string[];
  expectedPageHeader?: ExpectedGiftBasketsValuesData;
  expectedPageHeadings?: ExpectedGiftBasketsPageHeadingsData;
  testCaseData: TestCaseData;
}

const giftBasketsTestData: { [key: string]: GiftBasketsTestCaseData } = {
  "0001-verify-gift-baskets": {
    giftBaskets: {
      dropdown: "Gift Baskets",
    },
    expectedGiftBasketsValues: [
      "Gourmet Collection",
      "Fruit Baskets",
      "Beer and Wine Baskets",
      "Chocolate Gift Baskets",
      "Lindt Gift Basket Collection",
      "Luxury Gift Boxes",
      "Sweets Gift Baskets",
      "Cheese Gift Baskets",
      "Snack Gift Baskets",
      "Coffee and Tea Baskets",
      "Make-A-Wish® Collection",
      "Corporate Gift Baskets",
    ],
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0040",
      testDescription: "Validate the Gift Baskets dropdown is visible",
      testSummary: "Validate the Gift Baskets dropdown is visible",
    },
  },
  "0002-gourmet-collection-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Gourmet Collection",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0041",
      testDescription: "Select Gourmet Collection from Gift Baskets dropdown",
      testSummary: "Verify navigation to Gourmet Collection page",
    },
  },
  "0003-fruit-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Fruit Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0042",
      testDescription: "Select Fruit Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Fruit Baskets page",
    },
  },
  "0004-beer-and-wine-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Beer and Wine Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0043",
      testDescription: "Select Beer and Wine Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Beer and Wine Baskets page",
    },
  },
  "0005-chocolate-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Chocolate Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0044",
      testDescription: "Select Chocolate Gift Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Chocolate Gift Baskets page",
    },
  },
  "0006-lindt-gift-basket-collection-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Lindt Gift Basket Collection",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0045",
      testDescription: "Select Lindt Gift Basket Collection from Gift Baskets dropdown",
      testSummary: "Verify navigation to Lindt Gift Basket Collection page",
    },
  },
  "0007-luxury-gift-boxes-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Luxury Gift Boxes",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0046",
      testDescription: "Select Luxury Gift Boxes from Gift Baskets dropdown",
      testSummary: "Verify navigation to Luxury Gift Boxes page",
    },
  },
  "0008-sweets-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Sweets Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0047",
      testDescription: "Select Sweets Gift Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Sweets Gift Baskets page",
    },
  },
  "0009-cheese-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Cheese Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0048",
      testDescription: "Select Cheese Gift Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Cheese Gift Baskets page",
    },
  },
  "0010-snack-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Snack Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0049",
      testDescription: "Select Snack Gift Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Snack Gift Baskets page",
    },
  },
  "0011-coffee-and-tea-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Coffee and Tea Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0050",
      testDescription: "Select Coffee and Tea Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Coffee and Tea Baskets page",
    },
  },
  "0012-make-a-wish-collection-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Make-A-Wish® Collection",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0051",
      testDescription: "Select Make-A-Wish® Collection from Gift Baskets dropdown",
      testSummary: "Verify navigation to Make-A-Wish® Collection page",
    },
  },
  "0013-corporate-gift-baskets-gift-baskets": {
    selectGiftBasketsItem: {
      isWeb: false,
      giftBasketsItem: "Corporate Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0052",
      testDescription: "Select Corporate Gift Baskets from Gift Baskets dropdown",
      testSummary: "Verify navigation to Corporate Gift Baskets page",
    },
  },
  "0014-gourmet-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Gourmet Collection",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0147",
      testDescription: "Verify Gourmet Collection page header",
      testSummary: 'Verify page header displays "Gourmet Collection"',
    },
  },
  "0015-fruit-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Fruit Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0148",
      testDescription: "Verify Fruit Baskets page header",
      testSummary: 'Verify page header displays "Fruit Baskets"',
    },
  },
  "0016-wine-and-beer-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Wine & Beer Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0149",
      testDescription: "Verify Wine & Beer Gift Baskets page header",
      testSummary: 'Verify page header displays "Wine & Beer Gift Baskets"',
    },
  },
  "0017-chocolate-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Chocolate Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0150",
      testDescription: "Verify Chocolate Gift Baskets page header",
      testSummary: 'Verify page header displays "Chocolate Gift Baskets"',
    },
  },
  "0018-lindt-gift-basket-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Lindt Gift Basket Collection",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0151",
      testDescription: "Verify Lindt Gift Basket Collection page header",
      testSummary: 'Verify page header displays "Lindt Gift Basket Collection"',
    },
  },
  "0019-luxury-gift-box-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Luxury Gift Box Collection",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0152",
      testDescription: "Verify Luxury Gift Box Collection page header",
      testSummary: 'Verify page header displays "Luxury Gift Box Collection"',
    },
  },
  "0020-sweets-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Sweets Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0153",
      testDescription: "Verify Sweets Gift Baskets page header",
      testSummary: 'Verify page header displays "Sweets Gift Baskets"',
    },
  },
  "0021-cheese-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Cheese Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0154",
      testDescription: "Verify Cheese Gift Baskets page header",
      testSummary: 'Verify page header displays "Cheese Gift Baskets"',
    },
  },
  "0022-snack-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Snack Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0155",
      testDescription: "Verify Snack Gift Baskets page header",
      testSummary: 'Verify page header displays "Snack Gift Baskets"',
    },
  },
  "0023-coffee-and-tea-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Coffee and Tea Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0156",
      testDescription: "Verify Coffee and Tea Baskets page header",
      testSummary: 'Verify page header displays "Coffee and Tea Baskets"',
    },
  },
  "0024-make-a-wish-collection-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Make-A-Wish® Collection",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0157",
      testDescription: "Verify Make-A-Wish® Collection page header",
      testSummary: 'Verify page header displays "Make-A-Wish® Collection"',
    },
  },
  "0025-corporate-gift-baskets-page-header": {
    expectedPageHeader: {
      expectedGiftBasketsValueHeaders: "Corporate Gift Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0158",
      testDescription: "Verify Corporate Gift Baskets page header",
      testSummary: 'Verify page header displays "Corporate Gift Baskets"',
    },
  },
  "0026-verify-gift-baskets-page-elements": {
    expectedPageHeadings: {
      headings: [
        "Gourmet Collection",
        "Fruit Baskets",
        "Wine & Beer Gift Baskets",
        "Chocolate Gift Baskets",
        "Lindt Gift Basket Collection",
        "Luxury Gift Box Collection",
        "Sweets Gift Baskets",
        "Cheese Gift Baskets",
        "Snack Gift Baskets",
        "Coffee and Tea Baskets",
        "Make-A-Wish® Collection",
        "Corporate Gift Baskets",
      ],
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
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
