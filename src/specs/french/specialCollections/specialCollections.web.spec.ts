import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Special Collections Page", () => {
  test.describe.configure({ timeout: 240000 });

  const scenario1 = getDataSet(
    "specialCollections.web",
    "specialCollectionsTestData",
    "0001-verify-special-collections-web"
  );
  const scenario3 = getDataSet(
    "specialCollections.web",
    "specialCollectionsTestData",
    "0022-verify-special-collections-page-elements-web"
  );

  test(`Test case: '${scenario1.testCaseData.testCase}'
        Summary: '${scenario1.testCaseData.testSummary}'
        Description: '${scenario1.testCaseData.testDescription}'
        Tags: '${scenario1.testCaseData.tags}'
        `, async ({ specialCollectionsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);

    await test.step("GIVEN the user navigates to Special Collections Page", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });

    await test.step("AND the user verifies the special collections dropdown is visible", async () => {
      await specialCollectionsPage.openSpecialCollectionsDropdown(true);
    });

    await test.step("AND the user verifies all special collections dropdown values", async () => {
      await specialCollectionsPage.verifyAllSpecialCollectionsDropdownValues();
    });

    await test.step("AND the user verifies special collections match expected values", async () => {
      await specialCollectionsPage.verifySpecialCollectionsDropdownValuesMatch(
        scenario1.expectedSpecialCollectionsValues
      );
    });
  });

  const specialCollectionTestCases = [
    "0002-mason-jar-collection-web",
    "0003-designer-collection-web",
    "0004-gourmet-collection-web",
    "0005-roses-and-wine-collection-web",
    "0006-lindt-gift-baskets-collection-web",
    "0007-the-bunches-collection-web",
    "0008-birthday-mug-collection-web",
    "0009-bud-vase-collection-web",
    "0010-teddy-bears-vases-and-chocolates-collection-web",
    "0011-shop-for-good-collection-web",
  ];

  specialCollectionTestCases.forEach((testCaseId) => {
    const scenario = getDataSet(
      "specialCollections.web",
      "specialCollectionsTestData",
      testCaseId
    );

    test(`
        Test case: '${scenario.testCaseData.testCase}'
        Summary: '${scenario.testCaseData.testSummary}'
        Description: '${scenario.testCaseData.testDescription}'
        Tags: '${scenario.testCaseData.tags}'
        `, async ({ specialCollectionsPage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), scenario.testCaseData);

      await test.step("GIVEN the user navigates to Special Collections Page", async () => {
        await commonUtils.closePopup();
        await homepagePage.navigateToHomepage();
      });

      await test.step(`AND the user selects "${scenario.selectSpecialCollectionsItem.specialCollectionsItem}" from special collections dropdown`, async () => {
        if (!scenario.selectSpecialCollectionsItem) {
          throw new Error(`selectSpecialCollectionsItem is missing for test case: ${testCaseId}`);
        }
        await specialCollectionsPage.selectSpecialCollectionFromDropdown(
          scenario.selectSpecialCollectionsItem.specialCollectionsItem,
          scenario.selectSpecialCollectionsItem.isWeb
        );
      });
    });
  });

  const pageHeaderTestCases = [
    {
      dropdownItem: "0002-mason-jar-collection-web",
      pageHeader: "0012-mason-jar-collection-page-header-web",
    },
    {
      dropdownItem: "0003-designer-collection-web",
      pageHeader: "0013-designer-collection-page-header-web",
    },
    {
      dropdownItem: "0004-gourmet-collection-web",
      pageHeader: "0014-gourmet-collection-page-header-web",
    },
    {
      dropdownItem: "0005-roses-and-wine-collection-web",
      pageHeader: "0015-roses-and-wine-collection-page-header-web",
    },
    {
      dropdownItem: "0006-lindt-gift-baskets-collection-web",
      pageHeader: "0016-lindt-gift-basket-collection-page-header-web",
    },
    {
      dropdownItem: "0007-the-bunches-collection-web",
      pageHeader: "0017-the-bunches-collection-page-header-web",
    },
    {
      dropdownItem: "0008-birthday-mug-collection-web",
      pageHeader: "0018-birthday-mug-collection-page-header-web",
    },
    {
      dropdownItem: "0009-bud-vase-collection-web",
      pageHeader: "0019-bud-vase-collection-page-header-web",
    },
    {
      dropdownItem: "0010-teddy-bears-vases-and-chocolates-collection-web",
      pageHeader: "0020-cards-vases-and-teddy-bears-collection-page-header-web",
    },
    {
      dropdownItem: "0011-shop-for-good-collection-web",
      pageHeader: "0021-shop-for-good-collection-page-header-web",
    },
  ];

  pageHeaderTestCases.forEach((testCase) => {
    const dropdownScenario = getDataSet(
      "specialCollections.web",
      "specialCollectionsTestData",
      testCase.dropdownItem
    );
    const headerScenario = getDataSet(
      "specialCollections.web",
      "specialCollectionsTestData",
      testCase.pageHeader
    );

    test(`
            Test case: '${headerScenario.testCaseData.testCase}'
            Summary: '${headerScenario.testCaseData.testSummary}'
            Description: '${headerScenario.testCaseData.testDescription}'
            Tags: '${headerScenario.testCaseData.tags}'
            `, async ({
      specialCollectionsPage,
      homepagePage,
      commonUtils,
    }) => {
      await logTestCaseData(test.info(), headerScenario.testCaseData);

      test.setTimeout(180000); // 3 minutes

      await test.step("GIVEN the user navigates to Special Collections Page", async () => {
        await commonUtils.closePopup();
        await homepagePage.navigateToHomepage();
      });

      await test.step(`WHEN the user selects "${dropdownScenario.selectSpecialCollectionsItem.specialCollectionsItem}" from special collections dropdown`, async () => {
        if (!dropdownScenario.selectSpecialCollectionsItem) {
          throw new Error(`selectSpecialCollectionsItem is missing for dropdown scenario: ${testCase.dropdownItem}`);
        }
        await specialCollectionsPage.selectSpecialCollectionFromDropdown(
          dropdownScenario.selectSpecialCollectionsItem.specialCollectionsItem,
          dropdownScenario.selectSpecialCollectionsItem.isWeb
        );
      });

      await test.step(`THEN the page header should display "${headerScenario.expectedPageHeader.expectedSpecialCollectionsValueHeaders}"`, async () => {
        await specialCollectionsPage.verifySpecialCollectionsPageHeader(
          headerScenario.expectedPageHeader
            .expectedSpecialCollectionsValueHeaders
        );
      });
    });
  });

  // Expected Failure: Navigating to wrong page
  test(`Test case: '${scenario3.testCaseData.testCase}'
        Summary: '${scenario3.testCaseData.testSummary}'
        Description: '${scenario3.testCaseData.testDescription}'
        Tags: '${scenario3.testCaseData.tags}'
        `, async ({ specialCollectionsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);

    await test.step("GIVEN the user navigates to Special Collections Page", async () => {
      await commonUtils.closePopup();
      await homepagePage.navigateToHomepage();
    });

    await test.step("WHEN the user navigates to Special Collections page", async () => {
      await specialCollectionsPage.verifySpecialCollectionsPageElementes(
        scenario3.expectedPageHeadings
      );
    });
  });
});
