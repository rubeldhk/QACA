
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
      menuItem:"Meilleure Valeur",
      title:"meilleure valeur",
      headingVerification:"Meilleure Valeur",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Bloomex propose une large gamme de fleurs, de paniers-cadeaux et de cadeaux pour toutes les occasions.",
      sortByPrice:"trier par prix",
      sortOrder:"Ascending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0193",
            testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
            testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
        },
    },
    '0002-verify-pricepage': {
      menuItem:"Meilleure Valeur",
      title:"meilleure valeur",
      headingVerification:"Meilleure Valeur",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Bloomex offers a wide range",
      sortByPrice:"trier par prix",
      sortOrder:"Descending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0199",
            testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Best Value' , heading 'Best Value' and Tagline 'Bloomex offers a wide range of both Flowers, Gift Baskets and Gifts for all Ocassions. These are just some of our 'Best Value' items...' For Descending Order",
            testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Best Value' , heading 'Best Value' and Tagline 'Bloomex offers a wide range of both Flowers, Gift Baskets and Gifts for all Ocassions. These are just some of our 'Best Value' items...' For Descending Order",
        },
    },
    '0003-verify-pricepage': {
      menuItem:"Moins de 20$",
      title:"moins de 20",
      headingVerification:"Moins de 20$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et de",
      sortByPrice:"trier par prix",
      sortOrder:"Ascending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0194",
            testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
            testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Ascending Order",
        },
    },
    '0004-verify-pricepage': {
      menuItem:"Moins de 20$",
      title:"moins de 20",
      headingVerification:"Moins de 20$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et de",
      sortByPrice:"trier par prix",
      sortOrder:"Descending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0200",
            testDescription: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Descending Order",
            testSummary: "Verify By price page Navigate Correctly and verify breadCrumb 'Under 20$' , heading 'Under 20$' and Tagline 'Choose from a selection of Fresh Cut Flowers and Gifts all priced Under $20.00 - an extraordinary offer of extraordinary value...' For Descending Order",
        },
    },
    '0005-verify-pricepage': {
      menuItem:"20$ - 30$",
      title:"20 30",
      headingVerification:"20$ - 30$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et cadeaux tout prix se situe entre 20,00 $ et 30,00 $",
      sortByPrice:"trier par prix",
      sortOrder:"Ascending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0195",
            testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Ascending Order`,
            testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Ascending Order`,
        },
    },
    '0006-verify-pricepage': {
      menuItem:"20$ - 30$",
      title:"20 30",
      headingVerification:"20$ - 30$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et cadeaux tout prix se situe entre 20,00 $ et 30,00 $",
      sortByPrice:"trier par prix",
      sortOrder:"Descending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0201",
            testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Descending Order`,
            testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "20 30" , heading "20 - 30$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $20.00 and $30.00 - an extraordinary offer of extraordinary value..." For Descending Order`,
        },
    },
    '0007-verify-pricepage': {
      menuItem:"30$ - 40$",
      title:"30 40",
      headingVerification:"30$ - 40$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et cadeaux tout prix se situe entre 30,00 $ et 40,00 $",
      sortByPrice:"trier par prix",
      sortOrder:"Ascending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0196",
            testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
            testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
        },
    },
    '0008-verify-pricepage': {
      menuItem:"30$ - 40$",
      title:"30 40",
      headingVerification:"30$ - 40$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Ajouter au panier",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et cadeaux tout prix se situe entre 30,00 $ et 40,00 $",
      sortByPrice:"trier par prix",
      sortOrder:"Descending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0202",
            testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
            testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "30 40" , heading "30 - 40$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $30.00 and $40.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
        },
    },
    '0009-verify-pricepage': {
      menuItem:"40$ - 50$",
      title:"40 50",
      headingVerification:"40$ - 50$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et cadeaux tout prix se situe entre 40,00 $ et 50,00 $",
      sortByPrice:"trier par prix",
      sortOrder:"Ascending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0197",
            testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "Over $40" , heading "Over $40" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced Over $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
            testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "Over $40" , heading "Over $40" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced Over $40.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
        },
    },
    '0010-verify-pricepage': {
      menuItem:"40$ - 50$",
      title:"40 50",
      headingVerification:"40$ - 50$",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et des cadeaux tous les prix varient entre $ 40.00 et $ 50.00",
      sortByPrice:"trier par prix",
      sortOrder:"Descending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0203",
            testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "40 50" , heading "40 - 50$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $40.00 and $50.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
            testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "40 50" , heading "40 - 50$" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced between $40.00 and $50.00 - an extraordinary offer of extraordinary value..."For Descending Order`,
        },
    },
    '0011-verify-pricepage': {
      menuItem:"50$ plus",
      title:"50",
      headingVerification:"50$ et Plus",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et cadeaux tout prix se situe au-dessus de 50,00 $",
      sortByPrice:"trier par prix",
      sortOrder:"Ascending",
        testCaseData: {
            tags: "@regression @pricepage @french",
            testCase: "BM-0198",
            testDescription: `Verify By price page Navigate Correctly and verify breadCrumb "50" , heading "50 and up" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
            testSummary: `Verify By price page Navigate Correctly and verify breadCrumb "50" , heading "50 and up" and Tagline "Choose from a selection of Fresh Cut Flowers and Gifts all priced over $50.00 - an extraordinary offer of extraordinary value..."For Ascending Order`,
        },
    },
    '0012-verify-pricepage': {
      menuItem:"50$ plus",
      title:"50",
      headingVerification:"50$ et Plus",
      pageName:"Par Prix",
      productData:{
        productName:"Prix Bloomex:",
        buttonText:"Magasinez",
      },
      taglineVerification:"Choisissez parmi une sélection de fleurs coupées fraîches et cadeaux tout prix se situe au-dessus de 50,00 $",
      sortByPrice:"trier par prix",
      sortOrder:"Descending",
        testCaseData: {
            tags: "@regression @pricepage @french",
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