import { Locator, Page, test, TestInfo } from "@playwright/test";
import { getEnvVariable } from "@utilities/env.utils";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";

import { CommonUtils } from "@utilities/common.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class PricePage {
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
      addToCartButton: {
        description: "Add to Cart Button",
        locator: this.page.locator("(//div[normalize-space()='Add to Cart'])[2]"),
      },
      addToCartButtonmobile: {
        description: "Add to Cart Button mobile",
        locator: this.page.locator("(//div[normalize-space()='Add to Cart'])[1]"),
      },
      productName: {
        description: "Product Name",
        locator: this.page.locator("(//span[normalize-space()='Bloomex Price:'])[1]"),
      },
      pricePage:{
        description: "Price Page",
        locator: this.page.locator("(//a[normalize-space()='By Price'])[2]"),
      }
  
    
    };
    this.Frenchlocators = {
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
      addToCartButton: {
        description: "Add to Cart Button",
        locator: this.page.locator("(//div[normalize-space()='Magasinez'])[2]"),
      },
      addToCartButtonmobile: {
        description: "Add to Cart Button mobile",
        locator: this.page.locator("(//div[normalize-space()='Magasinez'])[1]"),
      },
      productName: {
        description: "Product Name",
        locator: this.page.locator("(//span[normalize-space()='Prix Bloomex:'])[1]"),
      },
      pricePage:{
        description: "Price Page",
        locator: this.page.locator("(//a[normalize-space()='Par Prix'])[2]"),
      }
    };
    this.locators = {};

    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
  }
  public async verifyPageTitle(title: string): Promise<void> {
    await test.step(` Verify Price Page title: ${title}`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Price Page title: ${title}`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `//span[normalize-space()='${title}']`
      );
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    });
  }
  public async verifyPricePageProducts( ): Promise<void> {
    await test.step(` Verify Price Page Products`, async (): Promise<void> => {
     await this.playwrightVerificationFactory.expectElementExist(this.locators.addToCartButton);
     await this.playwrightVerificationFactory.expectElementExist(this.locators.productName);
    });
  }

  public async navigateToPricePage(menuItem: string): Promise<void> {
    await test.step(` Navigate to ${menuItem} page`, async (): Promise<void> => {
    await this.playwrightActionFactory.hover(this.locators.pricePage);
    this.locators.dynamicLocator.description = `Navigate to ${menuItem} page`;
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${menuItem}'])[2]`
    );
    await this.playwrightActionFactory.waitForSelector(this.locators.dynamicLocator);
    await this.playwrightActionFactory.click(this.locators.dynamicLocator);
  });
  }
  public async verifyTagline(tagline: string): Promise<void> {
    await test.step(` Verify Tagline: ${tagline}`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Tagline: ${tagline}`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `//p[starts-with(normalize-space(), '${tagline}')]`
      );
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    });
  }
  
  public async navigatetoMobilePricePageItem(menuItem: string): Promise<void> {
    await test.step(` Navigate to ${menuItem} page`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Navigate to ${menuItem} page`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `(//a[normalize-space()='${menuItem}'])[1]`
      );
      await this.playwrightActionFactory.waitForSelector(this.locators.dynamicLocator);
      await this.playwrightActionFactory.click(this.locators.dynamicLocator);
    });
  }


  
}
