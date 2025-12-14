import { Locator, Page, test, TestInfo } from "@playwright/test";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import { SelectSpecialCollectionsItemData, ExpectedSpecialCollectionsPageHeadingsData, SelectSpecialCollectionsItemDataFrench, ExpectedSpecialCollectionsPageHeadingsDataFrench } from "@interfaces/specialCollections/specialCollections.interface";

import { CommonUtils } from "@utilities/common.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class SpecialCollectionsPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly commonUtils: CommonUtils;
  private readonly specialCollectionsLinkText: string;

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
      specialCollectionsDropdown: {
        description: "Special Collections dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Special Collections' })
      },
      specialCollectionsOptions: {
        description: "Special Collections options",
        locator: this.page.locator("(//a[@href='/specials/']//ancestor::li//span[@class='plus'])[1]"),
      },
      dropdownItems: {
        description: "Special Collections dropdown items",
        locator: this.page.getByRole('navigation').locator('//a[normalize-space()="Special Collections"]/following-sibling::ul[1]/li/a'),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      specialCollectionsPageElements: {
        description: "Special Collections page elements",
        locator: this.page.getByRole('navigation').getByText('Mason Jar Collection Designer'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator('//button[normalize-space()="Menu"]'),
      },
      mobileSpecialCollectionsPage: {
        description: "Mobile Special Collections page",
        locator: this.page.locator('//a[normalize-space()="Special Collections"]/preceding-sibling::span[@class="plus"]'),
      },
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
    };
    this.Frenchlocators = {
      specialCollectionsDropdown: {
        description: "Special Collections dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Spéciaux' })
      },
      specialCollectionsOptions: {
        description: "Special Collections options",
        locator: this.page.locator("(//a[@href='/fr/speciaux/']//ancestor::li//span[@class='plus'])[1]"),
      },
      dropdownItems: {
        description: "Special Collections dropdown items",
        locator: this.page.getByRole('navigation').locator('//a[normalize-space()="Spéciaux"]/following-sibling::ul[1]/li/a'),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      specialCollectionsPageElements: {
        description: "Special Collections page elements",
        locator: this.page.getByRole('navigation').getByText('Collection Bocal de Maçon Collection de Créateurs Collection Gourmet Roses et vin'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator('//button[normalize-space()="Menu"]'),
      },
      mobileSpecialCollectionsPage: {
        description: "Mobile Special Collections page",
        locator: this.page.locator('//a[normalize-space()="Spéciaux"]/preceding-sibling::span[@class="plus"]'),
      },
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
    };
    this.locators = {};
    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
    this.specialCollectionsLinkText = process.env.NODE_locale === "fr" ? "Spéciaux" : "Special Collections";
  }

  public async openSpecialCollectionsDropdown(
    isWeb: boolean = true
  ): Promise<void> {
    await test.step("Open Special Collections dropdown", async () => {
      if (isWeb) {
        // For web: hover on the element to open dropdown
        await this.playwrightActionFactory.hover(
          this.locators.specialCollectionsDropdown
        );
      } else {
        const isMenuOpen = await this.locators.mobileSpecialCollectionsPage.locator.isVisible();
        if (!isMenuOpen) {
          // For mobile: click on the element to open dropdown
          await this.playwrightActionFactory.click(
            this.locators.mobileSpecialCollectionsPage
          );
        }
      }

      await this.commonUtils.closePopup();
    });
  }

  public async getAllSpecialCollectionsDropdownValues(): Promise<void> {
    await test.step("Get all Special Collections dropdown values", async () => {
      await this.playwrightVerificationFactory.getAllDropdownValues(
        this.locators.specialCollectionsDropdown,
        this.locators.dropdownItems,
        true // hover to open
      );
    });
  }

  public async getAllSpecialCollectionsDropdownValuesMobile(pageName?: string): Promise<
    string[]
  > {
    const targetLinkText = pageName || this.specialCollectionsLinkText;
    this.locators.dynamicLocator.description = `Navigate to ${targetLinkText}`;
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()="${targetLinkText}"])[1]/following-sibling::ul[1]/li[position() <= 10]/a`
    );

    return await this.playwrightVerificationFactory.getAllDropdownValues(
      this.locators.mobileSpecialCollectionsPage,
      this.locators.dynamicLocator,
      false
    );
  }

  public async verifyAllSpecialCollectionsDropdownValues(): Promise<void> {
    await test.step("Verify all Special Collections dropdown values", async () => {
      await this.playwrightVerificationFactory.verifyAllDropdownValues(
        this.locators.specialCollectionsDropdown,
        this.locators.dropdownItems,
        true // hover to open
      );
    });
  }

  public async verifyAllSpecialCollectionsDropdownValuesMobile(
    expectedValues: string[],
    isWeb: boolean = false
  ): Promise<void> {
    // Open the mobile dropdown first
    await this.openSpecialCollectionsDropdown(false);
    // Wait a bit for the dropdown to fully expand
    await this.playwrightActionFactory.waitForSec(1);
    
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()="${this.specialCollectionsLinkText}"])[1]/following-sibling::ul[1]/li[position() <= 10]/a`
    );

    await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
      this.locators.mobileSpecialCollectionsPage,
      this.locators.dynamicLocator,
      expectedValues,
      isWeb,
      true
    );
  }

  public async openSpecialCollectionsOptions(): Promise<void> {
    await test.step("Open Special Collections Options", async () => {
      await this.playwrightActionFactory.click(
        this.locators.specialCollectionsOptions
      );
    });
  }

  public async verifySpecialCollectionsDropdownValuesMatch(
    expectedValues: string[]
  ): Promise<void> {
    await test.step("Verify Special Collections dropdown values match expected", async () => {
      await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
        this.locators.specialCollectionsDropdown,
        this.locators.dropdownItems,
        expectedValues,
        true,
        true
      );
    });
  }

  public async selectSpecialCollectionsItem(
    specialCollectionsItem: SelectSpecialCollectionsItemData | SelectSpecialCollectionsItemDataFrench
  ): Promise<void> {
    this.locators.clickListItem.locator = this.page.getByRole("link", {
      name: `${specialCollectionsItem.specialCollectionsItem}`,
    });

    await test.step("Select Special Collection item", async () => {
      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.specialCollectionsDropdown, // web locator
        this.locators.mobileSpecialCollectionsPage, // mobile locator
        specialCollectionsItem.specialCollectionsItem,
        specialCollectionsItem.isWeb,
        this.locators.clickListItem
      );
    });
  }

  public async selectSpecialCollectionFromDropdown(
    specialCollectionName: string,
    isWeb: boolean = true
  ): Promise<void> {
    await test.step(`Select "${specialCollectionName}" from Special Collections dropdown`, async () => {
      await this.commonUtils.closePopup();
      await this.playwrightActionFactory.waitForDomLoad();
      
      // Set up the appropriate dropdown items locator based on viewport
      let dropdownItemsLocator: LocatorInfo;
      if (isWeb) {
        // Ensure dropdown is open before selecting for web
        await this.openSpecialCollectionsDropdown(true);
        dropdownItemsLocator = this.locators.dropdownItems;
      } else {
        // For mobile: use dynamic locator that targets only first 10 items
        this.locators.dynamicLocator.locator = this.page.locator(
          `(//a[normalize-space()="${this.specialCollectionsLinkText}"])[1]/following-sibling::ul[1]/li[position() <= 10]/a`
        );
        dropdownItemsLocator = this.locators.dynamicLocator;
      }
      
      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.specialCollectionsDropdown, // web locator
        this.locators.mobileSpecialCollectionsPage, // mobile locator
        specialCollectionName,
        isWeb,
        dropdownItemsLocator,
        20000 // Increased timeout to 20 seconds
      );
    });
  }

  public async verifySpecialCollectionsPageHeader(
    expectedHeaderText: string
  ): Promise<void> {
    await test.step(`Verify Special Collections page header displays "${expectedHeaderText}"`, async () => {
      const pageHeader = {
        description: "Special Collections page header",
        locator: this.page.locator("h1").first(),
      };

      await this.playwrightVerificationFactory.verifyText(
        pageHeader,
        expectedHeaderText
      );
    });
  }

  public async verifySpecialCollectionsPageElementes(
    expectedPageHeadings: ExpectedSpecialCollectionsPageHeadingsData | ExpectedSpecialCollectionsPageHeadingsDataFrench
  ): Promise<void> {
    await test.step("Verify Special Collections page elements", async () => {
      await this.playwrightVerificationFactory.verifyPageElements(
        this.locators.specialCollectionsDropdown,
        this.locators.specialCollectionsPageElements,
        expectedPageHeadings.headings
      );
    });
  }
}
