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
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@smoke @regression @french",
      testCase: "BM-0186",
      testDescription:
        "Verify Les ombres de rose product is displayed correctly on searching the product name",
      testSummary:
        "Search for Les ombres de rose product and validate product details are displayed correctly",
    },
    ProductName: "Les ombres de rose",
    ProductPrice: "27,49",
    ProductDescription:
      "Ce bouquet appétissant épais d'ombres roses et de violet ravira n'importe quel destinataire.",
  },
  "2-verify-search": {
    title:
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@smoke @regression @french",
      testCase: "BM-0187",
      testDescription:
        "Verify Collection de grappes de Noël product is displayed correctly on searching the product name",
      testSummary:
        "Search for Collection de grappes de Noël product and validate product details are displayed correctly",
    },
    ProductName: "Collection de grappes de Noël",
    ProductPrice: "32,99",
    ProductDescription:
      "Envoyez ce bouquet plein et copieux fabriqué à la main et lié à la main de fleurs de saison fraîchement coupées, sur le thème des Fêtes, fortement accentuées avec des charges d'hiver traditionnelles.",
  },
  "3-verify-search": {
    title:
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@smoke @regression @french",
      testCase: "BM-0188",
      testDescription:
        "Verify Assortiment de roses dans un Bocal de Maçon product is displayed correctly on searching the product name",
      testSummary:
        "Search for Assortiment de roses dans un Bocal de Maçon product and validate product details are displayed correctly",
    },
    ProductName: "Assortiment de roses dans un Bocal de Maçon",
    ProductPrice: "21,99",
    ProductDescription:
      "Présentation de notre trio enchanteur de roses assorties dodues élégamment nichées dans un Bocal de Maçon rustique.",
  },
  "4-verify-search": {
    title:
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@smoke @regression @french",
      testCase: "BM-0189",
      testDescription:
        "Verify Douzaine de Roses Rouges en Boîte product is displayed correctly on searching the product name",
      testSummary:
        "Search for Douzaine de Roses Rouges en Boîte product and validate product details are displayed correctly",
    },
    ProductName: "Douzaine de Roses Rouges en Boîte",
    ProductPrice: "65,99",
    ProductDescription:
      "Quelle meilleure façon d'exprimer vos soins et votre affection? Pour permettre à ces belles fleurs de durer beaucoup plus longtemps, elles sont expédiées fraîches, en herbe et prêtes à fleurir.",
  },
  "5-verify-search": {
    title:
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@smoke @regression @french",
      testCase: "BM-0190",
      testDescription:
        "Verify Panier- Plantes Floraison Blanches product is displayed correctly on searching the product name",
      testSummary:
        "Search for Panier- Plantes Floraison Blanches product and validate product details are displayed correctly",
    },
    ProductName: "Panier- Plantes Floraison Blanches",
    ProductPrice: "43,99",
    ProductDescription:
      "Ce cadeau de plantes à fleurs blanches, qui pousse et dure longtemps, est un moyen idéal de dire merci, bon rétablissement, bon anniversaire ou de penser à vous.",
  },
  "6-verify-search": {
    title:
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@smoke @regression @french",
      testCase: "BM-0191",
      testDescription:
        "Verify Gerberas dans un Bocal de Maçon product is displayed correctly on searching the product name",
      testSummary:
        "Search for Gerberas dans un Bocal de Maçon product and validate product details are displayed correctly",
    },
    ProductName: "Gerberas dans un Bocal de Maçon",
    ProductPrice: "21,99 $",
    ProductDescription:
      "Plongez-vous dans la beauté vibrante de ce bouquet à couper le souffle composé de trois gerberas assortis élégamment disposés dans un Bocal de Maçon rustique. Polyvalent et captivant, cet ensemble est conçu pour insuffler à toute occasion spéciale un éclat de couleur et de joie."
  },
  "7-verify-search": {
    title:
      "Fleurs & Paniers Cadeaux - Fleuriste Canada | Livraison de fleurs | Boutique de fleurs",
    testCaseData: {
      tags: "@smoke @regression @french",
      testCase: "BM-0192",
      testDescription:
        "Verify Panier de Café Classique product is displayed correctly on searching the product name",
      testSummary:
        "Search for Panier de Café Classique product and validate product details are displayed correctly",
    },
    ProductName: "Panier de Café Classique ",
    ProductPrice: "49,49 $",
    ProductDescription:
      "Surprenez les amateurs de café dans votre vie avec ce panier de cadeau élégant contenant tout ce qu'ils ont en besoin pour une pause-café! Ce panier décadent a un grand assortiment de café gourmet et des sucreries."
  },
};

export function getData(testCase: string): SearchTestCaseData {
  const data = searchTestData[testCase];
  if (!data) {
    throw new Error(`Test case data not found for: ${testCase}`);
  }
  return data;
}
