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
  elementExists?: ElementExists;
  elementExists2?: ElementExists;
  elementExists3?: ElementExists;
  copyrightText?: string;
  bloomexLinks?: BloomexOtherDomainsLinks;
  href?: string;
  ImgAltText?: string;
  expectedUrl?: string;
  verifyBreadCrumbs?: verifyBreadCrumbs;
}

const homepageTestData: { [key: string]: HomepageTestCaseData } = {
  "0001-verify-homepage": {
    title:
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0053",
      testDescription:
        "Validate that the title , slider images, bloomex logo, product cards are visible on the homepagee in French",
      testSummary:
        "Validate that the title , slider images, bloomex logo, product cards are visible on the homepage in French",
    },
  },
  "0002-verify-homepage-nav-menuItems": {
    navDropdownsList: [
      "English",
      "Meilleures ventes",
      "VENTE!",
      "Spéciaux",
      "Occasions",
      "Fleurs",
      "Par Prix",
      "Paniers Cadeaux",
      "Entreprise",
      "Aide / compte",
      "Politiques",
    ],
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0054",
      testDescription:
        "Validate all navigation menu items are visible on the top on homepage in French",
      testSummary: "Validate all navigation menu items are visible on the top on homepage in French",
    },
  },
  "0003-verify-homepage-nav-menuItems-dropdowns": {
    navDropdownsItems: {
      English: [],
      "Meilleures ventes": [],
      "VENTE!": [],
      Spéciaux: [
        "Collection Bocal de Maçon",
        "Collection de Créateurs",
        "Collection Gourmet",
        "Roses et vin",
        "Paniers Cadeaux Lindt - 50% prix",
        "Collection Poignée de Fleurs",
        "Collection-chope-anniversaire",
        "Bud Vase Collection",
        "Ours en Peluche, Vases et Chocolats",
        "Magasiner pour la bonté",
      ],
      Occasions: [
        "Fleurs et cadeaux d'anniversaire",
        "Sympathie et Funérailles",
        "Anniversaire",
        "Juste parce que",
        "Amour et Romance",
        "Nouveau Bébé",
        "Pendre la crémaillère",
        "Bon rétablissement",
        "Cadeaux Pour Lui",
        "Toutes nos Félicitations",
        "Remerciements",
        "Fleurs d'excuses",
        "Cadeaux d'entreprise",
      ],
      Fleurs: [
        "Des Roses",
        "Lys",
        "Plantes tropicales",
        "Bouquets Mélangés",
        "Paniers des fleurs et Plantes",
        "Marguerites",
      ],
      "Par Prix": [
        "Meilleure Valeur",
        "Moins de 20$",
        "20$ - 30$",
        "30$ - 40$",
        "40$ - 50$",
        "50$ plus",
      ],
      "Paniers Cadeaux": [
        "Collection Gourmet",
        "Paniers de Fruits",
        "Paniers de Bière et Vin",
        "Paniers Cadeaux Chocolat",
        "Collection de Paniers-Cadeaux Lindt",
        "Coffrets Cadeaux De Luxe",
        "Paniers Cadeaux Bonbons",
        "Paniers Cadeaux Fromage",
        "Paniers Cadeaux Collation",
        "Paniers à Café et thé",
        "Collection Make-A-Wish®",
        "Paniers Cadeaux d'entreprise",
      ],
      Entreprise: [
        "Demander un Rabais Corporatif de 20%",
        "Formulaire de Demande de Devis",
        "Paniers Cadeaux d'entreprise",
      ],
      "Aide / Compte": [
        "Votre compte Bloomex",
        "Mot de passe perdu?",
        "Votre Panier",
        "Espace Fidélité Bloomex",
        "Soin des Fleurs",
        "À propos de Bloomex",
        "Blog Bloomex",
      ],
      Politiques: [
        "Commande et Politique de Retour",
        "Politique de Substitution",
        "Politique de livraison",
        "Politique de Promotion",
        "Politique de Confidentialité",
        "Livraison sans-contact",
        "Foire aux questions",
      ],
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0055",
      testDescription:
        "Validate all navigation menu dropdowns items are visible on the top on homepage in French",
      testSummary:
        "Validate all navigation menu dropdowns items are visible on the top on homepage in French",
    },
  },
  "0004-verify-major-Canadian-flower-delivery-areas-links": {
    text: "Principales zones de livraison de fleurs au Canada:",
    verifyfooterLinks: {
      "Toronto Fleuriste": "/fleuriste/toronto/",
      "Ottawa Fleuriste": "/fleuriste/ottawa/",
      "Montreal Fleuriste": "/fleuriste/montreal/",
      "Calgary Fleuriste": "/fleuriste/calgary/",
      "Vancouver Fleuriste": "/fleuriste/vancouver/",
      "Halifax Fleuriste": "/fleuriste/halifax/",
      "Winnipeg Fleuriste": "/fleuriste/winnipeg/",
      "Cambridge Fleuriste": "/fleuriste/cambridge/",
      "Québec City Fleuriste": "/fleuriste/quebec-city/",
      "Edmonton Fleuriste": "/fleuriste/edmonton/",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0073",
      testDescription:
        "Validate all major Canadian flower delivery areas links are visible and accessible on footer of homepage in French",
      testSummary:
        "Validate all major Canadian flower delivery areas links are visible and accessible on footer of homepage in French",
    },
  },
  "0005-verify-flower-shop-partners-links": {
    text: "Fleuristes partenaires",
    verifyfooterLinks: {
      "Carleton Place Fleuriste": "https://blossomshop.ca",
      "Red Deer Fleuriste": "https://reddeerfloral.ca",
      "Quebec City Fleuriste": "https://fleurconcept.com",
      "Saint John Fleuriste": "https://lancasterflorist.ca",
      "Sault Ste. Marie Fleuriste": "https://mannflorist.com",
      "Thunder Bay Fleuriste": "https://rollasonflowers.net",
      "North Battleford Fleuriste": "https://milbankeflowers.ca",
      "Prince Albert Fleuriste": "https://burkittsfloral.ca",
      "Quebec Fleuriste": "https://fleur-quebec.com",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0072",
      testDescription:
        "Validate all flower shop partners links are visible and accessible on footer of homepage in French",
      testSummary:
        "Validate all flower shop partners links are visible and accessible on footer of homepage in French",
    },
  },
  "0006-verify-footer-links": {
    text: "© 2005-2025 Bloomex - Commandez des fleurs rapidement et en toute sécurité pour une livraison au Canada :: Commandez auprès d'un fleuriste canadien en ligne de confiance",
    verifyfooterLinks: {
      "Suivre votre commande": "/account/",
      "Conditions d'utilisation": "/terms-and-conditions/",
      "Guide de soin des fleurs": "/flower-care/",
      "À propos de nous": "/canada-official-florist/",
      "Partenaires communautaires": "/community-partners/",
      "Politique de livraison": "/delivery-policy/",
      "Politique de confidentialité": "/privacy-policy/",
      "Programme de fidélité": "/loyalty-program/",
      "Politique de substitution": "/substitution-policy/",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0074",
      testDescription:
        "Validate all footer links are visible and accessible on footer of homepage in French",
      testSummary:
        "Validate all footer links are visible and accessible on footer of homepage in French",
    },
  },
  "0007-verify-social-media-links": {
    verifySocialMediaLinks: {
      Instagram: "https://www.instagram.com/bloomex.canada",
      Facebook: "https://www.facebook.com/profile.php?id=61576010663909",
      Pinterest: "https://www.pinterest.com/bloomexCA/",
      Partners: "https://bloomex.ca/fr/partenaires-communautaires/",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0075",
      testDescription: "Validate the homepage social media links are visible on footer of homepage in French",
      testSummary: "Validate the homepage social media links are visible on footer of homepage in French",
    },
  },
  "0008-verify-homepage-HelpDesk-Chat": {
    HelpDeskChat: {
      Name: "John Doe",
      "Test Message": "How can I place a anew product order?",
      "Chat Option": "I want to place a new order",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0069",
      testDescription:
        "Validate user can send message to homepage Help Desk Chat on homepage",
      testSummary: "Validate user can send message to homepage Help Desk Chat on homepage",
    },
  },
  "0009-verify-homepage-HelpDesk-Chat-close": {
    HelpDeskChat: {
      Name: "John Doe",
      "Test Message": "How can I track my order?",
      "Chat Option": "Need help with my existing order",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0070",
      testDescription: "Validate user can close Help Desk Chat on homepage",
      testSummary: "Validate user can close Help Desk Chat on homepage",
    },
  },
  '0010-verify-bloomex-other-domains-links': {
    text:'Pour les livraisons à l\'extérieur du Canada',
    bloomexLinks: {
      'AU': "https://bloomex.com.au",
      'UK': "https://bloomex.ca/serenata-flowers/",
      'US': "https://bloomexusa.com",
      'CH': "https://www.lesfleurs.ch/flower-delivery-switzerland/",
      'NZ': "https://bloomex.co.nz",
    },
    testCaseData: {
      tags: '@regression @homepage @french',
      testCase: 'BM-0056',
      testDescription: 'Validate all bloomex other domains links are visible and accessible on top of homepage in French',
      testSummary: 'Validate all bloomex other domains links are visible and accessible on top of homepage in French',
    },
  },
  '0011-verify-Contact-us-is-visible': {
    text: 'Contactez nous',
    bloomexLinks: {
      'Contactez nous': '/fr/contactez-nous/',
    },
    testCaseData: {
      tags: '@regression @homepage @french',
      testCase: 'BM-0057',
      testDescription: 'Validate Contact Us is visible and accessible on top of homepage in French',
      testSummary: 'Validate Contact Us is visible and accessible on top of homepage in French',
    },
  },
  '0012-verify-Free-20-gift-certificate-is-visible': {
    ImgAltText: 'free_gift_fr',
    href: '/fr/cheque-cadeau-20-gratuit/',
    testCaseData: {
      tags: '@regression @homepage @french',
      testCase: 'BM-0058',
      testDescription: 'Validate Free $20 Gift Certificate is visible and accessible on top of homepage in French',
      testSummary: 'Validate Free $20 Gift Certificate is visible and accessible on top of homepage in French',
    },
  },
  "0013-verify-Free-20-gift-certificate-is-visible": {
    bloomexLinks: {
      "Compte": "/account/",
      "1 888-912-5666": "tel:18889125666",
      "Chat": "#chat",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0059',
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
        href: "/fr/speciaux/collection-speciale-concepteur/",
      },
      elementExists2: {
        tag: "a",
        href: "/fr/la-collection-de-bocaux-macons/",
      },
      testCaseData: {
        tags: "@regression @homepage @french",
        testCase: 'BM-0060',
        testDescription:
          "Verify that the Designed BY Our Florists and Mason Jar Collection sidebar images are visible on the homepage",
        testSummary:
          "Verify that the Designed BY Our Florists and Mason Jar Collection sidebar images are visible on the homepage",
      },
    },
  "0015-verify-Birthday-Flowers-Sympathy-Flowers-and-Every-Day-Deals-options": {
    elementExists: {
      tag: "a",
      href: "/fr/fleurs-et-cadeaux-danniversaire/",
    },
    elementExists2: {
      tag: "a",
      href: "/fr/fleurs-de-sympathie-et-funerailles/",
    },
    elementExists3: {
      tag: "a",
      href: "/fr/vente/",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0061',
      testDescription:
        "Verify that the Birthday Flowers , Sympathy Flowers and Every Day Deals options are visible on the homepage in French",
      testSummary:
        "Verify that the Birthday Flowers , Sympathy Flowers and Every Day Deals options are visible on the homepage in French",
    },
  },
  "0016-verify-Can-Free-Delivery-link": {
    text: "2,50 $/canette et livraison gratuite",
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0062',
      testDescription:
        "Verify that the 'Can & Free Delivery' link is visible on the top on homepage in French",
      testSummary:
        "Verify that the 'Can & Free Delivery' link is visible on the top on homepage in French",
    },
  },
  "0017-verify-Things-Engraved-link": {
    elementExists: {
      tag: "div",
      class: "things-engraved-banner",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0063',
      testDescription: "Verify that the 'Things-Engraved-link' is visible on the top on homepage in French",
      testSummary: "Verify that the 'Things-Engraved-link' is visible on the top on homepage in French",
    },
  },
  "0018-verify-Personalized-Gifts-for-any-occasion-link": {
    text: "Des cadeaux personnalisés pour toutes les occasions",
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0064',
      testDescription: "Verify that the 'Personalized Gifts for any occasion' link is visible on the top on homepage in French",
      testSummary: "Verify that the 'Personalized Gifts for any occasion' link is visible on the top on homepage in French",
    },
  },
  "0019-verify-Same-Day-Flower-Delivery-Section": {
    text: "Livraison de fleurs le jour-même",
    sectionDescription: "Bloomex Canada propose une livraison le jour même et le lendemain partout au Canada. Grâce à des entrepôts situés dans toutes les grandes villes canadiennes, notre réseau de livraison nous permet de livrer des fleurs fraîches localement et rapidement.",
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0065',
      testDescription: "Verify that 'Same Day Flower Delivery' Section is visible on the homepage in French",
      testSummary: "Verify that 'Same Day Flower Delivery' Section is visible on the homepage in French",
    },
  },
  "0020-verify-Designer-Collection-Section": {
    text: "Collection Concepteur",
    sectionDescription: "Un prix \"Spécial\" pour les bouquets Collection d’artisans conçus par  nos professionels des Fleurs et nos artistes qui allient magie et créativité. Ces beaux et sublimes bouquets se composent de leurs fraichement coupées et sélectionnés par nos experts floraux.",
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0066',
      testDescription: "Verify that 'Designer Collection' Section is visible on the homepage in French",
      testSummary: "Verify that 'Designer Collection' Section is visible on the homepage in French",
    },
  },
  "0021-verify-Gourmet-Collection-Section": {
    text: "Collection Gourmet",
    sectionDescription: "Nos paniers cadeaux Gourmets se composent de chocolats et des friandises aussi succulents les uns que les autres qui sauront vous séduire pour un prix spécial grâce à 50% de rabais. Ces compositions luxueuses constitueront un cadeau parfait pour vos évènements.",
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0067',
      testDescription: "Verify that 'Gourmet Collection' Section is visible on the homepage in French",
      testSummary: "Verify that 'Gourmet Collection' Section is visible on the homepage in French",
    },
  },
  "0022-verify-Site-Map-link-and-copyright-text": {
    elementExists: {
      tag: "a",
      href: "/sitemap/",
    },
    copyrightText: "© 2005-2025 Bloomex - Commandez des fleurs rapidement et en toute sécurité pour une livraison au Canada :: Commandez auprès d'un fleuriste canadien en ligne de confiance",
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0071',
      testDescription: "Verify that the 'Site Map' link and copyright text is visible and accessible on the homepage footer in French",
      testSummary: "Verify that the 'Site Map' link and copyright text is visible and accessible on the homepage footer in French",
    },
  },
  "0023-verify-Collection-menu": {
    bloomexLinks: {
      'La collection d\'automne': "/fr/collection-dautomne/",
      'Collection du Concepteur': "/fr/speciaux/collection-speciale-concepteur/",
      'Fleurs de Sympathie': "/fr/fleurs-de-sympathie-et-funerailles/",
      'Anniversaire Fleurs et Cadeaux': "/fr/fleurs-et-cadeaux-danniversaire/",
      'Collection Bocal de Maçon': "/fr/la-collection-de-bocaux-macons/",
      'Fleurs d\'anniversaire':'/fr/l-occasions/fleurs-danniversaire/'
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0068',
      testDescription: "Verify that the Flowers Collection menu is visible on the homepage in French",
      testSummary: "Verify that the Flowers Collection menu is visible on the homepage in French",
    },
  },
  "0024-verify-random-navigation": {
    text: generateRandomAlphanumeric(5),
    expectedUrl: process.env.EN_URL,
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0179',
      testDescription: "Verify if user add random string at end of the url, user is navigated to the base url",
      testSummary: "Verify if user add random string at end of the url, user is navigated to the base url",
    },
  },
  "0025-verify-navigation-with-double-slash": {
    text: '/',
    expectedUrl: process.env.FR_URL + '/',
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: 'BM-0180',
      testDescription: "Verify if user add double slash at end of the url, user is navigated to the base url",
      testSummary: "Verify if user add double slash at end of the url, user is navigated to the base url",
    },
  },
  "0026-verify-breadcrumbs": {
    verifyBreadCrumbs: {
      "Best Sellers": "/promotions-speciales/meilleures-ventes/",
      "Noël": "/fr/fleurs-et-cadeaux-de-noel/",
      "Spéciaux": "/fr/speciaux/",
      "Occasions": "/fr/l-occasions//",
      "Fleurs": "/fr/fleurs/",
      "Par Prix": "/fr/par-prix/",
      "Paniers Cadeaux": "/fr/paniers-cadeaux/",
      "Entreprise": "/fr/demander-un-rabais-corporatif-de-20/",
      "Aide / Compte": "/fr/compte/",
      "Politiques": "/fr/commande-et-politique-de-retour/",
    },
    testCaseData: {
      tags: "@regression @homepage @french",
      testCase: "BM-0181",
      testDescription:
        "Verify breadcrumbs and urls of breadcrumbs are visible on the homepage in French",
      testSummary:
        "Verify breadcrumbs and urls of breadcrumbs are visible on the homepage in French",
    },
  },
  "0027-verify-popup": {
    testCaseData: {
      tags: "@regression @homepage @french",
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
