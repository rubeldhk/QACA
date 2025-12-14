import { test } from '@fixtures/page.fixtures';
import { getDataSet } from '@utilities/env.utils';
import { logTestCaseData } from '@utilities/test.helper.utils';

test.describe('Special Collections Page', () => {
    const scenario1 = getDataSet('specialCollections.mobile', 'specialCollectionsTestData', '0001-verify-special-collections-mobile');
    const scenario3 = getDataSet('specialCollections.mobile', 'specialCollectionsTestData', '0022-verify-special-collections-page-elements-mobile');

    test(
        `Test case: '${scenario1.testCaseData.testCase}'
        Summary: '${scenario1.testCaseData.testSummary}'
        Description: '${scenario1.testCaseData.testDescription}'
        Tags: '${scenario1.testCaseData.tags}'
        `, async ({ specialCollectionsPage, homepagePage, commonUtils }) => {
        await logTestCaseData(test.info(), scenario1.testCaseData);

        await test.step('GIVEN the user navigates to Special Collections Page', async () => {
            await homepagePage.navigateToHomepage();
            await commonUtils.closePopup();
        });

        await test.step('AND the user clicks the mobile menu bar', async () => {
            await homepagePage.clickMobileMenuBar();
        });

        await test.step('AND the user verifies special collections match expected values', async () => {
            await specialCollectionsPage.verifyAllSpecialCollectionsDropdownValuesMobile(scenario1.expectedSpecialCollectionsValues, false);
        });
    });

    const specialCollectionTestCases = [
        '0002-mason-jar-collection-mobile',
        '0003-designer-collection-mobile',
        '0004-gourmet-collection-mobile',
        '0005-roses-and-wine-collection-mobile',
        '0006-lindt-gift-baskets-collection-mobile',
        '0007-the-bunches-collection-mobile',
        '0008-birthday-mug-collection-mobile',
        '0009-bud-vase-collection-mobile',
        '0010-teddy-bears-vases-and-chocolates-collection-mobile',
        '0011-shop-for-good-collection-mobile',
    ];

    specialCollectionTestCases.forEach((testCaseId) => {
        const scenario = getDataSet('specialCollections.mobile', 'specialCollectionsTestData', testCaseId);

        test(`
        Test case: '${scenario.testCaseData.testCase}'
        Summary: '${scenario.testCaseData.testSummary}'
        Description: '${scenario.testCaseData.testDescription}'
        Tags: '${scenario.testCaseData.tags}'
        `, async ({ specialCollectionsPage, homepagePage, commonUtils }) => {
            await logTestCaseData(test.info(), scenario.testCaseData);

            await test.step('GIVEN the user navigates to Special Collections Page', async () => {
                await commonUtils.closePopup();
                await homepagePage.navigateToHomepage();
            });

            await test.step('AND the user clicks the mobile menu bar', async () => {
                await homepagePage.clickMobileMenuBar();
            });

            await test.step(`AND the user selects "${scenario.selectSpecialCollectionsItem?.specialCollectionsItem}" from special collections dropdown`, async () => {
                if (!scenario.selectSpecialCollectionsItem?.specialCollectionsItem) {
                    throw new Error(`selectSpecialCollectionsItem is missing for test case: ${testCaseId}`);
                }
                await specialCollectionsPage.selectSpecialCollectionFromDropdown(
                    scenario.selectSpecialCollectionsItem.specialCollectionsItem,
                    false
                );
            });
        });
    });

    const pageHeaderTestCases = [
        { dropdownItem: '0002-mason-jar-collection-mobile', pageHeader: '0012-mason-jar-collection-page-header-mobile' },
        { dropdownItem: '0003-designer-collection-mobile', pageHeader: '0013-designer-collection-page-header-mobile' },
        { dropdownItem: '0004-gourmet-collection-mobile', pageHeader: '0014-gourmet-collection-page-header-mobile' },
        { dropdownItem: '0005-roses-and-wine-collection-mobile', pageHeader: '0015-roses-and-wine-collection-page-header-mobile' },
        { dropdownItem: '0006-lindt-gift-baskets-collection-mobile', pageHeader: '0016-lindt-gift-basket-collection-page-header-mobile' },
        { dropdownItem: '0007-the-bunches-collection-mobile', pageHeader: '0017-the-bunches-collection-page-header-mobile' },
        { dropdownItem: '0008-birthday-mug-collection-mobile', pageHeader: '0018-birthday-mug-collection-page-header-mobile' },
        { dropdownItem: '0009-bud-vase-collection-mobile', pageHeader: '0019-bud-vase-collection-page-header-mobile' },
        { dropdownItem: '0010-teddy-bears-vases-and-chocolates-collection-mobile', pageHeader: '0020-cards-vases-and-teddy-bears-collection-page-header-mobile' },
        { dropdownItem: '0011-shop-for-good-collection-mobile', pageHeader: '0021-shop-for-good-collection-page-header-mobile' },
    ];

    pageHeaderTestCases.forEach((testCase) => {
        const dropdownScenario = getDataSet('specialCollections.mobile', 'specialCollectionsTestData', testCase.dropdownItem);
        const headerScenario = getDataSet('specialCollections.mobile', 'specialCollectionsTestData', testCase.pageHeader);

        test(`
            Test case: '${headerScenario.testCaseData.testCase}'
            Summary: '${headerScenario.testCaseData.testSummary}'
            Description: '${headerScenario.testCaseData.testDescription}'
            Tags: '${headerScenario.testCaseData.tags}'
            `, async ({ specialCollectionsPage, homepagePage, commonUtils }) => {
            await logTestCaseData(test.info(), headerScenario.testCaseData);

            await test.step('GIVEN the user navigates to Special Collections Page', async () => {
                await commonUtils.closePopup();
                await homepagePage.navigateToHomepage();
            });

            await test.step('AND the user clicks the mobile menu bar', async () => {
                await homepagePage.clickMobileMenuBar();
            });

            await test.step(`WHEN the user selects "${dropdownScenario.selectSpecialCollectionsItem?.specialCollectionsItem}" from special collections dropdown`, async () => {
                if (!dropdownScenario.selectSpecialCollectionsItem?.specialCollectionsItem) {
                    throw new Error(`selectSpecialCollectionsItem is missing for dropdown scenario: ${testCase.dropdownItem}`);
                }
                await specialCollectionsPage.selectSpecialCollectionFromDropdown(
                    dropdownScenario.selectSpecialCollectionsItem.specialCollectionsItem,
                    false
                );
            });

            await test.step(`THEN the page header should display "${headerScenario.expectedPageHeader?.expectedSpecialCollectionsValueHeaders}"`, async () => {
                if (!headerScenario.expectedPageHeader?.expectedSpecialCollectionsValueHeaders) {
                    throw new Error(`expectedPageHeader is missing for header scenario: ${testCase.pageHeader}`);
                }
                await specialCollectionsPage.verifySpecialCollectionsPageHeader(
                    headerScenario.expectedPageHeader.expectedSpecialCollectionsValueHeaders
                );
            });
        });
    });

    // Expected Failure: Navigating to wrong page
    test(
        `Test case: '${scenario3.testCaseData.testCase}'
        Summary: '${scenario3.testCaseData.testSummary}'
        Description: '${scenario3.testCaseData.testDescription}'
        Tags: '${scenario3.testCaseData.tags}'
        `, async ({ specialCollectionsPage, homepagePage, commonUtils }) => {
        await logTestCaseData(test.info(), scenario3.testCaseData);

        await test.step('GIVEN the user navigates to Special Collections Page', async () => {
            await commonUtils.closePopup();
            await homepagePage.navigateToHomepage();
        });

        await test.step('AND the user clicks the mobile menu bar', async () => {
            await homepagePage.clickMobileMenuBar();
        });

        await test.step('WHEN the user navigates to Special Collections page', async () => {
            await specialCollectionsPage.verifySpecialCollectionsPageElementes(scenario3.expectedPageHeadings);
        });
    });
});