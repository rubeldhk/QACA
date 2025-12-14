import { test } from "@fixtures/page.fixtures";
import { getDataSet } from "@utilities/env.utils";
import { logTestCaseData } from "@utilities/test.helper.utils";

test.describe("Homepage", () => {
  const scenario1 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0001-verify-homepage"
  );
  const scenario2 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0002-verify-homepage-nav-menuItems"
  );
  const scenario3 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0003-verify-homepage-nav-menuItems-dropdowns"
  );
  const scenario4 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0004-verify-major-Canadian-flower-delivery-areas-links"
  );
  const scenario5 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0005-verify-flower-shop-partners-links"
  );
  const scenario6 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0006-verify-footer-links"
  );
  const scenario7 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0007-verify-social-media-links"
  );
  const scenario8 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0008-verify-homepage-HelpDesk-Chat"
  );
  const scenario9 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0009-verify-homepage-HelpDesk-Chat-close"
  );
  const scenario10 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0010-verify-bloomex-other-domains-links"
  );
  const scenario11 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0011-verify-Contact-us-is-visible"
  );
  const scenario12 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0012-verify-Free-20-gift-certificate-is-visible"
  );
  const scenario13 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0013-verify-Free-20-gift-certificate-is-visible"
  );
  const scenario14 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0014-verify-Designed-BY-Our-Florists-and-Mason-Jar-Collection-sidebar-images"
  );
  const scenario15 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0015-verify-Birthday-Flowers-Sympathy-Flowers-and-Every-Day-Deals-options"
  );
  const scenario16 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0016-verify-Can-Free-Delivery-link"
  );
  const scenario17 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0017-verify-Things-Engraved-link"
  );
  const scenario18 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0018-verify-Personalized-Gifts-for-any-occasion-link"
  );
  const scenario19 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0019-verify-Same-Day-Flower-Delivery-Section"
  );
  const scenario20 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0020-verify-Designer-Collection-Section"
  );
  const scenario21 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0021-verify-Gourmet-Collection-Section"
  );
  const scenario22 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0022-verify-Site-Map-link-and-copyright-text"
  );
  const scenario23 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0023-verify-Collection-menu"
  );
  const scenario24 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0024-verify-random-navigation"
  );
  const scenario25 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0025-verify-navigation-with-double-slash"
  );
  const scenario26 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0026-verify-breadcrumbs"
  );
  const scenario27 = getDataSet(
    "homepage.web",
    "homepageTestData",
    "0027-verify-popup"
  );

  test.beforeEach(async ({ homepagePage, commonUtils }) => {
    await test.step("GIVEN the user navigates to Homepage", async () => {
      await commonUtils.closePopup();
      await homepagePage.navigateToHomepage();
    });
  });
  test(`Test case: '${scenario1.testCaseData.testCase}'
    Summary: ${scenario1.testCaseData.testSummary}
    Description: ${scenario1.testCaseData.testDescription}
    Tags: '${scenario1.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario1.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user verifies the homepage title", async () => {
      await homepagePage.verifyTitle(scenario1.title);
    });

    await test.step("AND the user verifies the slider image is visible", async () => {
      await homepagePage.verifySliderImageIsVisible();
    });

    await test.step("AND the user verifies the bloomex logo is visible", async () => {
      await homepagePage.verifyBloomexLogoIsVisible();
    });

    await test.step("AND the user verifies the product cards are visible", async () => {
      await homepagePage.verifyProductCardsAreVisible();
    });
  });
  test(`Test case: '${scenario2.testCaseData.testCase}'
      Summary: ${scenario2.testCaseData.testSummary}
      Description: ${scenario2.testCaseData.testDescription}
      Tags: '${scenario2.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario2.testCaseData);
    await commonUtils.closePopup();

    await test.step("AND the user verifies the homepage navigation dropdowns are visible", async () => {
      await homepagePage.verifyNavMenuItems(scenario2.navDropdownsList);
    });
  });
  test(`Test case: '${scenario3.testCaseData.testCase}'
      Summary: ${scenario3.testCaseData.testSummary}
      Description: ${scenario3.testCaseData.testDescription}
      Tags: '${scenario3.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario3.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that all the homepage navigation dropdown options are visible", async () => {
      await homepagePage.verifyNavDropdowns(scenario3.navDropdownsItems);
    });
  });
  test(`Test case: '${scenario4.testCaseData.testCase}'
      Summary: ${scenario4.testCaseData.testSummary}
      Description: ${scenario4.testCaseData.testDescription}
      Tags: '${scenario4.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario4.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the major Canadian flower delivery areas links are visible and accessible in homepage footer", async () => {
      await homepagePage.verifyText(scenario4.text);
      await homepagePage.verifyFooterLinks(scenario4.verifyfooterLinks);
    });
  });
  test(`Test case: '${scenario5.testCaseData.testCase}'
      Summary: ${scenario5.testCaseData.testSummary}
      Description: ${scenario5.testCaseData.testDescription}
      Tags: '${scenario5.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario5.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the flower shop partners links are visible and accessible in homepage footer", async () => {
      await homepagePage.verifyText(scenario5.text);
      await homepagePage.verifyFlowerShopPartnersLinks(
        scenario5.verifyfooterLinks
      );
    });
  });
  test(`Test case: '${scenario6.testCaseData.testCase}'
      Summary: ${scenario6.testCaseData.testSummary}
      Description: ${scenario6.testCaseData.testDescription}
      Tags: '${scenario6.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario6.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that all the homepage footer links are visible and accessible", async () => {
      await homepagePage.verifyFooterLinks(scenario6.verifyfooterLinks);
      await homepagePage.verifyText(scenario6.text);
    });
  });
  test(`Test case: '${scenario7.testCaseData.testCase}'
      Summary: ${scenario7.testCaseData.testSummary}
      Description: ${scenario7.testCaseData.testDescription}
      Tags: '${scenario7.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario7.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that all the social media links are visible and accessible in homepage footer", async () => {
      await homepagePage.verifySocialMediaLinks(
        scenario7.verifySocialMediaLinks
      );
    });
  });
  test(`Test case: '${scenario8.testCaseData.testCase}'
      Summary: ${scenario8.testCaseData.testSummary}
      Description: ${scenario8.testCaseData.testDescription}
      Tags: '${scenario8.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario8.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user can send message to homepage Help Desk Chat", async () => {
      await homepagePage.clickOpenChatButton();
      await homepagePage.verifyHelpDeskAndChat(scenario8.HelpDeskChat);
    });
  });
  test(`Test case: '${scenario9.testCaseData.testCase}'
      Summary: ${scenario9.testCaseData.testSummary}
      Description: ${scenario9.testCaseData.testDescription}
      Tags: '${scenario9.testCaseData.tags}'
    `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario9.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user can send message to homepage Help Desk Chat", async () => {
      await homepagePage.clickOpenChatButton();
      await homepagePage.verifyHelpDeskAndChat(scenario9.HelpDeskChat);
    });

    await test.step("AND the user can close the homepage Help Desk Chat", async () => {
      await homepagePage.closeHelpDeskAndChat();
    });
  });
  test(`Test case: '${scenario10.testCaseData.testCase}'
    Summary: ${scenario10.testCaseData.testSummary}
    Description: ${scenario10.testCaseData.testDescription}
    Tags: '${scenario10.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario10.testCaseData);

    await commonUtils.closePopup();
    await test.step("AND the user verifies that the bloomex other domains links are visible and accessible in homepage footer", async () => {
      await homepagePage.verifyText(scenario10.text);
      await homepagePage.verifyLinks(scenario10.bloomexLinks);
    });
  });
  test(`Test case: '${scenario11.testCaseData.testCase}'
    Summary: ${scenario11.testCaseData.testSummary}
    Description: ${scenario11.testCaseData.testDescription}
    Tags: '${scenario11.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario11.testCaseData);

    await commonUtils.closePopup();
    await test.step("AND the user verifies that the Contact Us link is visible and accessible in the homepage", async () => {
      await homepagePage.verifyText(scenario11.text);
      await homepagePage.verifyLinks(scenario11.bloomexLinks);
    });
  });
  test(`Test case: '${scenario12.testCaseData.testCase}'
    Summary: ${scenario12.testCaseData.testSummary}
    Description: ${scenario12.testCaseData.testDescription}
    Tags: '${scenario12.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario12.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the Free $20 Gift Certificate link is visible and accessible in the homepage", async () => {
      await homepagePage.verifyFree20GiftCertificateLink(
        scenario12.href,
        scenario12.text
      );
    });
  });
  test(`Test case: '${scenario13.testCaseData.testCase}'
    Summary: ${scenario13.testCaseData.testSummary}
    Description: ${scenario13.testCaseData.testDescription}
    Tags: '${scenario13.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario13.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the Account , phone no and Live chat links are visible and accessible on the top on the homepage", async () => {
      await homepagePage.verifyLinks(scenario13.bloomexLinks);
    });
  });
  test(`Test case: '${scenario14.testCaseData.testCase}'
    Summary: ${scenario14.testCaseData.testSummary}
    Description: ${scenario14.testCaseData.testDescription}
    Tags: '${scenario14.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario14.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the Designed BY Our Florists and Mason Jar Collection sidebar images are visible on the homepage", async () => {
      await homepagePage.verifyElementExists(scenario14.elementExists);
      await homepagePage.verifyElementExists(scenario14.elementExists2);
    });
  });
  test(`Test case: '${scenario15.testCaseData.testCase}'
    Summary: ${scenario15.testCaseData.testSummary}
    Description: ${scenario15.testCaseData.testDescription}
    Tags: '${scenario15.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario15.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the Birthday Flowers , Sympathy Flowers and Every Day Deals options are visible on the homepage", async () => {
      await homepagePage.verifyElementExists(scenario15.elementExists);
      await homepagePage.verifyElementExists(scenario15.elementExists2);
      await homepagePage.verifyElementExists(scenario15.elementExists3);
    });
  });
  test(`Test case: '${scenario16.testCaseData.testCase}'
    Summary: ${scenario16.testCaseData.testSummary}
    Description: ${scenario16.testCaseData.testDescription}
    Tags: '${scenario16.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario16.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Can & Free Delivery' link is visible on the top on homepage", async () => {
      await homepagePage.verifyText(scenario16.text);
    });
  });
  test(`Test case: '${scenario17.testCaseData.testCase}'
    Summary: ${scenario17.testCaseData.testSummary}
    Description: ${scenario17.testCaseData.testDescription}
    Tags: '${scenario17.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario17.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Things Engraved' link is visible on the top on homepage", async () => {
      await homepagePage.verifyElementExists(scenario17.elementExists);
    });
  });
  test(`Test case: '${scenario18.testCaseData.testCase}'
    Summary: ${scenario18.testCaseData.testSummary}
    Description: ${scenario18.testCaseData.testDescription}
    Tags: '${scenario18.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario18.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Personalized Gifts for any occasion' link is visible on the top on homepage", async () => {
      await homepagePage.verifyText(scenario18.text);
    });
  });
  test(`Test case: '${scenario19.testCaseData.testCase}'
    Summary: ${scenario19.testCaseData.testSummary}
    Description: ${scenario19.testCaseData.testDescription}
    Tags: '${scenario19.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario19.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Same Day Flower Delivery' Section is visible on the homepage", async () => {
      await homepagePage.verifyText(scenario19.text);
      await homepagePage.verifyText(scenario19.sectionDescription);
    });
  });
  test(`Test case: '${scenario20.testCaseData.testCase}'
    Summary: ${scenario20.testCaseData.testSummary}
    Description: ${scenario20.testCaseData.testDescription}
    Tags: '${scenario20.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario20.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Same Day Flower Delivery' Section is visible on the homepage", async () => {
      await homepagePage.verifyText(scenario20.text);
    });
  });
  test(`Test case: '${scenario21.testCaseData.testCase}'
    Summary: ${scenario21.testCaseData.testSummary}
    Description: ${scenario21.testCaseData.testDescription}
    Tags: '${scenario21.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario21.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Same Day Flower Delivery' Section is visible on the homepage", async () => {
      await homepagePage.verifyText(scenario21.text);
    });
  });
  test(`Test case: '${scenario22.testCaseData.testCase}'
    Summary: ${scenario22.testCaseData.testSummary}
    Description: ${scenario22.testCaseData.testDescription}
    Tags: '${scenario22.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario22.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Site Map' link and copyright text is visible and accessible on the homepage footer", async () => {
      await homepagePage.verifyElementExists(scenario22.elementExists);
      await homepagePage.verifyText(scenario22.copyrightText);
    });
  });
  test(`Test case: '${scenario23.testCaseData.testCase}'
    Summary: ${scenario23.testCaseData.testSummary}
    Description: ${scenario23.testCaseData.testDescription}
    Tags: '${scenario23.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario23.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the 'Flowers Collection' menu is visible on the homepage", async () => {
      await homepagePage.verifyCollectionMenu(scenario23.bloomexLinks);
    });
  });
  test(`Test case: '${scenario24.testCaseData.testCase}'
    Summary: ${scenario24.testCaseData.testSummary}
    Description: ${scenario24.testCaseData.testDescription}
    Tags: '${scenario24.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario24.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that the user is navigated to the base url when random string is added at end of the url", async () => {
      await homepagePage.verifyRandomNavigation(scenario24.text, scenario24.expectedUrl);
    });
  });
  test(`Test case: '${scenario25.testCaseData.testCase}'
    Summary: ${scenario25.testCaseData.testSummary}
    Description: ${scenario25.testCaseData.testDescription}
    Tags: '${scenario25.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario25.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that user is navigated to the base url when double slash is added at end of the url", async () => {
      await homepagePage.verifyRandomNavigation(scenario25.text, scenario25.expectedUrl);
    });
    await test.step("AND the user verifies the slider image is visible", async () => {
      await homepagePage.verifySliderImageIsVisible();
    });

    await test.step("AND the user verifies the bloomex logo is visible", async () => {
      await homepagePage.verifyBloomexLogoIsVisible();
    });

    await test.step("AND the user verifies the product cards are visible", async () => {
      await homepagePage.verifyProductCardsAreVisible();
    });
  });
  test(`Test case: '${scenario26.testCaseData.testCase}'
    Summary: ${scenario26.testCaseData.testSummary}
    Description: ${scenario26.testCaseData.testDescription}
    Tags: '${scenario26.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario26.testCaseData);

    await commonUtils.closePopup();

    await test.step("AND the user verifies that breadcrumbs and urls of breadcrumbs are visible on the homepage", async () => {
      await homepagePage.verifyBreadcrumbs(scenario26.verifyBreadCrumbs);
    });
  });

  test(`Test case: '${scenario27.testCaseData.testCase}'
    Summary: ${scenario27.testCaseData.testSummary}
    Description: ${scenario27.testCaseData.testDescription}
    Tags: '${scenario27.testCaseData.tags}'
  `, async ({ homepagePage, commonUtils }) => {
    await logTestCaseData(test.info(), scenario27.testCaseData);

    await test.step("GIVEN the user navigates to Homepage", async () => {
      await homepagePage.navigateToHomepage();
      await commonUtils.closePopup();
    });
    
    await test.step("AND the user verifies that the popup is visible", async () => {
      await homepagePage.verifyPopup();
    });
  });
});
