import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Price Page", () => {
  const scenario1 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0001-verify-pricepage"
  );
  const scenario2 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0002-verify-pricepage"
  );
  const scenario3 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0003-verify-pricepage"
  );
  const scenario4 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0004-verify-pricepage"
  );
  const scenario5 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0005-verify-pricepage"
  );
  const scenario6 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0006-verify-pricepage"
  );
  const scenario7 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0007-verify-pricepage"
  );
  const scenario8 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0008-verify-pricepage"
  );
  const scenario9 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0009-verify-pricepage"
  );
  const scenario10 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0010-verify-pricepage"
  );
  const scenario11 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0011-verify-pricepage"
  );
  const scenario12 = getDataSet(
    "pricepage.web",
    "pricePageTestData",
    "0012-verify-pricepage"
  );

  test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario1.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario1.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario1.headingVerification);
    });
    await test.step("AND the user sorts the product prices by ascending", async () => {
      await bestSellersPage.sortByPrice(scenario1.sortByPrice, scenario1.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario2.testCaseData.testCase}'
    Summary: ${scenario2.testCaseData.testSummary}
    Description: ${scenario2.testCaseData.testDescription}
    Tags: '${scenario2.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario2.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario2.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario2.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario2.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario2.sortByPrice, scenario2.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario3.testCaseData.testCase}'
    Summary: ${scenario3.testCaseData.testSummary}
    Description: ${scenario3.testCaseData.testDescription}
    Tags: '${scenario3.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario3.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario3.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario3.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario3.sortByPrice, scenario3.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario4.testCaseData.testCase}'
    Summary: ${scenario4.testCaseData.testSummary}
    Description: ${scenario4.testCaseData.testDescription}
    Tags: '${scenario4.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario4.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario4.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario4.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario4.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario4.sortByPrice, scenario4.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario5.testCaseData.testCase}'
    Summary: ${scenario5.testCaseData.testSummary}
    Description: ${scenario5.testCaseData.testDescription}
    Tags: '${scenario5.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario5.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario5.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario5.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario5.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario5.sortByPrice, scenario5.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario6.testCaseData.testCase}'
    Summary: ${scenario6.testCaseData.testSummary}
    Description: ${scenario6.testCaseData.testDescription}
    Tags: '${scenario6.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario6.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario6.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario6.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario6.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario6.sortByPrice, scenario6.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario7.testCaseData.testCase}'
    Summary: ${scenario7.testCaseData.testSummary}
    Description: ${scenario7.testCaseData.testDescription}
    Tags: '${scenario7.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario7.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario7.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario7.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario7.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario7.sortByPrice, scenario7.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario8.testCaseData.testCase}'
    Summary: ${scenario8.testCaseData.testSummary}
    Description: ${scenario8.testCaseData.testDescription}
    Tags: '${scenario8.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario8.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario8.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario8.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario8.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario8.sortByPrice, scenario8.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario9.testCaseData.testCase}'
    Summary: ${scenario9.testCaseData.testSummary}
    Description: ${scenario9.testCaseData.testDescription}
    Tags: '${scenario9.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario9.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario9.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario9.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario9.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario9.sortByPrice, scenario9.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario10.testCaseData.testCase}'
    Summary: ${scenario10.testCaseData.testSummary}
    Description: ${scenario10.testCaseData.testDescription}
    Tags: '${scenario10.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario10.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario10.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario10.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario10.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario10.sortByPrice, scenario10.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario11.testCaseData.testCase}'
    Summary: ${scenario11.testCaseData.testSummary}
    Description: ${scenario11.testCaseData.testDescription}
    Tags: '${scenario11.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario11.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario11.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario11.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario11.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario11.sortByPrice, scenario11.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    });
  });
  test(`Test case: '${scenario12.testCaseData.testCase}'
    Summary: ${scenario12.testCaseData.testSummary}
    Description: ${scenario12.testCaseData.testDescription}
    Tags: '${scenario12.testCaseData.tags}'
  `, async ({ commonUtils, homepagePage, pricePage, accountPage, bestSellersPage }) => {
    await logTestCaseData(test.info(), scenario12.testCaseData);
    await commonUtils.closePopup();
    await test.step("GIVEN the user navigates to Homepage 🏠", async () => {
        await homepagePage.navigateToHomepage();
      });
    await test.step("AND the user navigates to Price Page 🏠", async () => {
      await pricePage.navigateToPricePage(scenario12.menuItem);
    });
    await test.step("AND the user verifies the price page title", async () => {
      await pricePage.verifyPageTitle(scenario12.title);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await accountPage.verifyHeadingVerification(scenario12.headingVerification);
    });
    await test.step("AND the user sorts the product prices by descending", async () => {
      await bestSellersPage.sortByPrice(scenario12.sortByPrice, scenario12.sortOrder);
    });
    await test.step("AND the user verifies the price page products", async () => {
      await pricePage.verifyPricePageProducts();
    }); 
  });


  
});


