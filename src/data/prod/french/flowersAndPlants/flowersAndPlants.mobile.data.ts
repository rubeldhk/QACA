import { TestCaseData } from "@interfaces/testcase.data.interface";

import {
  SelectFlowersAndPlantsItemDataFrench,
  ExpectedFlowersAndPlantsValuesDataFrench,
  ExpectedFlowersAndPlantsPageHeadingsDataFrench,
} from "@interfaces/flowersAndPlants/flowersAndPlants.interface";

interface FlowersAndPlantsTestCaseData {
  flowersAndPlants?: { dropdown: string };
  selectFlowersAndPlantsItem?: SelectFlowersAndPlantsItemDataFrench;
  expectedFlowersAndPlantsValues?: string[];
  expectedPageHeader?: ExpectedFlowersAndPlantsValuesDataFrench;
  expectedPageHeadings?: ExpectedFlowersAndPlantsPageHeadingsDataFrench;
  testCaseData: TestCaseData;
}

const flowersAndPlantsTestData: { [key: string]: FlowersAndPlantsTestCaseData } = {
  "0001-verify-flowers-and-plants": {
    flowersAndPlants: {
      dropdown: "Flowers & Plants",
    },
    expectedFlowersAndPlantsValues: [
      "Des Roses",
      "Paniers des fleurs et Plantes",
      "Bouquets Mélangés",
      "Marguerites",
      "Lys",
      "Plantes tropicales",
    ],
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0031",
      testDescription: "Validate the Flowers & Plants dropdown is visible",
      testSummary: "Validate the Flowers & Plants dropdown is visible",
    },
  },
  "0002-roses-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Des Roses",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0036",
      testDescription: "Select Des Roses from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Roses page",
    },
  },
  "0003-flower-and-planter-baskets-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Paniers des fleurs et Plantes",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0037",
      testDescription:
        "Select Paniers des fleurs et Plantes from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Paniers des fleurs et Plantes page",
    },
  },
  "0004-mixed-bouquets-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Bouquets Mélangés",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0035",
      testDescription: "Select Bouquets Mélangés from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Bouquets Mélangés page",
    },
  },
  "0005-daisies-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Marguerites",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0038",
      testDescription: "Select Marguerites from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Marguerites page",
    },
  },
  "0006-lilies-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Lys",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0033",
      testDescription: "Select Lys from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Lys page",
    },
  },
  "0007-tropical-plants-flowers-and-plants": {
    selectFlowersAndPlantsItem: {
      isWeb: false,
      flowersAndPlantsItem: "Plantes tropicales",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0034",
      testDescription: "Select Plantes tropicales from Flowers & Plants dropdown",
      testSummary: "Verify navigation to Plantes tropicales page",
    },
  },
  "0008-roses-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Roses",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0142",
      testDescription: "Verify Roses page header",
      testSummary: 'Verify page header displays "Roses"',
    },
  },
  "0009-flower-and-planter-baskets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Paniers de fleurs et de plantes",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0144",
      testDescription: "Verify Paniers de fleurs et de plantes page header",
      testSummary: 'Verify page header displays "Paniers de fleurs et de plantes"',
    },
  },
  "0010-mixed-bouquets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Bouquets mélangés",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0141",
      testDescription: "Verify Bouquets mélangés page header",
      testSummary: 'Verify page header displays "Bouquets mélangés"',
    },
  },
  "0011-daisy-bouquets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Bouquets de marguerites",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0143",
      testDescription: "Verify Bouquets de marguerites page header",
      testSummary: 'Verify page header displays "Bouquets de marguerites"',
    },
  },
  "0012-lilies-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Lys",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0145",
      testDescription: "Verify Lys page header",
      testSummary: 'Verify page header displays "Lys"',
    },
  },
  "0013-tropical-plants-and-planter-baskets-page-header": {
    expectedPageHeader: {
      expectedFlowersAndPlantsValueHeaders: "Baskets plantes tropicales et jardinière",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0146",
      testDescription: "Verify Baskets plantes tropicales et jardinière page header",
      testSummary: 'Verify page header displays "Baskets plantes tropicales et jardinière"',
    },
  },
  "0014-verify-flowers-and-plants-page-elements": {
    expectedPageHeadings: {
      headings: [
        "Paniers de fleurs et de plantes",
        "Lys",
        "Bouquets de marguerites",
        "Roses",
        "Baskets plantes tropicales et jardinière",
        "Bouquets mélangés",
      ],
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
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
