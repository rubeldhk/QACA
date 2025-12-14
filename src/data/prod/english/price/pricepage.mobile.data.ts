
import { TestCaseData } from '@interfaces/testcase.data.interface';
interface PricePageTestCaseData {
  testCaseData: TestCaseData;   
  menuItem?: string;
  menuItems?: string[];
  pageName?: string;
  title?: string;
  headingVerification?: string;
  productData?:{
    productName: string;
    buttonText: string;
  }
  taglineVerification?: string;
  sortByPrice?: string;
  sortOrder?: "Ascending" | "Descending";
 
}

const pricePageTestData: { [key: string]: PricePageTestCaseData } = {
  '0001-verify-pricepage': {
    menuItem:"Best Value!",
    title:"best value",
    pageName:"By Price",
    headingVerification:"Best Value",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Bloomex offers a wide range",
    sortByPrice:"Sort by price",
    sortOrder:"Ascending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0193",
          testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
          testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
      },
  },
  '0002-verify-pricepage': {
    menuItem:"Best Value!",
    title:"best value",
    pageName:"By Price",
    headingVerification:"Best Value",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Bloomex offers a wide range",
    sortByPrice:"Sort by price",
    sortOrder:"Descending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0199",
          testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Best Value' , heading 'Best Value' and Tagline 'Bloomex offers a wide range of both Flowers, Gift Baskets and Gifts for all Ocassions. These are just some of our 'Best Value' items...' For Descending Order",
          testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Best Value' , heading 'Best Value' and Tagline 'Bloomex offers a wide range of both Flowers, Gift Baskets and Gifts for all Ocassions. These are just some of our 'Best Value' items...' For Descending Order",
      },
  },
  '0003-verify-pricepage': {
    menuItem:"Under $20",
    title:"under 20",
    pageName:"By Price",
    headingVerification:"under $20",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts",
    sortByPrice:"Sort by price",
    sortOrder:"Ascending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0194",
          testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
          testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
      },
  },
  '0004-verify-pricepage': {
    menuItem:"Under $20",
    title:"under 20",
    pageName:"By Price",
    headingVerification:"under $20",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts",
    sortByPrice:"Sort by price",
    sortOrder:"Descending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0200",
          testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Descending Order",
          testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Descending Order",
      },
  },
  '0005-verify-pricepage': {
    menuItem:"$20 - $30",
    title:"20 30",
    pageName:"By Price",
    headingVerification:"$20 - $30",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00",
    sortByPrice:"Sort by price",
    sortOrder:"Ascending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0195",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Ascending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Ascending Order`,
      },
  },
  '0006-verify-pricepage': {
    menuItem:"$20 - $30",
    title:"20 30",
    pageName:"By Price",
    headingVerification:"$20 - $30",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00",
    sortByPrice:"Sort by price",
    sortOrder:"Descending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0201",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Descending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Descending Order`,
      },
  },
  '0007-verify-pricepage': {
    menuItem:"$30 - $40",
    title:"30 40",
    pageName:"By Price",
    headingVerification:"$30 - $40",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00",
    sortByPrice:"Sort by price",
    sortOrder:"Ascending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0196",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
      },
  },
  '0008-verify-pricepage': {
    menuItem:"$30 - $40",
    title:"30 40",
    pageName:"By Price",
    headingVerification:"$30 - $40",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00",
    sortByPrice:"Sort by price",
    sortOrder:"Descending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0202",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
      },
  },
  '0009-verify-pricepage': {
    menuItem:"$40 - $50",
    title:"40 50",
    pageName:"By Price",
    headingVerification:"$40 - $50",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced between $40.00 and $50.00",
    sortByPrice:"Sort by price",
    sortOrder:"Ascending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0197",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "Over $40" , heading "Over $40" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced Over $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "Over $40" , heading "Over $40" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced Over $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
      },
  },
  '0010-verify-pricepage': {
    menuItem:"$40 - $50",
    title:"40 50",
    pageName:"By Price",
    headingVerification:"$40 - $50",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced between $40.00 and $50.00",
    sortByPrice:"Sort by price",
    sortOrder:"Descending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0203",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "40 50" , heading "40 - 50$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $40.00 and $50.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "40 50" , heading "40 - 50$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $40.00 and $50.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
      },
  },
  '0011-verify-pricepage': {
    menuItem:"$50+",
    title:"50",
    pageName:"By Price",
    headingVerification:"$50 and up",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary",
    sortByPrice:"Sort by price",
    sortOrder:"Ascending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0198",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "50" , heading "50 and up" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "50" , heading "50 and up" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
      },
  },
  '0012-verify-pricepage': {
    menuItem:"$50+",
    title:"50",
    pageName:"By Price",
    headingVerification:"$50 and up",
    productData:{
      productName:"Bloomex Price:",
      buttonText:"Add to Cart",
    },
    taglineVerification:"Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary",
    sortByPrice:"Sort by price",
    sortOrder:"Descending",
      testCaseData: {
          tags: "@regression @pricepage @english",
          testCase: "BM-0204",
          testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "50" , heading "50 and up" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
          testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "50" , heading "50 and up" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
      },
  },
   
};

export function getData(testCase: string): PricePageTestCaseData {
  const data = pricePageTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
    }
    return data;
  }