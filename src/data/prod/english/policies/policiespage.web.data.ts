
import { FlowerCareVerificationInterface } from '@interfaces/account/account.interface';
import { TestCaseData } from '@interfaces/testcase.data.interface';
interface PoliciesPageTestCaseData {
  testCaseData: TestCaseData;   
  menuItem?: string;
  menuItems?: string[];
  pageName?: string;
  title?: string;
  headingVerification?: string;
  flowerCareVerification?: FlowerCareVerificationInterface;
  faqQuestions?: string[];
}

const policiesPageTestData: { [key: string]: PoliciesPageTestCaseData } = {
    '0001-verify-policies': {
        menuItems: ["Order and Return Policy", "Substitution Policy", "Delivery Policy", "Promotion Policy", "Privacy Policy","Contact-Free Delivery","FAQs"],
        pageName: "Policies",
        testCaseData: {
            tags: "@regression @policies @english",
            testCase: "BM-0083",
            testDescription: "Verify that the user can successfully navigate to the Bloomex Policies page.",
            testSummary: "Verify that the user can successfully navigate to the Bloomex Policies page.",
        },
    },
    '0002-verify-policies': {
       menuItem: "Order and Return Policy",
       pageName: "Policies",
       title: "order and return policy",
       headingVerification: "Order & Return Policy",
       flowerCareVerification: {
        flowerCareHeading:'',
       flowerCareParagraphs:[`The Bloomex Difference`,`Bloomex is different from your traditional neighbourhood florist. We operate a direct-to-consumer business model. Due to the high volume of orders we process daily and with direct buying from farms, our flowers are as fresh as they can be, arriving in our facilities five days after they have been harvested. Our efficiency and low overhead allow us to sell them for less. The result is fresher flowers at a better price.`,`We accept orders over the internet and by telephone at our head office in Calgary. Flowers are made by our professionally trained floral designers at our own production facilities, located in major metropolitan areas across Canada. Having our own florists making the designs is how we ensure order accuracy.`,`Bloomex wants your product to be delivered on time, in the best condition, every time.`,`We understand the importance of on-time delivery, fresh flowers, high quality gifts, and the happiness that they bring. We know that each product we deliver is a special message from you to someone you care about. We stand by our products with a 98.7% customer satisfaction rate.`,`Customer Support Centre`,`When customer service is required, our goal is to assist you as quickly and efficiently as possible. We have adopted an online customer support system instead of telephone calls, to provide faster response times.`,`The Bloomex Customer Support Centre can be reached using dedicated`,`. Our trained customer care staff will review your information and respond to you as quickly as possible.`,`Please provide your order number and a photo for any quality issues.`,`Please refer to the following policies for clear and accurate service:`,`Our flowers come directly from the growers and are always fresh and beautiful. If you received damaged flowers or other damaged products:`,`Order & Cancelation Policy`,`Please double check all the information in your order when you place it.`,`Unfortunately during peak holidays it is extremely difficult to make changes to an existing order. We will make every effort, but change requests are not guaranteed.`,`Incomplete order:`,`Orders placed outside of Canada:`,`Orders placed outside of Canada or with an international credit card for delivery to Canada will be charged in USD. Provincial taxes of destination will apply.`,`Bulk Order Policy`,
        `Bulk Flowers are sent as they arrive, directly from Farms`,
        `Large Bulk Flower Orders:`,`Any Bulk orders with more then three (3) "bundles" of any one specific Bulk Flower item type must be placed with a minimum of two weeks advance notice. We will do our best to fulfil these requests but we cannot guarantee Next Day delivery`,`Large Bulk Flower Order Cancellation Policy:`,`Large Bulk Flower orders are pre-ordered from the farm specifically for each order. Due to the perishable nature of flowers, as well as the planning, production, and supply logistics involved, once an order is placed, it cannot be changed or cancelled.`,`Bulk Flower Substitution:`],
       },
        testCaseData: {
            tags: "@regression @policies @english",
            testCase: "BM-0084",
            testDescription: "Verify that the user can successfully navigate to the 'Order and Return Policy' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Order and Return Policy' page.",
        },
    },
    '0003-verify-policies': {
      menuItem: "Substitution Policy",
      pageName: "Policies",
      title: "substitution policy",
      headingVerification:'Substitution Policy',
      flowerCareVerification:{
        flowerCareHeading:'',
        flowerCareParagraphs:[`Due to our order volume fluctuation, we reserve the right to substitute with similar product of equal or greater value.`],
      },
      testCaseData: {
        tags: "@regression @policies @english",
        testCase: "BM-0085",
        testDescription: "Verify that the user can successfully navigate to the 'Substitution Policy' page.",
        testSummary: "Verify that the user can successfully navigate to the 'Substitution Policy' page.",
      },
    },
    '0004-verify-policies': {
      menuItem: "Delivery Policy",
      pageName: "Policies",
      title: "delivery policy",
      headingVerification:'Delivery Policy',
      flowerCareVerification:{
        flowerCareHeading:'',
        flowerCareParagraphs:[`Regular Delivery (Next Day+)`],
      },
      testCaseData: {
        tags: "@regression @policies @english",
        testCase: "BM-0086",
        testDescription: "Verify that the user can successfully navigate to the 'Privacy Policy' page.",
        testSummary: "Verify that the user can successfully navigate to the 'Privacy Policy' page.",
      },
    },
    '0005-verify-policies': {
      menuItem: "Promotion Policy",
      pageName: "Policies",
      title: "promotion policy",
      headingVerification:'Promotion & Discount Policy',
      flowerCareVerification:{
        flowerCareHeading:'',
        flowerCareParagraphs:[`Bloomex frequently runs promotions and discounts that target both current and new customers.`],
      },
      testCaseData: {
        tags: "@regression @policies @english",
        testCase: "BM-0087",
        testDescription: "Verify that the user can successfully navigate to the 'Delivery Policy' page.",
        testSummary: "Verify that the user can successfully navigate to the 'Delivery Policy' page.",
      },
    },
    '0006-verify-policies': {
      menuItem: "Promotion Policy",
      pageName: "Policies",
      title: "promotion policy",
      headingVerification:'Promotion & Discount Policy',
      flowerCareVerification:{
        flowerCareHeading:'',
        flowerCareParagraphs:[`Bloomex frequently runs promotions and discounts that target both current and new customers.`],
      },
      testCaseData: {
        tags: "@regression @policies @english",
        testCase: "BM-0088",
        testDescription: "Verify that the user can successfully navigate to the 'Promotion Policy' page.",
        testSummary: "Verify that the user can successfully navigate to the 'Promotion Policy' page.",
      },
    },
    '0007-verify-policies': {
      menuItem: "Contact-Free Delivery",
      pageName: "Policies",
      title: "contact free delivery",
      headingVerification:'Contact-Free Delivery',
      flowerCareVerification:{
        flowerCareHeading:'',
        flowerCareParagraphs:[`Bloomex adheres to all Health & Safety rules and guidelines as outlined by all levels of government.`,
          `Please be advised that there have been, and will continue to be, challenges outside of our control, that may occur at any given time, that may disrupt supply chain, production and delivery. We understand and appreciate the emotional magnitude of your purchase and have determinedly made every effort to fulfill every order on time and as ordered.`,
          `You will notice at checkout we provide an option to donate $2.00 to select Charities`,
          `Be strong and stay healthy. Thank you for your continued support.`,`Bloomex Canada`],
      },
      testCaseData: {
        tags: "@regression @policies @english",
        testCase: "BM-0089",
        testDescription: "Verify that the user can successfully navigate to the 'Contact-Free Delivery' page.",
        testSummary: "Verify that the user can successfully navigate to the 'Contact-Free Delivery' page.",
      },
    },
    '0008-verify-policies': {
      menuItem: "FAQs",
      pageName: "Policies",
      title: "faqs",
      headingVerification:'Bloomex Canada – Frequently Asked Questions',
    faqQuestions:[`1. What types of flowers can I order from Bloomex Canada?`,`2. Does Bloomex Canada provide same-day flower delivery?`,`3. Where does Bloomex Canada deliver flowers?`,`4. What are your store hours and customer service hours?`,`5. Can I include extras with my flower order?`,`6. How do I track my flower delivery?`,`7. What is your refund or replacement policy for flower orders?`,`8. Can I send flowers internationally through Bloomex Canada?`,`9. What are the best occasions to order flowers from Bloomex?`,`10. Why choose Bloomex Canada as your online florist?`],
      testCaseData: {
        tags: "@regression @policies @english",
        testCase: "BM-0090",
        testDescription: "Verify that the user can successfully navigate to the 'FAQs' page.",
        testSummary: "Verify that the user can successfully navigate to the 'FAQs' page.",
      },
    },
   
};

export function getData(testCase: string): PoliciesPageTestCaseData {
  const data = policiesPageTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
    }
    return data;
  }