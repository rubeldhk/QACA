import { TestCaseData } from "@interfaces/testcase.data.interface";
import {
  ExpectedCorporateHeaderDataFrench,
  ExpectedCorporateMenuDataFrench,
  ExpectedCorporateSectionsDataFrench,
  SelectCorporateMenuItemDataFrench,
} from "@interfaces/corporate/corporate.interface";

// Updated: 2025-11-13
// Notes: Jeux de données mobile pour la navigation entreprise.

interface CorporateTestCaseData {
  selectCorporateMenuItem?: SelectCorporateMenuItemDataFrench;
  expectedCorporateMenu?: ExpectedCorporateMenuDataFrench;
  expectedCorporateHeader?: ExpectedCorporateHeaderDataFrench;
  expectedCorporateSections?: ExpectedCorporateSectionsDataFrench;
  testCaseData: TestCaseData;
}

const corporateTestData: { [key: string]: CorporateTestCaseData } = {
  "0001-verify-corporate-menu": {
    expectedCorporateMenu: {
      expectedEntries: [
        "Demander un Rabais Corporatif de 20%",
        "Formulaire de Demande de Devis",
        "Paniers Cadeaux d'entreprise",
      ],
    },
    testCaseData: {
      tags: " @smoke @regression @french",
      testCase: "BM-FR-0411",
      testDescription: "Validate corporate dropdown lists all expected links",
      testSummary: "Verify the corporate header menu exposes each navigation link",
    },
  },
  "0002-open-corporate-discount": {
    selectCorporateMenuItem: {
      isDesktop: false,
      menuItem: "Demander un Rabais Corporatif de 20%",
    },
    testCaseData: {
      tags: " @smoke @regression @french",
      testCase: "BM-FR-0412",
      testDescription: "Navigate to the corporate discount application page",
      testSummary: "Open Apply for 20% Corporate Discount from corporate menu",
    },
  },
  "0003-open-corporate-quote-form": {
    selectCorporateMenuItem: {
      isDesktop: false,
      menuItem: "Formulaire de Demande de Devis",
    },
    testCaseData: {
      tags: " @regression @french",
      testCase: "BM-FR-0413",
      testDescription: "Navigate to the corporate quote request form",
      testSummary: "Open Quote Request Form from corporate menu",
    },
  },
  "0004-open-corporate-gift-baskets": {
    selectCorporateMenuItem: {
      isDesktop: false,
      menuItem: "Paniers Cadeaux d'entreprise",
    },
    testCaseData: {
      tags: " @regression @french",
      testCase: "BM-FR-0414",
      testDescription: "Navigate to the corporate gift baskets listing",
      testSummary: "Open Corporate Gift Baskets from corporate menu",
    },
  },
  "0005-verify-corporate-discount-header": {
    expectedCorporateHeader: {
      headerText: "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES",
    },
    testCaseData: {
      tags: " @regression @french",
      testCase: "BM-FR-0415",
      testDescription: "Confirm the corporate discount page headline",
      testSummary: "Verify header on Apply for 20% Corporate Discount page (mobile)",
    },
  },
  "0006-verify-quote-form-header": {
    expectedCorporateHeader: {
      headerText: "Quote Form",
    },
    testCaseData: {
      tags: " @regression @french",
      testCase: "BM-FR-0416",
      testDescription: "Confirm the quote request page headline",
      testSummary: "Verify header on Quote Request Form page (mobile)",
    },
  },
  "0007-verify-corporate-baskets-header": {
    expectedCorporateHeader: {
      headerText: "Paniers cadeaux d'entreprise",
    },
    testCaseData: {
      tags: " @regression @french",
      testCase: "BM-FR-0417",
      testDescription: "Confirm the corporate basket catalogue header",
      testSummary: "Verify header on Corporate Gift Baskets page (mobile)",
    },
  },
  "0008-verify-corporate-content-blocks": {
    expectedCorporateSections: {
      sectionHeadings: [
        "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES",
        "Quote Form",
        "Paniers cadeaux d'entreprise",
      ],
    },
    testCaseData: {
      tags: " @regression @french",
      testCase: "BM-FR-0418",
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

