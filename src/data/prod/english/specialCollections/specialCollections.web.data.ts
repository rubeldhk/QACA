import { TestCaseData } from "@interfaces/testcase.data.interface";

import { SelectSpecialCollectionsItemData, ExpectedSpecialCollectionsValuesData, ExpectedSpecialCollectionsPageHeadingsData } from "@interfaces/specialCollections/specialCollections.interface";

interface SpecialCollectionsTestCaseData {
    specialCollections?: { dropdown: string };
    selectSpecialCollectionsItem?: SelectSpecialCollectionsItemData;
    expectedSpecialCollectionsValues?: string[];
    expectedPageHeader?: ExpectedSpecialCollectionsValuesData;
    expectedPageHeadings?: ExpectedSpecialCollectionsPageHeadingsData;
    testCaseData: TestCaseData;
}

const specialCollectionsTestData: { [key: string]: SpecialCollectionsTestCaseData } = {
    "0001-verify-special-collections-web": {
        specialCollections: {
            dropdown: 'Special Collections',
        },
        expectedSpecialCollectionsValues: [
            'Mason Jar Collection',
            'Designer Collection',
            'Gourmet Collection',
            'Roses and Wine',
            'Lindt Gift Baskets',
            'The Bunches Collection',
            'Birthday Mug Collection',
            'Bud Vase Collection',
            'Teddy Bears, Vases and Chocolates',
            'Shop for Good'
        ],
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0005',
            testDescription: 'Validate the special collections dropdown is visible',
            testSummary: 'Validate the special collections dropdown is visible',
        },
    },
    "0002-mason-jar-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Mason Jar Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0006',
            testDescription: 'Select Mason Jar Collection from special collections dropdown',
            testSummary: 'Verify navigation to Mason Jar Collection page',
        },
    },
    "0003-designer-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Designer Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0007',
            testDescription: 'Select Designer Collection from special collections dropdown',
            testSummary: 'Verify navigation to Designer Collection page',
        },
    },
    "0004-gourmet-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Gourmet Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0008',
            testDescription: 'Select Gourmet Collection from special collections dropdown',
            testSummary: 'Verify navigation to Gourmet Collection page',
        },
    },
    "0005-roses-and-wine-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Roses and Wine',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0009',
            testDescription: 'Select Roses and Wine from special collections dropdown',
            testSummary: 'Verify navigation to Roses and Wine page',
        },
    },
    "0006-lindt-gift-baskets-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Lindt Gift Baskets',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0010',
            testDescription: 'Select Lindt Gift Baskets from special collections dropdown',
            testSummary: 'Verify navigation to Lindt Gift Baskets page',
        },
    },
    "0007-the-bunches-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'The Bunches Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0011',
            testDescription: 'Select The Bunches Collection from special collections dropdown',
            testSummary: 'Verify navigation to The Bunches Collection page',
        },
    },
    "0008-birthday-mug-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Birthday Mug Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0012',
            testDescription: 'Select Birthday Mug Collection from special collections dropdown',
            testSummary: 'Verify navigation to Birthday Mug Collection page',
        },
    },
    "0009-bud-vase-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Bud Vase Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0013',
            testDescription: 'Select Bud Vase Collection from special collections dropdown',
            testSummary: 'Verify navigation to Bud Vase Collection page',
        },
    },
    "0010-teddy-bears-vases-and-chocolates-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Teddy Bears, Vases and Chocolates',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0014',
            testDescription: 'Select Teddy Bears, Vases and Chocolates from special collections dropdown',
            testSummary: 'Verify navigation to Teddy Bears, Vases and Chocolates page',
        },
    },
    "0011-shop-for-good-collection-web": {
        selectSpecialCollectionsItem: {
            isWeb: true,
            specialCollectionsItem: 'Shop for Good',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0015',
            testDescription: 'Select Shop for Good from special collections dropdown',
            testSummary: 'Verify navigation to Shop for Good page',
        },
    },
    "0012-mason-jar-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'The Mason Jar Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0116',
            testDescription: 'Verify The Mason Jar Collection page header',
            testSummary: 'Verify page header displays "The Mason Jar Collection"',
        },
    },
    "0013-designer-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Designer Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0117',
            testDescription: 'Verify Designer Collection page header',
            testSummary: 'Verify page header displays "Designer Collection"',
        },
    },
    "0014-gourmet-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Gourmet Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0118',
            testDescription: 'Verify Gourmet Collection page header',
            testSummary: 'Verify page header displays "Gourmet Collection"',
        },
    },
    "0015-roses-and-wine-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Roses & Wine Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0119',
            testDescription: 'Verify Roses & Wine Collection page header',
            testSummary: 'Verify page header displays "Roses & Wine Collection"',
        },
    },
    "0016-lindt-gift-basket-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Lindt Gift Basket Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0120',
            testDescription: 'Verify Lindt Gift Basket Collection page header',
            testSummary: 'Verify page header displays "Lindt Gift Basket Collection"',
        },
    },
    "0017-the-bunches-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'The Bunches Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0121',
            testDescription: 'Verify The Bunches Collection page header',
            testSummary: 'Verify page header displays "The Bunches Collection"',
        },
    },
    "0018-birthday-mug-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Birthday Mug Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0122',
            testDescription: 'Verify Birthday Mug Collection page header',
            testSummary: 'Verify page header displays "Birthday Mug Collection"',
        },
    },
    "0019-bud-vase-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Bud Vase Collection',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0123',
            testDescription: 'Verify Bud Vase Collection page header',
            testSummary: 'Verify page header displays "Bud Vase Collection"',
        },
    },
    "0020-cards-vases-and-teddy-bears-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Cards, Vases & Teddy Bears',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0124',
            testDescription: 'Verify Cards, Vases & Teddy Bears page header',
            testSummary: 'Verify page header displays "Cards, Vases & Teddy Bears"',
        },
    },
    "0021-shop-for-good-collection-page-header-web": {
        expectedPageHeader: {
            expectedSpecialCollectionsValueHeaders: 'Shop for Good',
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0125',
            testDescription: 'Verify Shop for Good page header',
            testSummary: 'Verify page header displays "Shop for Good"',
        },
    },
    "0022-verify-special-collections-page-elements-web": {
        expectedPageHeadings: {
            headings: [
                'The Mason Jar Collection',
                'Designer Collection',
                'Gourmet Collection',
                'Roses & Wine Collection',
                'Lindt Gift Basket Collection',
                'The Bunches Collection',
                'Birthday Mug Collection',
                'Bud Vase Collection',
                'Cards, Vases & Teddy Bears',
                'Shop for Good',
            ],
        },
        testCaseData: {
            tags: ' @smoke @regression @english ',
            testCase: 'BM-0158',
            testDescription: 'Verify Special Collections page elements',
            testSummary: 'Verify page header displays "Special Collections"',
        },
    },
};

export function getData(testCase: string): SpecialCollectionsTestCaseData {
    const data = specialCollectionsTestData[testCase];
    if (!data) {
        throw new Error(`Test case data not found for: ${testCase}`);
    }
    return data;
}

