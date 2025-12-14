import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Gift Baskets Page", () => {
  test.describe.configure({ timeout: 240000 });

  const scenario1 = getDataSet(
    "giftBaskets.mobile",
    "giftBasketsTestData",
    "0001-verify-gift-baskets"
  );
  const scenario3 = getDataSet(
    "giftBaskets.mobile",
    "giftBasketsTestData",
    "0026-verify-gift-baskets-page-elements"
  );

  test(`Test case: '${scenario1.testCaseData.testCase}'
        Summary: '${scenario1.testCaseData.testSummary}'
        Description: '${scenario1.testCaseData.testDescription}'
        Tags: '${scenario1.testCaseData.tags}'
        `, async ({ giftBasketsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);

    await test.step("GIVEN the user navigates to Gift Baskets Page", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });

    await test.step("WHEN the user navigates to Gift Baskets Page", async () => {
      await homepagePage.clickMobileMenuBar();
    });

    await test.step("THEN the user verifies Gift Baskets dropdown values match expected", async () => {
      await giftBasketsPage.verifyGiftBasketsDropdownValuesMatchMobile(
        scenario1.expectedGiftBasketsValues ?? [], 
        false
      );
    });
  });

  const giftBasketsTestCases = [
    "0002-gourmet-collection-gift-baskets",
    "0003-fruit-baskets-gift-baskets",
    "0004-beer-and-wine-baskets-gift-baskets",
    "0005-chocolate-gift-baskets-gift-baskets",
    "0006-lindt-gift-basket-collection-gift-baskets",
    "0007-luxury-gift-boxes-gift-baskets",
    "0008-sweets-gift-baskets-gift-baskets",
    "0009-cheese-gift-baskets-gift-baskets",
    "0010-snack-gift-baskets-gift-baskets",
    "0011-coffee-and-tea-baskets-gift-baskets",
    "0012-make-a-wish-collection-gift-baskets",
    "0013-corporate-gift-baskets-gift-baskets",
  ];

  giftBasketsTestCases.forEach((testCaseId) => {
    const scenario = getDataSet(
      "giftBaskets.mobile",
      "giftBasketsTestData",
      testCaseId
    );

    test(`
        Test case: '${scenario.testCaseData.testCase}'
        Summary: '${scenario.testCaseData.testSummary}'
        Description: '${scenario.testCaseData.testDescription}'
        Tags: '${scenario.testCaseData.tags}'
        `, async ({ giftBasketsPage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), scenario.testCaseData);

      await test.step("GIVEN the user navigates to Gift Baskets Page", async () => {
        await homepagePage.navigateToHomepage();
        await commonUtils.closePopup();

      });

      await test.step("WHEN the user navigates to Gift Baskets Page", async () => {
        await homepagePage.clickMobileMenuBar();
      });

      await test.step(
        `AND the user selects "${scenario.selectGiftBasketsItem?.giftBasketsItem}" from Gift Baskets dropdown`,
        async () => {
          if (!scenario.selectGiftBasketsItem?.giftBasketsItem) {
            throw new Error(
              `selectGiftBasketsItem is missing for test case: ${testCaseId}`
            );
          }
          await giftBasketsPage.selectGiftBasketsFromDropdown(
            scenario.selectGiftBasketsItem.giftBasketsItem,
            false
          );
        }
      );
    });
  });

  const pageHeaderTestCases = [
    {
      dropdownItem: "0002-gourmet-collection-gift-baskets",
      pageHeader: "0014-gourmet-collection-page-header",
    },
    {
      dropdownItem: "0003-fruit-baskets-gift-baskets",
      pageHeader: "0015-fruit-baskets-page-header",
    },
    {
      dropdownItem: "0004-beer-and-wine-baskets-gift-baskets",
      pageHeader: "0016-wine-and-beer-gift-baskets-page-header",
    },
    {
      dropdownItem: "0005-chocolate-gift-baskets-gift-baskets",
      pageHeader: "0017-chocolate-gift-baskets-page-header",
    },
    {
      dropdownItem: "0006-lindt-gift-basket-collection-gift-baskets",
      pageHeader: "0018-lindt-gift-basket-collection-page-header",
    },
    {
      dropdownItem: "0007-luxury-gift-boxes-gift-baskets",
      pageHeader: "0019-luxury-gift-box-collection-page-header",
    },
    {
      dropdownItem: "0008-sweets-gift-baskets-gift-baskets",
      pageHeader: "0020-sweets-gift-baskets-page-header",
    },
    {
      dropdownItem: "0009-cheese-gift-baskets-gift-baskets",
      pageHeader: "0021-cheese-gift-baskets-page-header",
    },
    {
      dropdownItem: "0010-snack-gift-baskets-gift-baskets",
      pageHeader: "0022-snack-gift-baskets-page-header",
    },
    {
      dropdownItem: "0011-coffee-and-tea-baskets-gift-baskets",
      pageHeader: "0023-coffee-and-tea-baskets-page-header",
    },
    {
      dropdownItem: "0012-make-a-wish-collection-gift-baskets",
      pageHeader: "0024-make-a-wish-collection-page-header",
    },
    {
      dropdownItem: "0013-corporate-gift-baskets-gift-baskets",
      pageHeader: "0025-corporate-gift-baskets-page-header",
    },
  ];

  pageHeaderTestCases.forEach((testCase) => {
    const dropdownScenario = getDataSet(
      "giftBaskets.mobile",
      "giftBasketsTestData",
      testCase.dropdownItem
    );
    const headerScenario = getDataSet(
      "giftBaskets.mobile",
      "giftBasketsTestData",
      testCase.pageHeader
    );

    test(`
            Test case: '${headerScenario.testCaseData.testCase}'
            Summary: '${headerScenario.testCaseData.testSummary}'
            Description: '${headerScenario.testCaseData.testDescription}'
            Tags: '${headerScenario.testCaseData.tags}'
            `, async ({ giftBasketsPage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), headerScenario.testCaseData);

      test.setTimeout(180000);

      await test.step("GIVEN the user navigates to Gift Baskets Page", async () => {
        await homepagePage.navigateToHomepage();
        await commonUtils.closePopup();
      });

      await test.step("WHEN the user navigates to Gift Baskets Page", async () => {
        await homepagePage.clickMobileMenuBar();
      });

      await test.step(
        `WHEN the user selects "${dropdownScenario.selectGiftBasketsItem?.giftBasketsItem}" from Gift Baskets dropdown`,
        async () => {
          if (!dropdownScenario.selectGiftBasketsItem?.giftBasketsItem) {
            throw new Error(
              `selectGiftBasketsItem is missing for dropdown scenario: ${testCase.dropdownItem}`
            );
          }
          await giftBasketsPage.selectGiftBasketsFromDropdown(
            dropdownScenario.selectGiftBasketsItem.giftBasketsItem,
            false
          );
        }
      );

      await test.step(
        `THEN the page header should display "${headerScenario.expectedPageHeader?.expectedGiftBasketsValueHeaders}"`,
        async () => {
          if (!headerScenario.expectedPageHeader?.expectedGiftBasketsValueHeaders) {
            throw new Error(
              `expectedPageHeader is missing for header scenario: ${testCase.pageHeader}`
            );
          }
          await giftBasketsPage.verifyGiftBasketsPageHeader(
            headerScenario.expectedPageHeader.expectedGiftBasketsValueHeaders
          );
        }
      );
    });
  });

  test(`Test case: '${scenario3.testCaseData.testCase}'
        Summary: '${scenario3.testCaseData.testSummary}'
        Description: '${scenario3.testCaseData.testDescription}'
        Tags: '${scenario3.testCaseData.tags}'
        `, async ({ giftBasketsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);

    await test.step("GIVEN the user navigates to Gift Baskets Page", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });

    await test.step("WHEN the user navigates to Gift Baskets Page", async () => {
      await homepagePage.clickMobileMenuBar();
    });

    await test.step("AND the user expands Gift Baskets page elements", async () => {
      await giftBasketsPage.openGiftBasketsDropdown(false);
    });

    await test.step("WHEN the user navigates to Gift Baskets page", async () => {
      if (!scenario3.expectedPageHeadings) {
        throw new Error(
          "expectedPageHeadings is missing for test case: 0026-verify-gift-baskets-page-elements"
        );
      }
      await giftBasketsPage.verifyGiftBasketsPageElements(
        scenario3.expectedPageHeadings
      );
    });
  });
});
