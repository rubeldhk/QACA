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
      testCase: "BM-0411",
      testDescription: "Validate the mobile corporate dropdown lists all expected links",
      testSummary: "Verify the corporate header menu exposes each navigation link on mobile",
    },
  },
  "0002-open-corporate-discount": {
    selectCorporateMenuItem: {
      isDesktop: false,
      menuItem: "Apply for 20% Corporate Discount",
    },
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0412",
      testDescription: "Navigate to the corporate discount application page on mobile",
      testSummary: "Open Apply for 20% Corporate Discount from mobile corporate menu",
    },
  },
  "0003-open-corporate-quote-form": {
    selectCorporateMenuItem: {
      isDesktop: false,
      menuItem: "Quote Request Form",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0413",
      testDescription: "Navigate to the corporate quote request form on mobile",
      testSummary: "Open Quote Request Form from mobile corporate menu",
    },
  },
  "0004-open-corporate-gift-baskets": {
    selectCorporateMenuItem: {
      isDesktop: false,
      menuItem: "Corporate Gift Baskets",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0414",
      testDescription: "Navigate to the corporate gift baskets listing on mobile",
      testSummary: "Open Corporate Gift Baskets from mobile corporate menu",
    },
  },
  "0005-verify-corporate-discount-header": {
    expectedCorporateHeader: {
      headerText: "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0415",
      testDescription: "Confirm the corporate discount page headline on mobile",
      testSummary: "Verify header on Apply for 20% Corporate Discount page (mobile)",
    },
  },
  "0006-verify-quote-form-header": {
    expectedCorporateHeader: {
      headerText: "Quote Form",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0416",
      testDescription: "Confirm the quote request page headline on mobile",
      testSummary: "Verify header on Quote Request Form page (mobile)",
    },
  },
  "0007-verify-corporate-baskets-header": {
    expectedCorporateHeader: {
      headerText: "Corporate Gift Baskets",
    },
    testCaseData: {
      tags: "@regression @english",
      testCase: "BM-0417",
      testDescription: "Confirm the corporate basket catalogue header on mobile",
      testSummary: "Verify header on Corporate Gift Baskets page (mobile)",
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
      testCase: "BM-0418",
      testDescription: "Validate key informational blocks on corporate pages from mobile viewport",
      testSummary: "Verify corporate highlights and sections render correctly on mobile",
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

