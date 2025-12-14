import { TestCaseData } from "@interfaces/testcase.data.interface";

import {
  SelectOccasionsItemDataFrench,
  ExpectedOccasionsValuesDataFrench,
  ExpectedOccasionsPageHeadingsDataFrench,
} from "@interfaces/occasions/occasions.interface";

// Updated: 2025-11-10
// Notes: Realigned French occasions mobile data with french interface enumerations.

interface OccasionsTestCaseData {
  occasions?: { dropdown: string };
  selectOccasionsItem?: SelectOccasionsItemDataFrench;
  expectedOccasionsValues?: string[];
  expectedPageHeader?: ExpectedOccasionsValuesDataFrench;
  expectedPageHeadings?: ExpectedOccasionsPageHeadingsDataFrench;
  testCaseData: TestCaseData;
}

const occasionsTestData: { [key: string]: OccasionsTestCaseData } = {
  "0001-verify-occasions": {
    occasions: {
      dropdown: "Occasions",
    },
    expectedOccasionsValues: [
      "Fleurs et cadeaux d'anniversaire",
      "Sympathie et Funérailles",
      "Anniversaire",
      "Juste parce que",
      "Amour et Romance",
      "Nouveau Bébé",
      "Pendre la crémaillère",
      "Bon rétablissement",
      "Cadeaux Pour Lui",
      "Toutes nos Félicitations",
      "Remerciements",
      "Fleurs d'excuses",
      "Cadeaux d'entreprise",
    ],
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0016",
      testDescription: "Validate the occasions dropdown is visible",
      testSummary: "Validate the occasions dropdown is visible",
    },
  },
  "0002-birthday-flowers-and-gifts-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Fleurs et cadeaux d'anniversaire",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0017",
      testDescription: "Select Birthday Flowers and Gifts from occasions dropdown",
      testSummary: "Verify navigation to Birthday Flowers and Gifts page",
    },
  },
  "0003-sympathy-and-funeral-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Sympathie et Funérailles",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0018",
      testDescription: "Select Sympathy and Funeral from occasions dropdown",
      testSummary: "Verify navigation to Sympathy and Funeral page",
    },
  },
  "0004-anniversary-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Anniversaire",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0019",
      testDescription: "Select Anniversary from occasions dropdown",
      testSummary: "Verify navigation to Anniversary page",
    },
  },
  "0005-just-because-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Juste parce que",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0020",
      testDescription: "Select Just Because from occasions dropdown",
      testSummary: "Verify navigation to Just Because page",
    },
  },
  "0006-love-and-romance-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Amour et Romance",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0021",
      testDescription: "Select Love and Romance from occasions dropdown",
      testSummary: "Verify navigation to Love and Romance page",
    },
  },
  "0007-new-baby-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Nouveau Bébé",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0022",
      testDescription: "Select New Baby from occasions dropdown",
      testSummary: "Verify navigation to New Baby page",
    },
  },
  "0008-housewarming-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Pendre la crémaillère",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0023",
      testDescription: "Select Housewarming from occasions dropdown",
      testSummary: "Verify navigation to Housewarming page",
    },
  },
  "0009-get-well-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Bon rétablissement",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0024",
      testDescription: "Select Get Well from occasions dropdown",
      testSummary: "Verify navigation to Get Well page",
    },
  },
  "0010-gifts-for-him-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Cadeaux Pour Lui",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0025",
      testDescription: "Select Gifts For Him from occasions dropdown",
      testSummary: "Verify navigation to Gifts For Him page",
    },
  },
  "0011-congratulations-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Toutes nos Félicitations",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0026",
      testDescription: "Select Congratulations from occasions dropdown",
      testSummary: "Verify navigation to Congratulations page",
    },
  },
      "0012-thank-you-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Remerciements",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0027",
      testDescription: "Select Thank You from occasions dropdown",
      testSummary: "Verify navigation to Thank You page",
    },
  },
  "0013-apology-flowers-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Fleurs d'excuses",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0028",
      testDescription: "Select Apology Flowers from occasions dropdown",
      testSummary: "Verify navigation to Apology Flowers page",
    },
  },
  "0014-corporate-gifts-occasions": {
    selectOccasionsItem: {
      isWeb: false,
      occasionsItem: "Cadeaux d'entreprise",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0029",
      testDescription: "Select Corporate Gifts from occasions dropdown",
      testSummary: "Verify navigation to Corporate Gifts page",
    },
  },
  "0015-birthday-flowers-and-gifts-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs et cadeaux d'anniversaire",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0128",
      testDescription: "Verify Birthday Flowers & Gifts page header",
      testSummary: "Verify page header displays \"Birthday Flowers & Gifts\"",
    },
  },
  "0016-sympathy-and-funeral-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs de sympathie et funéraires",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0129",
      testDescription: "Verify Sympathy & Funeral Flowers page header",
      testSummary: "Verify page header displays \"Sympathy & Funeral Flowers\"",
    },
  },
  "0017-anniversary-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Anniversary Flowers",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0130",
      testDescription: "Verify Anniversary Flowers page header",
      testSummary: "Verify page header displays \"Anniversary Flowers\"",
    },
  },
  "0018-just-because-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs Juste Parce-que",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0131",
      testDescription: "Verify Just Because page header",
      testSummary: "Verify page header displays \"Just Because\"",
    },
  },
  "0019-love-and-romance-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Amour & Romance",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0132",
      testDescription: "Verify Love & Romance page header",
      testSummary: "Verify page header displays \"Love & Romance\"",
    },
  },
  "0020-new-baby-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs et cadeaux pour les nouveaux bébés",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0133",
      testDescription: "Verify New Baby Flowers & Gifts page header",
      testSummary: "Verify page header displays \"New Baby Flowers & Gifts\"",
    },
  },
  "0021-housewarming-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs pour une pendaison de crémaillère",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0134",
      testDescription: "Verify Housewarming Flowers & Gifts page header",
      testSummary: "Verify page header displays \"Housewarming Flowers & Gifts\"",
    },
  },
  "0022-get-well-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs de voeux de bon rétablissement",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0135",
      testDescription: "Verify Get Well Flowers & Gifts page header",
      testSummary: "Verify page header displays \"Get Well Flowers & Gifts\"",
    },
  },
  "0023-gifts-for-him-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Cadeaux pour lui",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0136",
      testDescription: "Verify Gifts For Him page header",
      testSummary: "Verify page header displays \"Gifts For Him\"",
    },
  },
    "0024-congratulations-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs & Cadeaux de félicitations",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0137",
      testDescription: "Verify Congratulations Flowers & Gifts page header",
      testSummary: "Verify page header displays \"Congratulations Flowers & Gifts\"",
    },
  },
  "0025-thank-you-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs & Cadeaux de remerciement",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0138",
      testDescription: "Verify Thank You Flowers & Gifts page header",
      testSummary: "Verify page header displays \"Thank You Flowers & Gifts\"",
    },
  },
  "0026-apology-flowers-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Fleurs d'excuses",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0139",
      testDescription: "Verify Apology Flowers page header",
      testSummary: "Verify page header displays \"Apology Flowers\"",
    },
  },
  "0027-corporate-gifts-page-header": {
    expectedPageHeader: {
      expectedOccasionsValueHeaders: "Cadeaux d'entreprise",
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0140",
      testDescription: "Verify Corporate Gifts page header",
      testSummary: "Verify page header displays \"Corporate Gifts\"",
    },
  },
  "0028-verify-occasions-page-elements": {
    expectedPageHeadings: {
      headings: [
        "Fleurs et cadeaux d'anniversaire",
        "Fleurs de sympathie et funéraires",
        "Anniversary Flowers",
        "Fleurs Juste Parce-que",
        "Amour & Romance",
        "Fleurs et cadeaux pour les nouveaux bébés",
        "Fleurs pour une pendaison de crémaillère",
        "Fleurs de voeux de bon rétablissement",
        "Cadeaux pour lui",
        "Fleurs & Cadeaux de félicitations",
        "Fleurs & Cadeaux de remerciement",
        "Fleurs d'excuses",
        "Cadeaux d'entreprise",
      ],
    },
    testCaseData: {
      tags: " @smoke @regression @french ",
      testCase: "BM-0160",
      testDescription: "Verify Occasions page elements",
      testSummary: "Verify page header displays \"Occasions\"",
    },
  },
};

export function getData(testCase: string): OccasionsTestCaseData {
  const data = occasionsTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
