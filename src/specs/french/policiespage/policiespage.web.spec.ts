
import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Policies Page", () => {
  const scenario1 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0001-verify-policies"
  );
  const scenario2 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0002-verify-policies"
  );
  const scenario3 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0003-verify-policies"
  );
  const scenario4 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0004-verify-policies"
  );
  const scenario5 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0005-verify-policies"
  );
  const scenario6 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0006-verify-policies"
  );
  const scenario7 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0007-verify-policies"
  );
  const scenario8 = getDataSet(
    "policiespage.web",
    "policiespageTestData",
    "0008-verify-policies"
  );    
test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage}) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user navigates to Policies Page", async () => {
        await policiesPage.navigateToPoliciesPageItem(scenario1.menuItem);
      });
      await test.step("AND the user verifies the policies page title", async () => {
        await homepagePage.verifyNavMenuItems(scenario1.menuItems);
      });
})
test(`Test case: '${scenario2.testCaseData.testCase}'
    Summary: ${scenario2.testCaseData.testSummary}
    Description: ${scenario2.testCaseData.testDescription}
    Tags: '${scenario2.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage,accountPage}) => {
    await logTestCaseData(test.info(), scenario2.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user verifies the policies page nav menu item", async () => {
      await policiesPage.navigateToPoliciesPageItem(scenario2.menuItem);
    });
    await test.step("AND the user verifies the policies page title", async () => {
      await policiesPage.verifyPageTitle(scenario2.title);
    });
    await test.step("AND the user verifies the heading verification", async () => {
      await accountPage.verifyHeadingVerification(scenario2.headingVerification);
    });
    await test.step("AND the user verifies the flower care verification", async () => {
      await accountPage.verifyFlowerCareVerification(scenario2.flowerCareVerification);
    });
})
test(`Test case: '${scenario3.testCaseData.testCase}'
    Summary: ${scenario3.testCaseData.testSummary}
    Description: ${scenario3.testCaseData.testDescription}
    Tags: '${scenario3.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage,accountPage}) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user verifies the policies page nav menu item", async () => {
      await policiesPage.navigateToPoliciesPageItem(scenario3.menuItem);
    });
    await test.step("AND the user verifies the policies page title", async () => {
      await policiesPage.verifyPageTitle(scenario3.title);
    });
    await test.step("AND the user verifies the heading verification", async () => {
      await accountPage.verifyHeadingVerification(scenario3.headingVerification);
    });
    await test.step("AND the user verifies the flower care verification", async () => {
      await accountPage.verifyFlowerCareVerification(scenario3.flowerCareVerification);
    });
})
test(`Test case: '${scenario4.testCaseData.testCase}'
    Summary: ${scenario4.testCaseData.testSummary}
    Description: ${scenario4.testCaseData.testDescription}
    Tags: '${scenario4.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage,accountPage}) => {
    await logTestCaseData(test.info(), scenario4.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user verifies the policies page nav menu item", async () => {
      await policiesPage.navigateToPoliciesPageItem(scenario4.menuItem);
    });
    await test.step("AND the user verifies the policies page title", async () => {
      await policiesPage.verifyPageTitle(scenario4.title);
    });
    await test.step("AND the user verifies the heading verification", async () => {
      await accountPage.verifyHeadingVerification(scenario4.headingVerification);
    });
    await test.step("AND the user verifies the flower care verification", async () => {
      await accountPage.verifyFlowerCareVerification(scenario4.flowerCareVerification);
    });
})
 test(`Test case: '${scenario5.testCaseData.testCase}'
    Summary: ${scenario5.testCaseData.testSummary}
    Description: ${scenario5.testCaseData.testDescription}
    Tags: '${scenario5.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage,accountPage}) => {
    await logTestCaseData(test.info(), scenario5.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user verifies the policies page nav menu item", async () => {
      await policiesPage.navigateToPoliciesPageItem(scenario5.menuItem);
    });
    await test.step("AND the user verifies the policies page title", async () => {
      await policiesPage.verifyPageTitle(scenario5.title);
    });
    await test.step("AND the user verifies the heading verification", async () => {
      await accountPage.verifyHeadingVerification(scenario5.headingVerification);
    })
})
test(`Test case: '${scenario6.testCaseData.testCase}'
    Summary: ${scenario6.testCaseData.testSummary}
    Description: ${scenario6.testCaseData.testDescription}
    Tags: '${scenario6.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage,accountPage}) => {
    await logTestCaseData(test.info(), scenario6.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user verifies the policies page nav menu item", async () => {
      await policiesPage.navigateToPoliciesPageItem(scenario6.menuItem);
    });
    await test.step("AND the user verifies the policies page title", async () => {
      await policiesPage.verifyPageTitle(scenario6.title);
    });
    await test.step("AND the user verifies the heading verification", async () => {
      await accountPage.verifyHeadingVerification(scenario6.headingVerification);
    });
    await test.step("AND the user verifies the flower care verification", async () => {
      await accountPage.verifyFlowerCareVerification(scenario6.flowerCareVerification);
    });
})
test(`Test case: '${scenario7.testCaseData.testCase}'
    Summary: ${scenario7.testCaseData.testSummary}
    Description: ${scenario7.testCaseData.testDescription}
    Tags: '${scenario7.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage,accountPage}) => {
    await logTestCaseData(test.info(), scenario7.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user verifies the policies page nav menu item", async () => {
      await policiesPage.navigateToPoliciesPageItem(scenario7.menuItem);
    });
    await test.step("AND the user verifies the policies page title", async () => {
      await policiesPage.verifyPageTitle(scenario7.title);
    });
    await test.step("AND the user verifies the heading verification", async () => {
      await accountPage.verifyHeadingVerification(scenario7.headingVerification);
    });
 
})
test(`Test case: '${scenario8.testCaseData.testCase}'
    Summary: ${scenario8.testCaseData.testSummary}
    Description: ${scenario8.testCaseData.testDescription}
    Tags: '${scenario8.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils, policiesPage,accountPage}) => {
    await logTestCaseData(test.info(), scenario8.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });
    await test.step("AND the user verifies the policies page nav menu item", async () => {
      await policiesPage.navigateToPoliciesPageItem(scenario8.menuItem);
    });
    await test.step("AND the user verifies the policies page title", async () => {
      await policiesPage.verifyPageTitle(scenario8.title);
    });
    await test.step("AND the user verifies the heading verification", async () => {
      await accountPage.verifyHeadingVerification(scenario8.headingVerification);
    });
    await test.step("AND the user verifies the faq questions verification", async () => {
      await policiesPage.verifyFAQQuestions(scenario8.faqQuestions);
    });
})
});
