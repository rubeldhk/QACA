
import { FlowerCareVerificationInterface } from '@interfaces/account/account.interface';
import { TestCaseData } from '@interfaces/testcase.data.interface';
interface PoliciesPageTestCaseData {

  testCaseData: TestCaseData;   
  menuItems?: string[];
  menuItem?: string;
  pageName?: string;
  title?: string;
  headingVerification?: string;
  flowerCareVerification?: FlowerCareVerificationInterface;
  faqQuestions?: string[];
}

const policiesPageTestData: { [key: string]: PoliciesPageTestCaseData } = {
    '0001-verify-policies': {
        menuItems: ["Politiques", "Politique de commande et de retour", "Politique de substitution", "Politique de livraison", "Politique de promotion", "Politique de confidentialité", "Livraison sans contact", "FAQ"],
        pageName: "Politiques",
        menuItem: "Politiques",
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0083",
            testDescription: "Verify that all pages listed under the “Policies” menu are visible, accessible, and load correctly when selected.",
            testSummary: "Verify that all pages listed under the “Policies” menu are visible, accessible, and load correctly when selected.",
        },
    },
    '0002-verify-policies': {
        menuItem: "Commande et Politique de Retour",
        pageName: "Politiques",
        title: "commande et politique de retour",
        headingVerification: "Commande et politique de retour",
        flowerCareVerification: {
            flowerCareHeading:'',
            flowerCareParagraphs:[`La différence de Bloomex`],
        },
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0084",
            testDescription: "Verify that the user can successfully navigate to the 'Commande et Politique de Retour' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Commande et Politique de Retour' page.",
        },
    },
    '0003-verify-policies': {
        menuItem: "Politique de Substitution",
        pageName: "Politiques",
        title: "politique de substitution",
        headingVerification: "Politique de substitution",
        flowerCareVerification: {
            flowerCareHeading:'',
            flowerCareParagraphs:[`En raison de la fluctuation du volume de nos commandes, nous nous réservons le droit de les remplacer par des produits similaires de valeur égale ou supérieure.`],
        },
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0085",
            testDescription: "Verify that the user can successfully navigate to the 'Politique de Substitution' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Politique de Substitution' page.",
        },
    },
    '0004-verify-policies': {
        menuItem: "Politique de livraison",
        pageName: "Politiques",
        title: "politique de livraison",
        headingVerification: "Politique de livraison",
        flowerCareVerification: {
            flowerCareHeading:'',
            flowerCareParagraphs:[`Dans les zones de livraison le jour-même, la livraison est disponible avant 17h pour les adresses professionnelles et avant 20h pour les adresses résidentielles si vous passez votre commande avant 13h, heure locale, le jour même ou avant.`],
        },
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0086",
            testDescription: "Verify that the user can successfully navigate to the 'Politique de livraison' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Politique de livraison' page.",
        },
    },
    '0005-verify-policies': {
        menuItem: "Politique de Promotion",
        pageName: "Politiques",
        title: "politique de promotion",
        headingVerification: "Politique de promotion et rebais",
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0087",
            testDescription: "Verify that the user can successfully navigate to the 'Politique de Promotion' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Politique de Promotion' page.",
        },
    },
    '0006-verify-policies': {
        menuItem: "Politique de Confidentialité",
        pageName: "Politiques",
        title: "politique de confidentialite",
        flowerCareVerification: {
            flowerCareHeading:'',
            flowerCareParagraphs:[`Nous avons créé cette politique dintimité afin de démontrer notre engagement ferme.`],
        },
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0088",
            testDescription: "Verify that the user can successfully navigate to the 'Politique de Confidentialité' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Politique de Confidentialité' page.",
        },
    },
    '0007-verify-policies': {
        menuItem: "Livraison sans-contact",
        pageName: "Politiques",
        title: "livraison sans contact",
        headingVerification: "livraison sans-contact",
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0089",
            testDescription: "Verify that the user can successfully navigate to the 'Livraison sans-contact' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Livraison sans-contact' page.",
        },
    },
    '0008-verify-policies': {
        menuItem: "Foire aux questions",
        pageName: "Politiques",
        title: "foire aux questions",
        headingVerification: "Bloomex Canada – Questions Fréquemment Posées",
        faqQuestions:[`1. Quels types de fleurs puis-je commander chez Bloomex Canada ?`,`2. Bloomex Canada propose-t-il une livraison le jour même ?`,`3. Où Bloomex Canada livre-t-il des fleurs ?`,`4. Quelles sont vos heures d’ouverture et de service client ?`,`5. Puis-je ajouter des extras à ma commande de fleurs ?`,`6. Comment suivre ma livraison de fleurs ?`,`7. Quelle est votre politique de remboursement/remplacement ?`,`8. Puis-je envoyer des fleurs à l’international avec Bloomex Canada ?`,`9. Quelles sont les meilleures occasions pour commander des fleurs chez Bloomex ?`,`10. Pourquoi choisir Bloomex Canada comme fleuriste en ligne ?`],
        testCaseData: {
            tags: "@regression @policies @french",
            testCase: "BM-0090",
            testDescription: "Verify that the user can successfully navigate to the 'Foire aux questions' page.",
            testSummary: "Verify that the user can successfully navigate to the 'Foire aux questions' page.",
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