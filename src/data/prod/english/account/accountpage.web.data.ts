
import { ContactUsFormInterface, FlowerCareVerificationInterface, HoursAndContactInformationInterface, LoginFormInterface, LostPasswordFormInterface, ShoppingCartFormInterface } from '@interfaces/account/account.interface';
import { TestCaseData } from '@interfaces/testcase.data.interface';
interface AccountPageTestCaseData {

  testCaseData: TestCaseData;
  menuItem?: string;
  menuItems?: string[];
  title?: string;
  loginData?:LoginFormInterface
  hoursAndContactInformation?:HoursAndContactInformationInterface
  contactUsForm?:ContactUsFormInterface
  createPasswordHeading?:LostPasswordFormInterface
  shoppingCartHeading?:ShoppingCartFormInterface
  headingVerification?:string
  flowerCareVerification?:FlowerCareVerificationInterface
}

const accountPageTestData: { [key: string]: AccountPageTestCaseData } = {
    '0001-verify-account': {
        menuItems: ["Your Bloomex Account", "Lost Password?", "Your Shopping Cart", "Your Bloomex Bucks", "Flower Care", "About Bloomex", "Bloomex Blog"],
        testCaseData: {
            tags: "@regression @account @english",
            testCase: "BM-0072",
            testDescription: "Verify that the account menu items are visible",
            testSummary: "Verify that the account menu items are visible",
        },
    },
    '0002-verify-account': {
      menuItem: "Your Bloomex Account",
      title: "Account Details | Bloomex Canada",
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0073",
        testDescription: "Verify that the user can successfully navigate to the Bloomex account page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex account page.",
      },
    },
    '0003-verify-account': {
      menuItem: "Lost Password?",
      title: "Lost Password | Bloomex Canada",
      testCaseData: { 
        tags: "@regression @accountpage @english",
        testCase: "BM-0074",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Lost Password page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Lost Password page.",
      },
    },
    '0004-verify-account': {
      menuItem: "Your Shopping Cart",
      title: "Shopping Cart | Bloomex Canada",
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0075",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Shopping Cart page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Shopping Cart page.",
      },
    },
    '0005-verify-account': {
      menuItem: "Your Bloomex Bucks",
      title: "Your Bloomex Buck History Info",
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0076",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Bucks page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Bucks page.",
      },
    },
    "0006-verify-account": {
      menuItem: "Flower Care",
      title: "flower care",
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0077",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Flower Care page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Flower Care page.",
      },
    },
    "0007-verify-account": {
      menuItem: "About Bloomex",
      title: "about bloomex",
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0078",
        testDescription: "Verify that the user can successfully navigate to the Bloomex About Bloomex page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex About Bloomex page.",
      },
    },
    "0008-verify-account": {
      menuItem: "Bloomex Blog",
      title: "Bloomex Blogs",
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0079",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Bloomex Blog page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Bloomex Blog page.",
      },
    },
    '0009-verify-account': {
      menuItem: "Your Bloomex Account",
      title: "account",
      loginData: {
        LoginHeading: "Welcome Back!",
        LoginText: "Log into your Bloomex Account:",
        EmailPlaceholder: "Enter email",
        PasswordPlaceholder: "Password",
        RememberMeOption: "Remember me",
        LoginButton: "Login",
        troubleShootText: "Log In Problems?",
      },
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0080",
        testDescription: 'Verify that the Account page correctly displays the "Welcome Back!" title, "Log into your Bloomex Account:" text, "Enter Email" and "Password" placeholders, "Remember me" option, and "Login" button.',
        testSummary: 'Verify that the Account page correctly displays the "Welcome Back!" title, "Log into your Bloomex Account:" text, "Enter Email" and "Password" placeholders, "Remember me" option, and "Login" button.',
      },
    },
    '0010-verify-account': {
      menuItem: "Your Bloomex Account",
      title: "account",
      hoursAndContactInformation: {
        HoursAndContactInformation: "Hours & Contact Information",
        SupportHours: "Available 24 hours a day, 7 days a week",
        PhoneNumber: "1.888.912.5666",
        EmailAddress: "care@bloomex.ca",
      },
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0082",
        testDescription: '"Verify that the Account page correctly displays the ""Hours & Contact Information"" section, including the support hours (Available 24 hours a day, 7 days a week), phone number (1.888.912.5666), and email address (care@bloomex.ca)."',
        testSummary: '"Verify that the Account page correctly displays the ""Hours & Contact Information"" section, including the support hours (Available 24 hours a day, 7 days a week), phone number (1.888.912.5666), and email address (care@bloomex.ca)."',
      },
    },
    '0011-verify-account': {
      menuItem: "Your Bloomex Account",
      title: "account",
      contactUsForm: {
        ContactUsHeading: "Need Help? Contact Us Here",
        NameInputPlaceholder: "Enter your name",
        EmailInputPlaceholder: "Enter your email",
        PhoneInputPlaceholder: "Enter your phone",
        MessageInputPlaceholder: "Your message",
        SubmitButtonText: "Submit",
      },
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0081",
        testDescription: 'Verify that the account page correctly display the "Need Help? Contact Us Here" , Name input placeholder "Enter your name" , Email input placeholder "Enter your Email" , Phone placeholder "Enter your phone" and Message "Your message" and submit button text "Submit"',
        testSummary: 'Verify that the account page correctly display the "Need Help? Contact Us Here" , Name input placeholder "Enter your name" , Email input placeholder "Enter your Email" , Phone placeholder "Enter your phone" and Message "Your message" and submit button text "Submit"',
      },
    },
    '0012-verify-account': {
      menuItem: "Lost Password?",
      title: "account",
      createPasswordHeading: {
        createPasswordHeading: "Create Password",
        paragraphText: "Create a new password for your Bloomex account.",
        stilhavingtroubleText: "Still having trouble?",
        para1Text: "Please enter your e-mail address then click on the Send button.",
        para2Text: "A link to password recovery will be sent to your email account.",
      },
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0156",
        testDescription: 'Verify that the ‘Create Password’ section on the Lost Password page loads correctly and displays all required text elements',
        testSummary: 'Verify that the ‘Create Password’ section on the Lost Password page loads correctly and displays all required text elements',
      },
    },
    '0013-verify-account': {
      menuItem: "Lost Password?",
      title: "account",
      createPasswordHeading: {
        paragraphText: "We may from time to time update your password for security purposes. In order to help our team troubleshoot your issues, we ask that you do the following:",
        stilhavingtroubleText: "Still having trouble logging in?",
        para1Text: "1. Check your spam folders in case the reset email ended up there.",
        para2Text: "2. Contact our support team by chat, phone or email to have your password reset, or place your order for you.",
       
      },
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0157",
        testDescription: 'Verify that the ‘Create Password’ section on the Lost Password page loads correctly and displays all required text elements',
        testSummary: 'Verify that the ‘Create Password’ section on the Lost Password page loads correctly and displays all required text elements',
      },
    },
    '0014-verify-account': {
      menuItem: "Your Shopping Cart",
      title: "cart",
      shoppingCartHeading:{
        ShoppingCartSummary: "Shopping cart Summary",
        YourCartIsEmpty: "Your Cart is empty.",
      },  
      testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0097",
        testDescription: 'Verify that the Cart page loads correctly and displays the “Shopping Cart Summary” heading along with the message “Your Cart is empty.”',
        testSummary: 'Verify that the Cart page loads correctly and displays the “Shopping Cart Summary” heading along with the message “Your Cart is empty.”',
      },
    },
    '0015-verify-account': {
      menuItem: "Your Shopping Cart",
      title: "cart",
      hoursAndContactInformation: {
        HoursAndContactInformation: "Shopping cart Summary",
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0083",
        testDescription: 'Verify that the Account page correctly displays the ""Shopping cart Summary"" section.',
        testSummary: 'Verify that the Account page correctly displays the ""Shopping cart Summary"" section.',
      },
    },
    '0016-verify-account': {
      menuItem: "Flower Care",
      title: "flower care",
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-BM-0099",
        testDescription: 'Verify that all paragraphs on the “Flower Care” page load correctly and Navigate correctly.',
        testSummary: 'Verify that all paragraphs on the “Flower Care” page load correctly and Navigate correctly.',
      }
    },
    '0017-verify-account': {
      menuItem: "Flower Care",
      title: "flower care",
      flowerCareVerification: {
        flowerCareHeading: "Roses",
        flowerCareParagraphs:["All our long stem roses come from Ecuador and Colombia.","Your roses are thirsty and need to drink water for at least 6 hours to perk up. Please follow instructions below and your roses will bloom over the next few days.","1) Remove the outside guard petals. These rugged outer petals were left on to protect your roses during shipment.","2) Cut 2-3 cm off the stems and remove leaves and thorns that fall below the water line.","3) Fill vase with cold water and add 1 packet of flower food.","4) Re-cut stems, change water and add second packet of flower food on day 4.","5) For the longest life, keep your roses away from direct sunlight and heat."]
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0158",
        testDescription: "Verify that 'Roses' Heading and it's paragragraph on 'Flower Care' Page",
        testSummary: "Verify that 'Roses' Heading and it's paragragraph on 'Flower Care' Page",
      }
    },
    '0018-verify-account': {
      menuItem: "Flower Care",
      title: "flower care",
      flowerCareVerification: {
        flowerCareHeading: "Sweetheart Roses",
        flowerCareParagraphs:["We have direct contracts with Ontario Sweetheart roses growers. Let your Sweetheart Roses drink water for 8 hours to perk up. With proper care, your roses will bloom over the next few days.","1) Remove the outside guard petals. These rugged outer petals were left on to protect your roses during shipment.","2) Cut 2-3cm off the stems and remove leaves that fall below the water line.","3) Fill vase with water and add 1 packet of flower food.","4) Re-cut stems, change water and add second packet of flower food on day 4.","5) For the longest life, keep your roses away from direct sunlight and heat."]
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0158",
        testDescription: `Verify that "Sweetheart Roses" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Sweetheart Roses" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0019-verify-account': {
      menuItem: "Flower Care",
      title: "flower care",
      flowerCareVerification: {
        flowerCareHeading: "Alstroemeria",
        flowerCareParagraphs:[`We source Alstroemeria both from South America and local greenhouses. Peruvian Lilies are long-lasting, but dehydrate easily and may look thirsty upon arrival. Let your lilies drink water for about 8 hours to perk up.`,`1) Cut 3cm off the stems and remove leaves that fall below the water line.`,`2) Fill vase with water and add 1 packet of flower food.`,`3) Re-cut stems, change water and add second packet of flower food on day 4.`,`4) Keep your Peruvian Lilies away from direct sunlight and heat.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0159",
        testDescription: `Verify that "Alstroemeria" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Alstroemeria" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0020-verify-account': {
      menuItem: "Flower Care",
      title: "flower care",
      flowerCareVerification: {
        flowerCareHeading: "Sunflowers",
        flowerCareParagraphs:[`Tulips continue growing after being cut and naturally bend toward sources of light. Your tulips may already have a gentle arc and tendency to cascade over the edge of the vase.`,`1) Cut 2cm off the stems and remove the leaves below the water line.`,`2) Fill vase with water and add 1 packet of flower food.`,`3) Re-cut stems, change water and add second packet of flower food on day 2.`,`4) Keep tulips out of sunlight and heat.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0160",
        testDescription: `Verify that "Sunflowers" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Sunflowers" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0021-verify-account': {
      menuItem: "Flower Care",
      title: "flower care",
      flowerCareVerification: {
        flowerCareHeading: "Lilies",
        flowerCareParagraphs:[`Let your lilies drink water for 8 hours to perk up. With proper care, your lilies will bloom over the next few days.`,`1) Cut 3cm off the stems and remove leaves that fall below the water line.`,`2) Fill vase with water and add 1 packet of flower food.`,`3) Re-cut stems, change water and add second packet of flower food on day 3.`,`4) Keep your lilies away from direct sunlight, heat and drafts.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0162",
        testDescription: `Verify that "Lilies" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Lilies" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0022-verify-account': {
      menuItem: "Flower Care",
      title: "flower care",
      flowerCareVerification: {
        flowerCareHeading: "Gerbera Daisies",
        flowerCareParagraphs:[`1) Remove the plastic cups but leave the straws on the stems for a longer vase life. Allow them to drink for 8-12 hours to perk up.`,`2) Cut 3cm off the stems.`,`3) Fill vase with water and add 1 packet of flower food.`,`4) Re-cut stems, change water and add second packet of flower food on day 3.`,`5) Daisies are sensitive to dirty water, which can cause bent necks. If this happens, re-cut stems and place in fresh water.`,`6) Keep your daisies away from direct sunlight and heat.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0163",
        testDescription: `Verify that "Gerbera Daisies" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Gerbera Daisies" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0023-verify-account': {
      menuItem: "Bloomex Blog",
      title: "blogs",
      headingVerification: "Bloomex Canada Blog: Flower Delivery Professionals",
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0100",
        testDescription: `Verify that the Bloomex Blog page loads and displays the text “Bloomex Canada Blog: Flower Delivery Professionals.”`,
        testSummary: `Verify that the Bloomex Blog page loads and displays the text “Bloomex Canada Blog: Flower Delivery Professionals.”`,
      }
    },
    '0024-verify-account': {
      menuItem: "About Bloomex",
      title: "about bloomex",
      headingVerification: "Fresher Flowers for Lower Price",
      flowerCareVerification:{
        flowerCareHeading: "",
        flowerCareParagraphs:[`Bloomex is a national Canadian Floral and Gift company. Because of our unique direct to consumer business model we are able to provide fresher floral product at lower price. Ordering from us you are saving between 35-50% compared to traditional retail florists and internet order gatherers posing as local florists.`,`Our Advantages:`,`That means our flowers are low-priced (no middlemen) and fresher (transit time from fields to recipient is less)`,`2. We provide better value for flowers.`,`We do not take commission for taking the order and then sending it for fulfillment to local florist. Order taking and flower arranging are done on 93% at company owned facilities. Our buying power is strong, so we buy quality flowers for less. The savings we are passing to you.`,`3. We provide better customer service.`,`We deal with your order directly from order taking to arranging flowers and delivery. So we know exactly where your order is at any given moment.`,`4. We provide better quality product.`,`Since we do 93% of all orders at company owned facilities, we employ the same standards for flower freshness, design, packaging and delivery. The quality and accuracy are quaranteed no matter where your order is going to Hull, Quebec or Hamilton, Ontario.`,`5. We Care!`]
      },
    testCaseData: {
        tags: "@regression @accountpage @english",
        testCase: "BM-0103",
        testDescription: `Verify that the About Us page loads and displays the title “Fresher Flowers at a Lower Price” and all supporting paragraphs correctly.`,
        testSummary: `Verify that the About Us page loads and displays the title “Fresher Flowers at a Lower Price” and all supporting paragraphs correctly.`,
      }
    },


    

};

export function getData(testCase: string): AccountPageTestCaseData {
  const data = accountPageTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
    }
    return data;
  }