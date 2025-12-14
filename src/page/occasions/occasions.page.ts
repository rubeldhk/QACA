import { Locator, Page, test, TestInfo } from "@playwright/test";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import { SelectOccasionsItemData, ExpectedOccasionsPageHeadingsData } from "@interfaces/occasions/occasions.interface";
import { CommonUtils } from "@utilities/common.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class OccasionsPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly commonUtils: CommonUtils;
  private readonly occasionsLinkText: string;

  public constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightActionFactory = new PlaywrightActionFactory(this.page, this.testInfo);
    this.playwrightVerificationFactory = new PlaywrightVerificationFactory(this.page, this.testInfo);
    this.commonUtils = new CommonUtils(this.page, this.testInfo);

    this.Englishlocators = {
      occasionsDropdown: {
        description: "Occasions dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Occasions' }),
      },
      occasionsOptions: {
        description: "Occasions options",
        locator: this.page.locator("(//a[@href='/occasions/']//ancestor::li//span[@class='plus'])[1]"),
      },
      dropdownItems: {
        description: "Occasions dropdown items",
        locator: this.page.getByRole("navigation").locator("(//a[@href='/flowers/'])[1]/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      occasionsPageElements: {
        description: "Occasions page elements",
        locator: this.page.getByRole('navigation').getByText('Lilies Daisies Tropical'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
      mobileOccasionsPage: {
        description: "Mobile Occasions page",
        locator: this.page.locator("//a[normalize-space()='Occasions']//preceding-sibling::span[@class='plus']"),
      },
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
    };

    this.Frenchlocators = {
      occasionsDropdown: {
        description: "Occasions dropdown",
        locator: this.page.getByRole("navigation").getByRole("link", { name: "Occasions" }),
      },
      occasionsOptions: {
        description: "Occasions options",
        locator: this.page.locator("(//a[@href='/fr/l-occasions/']//ancestor::li//span[@class='plus'])[1]"),
      },
      dropdownItems: {
        description: "Occasions dropdown items",
        locator: this.page.getByRole("navigation").locator("(//a[normalize-space()='Occasions'])[2]/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      occasionsPageElements: {
        description: "Occasions page elements",
        locator: this.page.getByRole('navigation').getByText('Fleurs et cadeaux d\'anniversaire Sympathie et Funérailles Anniversaire Juste'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
      mobileOccasionsPage: {
        description: "Mobile Occasions page",
        locator: this.page.locator('(//a[@href="/fr/l-occasions/"])[1]'),
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
    this.occasionsLinkText = process.env.NODE_locale === "fr" ? "Occasions" : "Occasions";
  }

  public async openOccasionsDropdown(isWeb: boolean = true): Promise<void> {
    await test.step("Open Occasions dropdown", async () => {
      const dropdownLocator = this.playwrightActionFactory.resolveResponsiveLocator(
        this.locators.occasionsDropdown,
        isWeb,
        "Occasions dropdown (mobile)"
      );

      if (isWeb) {
        await this.playwrightActionFactory.hover(dropdownLocator);
      } else {
        await this.playwrightActionFactory.click(dropdownLocator);
      }

      await this.commonUtils.closePopup();
    });
  }

  public async getAllOccasionsDropdownValues(): Promise<void> {
    await test.step("Get all Occasions dropdown values", async () => {
      await this.playwrightVerificationFactory.getAllDropdownValues(
        this.locators.occasionsDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async getAllOccasionsDropdownValuesMobile(pageName?: string): Promise<string[]> {
    const targetLinkText = pageName || this.occasionsLinkText;
    this.locators.dynamicLocator.description = `Navigate to ${targetLinkText}`;
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${targetLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 13]/a`
    );

    return await this.playwrightVerificationFactory.getAllDropdownValues(
      this.locators.mobileOccasionsPage,
      this.locators.dynamicLocator,
      false
    );
  }

  public async verifyAllOccasionsDropdownValues(): Promise<void> {
    await test.step("Verify all Occasions dropdown values", async () => {

      await this.playwrightVerificationFactory.verifyAllDropdownValues(
        this.locators.occasionsDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async verifyAllOccasionsDropdownValuesMobile(
    expectedValues: string[],
    isWeb: boolean = false
  ): Promise<void> {
    await this.openOccasionsDropdown(false);
    await this.playwrightActionFactory.waitForSec(1);

    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${this.occasionsLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 13]/a`
    );

    await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
      this.locators.mobileOccasionsPage,
      this.locators.dynamicLocator,
      expectedValues,
      isWeb,
      true
    );
  }

  public async openOccasionsOptions(): Promise<void> {
    await test.step("Open Occasions Options", async () => {
      await this.playwrightActionFactory.click(this.locators.occasionsOptions);
    });
  }

  public async verifyOccasionsDropdownValuesMatch(expectedValues: string[]): Promise<void> {
    await test.step("Verify Occasions dropdown values match expected", async () => {
      await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
        this.locators.occasionsDropdown,
        this.locators.dropdownItems,
        expectedValues,
        true,
        true
      );
    });
  }

  public async selectOccasionsItem(occasionsItem: SelectOccasionsItemData): Promise<void> {
    this.locators.clickListItem.locator = this.page.getByRole("link", {
      name: `${occasionsItem.occasionsItem}`,
    });

    await test.step("Select Occasions item", async () => {
      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.occasionsDropdown,
        this.locators.mobileOccasionsPage,
        occasionsItem.occasionsItem,
        occasionsItem.isWeb,
        this.locators.clickListItem
      );
    });
  }

  public async selectOccasionFromDropdown(occasionName: string, isWeb: boolean = true): Promise<void> {
    await test.step(`Select "${occasionName}" from Occasions dropdown`, async () => {
      await this.commonUtils.closePopup();
      await this.playwrightActionFactory.waitForDomLoad();

      let dropdownItemsLocator: LocatorInfo;
      if (isWeb) {
        await this.openOccasionsDropdown(true);
        dropdownItemsLocator = this.locators.dropdownItems;
      } else {
        this.locators.dynamicLocator.locator = this.page.locator(
          `(//a[normalize-space()='${this.occasionsLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 13]/a`
        );
        dropdownItemsLocator = this.locators.dynamicLocator;
      }

      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.occasionsDropdown,
        this.locators.occasionsOptions,
        occasionName,
        isWeb,
        dropdownItemsLocator,
        20000
      );
    });
  }

  public async verifyOccasionsPageHeader(expectedHeaderText: string): Promise<void> {
    await test.step(`Verify Occasions page header displays "${expectedHeaderText}"`, async () => {
      const pageHeader = {
        description: "Occasions page header",
        locator: this.page.locator("h1").first(),
      };

      await this.playwrightVerificationFactory.verifyText(pageHeader, expectedHeaderText);
    });
  }

  public async verifyOccasionsPageElementes(
    expectedPageHeadings: ExpectedOccasionsPageHeadingsData
  ): Promise<void> {
    await test.step("Verify Occasions page elements", async () => {
      await this.playwrightVerificationFactory.verifyPageElements(
        this.locators.occasionsDropdown,
        this.locators.occasionsPageElements,
        expectedPageHeadings.headings
      );
    });
  }

  public async verifyOccasionsPageElementesMobile(
    expectedPageHeadings: ExpectedOccasionsPageHeadingsData
  ): Promise<void> {
    await test.step("Verify Occasions page elements (mobile)", async () => {
      await this.playwrightVerificationFactory.verifyPageElements(
        this.locators.mobileOccasionsPage,
        this.locators.occasionsPageElements,
        expectedPageHeadings.headings
      );
    });
  }
}

