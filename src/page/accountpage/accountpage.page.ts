import { Locator, Page, test, TestInfo } from "@playwright/test";
import { getEnvVariable } from "@utilities/env.utils";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";

import { CommonUtils } from "@utilities/common.utils";
import { ContactUsFormInterface, FlowerCareVerificationInterface, HoursAndContactInformationInterface, LoginFormInterface, LostPasswordFormInterface, ShoppingCartFormInterface } from "@interfaces/account/account.interface";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class AccountPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;  
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly commonUtils: CommonUtils;
  /**
   * @param page
   * @param testInfo
   */
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
    this.commonUtils = new CommonUtils(this.page, this.testInfo);

    // Define locators with descriptions
    this.Englishlocators = {
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
      accountPageTitle: {
        description: "Account Page Title",
        locator: this.page.locator("///span[normalize-space()='account']"),
      },
      shoppingCartSummary: {
        description: "",
        locator: this.page.locator(""),
      },
      flowerCareSection: {
        description: "",
        locator: this.page.locator(""),
      },
      blogSection:{
        description: "",
        locator: this.page.locator(""),
      }
      
    };
    this.Frenchlocators = {
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
      accountPageTitle: {
        description: "Account Page Title",
        locator: this.page.locator("///span[normalize-space()='compte']"),
      },
      shoppingCartSummary: {
        description: "",
        locator: this.page.locator(""),
      },
      flowerCareSection: {
        description: "",
        locator: this.page.locator(""),
      },
      blogSection:{
        description: "",
        locator: this.page.locator(""),
      }
    };
    this.locators = {};

    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
  }
  public async verifyPageTitle(title: string): Promise<void> {
    await test.step(` Verify Account Page title: ${title}`, async (): Promise<void> => {
      await this.playwrightVerificationFactory.verifyTitle(title);
    });
  }
  public async verifyHeadingofAccountPage(heading: string): Promise<void> {
    await test.step(` Verify Account Page heading: ${heading}`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Account Page heading: ${heading}`;
      this.locators.dynamicLocator.locator = this.page.locator(`//span[normalize-space()="${heading}"]`);
      await this.playwrightVerificationFactory.verifyText(this.locators.dynamicLocator,heading);
      await this.playwrightActionFactory.waitForDomLoad();
    });
  }
  public async verifyLoginForm(loginData: LoginFormInterface): Promise<void> {
    await test.step(` Verify Login Form: ${loginData.LoginHeading}`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Login Form -> Heading: ${loginData.LoginHeading}`;
      this.locators.dynamicLocator.locator = this.page.locator(`//h3[normalize-space()="${loginData.LoginHeading}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      this.locators.dynamicLocator.description = `Verify Login Form -> Text: ${loginData.LoginText}`;
      this.locators.dynamicLocator.locator = this.page.locator(`//h4[normalize-space()="${loginData.LoginText}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      this.locators.dynamicLocator.description = `Verify Login Form -> Login Email Input: ${loginData.LoginButton}`;
      this.locators.dynamicLocator.locator = this.page.locator(`//input[@placeholder="${loginData.EmailPlaceholder}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      this.locators.dynamicLocator.description = `Verify Login Form -> Login Password Input: ${loginData.PasswordPlaceholder}`;
      this.locators.dynamicLocator.locator = this.page.locator(`//input[@placeholder="${loginData.PasswordPlaceholder}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      this.locators.dynamicLocator.description = `Verify Login Form -> Remember Me Option: ${loginData.RememberMeOption}`;
      this.locators.dynamicLocator.locator = this.page.locator(`//label[normalize-space()="${loginData.RememberMeOption}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      this.locators.dynamicLocator.description = `Verify Login Form -> Trouble Shoot Text: ${loginData.troubleShootText}`;
      this.locators.dynamicLocator.locator = this.page.locator(`(//div[contains(normalize-space(),"${loginData.troubleShootText}")])[6]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
     
    }); 
  
  }
  public async verifyHoursAndContactInformation(hoursAndContactInformation: HoursAndContactInformationInterface): Promise<void> {
    await test.step(` Verify Hours And Contact Information -> Hours And Contact Information: ${hoursAndContactInformation.HoursAndContactInformation}`, async (): Promise<void> => {
      if (hoursAndContactInformation.HoursAndContactInformation) {
        this.locators.dynamicLocator.description = `Verify Hours And Contact Information -> Hours And Contact Information: ${hoursAndContactInformation.HoursAndContactInformation}`;
        this.locators.dynamicLocator.locator = this.page.locator(`//h3[normalize-space()="${hoursAndContactInformation.HoursAndContactInformation}"]`);
        await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      }
      if (hoursAndContactInformation.SupportHours) {
        this.locators.dynamicLocator.description = `Verify Hours And Contact Information -> Support Hours: ${hoursAndContactInformation.SupportHours}`;
        this.locators.dynamicLocator.locator = this.page.locator(`//span[normalize-space()="${hoursAndContactInformation.SupportHours}"]`);
        await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      }
      if (hoursAndContactInformation.PhoneNumber) {
        this.locators.dynamicLocator.description = `Verify Hours And Contact Information -> Phone Number: ${hoursAndContactInformation.PhoneNumber}`;
        this.locators.dynamicLocator.locator = this.page.locator(`//a[normalize-space()="${hoursAndContactInformation.PhoneNumber}"]`);
        await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      }
      if (hoursAndContactInformation.EmailAddress) {
        this.locators.dynamicLocator.description = `Verify Hours And Contact Information -> Email Address: ${hoursAndContactInformation.EmailAddress}`;
        this.locators.dynamicLocator.locator = this.page.locator(`//a[normalize-space()="${hoursAndContactInformation.EmailAddress}"]`);
        await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
      }
    });
  }
  public async verifyContactUsForm(contactUsForm: ContactUsFormInterface): Promise<void> {
    await test.step(` Verify Contact Us Form: ${contactUsForm.ContactUsHeading}`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Contact Us Form -> Contact Us Heading: ${contactUsForm.ContactUsHeading}`;
      this.locators.dynamicLocator.locator = this.page.locator(`//h3[normalize-space()="${contactUsForm.ContactUsHeading}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    });
    this.locators.dynamicLocator.description = `Verify Contact Us Form -> Name Input Placeholder: ${contactUsForm.NameInputPlaceholder}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//input[@placeholder="${contactUsForm.NameInputPlaceholder}"]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    this.locators.dynamicLocator.description = `Verify Contact Us Form -> Email Input Placeholder: ${contactUsForm.EmailInputPlaceholder}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//input[@placeholder="${contactUsForm.EmailInputPlaceholder}"]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    this.locators.dynamicLocator.description = `Verify Contact Us Form -> Phone Input Placeholder: ${contactUsForm.PhoneInputPlaceholder}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//input[@placeholder="${contactUsForm.PhoneInputPlaceholder}"]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    this.locators.dynamicLocator.description = `Verify Contact Us Form -> Message Input Placeholder: ${contactUsForm.MessageInputPlaceholder}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//textarea[@placeholder="${contactUsForm.MessageInputPlaceholder}"]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    this.locators.dynamicLocator.description = `Verify Contact Us Form -> Submit Button Text: ${contactUsForm.SubmitButtonText}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//button[normalize-space()="${contactUsForm.SubmitButtonText}"]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);


  }

  public async verifyLostPasswordFormCreatePassword(createPasswordHeading: LostPasswordFormInterface): Promise<void> {
    await test.step(` Verify Lost Password Form Create Password`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Lost Password Form Create Password`;
      this.locators.dynamicLocator.locator = this.page.locator(`//h3[normalize-space()="${createPasswordHeading.createPasswordHeading}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    });
    this.locators.dynamicLocator.description = `Verify Lost Password Form Create Password -> Paragraph Text: ${createPasswordHeading.paragraphText}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//span[contains(normalize-space(),"${createPasswordHeading.para1Text}")]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    this.locators.dynamicLocator.description = `Verify Lost Password Form Create Password -> Para2 Text: ${createPasswordHeading.para2Text}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//span[contains(normalize-space(),"${createPasswordHeading.para2Text}")]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
  }
  public async verifyLostPasswordFormStillHavingTrouble(stillHavingTrouble: LostPasswordFormInterface): Promise<void> {
    await test.step(` Verify Lost Password Form Still Having Trouble`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Lost Password Form Still Having Trouble`;
      this.locators.dynamicLocator.locator = this.page.locator(`//h3[normalize-space()="${stillHavingTrouble.stilhavingtroubleText}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    });
    this.locators.dynamicLocator.description = `Verify Lost Password Form Still Having Trouble -> Paragraph Text: ${stillHavingTrouble.paragraphText}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//p[contains(normalize-space(),"${stillHavingTrouble.paragraphText}")]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    this.locators.dynamicLocator.description = `Verify Lost Password Form Still Having Trouble -> Para1 Text: ${stillHavingTrouble.para1Text}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//p[contains(normalize-space(),"${stillHavingTrouble.para1Text}")]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    this.locators.dynamicLocator.description = `Verify Lost Password Form Still Having Trouble -> Para2 Text: ${stillHavingTrouble.para2Text}`;
    this.locators.dynamicLocator.locator = this.page.locator(`//p[contains(normalize-space(),"${stillHavingTrouble.para2Text}")]`);
    await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
  }
  public async verifyShoppingCartForm(shoppingCartForm: ShoppingCartFormInterface): Promise<void> {
    await test.step(` Verify Shopping Cart Form: ${shoppingCartForm.ShoppingCartSummary}`, async (): Promise<void> => {
      this.locators.shoppingCartSummary.description = `Verify Shopping Cart Form -> Shopping Cart Summary: ${shoppingCartForm.ShoppingCartSummary}`;
      this.locators.shoppingCartSummary.locator = this.page.locator(`//h3[normalize-space()="${shoppingCartForm.ShoppingCartSummary}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.shoppingCartSummary);
      this.locators.shoppingCartSummary.description = `Verify Shopping Cart Form -> Your Cart Is Empty: ${shoppingCartForm.YourCartIsEmpty}`;
      this.locators.shoppingCartSummary.locator = this.page.locator(`//h2[normalize-space()="${shoppingCartForm.YourCartIsEmpty}"]`);
      await this.playwrightVerificationFactory.expectElementExist(this.locators.shoppingCartSummary);
    });
  }
  public async verifyFlowerCareVerification(flowerCareVerification: FlowerCareVerificationInterface): Promise<void> {
    await test.step(` Verify heading and paragraphs verification`, async (): Promise<void> => {
      if (flowerCareVerification.flowerCareHeading !== '') {
      this.locators.flowerCareSection.description = `Verify heading and paragraphs verification -> Flower Care Heading: ${flowerCareVerification.flowerCareHeading}`;
      this.locators.flowerCareSection.locator = this.page.locator(`//strong[normalize-space()="${flowerCareVerification.flowerCareHeading}"]`);
      await this.playwrightVerificationFactory.waitForSelector(this.locators.flowerCareSection);
      await this.playwrightVerificationFactory.verifyText(this.locators.flowerCareSection,flowerCareVerification.flowerCareHeading!);
      }
      if (flowerCareVerification.flowerCareParagraphs) {
        for (const paragraph of flowerCareVerification.flowerCareParagraphs!) {
          this.locators.flowerCareSection.description = `Verify heading and paragraphs verification -> Flower Care Paragraph: ${paragraph}`;
          try {
            this.locators.flowerCareSection.locator = this.page.locator(`(//p[contains(normalize-space(.), '${paragraph}')])[1]`);
            console.log(this.locators.flowerCareSection.locator);
            await this.playwrightVerificationFactory.waitForSelector(this.locators.flowerCareSection);
            await this.playwrightVerificationFactory.verifyText(this.locators.flowerCareSection,paragraph);
          } catch (error) {
      
            this.locators.flowerCareSection.locator = this.page.locator(`(//p[contains(normalize-space(translate(., ' ', ' ')), '${paragraph}')])[1]`);
            console.log(this.locators.flowerCareSection.locator);
            await this.playwrightVerificationFactory.waitForSelector(this.locators.flowerCareSection);
            await this.playwrightVerificationFactory.verifyText(this.locators.flowerCareSection,paragraph);
          }
        }
      }
    });
  }
  public async verifyHeadingVerification(headingVerification: string): Promise<void> {
    await test.step(` Verify Blog Verification: ${headingVerification}`, async (): Promise<void> => {
      this.locators.blogSection.description = `Verify Blog Verification -> Blog Heading: ${headingVerification}`;
      this.locators.blogSection.locator = this.page.locator(`//h1[normalize-space()="${headingVerification}"]`);
      await this.playwrightVerificationFactory.verifyText(this.locators.blogSection,headingVerification);
    });
  }
}