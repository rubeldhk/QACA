import { Locator, Page, test, TestInfo } from "@playwright/test";
import { getEmailByRecipient } from "@utilities/mailosaur/mailosaur.utils";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import { getCurrentDay } from "@utilities/general.utils";
import {
  completeOrder,
  cardDetails,
} from "@interfaces/checkout/checkout.interface";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class CheckoutPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };

  public constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightActionFactory = new PlaywrightActionFactory(
      this.page,
      this.testInfo
    );
    this.playwrightVerificationFactory = new PlaywrightVerificationFactory(
      this.page,
      this.testInfo
    );

    // Define locators with descriptions
    this.Englishlocators = {
      createAccountFirstName: {
        description: "First Name",
        locator: this.page.locator(
          "//h3[text()='CREATE ACCOUNT']/..//input[@id='first_name']"
        ),
      },
      createAccountEmail: {
        description: "Email",
        locator: this.page.locator(
          "//h3[text()='CREATE ACCOUNT']/..//input[@id='email']"
        ),
      },
      createAccountPassword: {
        description: "Password",
        locator: this.page.locator(
          "//h3[text()='CREATE ACCOUNT']/..//input[@id='password']"
        ),
      },
      createAccountPhone: {
        description: "Phone",
        locator: this.page.locator(
          "//h3[text()='CREATE ACCOUNT']/..//input[@id='phone_1']"
        ),
      },
      proceedToCreateAccountButton: {
        description: "Proceed As Guest Button",
        locator: this.page.locator("//button[text()='Proceed as Guest']"),
      },
      shippingAddressCity: {
        description: "City",
        locator: this.page.locator("//input[@id='billing_info_city']"),
      },
      selectDeliveryDate: {
        description: "Delivery Date",
        locator: this.page.locator("//div[@class='ddate_btn']//button"),
      },
      shippingAddressLastName: {
        description: "Last Name",
        locator: this.page.locator("//input[@id='billing_info_last_name']"),
      },
      deliveryDate: {
        description: "Delivery Date Option",
        locator: this.page.locator(""),
      },
      payButton: {
        description: "Pay Button",
        locator: this.page.locator("//button[text()='Pay & Go To Delivery']"),
      },
      accountButton: {
        description: "Account Button",
        locator: this.page.locator("(//p[normalize-space()='Account'])[1]"),
      },
      submitCouponCodeButton: {
        description: "Submit Coupon Code Button",
        locator: this.page.locator("//button[@id='coupon_btn']"),
      },
      couponCodeError: {
        description: "Coupon Code Error",
        locator: this.page.locator(
          "//div[normalize-space()='Coupon has been expired.']"
        ),
      },
      coupanCodeVerifcationText: {
        description: "Coupon Code Verification Text",
        locator: this.page.locator(
          "//div[normalize-space()='Your coupon is applied. Discount is 95.00%.']"
        ),
      },
      couponCode: {
        description: "Coupon Code",
        locator: this.page.locator("//input[@id='coupon_code']"),
      },
      cardOption: {
        description: "Card Option",
        locator: this.page.locator(
          "(//div[contains(@class,'PaymentMethodFormAccordionItem-cover')])[1]"
        ),
      },
      cardNumber: {
        description: "Card Number",
        locator: this.page.locator("//input[@name='cardNumber']"),
      },
      cardExpiry: {
        description: "Card Expiry",
        locator: this.page.locator("//input[@name='cardExpiry']"),
      },
      cardCvc: {
        description: "Card CVC",
        locator: this.page.locator("//input[@name='cardCvc']"),
      },
      cardName: {
        description: "Card Name",
        locator: this.page.locator("//input[@name='billingName']"),
      },
      payButtonAfterCardDetails: {
        description: "Pay Button",
        locator: this.page.locator(
          "//button[@data-testid='hosted-payment-submit-button']"
        ),
      },
      cardCountryDropdown: {
        description: "Card Country Dropdown",
        locator: this.page.locator("//select[@name='billingCountry']"),
      },
      firstName: {
        description: "First Name",
        locator: this.page.locator("//input[@name='shipping_info_first_name']"),
      },
      lastName: {
        description: "Last Name",
        locator: this.page.locator("//input[@name='shipping_info_last_name']"),
      },
      email: {
        description: "Email",
        locator: this.page.locator("//input[@name='shipping_info_user_email']"),
      },
      phone: {
        description: "Phone",
        locator: this.page.locator("//input[@name='shipping_info_phone_1']"),
      },
      companyName: {
        description: "Company Name",
        locator: this.page.locator("//input[@name='shipping_info_company']"),
      },
      suite: {
        description: "Suite",
        locator: this.page.locator(`//input[@name="shipping_info_suite"]`),
      },
      streetNumber: {
        description: "Street Number",
        locator: this.page.locator(`//input[@id="billing_info_street_number"]`),
      },
      streetNumberOnCheckoutPage: {
        description: "Street Number on Checkout Page",
        locator: this.page.locator(
          "//input[@id='shipping_info_street_number']"
        ),
      },
      streetNameOnCheckoutPage: {
        description: "Street Name on Checkout Page",
        locator: this.page.locator(`//input[@id="shipping_info_street_name"]`),
      },
      streetName: {
        description: "Street Name",
        locator: this.page.locator(`//input[@id="billing_info_street_name"]`),
      },
      city: {
        description: "City",
        locator: this.page.locator(`//input[@name="shipping_info_city"]`),
      },
      postcode: {
        description: "Postcode",
        locator: this.page.locator(`//input[@name="billing_info_zip"]`),
      },
      postcodeOnCheckoutPage: {
        description: "Postcode on Checkout Page",
        locator: this.page.locator(`//input[@id="shipping_info_zip"]`),
      },
      occasion: {
        description: "Occasion",
        locator: this.page.locator(`//select[@name="customer_occasion"]`),
      },
      personalGreeting: {
        description: "Personal Greeting",
        locator: this.page.locator(`//textarea[@name="card_msg"]`),
      },
      signature: {
        description: "Signature",
        locator: this.page.locator(`//textarea[@name="signature"]`),
      },
      deliveryInstructions: {
        description: "Delivery Instructions",
        locator: this.page.locator(`//textarea[@name="card_comment"]`),
      },
      completeOrderButton: {
        description: "Complete Order Button",
        locator: this.page.getByRole("button", { name: "COMPLETE ORDER" }),
      },
      orderConfirmation: {
        description: "Order Confirmation",
        locator: this.page.locator(`//div[@class="thankyou-customer-name"]`),
      },
      registerbutton: {
        description: "Register Button",
        locator: this.page.locator("//button[text()='Register']"),
      },
      nextStepButton: {
        description: "Next Step Button",
        locator: this.page.locator("//button[normalize-space()='Next Step']"),
      },
    };
    this.Frenchlocators = {
      createAccountFirstName: {
        description: "First Name",
        locator: this.page.locator(
          "//h3[text()='EXPRESSE CAISSE']/../../../..//input[@id='first_name']"
        ),
      },
      createAccountEmail: {
        description: "Email",
        locator: this.page.locator(
          "//h3[text()='EXPRESSE CAISSE']/../../../..//input[@id='email']"
        ),
      },
      createAccountPassword: {
        description: "Password",
        locator: this.page.locator(
          "//h3[text()='EXPRESSE CAISSE']/../../../..//input[@id='password']"
        ),
      },
      createAccountPhone: {
        description: "Phone",
        locator: this.page.locator(
          "//h3[text()='EXPRESSE CAISSE']/../../../..//input[@id='phone_1']"
        ),
      },
      proceedToCreateAccountButton: {
        description: "Proceed As Guest Button",
        locator: this.page.locator("//button[text()='Proceed as Guest']"),
      },
      shippingAddressCity: {
        description: "City",
        locator: this.page.locator("//input[@id='billing_info_city']"),
      },
      selectDeliveryDate: {
        description: "Delivery Date",
        locator: this.page.locator("//div[@class='ddate_btn']//button"),
      },
      shippingAddressLastName: {
        description: "Last Name",
        locator: this.page.locator("//input[@id='billing_info_last_name']"),
      },
      deliveryDate: {
        description: "Delivery Date Option",
        locator: this.page.locator(""),
      },
      payButton: {
        description: "Pay Button",
        locator: this.page.locator(
          "//button[text()='PAYER ET ALLER A LA LIVRAISON']"
        ),
      },
      accountButton: {
        description: "Account Button",
        locator: this.page.locator("(//p[normalize-space()='Account'])[1]"),
      },
      submitCouponCodeButton: {
        description: "Submit Coupon Code Button",
        locator: this.page.locator("//button[@id='coupon_btn']"),
      },
      couponCodeError: {
        description: "Coupon Code Error",
        locator: this.page.locator(
          "//div[normalize-space()='Coupon has been expired.']"
        ),
      },
      coupanCodeVerifcationText: {
        description: "Coupon Code Verification Text",
        locator: this.page.locator(
          "//div[normalize-space()='Votre coupon a été appliqué. La remise est 95.00%.']"
        ),
      },
      couponCode: {
        description: "Coupon Code",
        locator: this.page.locator("//input[@id='coupon_code']"),
      },
      cardOption: {
        description: "Card Option",
        locator: this.page.locator(
          "(//div[contains(@class,'PaymentMethodFormAccordionItem-cover')])[1]"
        ),
      },
      cardNumber: {
        description: "Card Number",
        locator: this.page.locator("//input[@name='cardNumber']"),
      },
      cardExpiry: {
        description: "Card Expiry",
        locator: this.page.locator("//input[@name='cardExpiry']"),
      },
      cardCvc: {
        description: "Card CVC",
        locator: this.page.locator("//input[@name='cardCvc']"),
      },
      cardName: {
        description: "Card Name",
        locator: this.page.locator("//input[@name='billingName']"),
      },
      payButtonAfterCardDetails: {
        description: "Pay Button",
        locator: this.page.locator(
          "//button[@data-testid='hosted-payment-submit-button']"
        ),
      },
      cardCountryDropdown: {
        description: "Card Country Dropdown",
        locator: this.page.locator("//select[@name='billingCountry']"),
      },
      firstName: {
        description: "First Name",
        locator: this.page.locator("//input[@name='shipping_info_first_name']"),
      },
      lastName: {
        description: "Last Name",
        locator: this.page.locator("//input[@name='shipping_info_last_name']"),
      },
      email: {
        description: "Email",
        locator: this.page.locator("//input[@name='shipping_info_user_email']"),
      },
      phone: {
        description: "Phone",
        locator: this.page.locator("//input[@name='shipping_info_phone_1']"),
      },
      companyName: {
        description: "Company Name",
        locator: this.page.locator("//input[@name='shipping_info_company']"),
      },
      suite: {
        description: "Suite",
        locator: this.page.locator(`//input[@name="shipping_info_suite"]`),
      },
      streetNumber: {
        description: "Street Number",
        locator: this.page.locator(`//input[@id="billing_info_street_number"]`),
      },
      streetName: {
        description: "Street Name",
        locator: this.page.locator(`//input[@id="billing_info_street_name"]`),
      },
      city: {
        description: "City",
        locator: this.page.locator(`//input[@name="shipping_info_city"]`),
      },
      postcode: {
        description: "Postcode",
        locator: this.page.locator(`//input[@name="billing_info_zip"]`),
      },
      occasion: {
        description: "Occasion",
        locator: this.page.locator(`//select[@name="customer_occasion"]`),
      },
      personalGreeting: {
        description: "Personal Greeting",
        locator: this.page.locator(`//textarea[@name="card_msg"]`),
      },
      signature: {
        description: "Signature",
        locator: this.page.locator(`//textarea[@name="signature"]`),
      },
      deliveryInstructions: {
        description: "Delivery Instructions",
        locator: this.page.locator(`//textarea[@name="card_comment"]`),
      },
      completeOrderButton: {
        description: "Complete Order Button",
        locator: this.page.getByRole("button", { name: "COMPLETE ORDER" }),
      },
      orderConfirmation: {
        description: "Order Confirmation",
        locator: this.page.locator(`//div[@class="thankyou-customer-name"]`),
      },
      registerbutton: {
        description: "Register Button",
        locator: this.page.locator("//button[text()='Inscription']"),
      },
      nextStepButton: {
        description: "Next Step Button",
        locator: this.page.locator(
          `//button[normalize-space()="L'ÉTAPE SUIVANTE"]`
        ),
      },
      streetNumberOnCheckoutPage: {
        description: "Street Number on Checkout Page",
        locator: this.page.locator(
          "//input[@id='shipping_info_street_number']"
        ),
      },
      streetNameOnCheckoutPage: {
        description: "Street Name on Checkout Page",
        locator: this.page.locator(`//input[@id="shipping_info_street_name"]`),
      },
      postcodeOnCheckoutPage: {
        description: "Postcode on Checkout Page",
        locator: this.page.locator(`//input[@id="shipping_info_zip"]`),
      },
    };

    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
  }
  public async gotoAccountPage(): Promise<void> {
    await test.step("Go to Account Page", async () => {
      await this.playwrightActionFactory.click(this.locators.accountButton);
    });
  }
  public async fillCreateAccountForm(
    email: string,
    password: string,
    firstName: string,
    phone: string
  ): Promise<void> {
    await test.step("Fill Email 📧", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.createAccountEmail,
        email
      );
      await this.playwrightActionFactory.waitForSec(2);
    });
    await test.step("Fill Password 📧", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.createAccountPassword,
        password
      );
      await this.playwrightActionFactory.waitForSec(2);
    });
    await test.step("Fill First Name 🙍", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.createAccountFirstName,
        firstName
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Fill Phone 📱", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.createAccountPhone,
        phone
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Click on Register Button ▶️", async () => {
      await this.playwrightActionFactory.click(this.locators.registerbutton);
      await this.playwrightActionFactory.waitForSec(3);
    });
  }

  public async verifyConfirmationEmail(
    email: string,
    emailBody: string,
    emailSubject: string
  ): Promise<void> {
    await test.step("Verify Confirmation Email 🔎", async () => {
      await this.playwrightActionFactory.waitForSec(2);
      const emailMessage = await getEmailByRecipient(email);
      await this.playwrightActionFactory.waitForSec(5);
      console.log("emailMessage.html?.body", emailMessage.html?.body);
      const emailSubjectWithoutSpaces = emailSubject.replace(/\s+/g, "");
      const emailBodyWithoutSpaces = emailBody.replace(/\s+/g, "");
      const emailSubjectFromMessage =
        emailMessage.subject?.toString()?.replace(/\s+/g, "") || "";
      const emailBodyFromMessage =
        emailMessage.html?.body?.replace(/\s+/g, "") || "";
      await this.playwrightVerificationFactory.assertAreEqual(
        emailBodyFromMessage,
        emailBodyWithoutSpaces
      );
      await this.playwrightVerificationFactory.assertAreEqual(
        emailSubjectFromMessage,
        emailSubjectWithoutSpaces
      );
    });
  }

  public async typeCity(city: string): Promise<void> {
    await test.step("Fill City 🌆", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.shippingAddressCity,
        city
      );
    });
  }

  public async typeLastName(lastName: string): Promise<void> {
    await test.step("Fill Last Name 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.shippingAddressLastName,
        lastName
      );
    });
  }

  public async typeStreetNumber(streetNumber: string): Promise<void> {
    await test.step("Fill Street Number 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.streetNumber,
        streetNumber
      );
    });
  }

  public async typeStreetName(streetName: string): Promise<void> {
    await test.step("Fill Last Name 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.streetName,
        streetName
      );
    });
  }

  public async typePostcode(postcode: string): Promise<void> {
    await test.step("Fill Postcode 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.postcode,
        postcode
      );
    });
  }

  public async clickNextStepButton(): Promise<void> {
    await test.step("Click on Next Step Button 📝", async () => {
      await this.playwrightActionFactory.click(this.locators.nextStepButton);
      await this.playwrightActionFactory.waitForSec(4);
    });
  }

  public async addDeliveryDate(): Promise<void> {
    await test.step("Add Delivery Date 📅", async () => {
      await this.playwrightActionFactory.waitForSec(4);
      await this.playwrightActionFactory.forceClick(
        this.locators.selectDeliveryDate
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    const currentDay = Number(getCurrentDay());
    this.locators.deliveryDate.description = `Delivery Date Option ${currentDay + 1}`;
    this.locators.deliveryDate.locator = this.page.locator(
      `//span[@class="day_number" and text()="${currentDay + 1}"]`
    );

    await test.step("Click on Delivery Date Option 📅", async () => {
      await this.playwrightActionFactory.click(this.locators.deliveryDate);
      await this.playwrightActionFactory.waitForSec(2);
    });
  }

  public async clickPayButton(): Promise<void> {
    await test.step("Click on Pay Button 📝", async () => {
      await this.playwrightActionFactory.click(this.locators.payButton);
      await this.playwrightActionFactory.waitForSec(4);
    });
  }

  public async addCardDetails(cardDetails: cardDetails): Promise<void> {
    const { cardNumber, cardExpiry, cardCvc, cardName, cardCountry } =
      cardDetails;
    await test.step("Click on Card Option 📝", async () => {
      await this.playwrightActionFactory.click(this.locators.cardOption);
      await this.playwrightActionFactory.waitForSec(2);
    });
    await test.step("Fill Card Number 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.cardNumber,
        cardNumber
      );
      await this.playwrightActionFactory.waitForSec(2);
    });
    await test.step("Fill Card Expiry 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.cardExpiry,
        cardExpiry
      );
      await this.playwrightActionFactory.waitForSec(2);
    });
    await test.step("Fill Card CVC 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.cardCvc,
        cardCvc
      );
      await this.playwrightActionFactory.waitForSec(2);
    });
    await test.step("Fill Card Name 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.cardName,
        cardName
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Select Card Country from Dropdown 📝", async () => {
      await this.playwrightActionFactory.selectFromDropdown(
        this.locators.cardCountryDropdown,
        cardCountry
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Click on Pay Button After Card Details 📝", async () => {
      await this.playwrightActionFactory.click(
        this.locators.payButtonAfterCardDetails
      );
      await this.playwrightActionFactory.waitForSec(4);
    });
  }

  public async completeOrder(completeOrder: completeOrder): Promise<void> {
    await test.step("Add first name 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.firstName,
        completeOrder.firstName
      );
    });

    await test.step("Add last name 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.lastName,
        completeOrder.lastName
      );
    });

    await test.step("Add email 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.email,
        completeOrder.email
      );
    });

    await test.step("Add phone 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.phone,
        completeOrder.phone
      );
    });

    await test.step("Add company name 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.companyName,
        completeOrder.companyName
      );
    });

    await test.step("Add suite 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.suite,
        completeOrder.Suite || ""
      );
    });
    await test.step("Add street number 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.streetNumberOnCheckoutPage,
        completeOrder.StreetNumber || ""
      );
    });
    await test.step("Add street name 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.streetNameOnCheckoutPage,
        completeOrder.StreetName || ""
      );
    });
    await test.step("Add city 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.city,
        completeOrder.city
      );
    });
    await test.step("Add postcode 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.postcodeOnCheckoutPage,
        completeOrder.postcode
      );
    });
    await test.step("Add personal greeting 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.personalGreeting,
        completeOrder.PersonalGreeting
      );
    });
    await test.step("Add signature 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.signature,
        completeOrder.Signature
      );
    });
    await test.step("Add delivery instructions 📝", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.deliveryInstructions,
        completeOrder.DeliveryInstructions
      );
    });
    await test.step("Click on Complete Order Button 📝", async () => {
      await this.playwrightActionFactory.click(
        this.locators.completeOrderButton
      );
    });

    // await test.step("Verify Order Confirmation text is displayed 📝", async () => {
    //   await this.playwrightVerificationFactory.expectElementExist(
    //     this.locators.orderConfirmation
    //   );
    // });
  }

  public async addCouponCode(couponCode: string): Promise<void> {
    await test.step("Add Coupon Code 📝", async () => {
      await this.playwrightActionFactory.sendKeysSequentially(
        this.locators.couponCode,
        couponCode
      );
      await this.playwrightActionFactory.waitForSec(2);
      await this.playwrightActionFactory.click(
        this.locators.submitCouponCodeButton
      );
      await this.playwrightActionFactory.waitForSec(3);
    });
  }
  public async verifyCouponCodeIsExpired(isExpired: boolean): Promise<void> {
    await test.step("Verify Coupon Code Is Expired 📝", async () => {
      if (isExpired) {
        await this.playwrightVerificationFactory.isElementVisible(
          this.locators.couponCodeError
        );
      }
      if (!isExpired) {
        await this.playwrightVerificationFactory.isElementHidden(
          this.locators.couponCodeError
        );
      }
    });
  }

  public async verifyCouponCodeIsApplied(): Promise<void> {
    await test.step("Verify Coupon Code Is Applied 📝", async () => {
      await this.playwrightVerificationFactory.verifyNotExist(
        this.locators.couponCodeError
      );
      await this.playwrightVerificationFactory.expectElementExist(
        this.locators.coupanCodeVerifcationText
      );
    });
  }
}
