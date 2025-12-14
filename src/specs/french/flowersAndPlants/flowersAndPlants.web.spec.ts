import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Flowers & Plants Page", () => {
  test.describe.configure({ timeout: 240000 });

  const scenario1 = getDataSet(
    "flowersAndPlants.web",
    "flowersAndPlantsTestData",
    "0001-verify-flowers-and-plants"
  );
  const scenario3 = getDataSet(
    "flowersAndPlants.web",
    "flowersAndPlantsTestData",
    "0014-verify-flowers-and-plants-page-elements"
  );

  test(`Test case: '${scenario1.testCaseData.testCase}'
        Summary: '${scenario1.testCaseData.testSummary}'
        Description: '${scenario1.testCaseData.testDescription}'
        Tags: '${scenario1.testCaseData.tags}'
        `, async ({ flowersAndPlantsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);

    await test.step("GIVEN the user navigates to Flowers & Plants Page", async () => {
      await commonUtils.closePopup();
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user verifies the Flowers & Plants dropdown is visible", async () => {
      await flowersAndPlantsPage.openFlowersAndPlantsDropdown(true);
    });

    await test.step("AND the user verifies all Flowers & Plants dropdown values", async () => {
      await flowersAndPlantsPage.verifyAllFlowersAndPlantsDropdownValues();
    });

    await test.step("AND the user verifies Flowers & Plants dropdown values match expected", async () => {
      await flowersAndPlantsPage.verifyFlowersAndPlantsDropdownValuesMatch(
        scenario1.expectedFlowersAndPlantsValues ?? [],
        true
      );
    });
  });

  const flowersAndPlantsTestCases = [
    "0002-roses-flowers-and-plants",
    "0003-flower-and-planter-baskets-flowers-and-plants",
    "0004-mixed-bouquets-flowers-and-plants",
    "0005-daisies-flowers-and-plants",
    "0006-lilies-flowers-and-plants",
    "0007-tropical-plants-flowers-and-plants",
  ];

  flowersAndPlantsTestCases.forEach((testCaseId) => {
    const scenario = getDataSet(
      "flowersAndPlants.web",
      "flowersAndPlantsTestData",
      testCaseId
    );

    test(`
        Test case: '${scenario.testCaseData.testCase}'
        Summary: '${scenario.testCaseData.testSummary}'
        Description: '${scenario.testCaseData.testDescription}'
        Tags: '${scenario.testCaseData.tags}'
        `, async ({ flowersAndPlantsPage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), scenario.testCaseData);

      await test.step("GIVEN the user navigates to Flowers & Plants Page", async () => {
        await commonUtils.closePopup();
        await homepagePage.navigateToHomepage();
      });

      await test.step(
        `AND the user selects "${scenario.selectFlowersAndPlantsItem?.flowersAndPlantsItem}" from Flowers & Plants dropdown`,
        async () => {
          if (!scenario.selectFlowersAndPlantsItem?.flowersAndPlantsItem) {
            throw new Error(
              `selectFlowersAndPlantsItem is missing for test case: ${testCaseId}`
            );
          }
          await flowersAndPlantsPage.selectFlowersAndPlantsFromDropdown(
            scenario.selectFlowersAndPlantsItem.flowersAndPlantsItem,
            true
          );
        }
      );
    });
  });

  const pageHeaderTestCases = [
    {
      dropdownItem: "0002-roses-flowers-and-plants",
      pageHeader: "0008-roses-page-header",
    },
    {
      dropdownItem: "0003-flower-and-planter-baskets-flowers-and-plants",
      pageHeader: "0009-flower-and-planter-baskets-page-header",
    },
    {
      dropdownItem: "0004-mixed-bouquets-flowers-and-plants",
      pageHeader: "0010-mixed-bouquets-page-header",
    },
    {
      dropdownItem: "0005-daisies-flowers-and-plants",
      pageHeader: "0011-daisy-bouquets-page-header",
    },
    {
      dropdownItem: "0006-lilies-flowers-and-plants",
      pageHeader: "0012-lilies-page-header",
    },
    {
      dropdownItem: "0007-tropical-plants-flowers-and-plants",
      pageHeader: "0013-tropical-plants-and-planter-baskets-page-header",
    },
  ];

  pageHeaderTestCases.forEach((testCase) => {
    const dropdownScenario = getDataSet(
      "flowersAndPlants.web",
      "flowersAndPlantsTestData",
      testCase.dropdownItem
    );
    const headerScenario = getDataSet(
      "flowersAndPlants.web",
      "flowersAndPlantsTestData",
      testCase.pageHeader
    );

    test(`
            Test case: '${headerScenario.testCaseData.testCase}'
            Summary: '${headerScenario.testCaseData.testSummary}'
            Description: '${headerScenario.testCaseData.testDescription}'
            Tags: '${headerScenario.testCaseData.tags}'
            `, async ({ flowersAndPlantsPage, homepagePage, commonUtils }) => {
      await logTestCaseData(test.info(), headerScenario.testCaseData);

      test.setTimeout(180000);

      await test.step("GIVEN the user navigates to Flowers & Plants Page", async () => {
        await commonUtils.closePopup();
        await homepagePage.navigateToHomepage();
      });

      await test.step(
        `WHEN the user selects "${dropdownScenario.selectFlowersAndPlantsItem?.flowersAndPlantsItem}" from Flowers & Plants dropdown`,
        async () => {
          if (!dropdownScenario.selectFlowersAndPlantsItem?.flowersAndPlantsItem) {
            throw new Error(
              `selectFlowersAndPlantsItem is missing for dropdown scenario: ${testCase.dropdownItem}`
            );
          }
          await flowersAndPlantsPage.selectFlowersAndPlantsFromDropdown(
            dropdownScenario.selectFlowersAndPlantsItem.flowersAndPlantsItem,
            true
          );
        }
      );

      await test.step(
        `THEN the page header should display "${headerScenario.expectedPageHeader?.expectedFlowersAndPlantsValueHeaders}"`,
        async () => {
          if (!headerScenario.expectedPageHeader?.expectedFlowersAndPlantsValueHeaders) {
            throw new Error(
              `expectedPageHeader is missing for header scenario: ${testCase.pageHeader}`
            );
          }
          await flowersAndPlantsPage.verifyFlowersAndPlantsPageHeader(
            headerScenario.expectedPageHeader.expectedFlowersAndPlantsValueHeaders
          );
        }
      );
    });
  });

  test(`Test case: '${scenario3.testCaseData.testCase}'
        Summary: '${scenario3.testCaseData.testSummary}'
        Description: '${scenario3.testCaseData.testDescription}'
        Tags: '${scenario3.testCaseData.tags}'
        `, async ({ flowersAndPlantsPage, homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);

    await test.step("GIVEN the user navigates to Flowers & Plants Page", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });

    await test.step("WHEN the user navigates to Flowers & Plants page", async () => {
      if (!scenario3.expectedPageHeadings) {
        throw new Error(
          "expectedPageHeadings is missing for test case: 0014-verify-flowers-and-plants-page-elements"
        );
      }
      await flowersAndPlantsPage.verifyFlowersAndPlantsPageElements(
        scenario3.expectedPageHeadings
      );
    });
  });
});
