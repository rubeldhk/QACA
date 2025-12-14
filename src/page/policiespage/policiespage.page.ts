import { Locator, Page, test, TestInfo } from "@playwright/test";
import { getEnvVariable } from "@utilities/env.utils";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";

import { CommonUtils } from "@utilities/common.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class PoliciesPage {
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
      policiesPageTitle: {
        description: "Policies Page Title",
        locator: this.page.locator("///span[normalize-space()='policies']"),
      },
      policiesPage:{
        description: "Policies Page",
        locator: this.page.locator("(//a[normalize-space()='Policies'])[2]"),
      }
    };
    this.Frenchlocators = {
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
      policiesPageTitle: {
        description: "Policies Page Title",
        locator: this.page.locator("///span[normalize-space()='politiques']"),
      },
      policiesPage:{
        description: "Policies Page",
        locator: this.page.locator("(//a[normalize-space()='Politiques'])[2]"),
      }
    };
    this.locators = {};

    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
  }
  public async verifyPageTitle(title: string): Promise<void> {
    await test.step(` Verify Policies Page title: ${title}`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Verify Policies Page title: ${title}`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `//span[normalize-space()='${title}']`
      );
      await this.playwrightVerificationFactory.expectElementExist(this.locators.dynamicLocator);
    });
  }
  public async navigateToPoliciesPageItem(menuItem: string): Promise<void> {
    await test.step(` Navigate to Policies Page Item: ${menuItem}`, async (): Promise<void> => {
      await this.playwrightActionFactory.hover(this.locators.policiesPage);
      this.locators.dynamicLocator.description = `Navigate to ${menuItem} page`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `(//a[normalize-space()="${menuItem}"])[2]`
      );
      await this.playwrightActionFactory.click(this.locators.dynamicLocator);
    });
  }
  public async navigatetoMobilePoliciesPageItem(menuItem: string): Promise<void> {
    await test.step(` Navigate to Policies Page Item: ${menuItem}`, async (): Promise<void> => {
      this.locators.dynamicLocator.description = `Navigate to ${menuItem} page`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `(//a[normalize-space()="${menuItem}"])[1]`
      );
    });
    await this.playwrightActionFactory.click(this.locators.dynamicLocator);
  }
  public async verifyFAQQuestions(questions: string[]): Promise<void> {
    await test.step(` Verify FAQ Questions: ${questions}`, async (): Promise<void> => {
      for (const question of questions) {
        this.locators.dynamicLocator.description = `Verify FAQ Question: ${question}`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//h4[normalize-space()="${question}"]`
        );
        await this.playwrightVerificationFactory.verifyText(this.locators.dynamicLocator,question);
      }
    });
  }
  


  
}
