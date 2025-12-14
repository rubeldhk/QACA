
import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Account Page", () => {
  const scenario1 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0001-verify-account"
  );
  const scenario2 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0002-verify-account"
  );
  const scenario3 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0003-verify-account"
  );
  const scenario4 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0004-verify-account"
  );
  const scenario5 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0005-verify-account"
  );
  const scenario6 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0006-verify-account"
  );
  const scenario7 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0007-verify-account"
  );
  const scenario8 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0008-verify-account"
  );
  const scenario9 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0009-verify-account"
  );
  const scenario10 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0010-verify-account"
  );
  const scenario11 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0011-verify-account"
  );
  const scenario12 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0012-verify-account"
  );
  const scenario13 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0013-verify-account"
  );
  const scenario14 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0014-verify-account"
  );
  const scenario15 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0015-verify-account"
  );
  const scenario16 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0016-verify-account"
  );
  const scenario17 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0017-verify-account"
  );
  const scenario18 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0018-verify-account"
  );
  const scenario19 = getDataSet(
    "accountpage.web",
    "accountpageTestData",
    "0019-verify-account"
  );
    const scenario20 = getDataSet(
      "accountpage.web",
      "accountpageTestData",
      "0020-verify-account"
    );
    const scenario21 = getDataSet(
      "accountpage.web",
      "accountpageTestData",
      "0021-verify-account"
    );
    const scenario22 = getDataSet(
      "accountpage.web",
      "accountpageTestData",
      "0022-verify-account"
    );
    const scenario23 = getDataSet(
      "accountpage.web",
      "accountpageTestData",
      "0023-verify-account"
    );
    const scenario24 = getDataSet(
      "accountpage.web",
      "accountpageTestData",
      "0024-verify-account"
    );
  test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();

    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
    });

    await test.step("AND the user verifies the homepage title", async () => {
      await homepagePage.verifyNavMenuItems(scenario1.menuItems);
    });

})
  test(`Test case: '${scenario2.testCaseData.testCase}'
  Summary: ${scenario2.testCaseData.testSummary}
  Description: ${scenario2.testCaseData.testDescription}
  Tags: '${scenario2.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario2.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario2.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyPageTitle(scenario2.title);
  });

 

})
test(`Test case: '${scenario3.testCaseData.testCase}'
  Summary: ${scenario3.testCaseData.testSummary}
  Description: ${scenario3.testCaseData.testDescription}
  Tags: '${scenario3.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario3.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario3.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyPageTitle(scenario3.title);
  });

})
test(`Test case: '${scenario4.testCaseData.testCase}'
  Summary: ${scenario4.testCaseData.testSummary}
  Description: ${scenario4.testCaseData.testDescription}
  Tags: '${scenario4.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario4.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario4.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyPageTitle(scenario4.title);
  });

})
test(`Test case: '${scenario5.testCaseData.testCase}'
  Summary: ${scenario5.testCaseData.testSummary}
  Description: ${scenario5.testCaseData.testDescription}
  Tags: '${scenario5.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario5.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario5.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyPageTitle(scenario5.title);
  });

})
test(`Test case: '${scenario6.testCaseData.testCase}'
  Summary: ${scenario6.testCaseData.testSummary}
  Description: ${scenario6.testCaseData.testDescription}
  Tags: '${scenario6.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario6.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario6.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario6.title);
  });

})
test(`Test case: '${scenario7.testCaseData.testCase}'
  Summary: ${scenario7.testCaseData.testSummary}
  Description: ${scenario7.testCaseData.testDescription}
  Tags: '${scenario7.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario7.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario7.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario7.title);
  });

})
test(`Test case: '${scenario8.testCaseData.testCase}'
  Summary: ${scenario8.testCaseData.testSummary}
  Description: ${scenario8.testCaseData.testDescription}
  Tags: '${scenario8.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario8.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario8.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyPageTitle(scenario8.title);
  });

})
test(`Test case: '${scenario9.testCaseData.testCase}'
  Summary: ${scenario9.testCaseData.testSummary}
  Description: ${scenario9.testCaseData.testDescription}
  Tags: '${scenario9.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario9.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario9.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario9.title);
  });
  await test.step("AND the user verifies the login form", async () => {
    await accountPage.verifyLoginForm(scenario9.loginData);
  });
})
test(`Test case: '${scenario10.testCaseData.testCase}'
  Summary: ${scenario10.testCaseData.testSummary}
  Description: ${scenario10.testCaseData.testDescription}
  Tags: '${scenario10.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario10.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario10.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario10.title);
  });
  await test.step("AND the user verifies the hours and contact information", async () => {
    await accountPage.verifyHoursAndContactInformation(scenario10.hoursAndContactInformation);
  });
})
test(`Test case: '${scenario11.testCaseData.testCase}'
  Summary: ${scenario11.testCaseData.testSummary}
  Description: ${scenario11.testCaseData.testDescription}
  Tags: '${scenario11.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario11.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario11.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario11.title);
  });
  await test.step("AND the user verifies the contact us form", async () => {
    await accountPage.verifyContactUsForm(scenario11.contactUsForm);
  });
})
test(`Test case: '${scenario12.testCaseData.testCase}'
  Summary: ${scenario12.testCaseData.testSummary}
  Description: ${scenario12.testCaseData.testDescription}
  Tags: '${scenario12.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario12.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario12.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario12.title);
  });
  await test.step("AND the user verifies the create password form", async () => {
    await accountPage.verifyLostPasswordFormCreatePassword(scenario12.createPasswordHeading);
  });
})
test(`Test case: '${scenario13.testCaseData.testCase}'
  Summary: ${scenario13.testCaseData.testSummary}
  Description: ${scenario13.testCaseData.testDescription}
  Tags: '${scenario13.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario13.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario13.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario13.title);
  });
  await test.step("AND the user verifies the still having trouble form", async () => {
    await accountPage.verifyLostPasswordFormStillHavingTrouble(scenario13.createPasswordHeading);
  });
})
  test(`Test case: '${scenario14.testCaseData.testCase}'
  Summary: ${scenario14.testCaseData.testSummary}
  Description: ${scenario14.testCaseData.testDescription}
  Tags: '${scenario14.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario14.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario14.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario14.title);
  });
  await test.step("AND the user verifies the shopping cart form", async () => {
    await accountPage.verifyShoppingCartForm(scenario14.shoppingCartHeading);
  });
})
test(`Test case: '${scenario15.testCaseData.testCase}'
  Summary: ${scenario15.testCaseData.testSummary}
  Description: ${scenario15.testCaseData.testDescription}
  Tags: '${scenario15.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario15.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario15.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario15.title);
  })
  await test.step("AND the user verifies the hours and contact information", async () => {
    await accountPage.verifyHoursAndContactInformation(scenario15.hoursAndContactInformation);
  });
})
test(`Test case: '${scenario16.testCaseData.testCase}'
  Summary: ${scenario16.testCaseData.testSummary}
  Description: ${scenario16.testCaseData.testDescription}
  Tags: '${scenario16.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario16.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario16.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario16.title);
  });
})
test(`Test case: '${scenario17.testCaseData.testCase}'
  Summary: ${scenario17.testCaseData.testSummary}
  Description: ${scenario17.testCaseData.testDescription}
  Tags: '${scenario17.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario17.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario17.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario17.title);
  });
  await test.step("AND the user verifies the flower care verification", async () => {
    await accountPage.verifyFlowerCareVerification(scenario17.flowerCareVerification);
  });
})
test(`Test case: '${scenario18.testCaseData.testCase}'
  Summary: ${scenario18.testCaseData.testSummary}
  Description: ${scenario18.testCaseData.testDescription}
  Tags: '${scenario18.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario18.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario18.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario18.title);
  });
  await test.step("AND the user verifies the flower care verification", async () => {
    await accountPage.verifyFlowerCareVerification(scenario18.flowerCareVerification);
  });
})
test(`Test case: '${scenario19.testCaseData.testCase}'
  Summary: ${scenario19.testCaseData.testSummary}
  Description: ${scenario19.testCaseData.testDescription}
  Tags: '${scenario19.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario19.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario19.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario19.title);
  });
  await test.step("AND the user verifies the flower care verification", async () => {
    await accountPage.verifyFlowerCareVerification(scenario19.flowerCareVerification);
  });
})
test(`Test case: '${scenario20.testCaseData.testCase}'
  Summary: ${scenario20.testCaseData.testSummary}
  Description: ${scenario20.testCaseData.testDescription}
  Tags: '${scenario20.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario20.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario20.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario20.title);
  });
  await test.step("AND the user verifies the flower care verification", async () => {
    await accountPage.verifyFlowerCareVerification(scenario20.flowerCareVerification);
  });
})
test(`Test case: '${scenario21.testCaseData.testCase}'
  Summary: ${scenario21.testCaseData.testSummary}
  Description: ${scenario21.testCaseData.testDescription}
  Tags: '${scenario21.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario21.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario21.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario21.title);
  });
  await test.step("AND the user verifies the flower care verification", async () => {
    await accountPage.verifyFlowerCareVerification(scenario21.flowerCareVerification);
  });
})
test(`Test case: '${scenario22.testCaseData.testCase}'
  Summary: ${scenario22.testCaseData.testSummary}
  Description: ${scenario22.testCaseData.testDescription}
  Tags: '${scenario22.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario22.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario22.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario22.title);
  });
  await test.step("AND the user verifies the flower care verification", async () => {
    await accountPage.verifyFlowerCareVerification(scenario22.flowerCareVerification);
  });
})

test(`Test case: '${scenario23.testCaseData.testCase}'
  Summary: ${scenario23.testCaseData.testSummary}
  Description: ${scenario23.testCaseData.testDescription}
  Tags: '${scenario23.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario23.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario23.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario23.title);
  });
  await test.step("AND the user verifies the blog verification", async () => {
    await accountPage.verifyHeadingVerification(scenario23.headingVerification);
  });
})
test(`Test case: '${scenario24.testCaseData.testCase}'
  Summary: ${scenario24.testCaseData.testSummary}
  Description: ${scenario24.testCaseData.testDescription}
  Tags: '${scenario24.testCaseData.tags}'
`, async ({ homepagePage, commonUtils, accountPage }) => {
  await logTestCaseData(test.info(), scenario24.testCaseData);
  await commonUtils.closePopup();

  await test.step("GIVEN the user navigates to Homepage", async () => {
    await homepagePage.navigateToHomepage();
  });

  await test.step("AND the user navigates to the account page", async () => {
    await homepagePage.navigateToAccountPageItem(scenario24.menuItem);
  });
  await test.step("AND the user verifies the account page title", async () => {
    await accountPage.verifyHeadingofAccountPage(scenario24.title);
  });
  await test.step("AND the user verifies the heading verification", async () => {
    await accountPage.verifyHeadingVerification(scenario24.headingVerification);
  });
  await test.step("AND the user verifies the Paragraphs verification", async () => {
    await accountPage.verifyFlowerCareVerification(scenario24.flowerCareVerification);
  });

})
});
