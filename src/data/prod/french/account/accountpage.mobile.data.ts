import { ContactUsFormInterface, FlowerCareVerificationInterface, HoursAndContactInformationInterface, LoginFormInterface, LostPasswordFormInterface, ShoppingCartFormInterface } from '@interfaces/account/account.interface';
import { TestCaseData } from '@interfaces/testcase.data.interface';
interface AccountPageTestCaseData {

  testCaseData: TestCaseData;
  menuItem?: string;
  menuItems?: string[] | ["Aide / Compte" | "Mot de passe oublié?" | "Votre panier" | "Vos Bucks Bloomex" | "Soins des fleurs" | "À propos de Bloomex" | "Blog de Bloomex"];
  title?: string;
  pageName?: string;
  loginData?:LoginFormInterface
  hoursAndContactInformation?:HoursAndContactInformationInterface
  contactUsForm?:ContactUsFormInterface
  createPasswordHeading?:LostPasswordFormInterface  
  shoppingCartHeading?:ShoppingCartFormInterface
  flowerCareVerification?:FlowerCareVerificationInterface
  headingVerification?:string
}

const accountPageTestData: { [key: string]: AccountPageTestCaseData } = {
    '0001-verify-account': {
        menuItems: ["Aide / Compte", "Mot de passe oublié?", "Votre panier", "Vos Bucks Bloomex", "Soins des fleurs", "À propos de Bloomex", "Blog de Bloomex"],
        testCaseData: {
            tags: "@regression @account @french",
            testCase: "BM-0072",
            testDescription: "Verify that the account menu items are visible",
            testSummary: "Verify that the account menu items are visible",
        },
    },
    '0002-verify-account': {
      menuItem: "Aide / Compte",
        title: "Détails du compte | Bloomex Canada",
        pageName: "Aide / Compte",
      testCaseData: {
        tags: "@regression @accountpage @french",   
          testCase: "BM-0073",
        testDescription: "Verify that the user can successfully navigate to the Bloomex account page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex account page.",
      },
    },
    '0003-verify-account': {
      menuItem: "Mot de passe perdu?",
      title: "Créer un mot de passe | Bloomex Canada",
      pageName: "Aide / Compte",
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0074",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Lost Password page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Lost Password page.",
      },
    },
    '0004-verify-account': {
      menuItem: "Votre Panier",
      title: "Panier | Bloomex Canada",
      pageName: "Aide / Compte",
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0075",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Shopping Cart page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Shopping Cart page.",
      },
    },
    
    '0005-verify-account': {
      menuItem: "Espace Fidélité Bloomex",
      title: "Vos Bucks Bloomex | Bloomex Canada",
      pageName: "Aide / Compte",
      testCaseData: {
        tags: "@regression @accountpage @french",
          testCase: "BM-0076",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Bucks page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Bucks page.",
      },
    },
    '0006-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "Soins des fleurs | Bloomex Canada",
      pageName: "Aide / Compte",
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0077",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Flower Care page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Flower Care page.",
      },
    },
    '0007-verify-account': {
      menuItem: "À propos de Bloomex",
      title: "À propos de Bloomex | Bloomex Canada",
      pageName: "Aide / Compte",
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0078",
        testDescription: "Verify that the user can successfully navigate to the Bloomex About Bloomex page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex About Bloomex page.",
      },
    },
    '0008-verify-account': {
      menuItem: "Blog de Bloomex",
      title: "Blog de Bloomex | Bloomex Canada",
      pageName: "Aide / Compte",
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0079",
        testDescription: "Verify that the user can successfully navigate to the Bloomex Bloomex Blog page.",
        testSummary: "Verify that the user can successfully navigate to the Bloomex Bloomex Blog page.",
      },
    },
    '0009-verify-account': {
      menuItem: "Votre compte Bloomex",
      title: "compte",
      pageName: "Aide / Compte",
      loginData: {
        LoginHeading: "Bienvenue de retour!",
        LoginText: "Connectez-vous à votre compte Bloomex:",
        EmailPlaceholder: "Entrez votre email",
        PasswordPlaceholder: "Mot de passe",
        RememberMeOption: "Se souvenir de moi",
        LoginButton: "Connexion",
        troubleShootText: "Problèmes de connexion?",
      },
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0080",
        testDescription: 'Verify that the Account page correctly displays the "Welcome Back!" title, "Log into your Bloomex Account:" text, "Enter Email" and "Password" placeholders, "Remember me" option, and "Login" button.',
        testSummary: 'Verify that the Account page correctly displays the "Welcome Back!" title, "Log into your Bloomex Account:" text, "Enter Email" and "Password" placeholders, "Remember me" option, and "Login" button.',
      },
    },
    '0010-verify-account': {
      menuItem: "Votre compte Bloomex",
      title: "compte",
      pageName: "Aide / Compte",
      hoursAndContactInformation: {
        HoursAndContactInformation: "Horaires et coordonnées",
        SupportHours: "Disponible 24 heures sur 24, 7 jours sur 7",
        PhoneNumber: "1.888.912.5666",
        EmailAddress: "care@bloomex.ca",
      },
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0082",
        testDescription: '"Verify that the Account page correctly displays the ""Hours & Contact Information"" section, including the support hours (Available 24 hours a day, 7 days a week), phone number (1.888.912.5666), and email address (care@bloomex.ca)."',
        testSummary: '"Verify that the Account page correctly displays the ""Hours & Contact Information"" section, including the support hours (Available 24 hours a day, 7 days a week), phone number (1.888.912.5666), and email address (care@bloomex.ca)."',
      },
    },
    '0011-verify-account': {
      menuItem: "Votre compte Bloomex",
      title: "compte",
      pageName: "Aide / Compte",
      contactUsForm: {
        ContactUsHeading: "Besoin d'aide? Contactez-nous ici",
        NameInputPlaceholder: "Entrez votre nom",
        EmailInputPlaceholder: "Entrez votre email",
        PhoneInputPlaceholder: "Entrez votre numéro de téléphone",
        MessageInputPlaceholder: "Votre message",
        SubmitButtonText: "Envoyer",
      },
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0081",
        testDescription: 'Verify that the account page correctly display the "Need Help? Contact Us Here" , Name input placeholder "Enter your name" , Email input placeholder "Enter your Email" , Phone placeholder "Enter your phone" and Message "Your message" and submit button text "Submit"',
        testSummary: 'Verify that the account page correctly display the "Need Help? Contact Us Here" , Name input placeholder "Enter your name" , Email input placeholder "Enter your Email" , Phone placeholder "Enter your phone" and Message "Your message" and submit button text "Submit"',
      },
    },
    '0012-verify-account': {
      menuItem: "Votre compte Bloomex",
      title: "compte",
      pageName: "Aide / Compte",
      createPasswordHeading: {
        createPasswordHeading: "Créer un mot de passe",
        paragraphText: "Créez un nouveau mot de passe pour votre compte Bloomex.",
        stilhavingtroubleText: "Vous avez encore des difficultés?",
        para1Text: "Veuillez entrer votre adresse email puis cliquez sur le bouton Envoyer.",
        para2Text: "Un lien de récupération de mot de passe sera envoyé à votre compte email.",
      },
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0156",
        testDescription: 'Verify that the "Créer un mot de passe" section on the Lost Password page loads correctly and displays all required text elements',
        testSummary: 'Verify that the "Créer un mot de passe" section on the Lost Password page loads correctly and displays all required text elements',
      },
    },
    '0013-verify-account': {
      menuItem: "Votre compte Bloomex",
      title: "compte",
      pageName: "Aide / Compte",
      createPasswordHeading: {
        paragraphText: "Nous pouvons, de temps en temps, mettre à jour votre mot de passe à des fins de sécurité. Afin d'aider notre équipe à résoudre vos problèmes, nous vous demandons de faire ce qui suit :",
        stilhavingtroubleText: "Vous avez encore des difficultés?",
        para1Text: "1. Vérifiez vos dossiers de spam en cas où l'email de réinitialisation est arrivé là-bas.",
        para2Text: "2. Contactez notre équipe de support par chat, téléphone ou email pour réinitialiser votre mot de passe, ou placer votre commande pour vous.",
       
      },
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0157",
        testDescription: 'Verify that the "Créer un mot de passe" section on the Lost Password page loads correctly and displays all required text elements',
        testSummary: 'Verify that the "Créer un mot de passe" section on the Lost Password page loads correctly and displays all required text elements',
      },
    },
    '0014-verify-account': {
      menuItem: "Votre Panier",
      title: "panier",
      pageName: "Aide / Compte",
      shoppingCartHeading:{
        ShoppingCartSummary: "RÉSUMÉ DU PANIER",
        YourCartIsEmpty: "Votre panier est actuellement vide.",
      },   
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0097",
        testDescription: 'Verify that the Cart page loads correctly and displays the “Récapitulatif du panier” heading along with the message “Votre panier est vide.”',
        testSummary: 'Verify that the Cart page loads correctly and displays the “Récapitulatif du panier” heading along with the message “Votre panier est vide.”',
      },
    },
    '0015-verify-account': {
      menuItem: "Votre Panier",
      title: "compte",
      pageName: "Aide / Compte",
      hoursAndContactInformation: {
        HoursAndContactInformation: "Horaires et coordonnées",
        SupportHours: "Disponible 24 heures sur 24, 7 jours sur 7",
        PhoneNumber: "1.888.912.5666",
        EmailAddress: "care@bloomex.ca",
      },
      testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-00820",
        testDescription: 'Verify that the Account page correctly displays the ""Hours & Contact Information"" section, including the support hours (Available 24 hours a day, 7 days a week), phone number (1.888.912.5666), and email address (care@bloomex.ca).',
        testSummary: 'Verify that the Account page correctly displays the ""Hours & Contact Information"" section, including the support hours (Available 24 hours a day, 7 days a week), phone number (1.888.912.5666), and email address (care@bloomex.ca).',
      },
    },
    '0016-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "soin des fleurs",
      pageName: "Aide / Compte",
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-BM-0099",
        testDescription: 'Verify that all paragraphs on the “Flower Care” page load correctly and Navigate correctly.',
        testSummary: 'Verify that all paragraphs on the “Flower Care” page load correctly and Navigate correctly.',
      }
    },
    '0017-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "soin des fleurs",
      pageName: "Aide / Compte",
      flowerCareVerification: {
        flowerCareHeading: "Les Roses",
        flowerCareParagraphs:[`Toutes nos longues roses de tige viennent d'Ã‰quateur et de Colombie.`,`Vos roses sont altÃ©rÃ©es et ont besoin de boire l'eau pendant au moins 6 heures pour se redresser vers le haut.  Veuillez suivre les instructions ci-dessous et vos roses fleuriront au cours des jours Ã  venir.`,`1) enlevez les pÃ©tales de garde d'extÃ©rieur.  Ces pÃ©tales externes raboteux ont Ã©tÃ© laissÃ©s dessus pour protÃ©ger vos roses pendant l'expÃ©dition.`,`2) Coupez 2 ou 3 centimÃ¨tres outre des tiges et enlevez les parts et les Ã©pines qui tombent au-dessous de la ligne de flottaison.`,`3) Remplissez un vase de l'eau froide et ajoutez 1 paquet de nourriture de fleur.`,`4) Coupez des tiges, changez l'eau et ajoutze le deuxiÃ¨me paquet de la nourriture de fleur le jour 4.`,`5) Pour meilleur rÃ©sultat, gardez vos roses de la lumiÃ¨re du soleil et du chauffage`]
      },
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0158",
        testDescription: "Verify that 'Roses' Heading and it's paragragraph on 'Flower Care' Page",
        testSummary: "Verify that 'Roses' Heading and it's paragragraph on 'Flower Care' Page",
      }
    },
    '0018-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "soin des fleurs",
      pageName: "Aide / Compte",
      flowerCareVerification: {
        flowerCareHeading: "Sweetheart Roses",
        flowerCareParagraphs:["We have direct contracts with Ontario Sweetheart roses growers. Let your Sweetheart Roses drink water for 8 hours to perk up. With proper care, your roses will bloom over the next few days.","1) Remove the outside guard petals. These rugged outer petals were left on to protect your roses during shipment.","2) Cut 2-3cm off the stems and remove leaves that fall below the water line.","3) Fill vase with water and add 1 packet of flower food.","4) Re-cut stems, change water and add second packet of flower food on day 4.","5) For the longest life, keep your roses away from direct sunlight and heat."]
      },
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0158",
        testDescription: `Verify that "Sweetheart Roses" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Sweetheart Roses" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0019-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "soin des fleurs",
      pageName: "Aide / Compte",
      flowerCareVerification: {
        flowerCareHeading: "Alstroemeria",
        flowerCareParagraphs:[`We source Alstroemeria both from South America and local greenhouses. Peruvian Lilies are long-lasting, but dehydrate easily and may look thirsty upon arrival. Let your lilies drink water for about 8 hours to perk up.`,`1) Cut 3cm off the stems and remove leaves that fall below the water line.`,`2) Fill vase with water and add 1 packet of flower food.`,`3) Re-cut stems, change water and add second packet of flower food on day 4.`,`4) Keep your Peruvian Lilies away from direct sunlight and heat.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0159",
        testDescription: `Verify that "Alstroemeria" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Alstroemeria" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0020-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "soin des fleurs",
      pageName: "Aide / Compte",
      flowerCareVerification: {
        flowerCareHeading: "Sunflowers",
        flowerCareParagraphs:[`Tulips continue growing after being cut and naturally bend toward sources of light. Your tulips may already have a gentle arc and tendency to cascade over the edge of the vase.`,`1) Cut 2cm off the stems and remove the leaves below the water line.`,`2) Fill vase with water and add 1 packet of flower food.`,`3) Re-cut stems, change water and add second packet of flower food on day 2.`,`4) Keep tulips out of sunlight and heat.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0160",
        testDescription: `Verify that "Sunflowers" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Sunflowers" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0021-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "soin des fleurs",
      pageName: "Aide / Compte",
      flowerCareVerification: {
        flowerCareHeading: "Lilies",
        flowerCareParagraphs:[`Let your lilies drink water for 8 hours to perk up. With proper care, your lilies will bloom over the next few days.`,`1) Cut 3cm off the stems and remove leaves that fall below the water line.`,`2) Fill vase with water and add 1 packet of flower food.`,`3) Re-cut stems, change water and add second packet of flower food on day 3.`,`4) Keep your lilies away from direct sunlight, heat and drafts.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0162",
        testDescription: `Verify that "Lilies" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Lilies" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0022-verify-account': {
      menuItem: "Soin des Fleurs",
      title: "soin des fleurs",
      pageName: "Aide / Compte",
      flowerCareVerification: {
        flowerCareHeading: "Gerbera Daisies",
        flowerCareParagraphs:[`1) Remove the plastic cups but leave the straws on the stems for a longer vase life. Allow them to drink for 8-12 hours to perk up.`,`2) Cut 3cm off the stems.`,`3) Fill vase with water and add 1 packet of flower food.`,`4) Re-cut stems, change water and add second packet of flower food on day 3.`,`5) Daisies are sensitive to dirty water, which can cause bent necks. If this happens, re-cut stems and place in fresh water.`,`6) Keep your daisies away from direct sunlight and heat.`]
      },
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0163",
        testDescription: `Verify that "Gerbera Daisies" Heading and it's paragragraph on "Flower Care" Page`,
        testSummary: `Verify that "Gerbera Daisies" Heading and it's paragragraph on "Flower Care" Page`,
      }
    },
    '0023-verify-account': {
      menuItem: "Blog de Bloomex",
      title: "blog de bloomex",
      pageName: "Aide / Compte",
      headingVerification: "Blog de Bloomex Canada: Professionnels de livraison de fleurs",
    testCaseData: {
        tags: "@regression @accountpage @french",
        testCase: "BM-0100",
        testDescription: `Verify that the Bloomex Blog page loads and displays the text “Bloomex Canada Blog: Flower Delivery Professionals.”`,
        testSummary: `Verify that the Bloomex Blog page loads and displays the text “Bloomex Canada Blog: Flower Delivery Professionals.”`,
      }
    },
    '0024-verify-account': {
      menuItem: "À propos de Bloomex",
      title: "à propos de bloomex",
      pageName: "Aide / Compte",
      headingVerification: "Fleurs frais à un prix plus bas",
      flowerCareVerification:{
        flowerCareParagraphs:[`Bloomex est une entreprise florale et de cadeaux nationale canadienne. Grâce à notre modèle de business unique direct-vers-le-consommateur, nous sommes en mesure de fournir des produits floraux plus frais à un prix plus bas. Commander chez nous, vous économisez entre 35 et 50% par rapport aux fleuristes traditionnels et aux collecteurs d'ordres en ligne se présentant comme des fleuristes locaux.`,`Nos avantages:`,`Cela signifie que nos fleurs sont à un prix bas (sans intermédiaires) et frais (temps de transit de champs à récepteur est moins long)`,`2. Nous offrons une meilleure valeur pour les fleurs.`,`Nous ne prenons pas de commission pour prendre l'ordre et l'envoyer pour la livraison à un fleuriste local. Le prise d'ordre et l'arrangement des fleurs sont effectués à 93% dans des installations propriétaires de la société. Notre pouvoir d'achat est fort, nous achetons des fleurs de qualité pour moins cher. Les économies que nous vous offrons.`,`3. Nous offrons un meilleur service client.`,`Nous traitons votre commande directement de la prise d'ordre à l'arrangement des fleurs et à la livraison. Nous savons exactement où se trouve votre commande à tout moment.`,`4. Nous offrons un meilleur produit de qualité.`,`Puisque nous faisons 93% de toutes les commandes dans des installations propriétaires de la société, nous appliquons les mêmes normes pour la fraîcheur des fleurs, le design, le conditionnement et la livraison. La qualité et la précision sont garanties quelle que soit la destination de votre commande à Hull, Québec ou Hamilton, Ontario.`,`5. Nous nous soucions!`]
      },
    testCaseData: {
        tags: "@regression @accountpage @french",
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