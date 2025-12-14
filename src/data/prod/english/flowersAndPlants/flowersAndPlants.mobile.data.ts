import { TestCaseData } from "@interfaces/testcase.data.interface";

import {
  SelectFlowersAndPlantsItemData,
  ExpectedFlowersAndPlantsValuesData,
  ExpectedFlowersAndPlantsPageHeadingsData,
} from "@interfaces/flowersAndPlants/flowersAndPlants.interface";

interface FlowersAndPlantsTestCaseData {
  flowersAndPlants?: { dropdown: string };
  selectFlowersAndPlantsItem?: SelectFlowersAndPlantsItemData;
  expectedFlowersAndPlantsValues?: string[];
  expectedPageHeader?: ExpectedFlowersAndPlantsValuesData;
  expectedPageHeadings?: ExpectedFlowersAndPlantsPageHeadingsData;
  testCaseData: TestCaseData;
}

const flowersAndPlantsTestData: { [key: string]: FlowersAndPlantsTestCaseData } = {
  "0001-verify-flowers-and-plants": {
    flowersAndPlants: {
      dropdown: "Flowers & Plants",
    },
    expectedFlowersAndPlantsValues: [
      "Roses",
      "Flower and Planter Baskets",
      "Mixed Bouquets",
      "Daisies",
      "Lilies",
      "Tropical Plants",
    ],
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0031",
      testDescription: "Validate the Flowers & Plants dropdown is visible",
      testSummary: "Validate the Flowers & Plants dropdown is visible",
    },
  },
  "0002-roses-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Roses",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0036",
      testDescription: "Select Roses from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Roses page",
    },
  },
  "0003-flower-and-planter-baskets-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Flower and Planter Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0037",
      testDescription:
        "Select Flower and Planter Baskets from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Flower and Planter Baskets page",
    },
  },
  "0004-mixed-bouquets-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Mixed Bouquets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0035",
      testDescription: "Select Mixed Bouquets from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Mixed Bouquets page",
    },
  },
  "0005-daisies-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Daisies",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0038",
      testDescription: "Select Daisies from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Daisies page",
    },
  },
  "0006-lilies-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Lilies",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0033",
      testDescription: "Select Lilies from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Lilies page",
    },
  },
  "0007-tropical-plants-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Tropical Plants",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0034",
      testDescription: "Select Tropical Plants from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Tropical Plants page",
    },
  },
  "0008-roses-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Roses",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0142",
      testDescription: "Verify Roses page header",
      testSummary: 'Verify page header displays "Roses"',
    },
  },
  "0009-flower-and-planter-baskets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Flower & Planter Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0144",
      testDescription: "Verify Flower & Planter Baskets page header",
      testSummary: 'Verify page header displays "Flower & Planter Baskets"',
    },
  },
  "0010-mixed-bouquets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Mixed Bouquets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0141",
      testDescription: "Verify Mixed Bouquets page header",
      testSummary: 'Verify page header displays "Mixed Bouquets"',
    },
  },
  "0011-daisy-bouquets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Daisy Bouquets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0143",
      testDescription: "Verify Daisy Bouquets page header",
      testSummary: 'Verify page header displays "Daisy Bouquets"',
    },
  },
  "0012-lilies-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Lilies",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0145",
      testDescription: "Verify Lilies page header",
      testSummary: 'Verify page header displays "Lilies"',
    },
  },
  "0013-tropical-plants-and-planter-baskets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Tropical Plants & Planter Baskets",
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0146",
      testDescription: "Verify Tropical Plants & Planter Baskets page header",
      testSummary: 'Verify page header displays "Tropical Plants & Planter Baskets"',
    },
  },
  "0014-verify-flowers-and-plants-page-elements": {
    expectedPageHeadings: {
      headings: [
        "Roses",
        "Flower & Planter Baskets",
        "Mixed Bouquets",
        "Daisy Bouquets",
        "Lilies",
        "Tropical Plants & Planter Baskets",
      ],
    },
    testCaseData: {
      tags: " @smoke @regression @english ",
      testCase: "BM-0161",
      testDescription: "Verify Flowers & Plants page elements",
      testSummary: 'Verify page header displays "Flowers & Plants"',
    },
  },
};

export function getData(testCase: string): FlowersAndPlantsTestCaseData {
  const data = flowersAndPlantsTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
