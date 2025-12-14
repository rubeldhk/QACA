import { TestCaseData } from "@interfaces/testcase.data.interface";
import {
  ExpectedCorporateHeaderData,
  ExpectedCorporateMenuData,
  ExpectedCorporateSectionsData,
  SelectCorporateMenuItemData,
} from "@interfaces/corporate/corporate.interface";

interface CorporateTestCaseData {
  selectCorporateMenuItem?: SelectCorporateMenuItemData;
  expectedCorporateMenu?: ExpectedCorporateMenuData;
  expectedCorporateHeader?: ExpectedCorporateHeaderData;
  expectedCorporateSections?: ExpectedCorporateSectionsData;
  testCaseData: TestCaseData;
}

const corporateTestData: { [key: string]: CorporateTestCaseData } = {
  "0001-verify-corporate-menu": {
    expectedCorporateMenu: {
      expectedEntries: [
        "Apply for 20% Corporate Discount",
        "Quote Request Form",
        "Corporate Gift Baskets",
      ],
    },
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0401",
      testDescription: "Validate corporate dropdown lists all expected links",
      testSummary: "Verify the corporate header menu exposes each navigation link",
    },
  },
  "0002-open-corporate-discount": {
    selectCorporateMenuItem: {
      isDesktop: true,
      menuItem: "Apply for 20% Corporate Discount",
    },
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0402",
      testDescription: "Navigate to the corporate discount application page",
      testSummary: "Open Apply for 20% Corporate Discount from corporate menu",
    },
  },
  "0003-open-corporate-quote-form": {
    selectCorporateMenuItem: {
      isDesktop: true,
      menuItem: "Quote Request Form",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0403",
      testDescription: "Navigate to the corporate quote request form",
      testSummary: "Open Quote Request Form from corporate menu",
    },
  },
  "0004-open-corporate-gift-baskets": {
    selectCorporateMenuItem: {
      isDesktop: true,
      menuItem: "Corporate Gift Baskets",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0404",
      testDescription: "Navigate to the corporate gift baskets listing",
      testSummary: "Open Corporate Gift Baskets from corporate menu",
    },
  },
  "0005-verify-corporate-discount-header": {
    expectedCorporateHeader: {
      headerText: "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0405",
      testDescription: "Confirm the corporate discount page headline",
      testSummary: "Verify header on Apply for 20% Corporate Discount page",
    },
  },
  "0006-verify-quote-form-header": {
    expectedCorporateHeader: {
      headerText: "Quote Form",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0406",
      testDescription: "Confirm the quote request page headline",
      testSummary: "Verify header on Quote Request Form page",
    },
  },
  "0007-verify-corporate-baskets-header": {
    expectedCorporateHeader: {
      headerText: "Corporate Gift Baskets",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0407",
      testDescription: "Confirm the corporate basket catalogue header",
      testSummary: "Verify header on Corporate Gift Baskets page",
    },
  },
  "0008-verify-corporate-content-blocks": {
    expectedCorporateSections: {
      sectionHeadings: [
        "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES",
        "Quote Form",
        "Corporate Gift Baskets",
      ],
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0408",
      testDescription: "Validate key informational blocks on corporate pages",
      testSummary: "Verify corporate highlights and sections render correctly",
    },
  },
};

export function getData(testCase: string): CorporateTestCaseData {
  const data = corporateTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}

