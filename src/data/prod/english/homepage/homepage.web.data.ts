import { TestCaseData } from "@interfaces/testcase.data.interface";
import {
  NavDropdownItems,
  FooterLinks,
  HelpDeskChat,
  BloomexOtherDomainsLinks,
  ElementExists,
  verifyBreadCrumbs,
} from "@interfaces/homepage/homePage.interface";
import { generateRandomAlphanumeric } from "@utilities/random.utils";

interface HomepageTestCaseData {
  title?: string;
  testCaseData: TestCaseData;
  navDropdownsItems?: NavDropdownItems;
  navDropdownsList?: string[];
  verifyfooterLinks?: FooterLinks;
  HelpDeskChat?: HelpDeskChat;
  verifySocialMediaLinks?: FooterLinks;
  text?: string;
  sectionDescription?: string;
  bloomexLinks?: BloomexOtherDomainsLinks;
  href?: string;
  href2?: string;
  ImgAltText?: string;
  copyrightText?: string;
  elementExists?: ElementExists;
  elementExists2?: ElementExists;
  elementExists3?: ElementExists;
  expectedUrl?: string;
  verifyBreadCrumbs?: verifyBreadCrumbs;
}

const homepageTestData: { [key: string]: HomepageTestCaseData } = {
  "0001-verify-homepage": {
    title:
      "Flowers and Gift Baskets - Florist Canada | Flower Delivery | Flower Shop | Send Flowers Online",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0053",
      testDescription:
        "Validate that the title , slider images, bloomex logo, product cards are visible on the homepage",
      testSummary:
        "Validate that the title , slider images, bloomex logo, product cards are visible on the homepage",
    },
  },
  "0002-verify-homepage-nav-menuItems": {
    navDropdownsList: [
      "Français",
      "Best Sellers",
      "SALE!",
      "Special Collections",
      "Occasions",
      "Flowers | Plants",
      "By Price",
      "Gift Baskets",
      "Corporate",
      "Help/Account",
      "Policies",
    ],
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0054",
      testDescription:
        "Validate all navigation menu items are visible on the top on homepage",
      testSummary:
        "Validate all navigation menu items are visible on the top on homepage",
    },
  },
  "0003-verify-homepage-nav-menuItems-dropdowns": {
    navDropdownsItems: {
      "Best Sellers": [],
      "SALE!": [],
      "Special Collections": [
        "Mason Jar Collection",
        "Designer Collection",
        "Gourmet Collection",
        "Roses and Wine",
        "Lindt Gift Baskets",
        "The Bunches Collection",
        "Birthday Mug Collection",
        "Bud Vase Collection",
        "Teddy Bears, Vases and Chocolates",
        "Shop for Good",
      ],
      Occasions: [
        "Birthday Flowers and Gifts",
        "Sympathy and Funeral",
        "Anniversary",
        "Just Because",
        "Love and Romance",
        "New Baby",
        "Housewarming",
        "Get Well",
        "Gifts For Him",
        "Congratulations",
        "Thank You",
        "Apology Flowers",
        "Corporate Gifts",
      ],
      "Flowers | Plants": [
        "Roses",
        "Lilies",
        "Tropical Plants",
        "Mixed Bouquets",
        "Flower and Planter Baskets",
        "Daisies",
      ],
      "By Price": [
        "Best Value!",
        "Under $20",
        "$20 - $30",
        "$30 - $40",
        "$40 - $50",
        "$50+",
      ],
      "Gift Baskets": [
        "Gourmet Collection",
        "Fruit Baskets",
        "Beer and Wine Baskets",
        "Chocolate Gift Baskets",
        "Lindt Gift Basket Collection",
        "Luxury Gift Boxes",
        "Sweets Gift Baskets",
        "Cheese Gift Baskets",
        "Snack Gift Baskets",
        "Coffee and Tea Baskets",
        "Make-A-Wish® Collection",
        "Corporate Gift Baskets",
      ],
      Corporate: [
        "Apply for 20% Corporate Discount",
        "Quote Request Form",
        "Corporate Gift Baskets",
      ],
      "Help/Account": [
        "Your Bloomex Account",
        "Lost Password?",
        "Your Shopping Cart",
        "Your Bloomex Bucks",
        "Flower Care",
        "About Bloomex",
        "Bloomex Blog",
      ],
      Policies: [
        "Order and Return Policy",
        "Substitution Policy",
        "Delivery Policy",
        "Promotion Policy",
        "Privacy Policy",
        "Contact-Free Delivery",
        "FAQs",
      ],
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0055",
      testDescription:
        "Validate all navigation menu dropdowns items are visible on the top on homepage",
      testSummary:
        "Validate all navigation menu dropdowns items are visible on the top on homepage",
    },
  },
  "0004-verify-major-Canadian-flower-delivery-areas-links": {
    text: "Major Canadian Flower Delivery Areas:",
    verifyfooterLinks: {
      "Toronto Flowers": "/florist/toronto/",
      "Ottawa Flowers": "/florist/ottawa/",
      "Montreal Flowers": "/florist/montreal/",
      "Calgary Flowers": "/florist/calgary/",
      "Vancouver Flowers": "/florist/vancouver/",
      "Halifax Flowers": "/florist/halifax/",
      "Winnipeg Flowers": "/florist/winnipeg/",
      "Cambridge Flowers": "/florist/cambridge/",
      "Quebec City Flowers": "/florist/quebec-city/",
      "Edmonton Flowers": "/florist/edmonton/",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0073",
      testDescription:
        "Validate all major Canadian flower delivery areas links are visible and accessible on footer of homepage",
      testSummary:
        "Validate all major Canadian flower delivery areas links are visible and accessible on footer of homepage",
    },
  },
  "0005-verify-flower-shop-partners-links": {
    text: "Flower Shop Partners:",
    verifyfooterLinks: {
      "Carleton Place Florist": "https://blossomshop.ca",
      "Red Deer Florist": "https://reddeerfloral.ca",
      "Quebec City Florist": "https://fleurconcept.com",
      "Saint John Florist": "https://lancasterflorist.ca",
      "Sault Ste. Marie Florist": "https://mannflorist.com",
      "Thunder Bay Florist": "https://rollasonflowers.net",
      "North Battleford Florist": "https://milbankeflowers.ca",
      "Prince Albert Florist": "https://burkittsfloral.ca",
      "Quebec Florist": "https://fleur-quebec.com",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0072",
      testDescription:
        "Validate all flower shop partners links are visible and accessible on footer of homepage",
      testSummary:
        "Validate all flower shop partners links are visible and accessible on footer of homepage",
    },
  },
  "0006-verify-footer-links": {
    text: "Bloomex delivers Flowers, Gift Baskets and Plants Coast-to-Coast. You can trust us to deliver the best quality product at the best price. We have locations across Canada to ensure that the freshest flowers and the tastiest treats are delivered on time. You can trust us with your most important moments.",
    verifyfooterLinks: {
      "Track your Order": "/account/",
      "Terms of Use": "/terms-and-conditions/",
      "Flower Care Guide": "/flower-care/",
      "About Us": "/canada-official-florist/",
      "Community Partners": "/community-partners/",
      "Delivery Policy": "/delivery-policy/",
      "Privacy Policy": "/privacy-policy/",
      "Loyalty Program": "/loyalty-program/",
      "Substitution Policy": "/substitution-policy/",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0074",
      testDescription:
        "Validate all footer links are visible and accessible on footer of homepage",
      testSummary:
        "Validate all footer links are visible and accessible on footer of homepage",
    },
  },
  "0007-verify-social-media-links": {
    verifySocialMediaLinks: {
      Instagram: "https://www.instagram.com/bloomex.canada",
      Facebook: "https://www.facebook.com/profile.php?id=61576010663909",
      Pinterest: "https://www.pinterest.com/bloomexCA/",
      Partners: "https://bloomex.ca/community-partners/",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0075",
      testDescription:
        "Validate the homepage social media links are visible on footer of homepage",
      testSummary:
        "Validate the homepage social media links are visible on footer of homepage",
    },
  },
  "0008-verify-homepage-HelpDesk-Chat": {
    HelpDeskChat: {
      Name: "John Doe",
      "Test Message": "How can I place a anew product order?",
      "Chat Option": "I want to place a new order",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0069",
      testDescription:
        "Validate user can send message to Help Desk Chat on homepage",
      testSummary:
        "Validate user can send message to Help Desk Chat on homepage",
    },
  },
  "0009-verify-homepage-HelpDesk-Chat-close": {
    HelpDeskChat: {
      Name: "John Doe",
      "Test Message": "How can I track my order?",
      "Chat Option": "Need help with my existing order",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0070",
      testDescription: "Validate user can close Help Desk Chat on homepage",
      testSummary: "Validate user can close Help Desk Chat on homepage",
    },
  },
  "0010-verify-bloomex-other-domains-links": {
    text: "For deliveries outside of Canada",
    bloomexLinks: {
      AU: "https://bloomex.com.au",
      UK: "https://bloomex.ca/serenata-flowers/",
      US: "https://bloomexusa.com",
      CH: "https://www.lesfleurs.ch/flower-delivery-switzerland/",
      NZ: "https://bloomex.co.nz",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0056",
      testDescription:
        "Validate all bloomex other domains links are visible and accessible on top of homepage",
      testSummary:
        "Validate all bloomex other domains links are visible and accessible on top of homepage",
    },
  },
  "0011-verify-Contact-us-is-visible": {
    text: "Contact Us",
    bloomexLinks: {
      "Contact Us": "/contact/",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0057",
      testDescription:
        "Validate Contact Us is visible and accessible on top of homepage",
      testSummary:
        "Validate Contact Us is visible and accessible on top of homepage",
    },
  },
  "0012-verify-Free-20-gift-certificate-is-visible": {
    ImgAltText: "free_gift_en",
    href: "/free-20-gift-certificate/",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0058",
      testDescription:
        "Validate Free $20 Gift Certificate is visible and accessible on top of homepage",
      testSummary:
        "Validate Free $20 Gift Certificate is visible and accessible on top of homepage",
    },
  },
  "0013-verify-Free-20-gift-certificate-is-visible": {
    bloomexLinks: {
      Account: "/account/",
      "1 888-912-5666": "tel:18889125666",
      "Live Chat": "#chat",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0059",
      testDescription:
        "Verify that the Account , phone no and Live chat links are visible and accessible on the top on the homepage",
      testSummary:
        "Verify that the Account , phone no and Live chat links are visible and accessible on the top on the homepage",
    },
  },
  "0014-verify-Designed-BY-Our-Florists-and-Mason-Jar-Collection-sidebar-images":
    {
      elementExists: {
        tag: "a",
        href: "/specials/designer-collection-half-price/",
      },
      elementExists2: {
        tag: "a",
        href: "mason-jar-collection/",
      },
      testCaseData: {
        tags: "@regression @homepage @english",
        testCase: "BM-0060",
        testDescription:
          "Verify that the Designed BY Our Florists and Mason Jar Collection sidebar images are visible on the homepage",
        testSummary:
          "Verify that the Designed BY Our Florists and Mason Jar Collection sidebar images are visible on the homepage",
      },
    },
  "0015-verify-Birthday-Flowers-Sympathy-Flowers-and-Every-Day-Deals-options": {
    elementExists: {
      tag: "img",
      alt: "Birthday Flowers for Delivery in Canada",
    },
    elementExists2: {
      tag: "img",
      alt: "Sympathy and Funeral Flowers for Canada",
    },
    elementExists3: {
      tag: "img",
      alt: "Every Day Deals",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0061",
      testDescription:
        "Verify that the Birthday Flowers , Sympathy Flowers and Every Day Deals options are visible on the homepage",
      testSummary:
        "Verify that the Birthday Flowers , Sympathy Flowers and Every Day Deals options are visible on the homepage",
    },
  },
  "0016-verify-Can-Free-Delivery-link": {
    text: "$2.50/Can & Free Delivery",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0062",
      testDescription:
        "Verify that the 'Can & Free Delivery' link is visible on the top on homepage",
      testSummary:
        "Verify that the 'Can & Free Delivery' link is visible on the top on homepage",
    },
  },
  "0017-verify-Things-Engraved-link": {
    elementExists: {
      tag: "div",
      class: "things-engraved-banner",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0063",
      testDescription:
        "Verify that the 'Things-Engraved-link' is visible on the top on homepage",
      testSummary:
        "Verify that the 'Things-Engraved-link' is visible on the top on homepage",
    },
  },
  "0018-verify-Personalized-Gifts-for-any-occasion-link": {
    text: "Personalized Gifts for any occasion",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0064",
      testDescription:
        "Verify that the 'Personalized Gifts for any occasion' link is visible on the top on homepage",
      testSummary:
        "Verify that the 'Personalized Gifts for any occasion' link is visible on the top on homepage",
    },
  },
  "0019-verify-Same-Day-Flower-Delivery-Section": {
    text: "Same Day Flower Delivery",
    sectionDescription:
      "Bloomex Canada offers same day and next day delivery across Canada. With warehouses located across all major Canadian cities, our delivery network allows us to deliver fresh flowers locally, fast.",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0065",
      testDescription:
        "Verify that 'Same Day Flower Delivery' Section is visible on the homepage",
      testSummary:
        "Verify that 'Same Day Flower Delivery' Section is visible on the homepage",
    },
  },
  "0020-verify-Designer-Collection-Section": {
    text: "Designer Collection",
    sectionDescription:
      "The Designer Collection allows our team of professional, on-staff Floral Designers to choose the freshest and best flowers in stock, and create unique bouquets and arrangements. The perfect choice for a custom curated fresh flower bouquet.",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0066",
      testDescription:
        "Verify that 'Designer Collection' Section is visible on the homepage",
      testSummary:
        "Verify that 'Designer Collection' Section is visible on the homepage",
    },
  },
  "0021-verify-Gourmet-Collection-Section": {
    text: "Gourmet Collection",
    sectionDescription:
      "Our Gift Basket Gourmets have hunted down the most decadent treats ever and used them to create these Gift Baskets full of tempting treats. Comprised solely of the most luxurious treats these completely irresistible visions of a gift baskets are as good as it gets.",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0067",
      testDescription:
        "Verify that 'Gourmet Collection' Section is visible on the homepage",
      testSummary:
        "Verify that 'Gourmet Collection' Section is visible on the homepage",
    },
  },
  "0022-verify-Site-Map-link-and-copyright-text": {
    elementExists: {
      tag: "a",
      href: "/sitemap/",
    },
    copyrightText:
      " © 2005-2025 Bloomex - Order Flowers Quickly and Securely for Canada Delivery :: Order from a Trusted Canadian Online Florist",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0071",
      testDescription:
        "Verify that the 'Site Map' link and copyright text is visible and accessible on the homepage footer",
      testSummary:
        "Verify that the 'Site Map' link and copyright text is visible and accessible on the homepage footer",
    },
  },
  "0023-verify-Collection-menu": {
    bloomexLinks: {
      "The Autumn Collection": "/the-autumn-collection/",
      "Designer Collection": "/specials/designer-collection-half-price/",
      "Sympathy & Funeral Flowers": "/sympathy-and-funeral-flowers/",
      "Birthday Flowers & Gifts": "/birthday-flowers-and-gifts/",
      "Mason Jar Collection": "/mason-jar-collection/",
      "Anniversary Flowers": "/occasions/anniversary-flowers/",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0068",
      testDescription:
        "Verify that the Flowers Collection menu is visible on the homepage",
      testSummary:
        "Verify that the Flowers Collection menu is visible on the homepage",
    },
  },
  "0024-verify-random-navigation": {
    text: generateRandomAlphanumeric(5),
    expectedUrl: process.env.EN_URL,
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0179",
      testDescription:
        "Verify if user add random string at end of the url, user is navigated to the base url",
      testSummary:
        "Verify if user add random string at end of the url, user is navigated to the base url",
    },
  },
  "0025-verify-navigation-with-double-slash": {
    text: "/",
    expectedUrl: process.env.EN_URL + "/",
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0180",
      testDescription:
        "Verify if user add double slash at end of the url, user is navigated to the base url",
      testSummary:
        "Verify if user add double slash at end of the url, user is navigated to the base url",
    },
  },
  "0026-verify-breadcrumbs": {
    verifyBreadCrumbs: {
      "Best Sellers": "/special-promotions/best-sellers/",
      "Christmas": "/christmas-flowers-and-gifts/",
      "Special Collections": "/specials/",
      "Occasions": "/occasions/",
      "Flowers | Plants": "/flowers/",
      "By Price": "/shop-by-price/",
      "Gift Baskets": "/gift-baskets/",
      "Corporate": "/apply-for-20-corporate-discount/",
      "Help/Account": "/account/",
      "Policies": "/order-and-return-policy/",
    },
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0181",
      testDescription:
        "Verify breadcrumbs and urls of breadcrumbs are visible on the homepage",
      testSummary:
        "Verify breadcrumbs and urls of breadcrumbs are visible on the homepage",
    },
  },
  "0027-verify-popup": {
    testCaseData: {
      tags: "@regression @homepage @english",
      testCase: "BM-0182",
      testDescription:
        "Verify popup is visible on the homepage",
      testSummary:
        "Verify popup is visible on the homepage",
    },
  },
};

export function getData(testCase: string): HomepageTestCaseData {
  const data = homepageTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
