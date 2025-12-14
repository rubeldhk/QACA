import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Occasions Page", () => {
  test.describe.configure({ timeout: 240000 });

  const scenario1 = getDataSet(
    "occasions.web",
    "occasionsTestData",
    "0001-verify-occasions"
  );
  const scenario3 = getDataSet(
    "occasions.web",
    "occasionsTestData",
    "0028-verify-occasions-page-elements"
  );

  test(`Test case: '${scenario1.testCaseData.testCase}'
        Summary: '${scenario1.testCaseData.testSummary}'
        Description: '${scenario1.testCaseData.testDescription}'
        Tags: '${scenario1.testCaseData.tags}'
        `, async ({ occasionsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);

    await test.step("GIVEN the user navigates to Occasions Page", async () => {
      await commonUtils.closePopup();
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user verifies the occasions dropdown is visible", async () => {
      await occasionsPage.openOccasionsDropdown(true);
    });

    await test.step("AND the user verifies all occasions dropdown values", async () => {
      await occasionsPage.verifyAllOccasionsDropdownValues();
    });

    await test.step("AND the user verifies occasions match expected values", async () => {
      await occasionsPage.verifyOccasionsDropdownValuesMatch(
        scenario1.expectedOccasionsValues ?? []
      );
    });
  });

  const occasionsTestCases = [
    "0002-birthday-flowers-and-gifts-occasions",
    "0003-sympathy-and-funeral-occasions",
    "0004-anniversary-occasions",
    "0005-just-because-occasions",
    "0006-love-and-romance-occasions",
    "0007-new-baby-occasions",
    "0008-housewarming-occasions",
    "0009-get-well-occasions",
    "0010-gifts-for-him-occasions",
    "0011-congratulations-occasions",
    "0012-thank-you-occasions",
    "0013-apology-flowers-occasions",
    "0014-corporate-gifts-occasions",
  ];

  occasionsTestCases.forEach((testCaseId) => {
    const scenario = getDataSet("occasions.web", "occasionsTestData", testCaseId);

    test(`
        Test case: '${scenario.testCaseData.testCase}'
        Summary: '${scenario.testCaseData.testSummary}'
        Description: '${scenario.testCaseData.testDescription}'
        Tags: '${scenario.testCaseData.tags}'
        `, async ({ occasionsPage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), scenario.testCaseData);

      await test.step("GIVEN the user navigates to Occasions Page", async () => {
        await commonUtils.closePopup();
        await homepagePage.navigateToHomepage();
      });

      await test.step(
        `AND the user selects "${scenario.selectOccasionsItem?.occasionsItem}" from occasions dropdown`,
        async () => {
          if (!scenario.selectOccasionsItem?.occasionsItem) {
            throw new Error(`selectOccasionsItem is missing for test case: ${testCaseId}`);
          }
          await occasionsPage.selectOccasionFromDropdown(
            scenario.selectOccasionsItem.occasionsItem,
            true
          );
        }
      );
    });
  });

  const pageHeaderTestCases = [
    {
      dropdownItem: "0002-birthday-flowers-and-gifts-occasions",
      pageHeader: "0015-birthday-flowers-and-gifts-page-header",
    },
    {
      dropdownItem: "0003-sympathy-and-funeral-occasions",
      pageHeader: "0016-sympathy-and-funeral-page-header",
    },
    {
      dropdownItem: "0004-anniversary-occasions",
      pageHeader: "0017-anniversary-page-header",
    },
    {
      dropdownItem: "0005-just-because-occasions",
      pageHeader: "0018-just-because-page-header",
    },
    {
        dropdownItem: "0006-love-and-romance-occasions",
      pageHeader: "0019-love-and-romance-page-header",
    },
    {
      dropdownItem: "0007-new-baby-occasions",
      pageHeader: "0020-new-baby-page-header",
    },
    {
      dropdownItem: "0008-housewarming-occasions",
      pageHeader: "0021-housewarming-page-header",
    },
    {
      dropdownItem: "0009-get-well-occasions",
      pageHeader: "0022-get-well-page-header",
    },
    {
      dropdownItem: "0010-gifts-for-him-occasions",
      pageHeader: "0023-gifts-for-him-page-header",
    },
    {
      dropdownItem: "0011-congratulations-occasions",
        pageHeader: "0024-congratulations-page-header",
    },
    {
      dropdownItem: "0012-thank-you-occasions",
      pageHeader: "0025-thank-you-page-header",
    },
    {
      dropdownItem: "0013-apology-flowers-occasions",
      pageHeader: "0026-apology-flowers-page-header",
    },
    {
      dropdownItem: "0014-corporate-gifts-occasions",
      pageHeader: "0027-corporate-gifts-page-header",
    },
  ];

  pageHeaderTestCases.forEach((testCase) => {
    const dropdownScenario = getDataSet(
      "occasions.web",
      "occasionsTestData",
      testCase.dropdownItem
    );
    const headerScenario = getDataSet(
      "occasions.web",
      "occasionsTestData",
      testCase.pageHeader
    );

    test(`
            Test case: '${headerScenario.testCaseData.testCase}'
            Summary: '${headerScenario.testCaseData.testSummary}'
            Description: '${headerScenario.testCaseData.testDescription}'
            Tags: '${headerScenario.testCaseData.tags}'
            `, async ({ occasionsPage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), headerScenario.testCaseData);

      test.setTimeout(180000);

      await test.step("GIVEN the user navigates to Occasions Page", async () => {
        await commonUtils.closePopup();
        await homepagePage.navigateToHomepage();
      });

      await test.step(
        `WHEN the user selects "${dropdownScenario.selectOccasionsItem?.occasionsItem}" from occasions dropdown`,
        async () => {
          if (!dropdownScenario.selectOccasionsItem?.occasionsItem) {
            throw new Error(
              `selectOccasionsItem is missing for dropdown scenario: ${testCase.dropdownItem}`
            );
          }
          await occasionsPage.selectOccasionFromDropdown(
            dropdownScenario.selectOccasionsItem.occasionsItem,
            true
          );
        }
      );

      await test.step(
        `THEN the page header should display "${headerScenario.expectedPageHeader?.expectedOccasionsValueHeaders}"`,
        async () => {
          if (!headerScenario.expectedPageHeader?.expectedOccasionsValueHeaders) {
            throw new Error(
              `expectedPageHeader is missing for header scenario: ${testCase.pageHeader}`
            );
          }
          await occasionsPage.verifyOccasionsPageHeader(
            headerScenario.expectedPageHeader.expectedOccasionsValueHeaders
          );
        }
      );
    });
  });

  test(`Test case: '${scenario3.testCaseData.testCase}'
        Summary: '${scenario3.testCaseData.testSummary}'
        Description: '${scenario3.testCaseData.testDescription}'
        Tags: '${scenario3.testCaseData.tags}'
        `, async ({ occasionsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);

    await test.step("GIVEN the user navigates to Occasions Page", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });

    await test.step("WHEN the user navigates to Occasions page", async () => {
      await occasionsPage.verifyOccasionsPageElementes(scenario3.expectedPageHeadings!);
    });
  });
});

