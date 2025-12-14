import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Corporate Header - Mobile", () => {
  test.describe.configure({ timeout: 240000 });

  const menuScenario = getDataSet(
    "corporate.mobile",
    "corporateTestData",
    "0001-verify-corporate-menu"
  );

  test(`
    Test case: '${menuScenario.testCaseData.testCase}'
    Summary: '${menuScenario.testCaseData.testSummary}'
    Description: '${menuScenario.testCaseData.testDescription}'
    Tags: '${menuScenario.testCaseData.tags}'
    `, async ({ corporatePage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), menuScenario.testCaseData);

    await test.step("GIVEN the shopper lands on the homepage", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });

    await test.step("WHEN the user navigates to Flowers & Plants Page", async () => {
      await homepagePage.clickMobileMenuBar();
    });

    await test.step("WHEN the corporate menu is opened on mobile", async () => {
      await corporatePage.openCorporateDropdown(false);
    });

    await test.step("THEN the expected corporate links are listed", async () => {
      await corporatePage.verifyAllCorporateDropdownValuesMobile(
        menuScenario.expectedCorporateMenu?.expectedEntries ?? [],
        false
      );
    });
  });

  const navigationCases = [
    "0002-open-corporate-discount",
    "0003-open-corporate-quote-form",
    "0004-open-corporate-gift-baskets",
  ];

  navigationCases.forEach((testCaseId) => {
    const scenario = getDataSet("corporate.mobile", "corporateTestData", testCaseId);

    test(`
      Test case: '${scenario.testCaseData.testCase}'
      Summary: '${scenario.testCaseData.testSummary}'
      Description: '${scenario.testCaseData.testDescription}'
      Tags: '${scenario.testCaseData.tags}'
      `, async ({ corporatePage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), scenario.testCaseData);

      await test.step("GIVEN the shopper lands on the homepage", async () => {
        await homepagePage.navigateToHomepage();
        await commonUtils.closePopup();
      });

      await test.step("WHEN the user navigates to Flowers & Plants Page", async () => {
        await homepagePage.clickMobileMenuBar();
      });

      await test.step(`WHEN the shopper selects "${scenario.selectCorporateMenuItem?.menuItem}" from the mobile menu`, async () => {
        if (!scenario.selectCorporateMenuItem) {
          throw new Error(`Missing selectCorporateMenuItem data for ${testCaseId}`);
        }
        await corporatePage.selectCorporateFromDropdown(
          scenario.selectCorporateMenuItem.menuItem,
          scenario.selectCorporateMenuItem.isDesktop
        );
      });
    });
  });

  const headerPairs = [
    {
      navigate: "0002-open-corporate-discount",
      validate: "0005-verify-corporate-discount-header",
    },
    {
      navigate: "0003-open-corporate-quote-form",
      validate: "0006-verify-quote-form-header",
    },
    {
      navigate: "0004-open-corporate-gift-baskets",
      validate: "0007-verify-corporate-baskets-header",
    },
  ];

  headerPairs.forEach(({ navigate, validate }) => {
    const navigationScenario = getDataSet("corporate.mobile", "corporateTestData", navigate);
    const headerScenario = getDataSet("corporate.mobile", "corporateTestData", validate);

    test(`
      Test case: '${headerScenario.testCaseData.testCase}'
      Summary: '${headerScenario.testCaseData.testSummary}'
      Description: '${headerScenario.testCaseData.testDescription}'
      Tags: '${headerScenario.testCaseData.tags}'
      `, async ({ corporatePage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), headerScenario.testCaseData);

      await test.step("GIVEN the shopper lands on the homepage", async () => {
        await homepagePage.navigateToHomepage();
        await commonUtils.closePopup();
      });

      await test.step("WHEN the user navigates to Flowers & Plants Page", async () => {
        await homepagePage.clickMobileMenuBar();
      });

      await test.step(`WHEN "${navigationScenario.selectCorporateMenuItem?.menuItem}" is opened from mobile menu`, async () => {
        if (!navigationScenario.selectCorporateMenuItem) {
          throw new Error(`Missing navigation data for ${navigate}`);
        }
        await corporatePage.selectCorporateFromDropdown(
          navigationScenario.selectCorporateMenuItem.menuItem,
          navigationScenario.selectCorporateMenuItem.isDesktop
        );
      });

      await test.step(`THEN the landing header matches "${headerScenario.expectedCorporateHeader?.headerText}"`, async () => {
        if (!headerScenario.expectedCorporateHeader?.headerText) {
          throw new Error(`Missing header expectation for ${validate}`);
        }
        await corporatePage.verifyCorporatePageHeader(headerScenario.expectedCorporateHeader.headerText);
      });
    });
  });

  const sectionScenario = getDataSet(
    "corporate.mobile",
    "corporateTestData",
    "0008-verify-corporate-content-blocks"
  );

  test(`
    Test case: '${sectionScenario.testCaseData.testCase}'
    Summary: '${sectionScenario.testCaseData.testSummary}'
    Description: '${sectionScenario.testCaseData.testDescription}'
    Tags: '${sectionScenario.testCaseData.tags}'
    `, async ({ corporatePage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), sectionScenario.testCaseData);

    await test.step("GIVEN the shopper lands on the homepage", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });

    await test.step("WHEN the user navigates to Flowers & Plants Page", async () => {
      await homepagePage.clickMobileMenuBar();
    });

    await test.step("AND the shopper opens the corporate discount page from mobile menu", async () => {
      await corporatePage.selectCorporateFromDropdown("Apply for 20% Corporate Discount", false);
    });

    await test.step("THEN the highlighted corporate content blocks are visible", async () => {
      await corporatePage.verifyCorporateDiscountForm(sectionScenario.expectedCorporateSections!);
    });
  });
});

