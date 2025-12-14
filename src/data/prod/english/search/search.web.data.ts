import { TestCaseData } from "@interfaces/testcase.data.interface";

interface SearchTestCaseData {
  title: string;
  testCaseData: TestCaseData;
  ProductName: string;
  ProductPrice: string;
  ProductDescription: string;
}

const searchTestData: { [key: string]: SearchTestCaseData } = {
  "1-verify-search": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0186",
      testDescription:
        "Verify Shades of Pink product is displayed correctly on searching the product name",
      testSummary:
        "Search for Shades of Pink product and validate product details are displayed correctly",
    },
    ProductName: "Shades of Pink",
    ProductPrice: "27.49",
    ProductDescription:
      "Shades of Pink – A Vibrant Burst of Color and Fragrance",
  },
  "2-verify-search": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0187",
      testDescription:
        "Verify Christmas Embrace product is displayed correctly on searching the product name",
      testSummary:
        "Search for Christmas Embrace product and validate product details are displayed correctly",
    },
    ProductName: "Christmas Embrace",
    ProductPrice: "32.99",
    ProductDescription:
      "Perfect for Holidays when you can't be there in person!",
  },
  "3-verify-search": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0188",
      testDescription:
        "Verify Super Snapdragons product is displayed correctly on searching the product name",
      testSummary:
        "Search for Super Snapdragons product and validate product details are displayed correctly",
    },
    ProductName: "Super Snapdragons",
    ProductPrice: "38.49",
    ProductDescription:
      "This superb bouquet illuminates any room with its vibrant array of colours. This bouquet includes eight (8) assorted colour snapdragons accented with fresh greens.",
  },
  "4-verify-search": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0189",
      testDescription:
        "Verify Assorted Calla Lilies product is displayed correctly on searching the product name",
      testSummary:
        "Search for Assorted Calla Lilies product and validate product details are displayed correctly",
    },
    ProductName: "Assorted Calla Lilies",
    ProductPrice: "43.99",
    ProductDescription:
      "Send this bouquet of breath-taking and elegant assorted Calla Lilies and make any occasion memorable. This beautiful assortment of Mini Calla Lilies combines ten (10) stems of white, yellow, pink, red and purple flowers. Elegant and classy Assorted Mini Calla Lilies are the focal point of any classic upscale environment. They represent luxury and style and are both graceful and exotic.",
  },
  "5-verify-search": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0190",
      testDescription:
        "Verify Two Dozen Long Stem Pink Roses product is displayed correctly on searching the product name",
      testSummary:
        "Search for Two Dozen Long Stem Pink Roses product and validate product details are displayed correctly",
    },
    ProductName: "Two Dozen Long Stem Pink Roses",
    ProductPrice: "87.99",
    ProductDescription:
      "Two Dozen Long Stemmed Pink Roses – A Perfect Expression of Admiration and Appreciation",
  },
  "6-verify-search": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0191",
      testDescription:
        "Verify Yellow Spray Rose in Bud Vase product is displayed correctly on searching the product name",
      testSummary:
        "Search for Yellow Spray Rose in Bud Vase product and validate product details are displayed correctly",
    },
    ProductName: "Yellow Spray Rose in Bud Vase",
    ProductPrice: "19.99",
    ProductDescription:
      "This Beautiful Yellow Spray Rose Bud Vase arrangement is a testament to classic beauty with a fuller look. It's a timeless gift, perfect for expressing your sentiments with abundant charm and grace.",
  },
  "7-verify-search": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@smoke @regression @english",
      testCase: "BM-0192",
      testDescription:
        "Verify Treasures of Tuscany product is displayed correctly on searching the product name",
      testSummary:
        "Search for Treasures of Tuscany product and validate product details are displayed correctly",
    },
    ProductName: "Treasures of Tuscany",
    ProductPrice: "60.49",
    ProductDescription:
      "This scrumptious Gift Basket features a collection of nine (9) mouthwatering Tuscany themed Gourmet treats such as Focaccia Crackers, Italian Pastry, Wine & Cheese Biscuits, Chocolate Biscotti, Italian Truffles, Almond Roca, Italian dark chocolate, Roasted Almonds and Dark Chocolate Pralines.",
  },
};

export function getData(testCase: string): SearchTestCaseData {
  const data = searchTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
