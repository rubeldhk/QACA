import { expect, Locator, Page, test, TestInfo } from "@playwright/test";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import { SelectGiftBasketsItemData, ExpectedGiftBasketsPageHeadingsData } from "@interfaces/giftBaskets/giftBaskets.interface";
import { CommonUtils } from "@utilities/common.utils";
import { ExpectedFlowersAndPlantsPageHeadingsData } from "@interfaces/flowersAndPlants/flowersAndPlants.interface";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class GiftBasketsPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly commonUtils: CommonUtils;
  private readonly giftBasketsLinkText: string;

  public constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightActionFactory = new PlaywrightActionFactory(this.page, this.testInfo);
    this.playwrightVerificationFactory = new PlaywrightVerificationFactory(this.page, this.testInfo);
    this.commonUtils = new CommonUtils(this.page, this.testInfo);

    this.Englishlocators = {
      giftBasketsDropdown: {
        description: "Gift Baskets dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Gift Baskets', exact: true }),
      },
      giftBasketsOptions: {
        description: "Gift Baskets options",
        locator: this.page.locator("(//a[@href='/gift-baskets/']//ancestor::li//span[@class='plus'])"),
      },
      dropdownItems: {
        description: "Gift Baskets dropdown items",
        locator: this.page.getByRole("navigation").locator("//a[@href='/gift-baskets/']/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      giftBasketsPageElements: {
        description: "Gift Baskets page elements",
        locator: this.page.getByRole('navigation').getByText('Gourmet Collection Fruit'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
    mobileGiftBasketsPage: {
        description: "Mobile Gift Baskets page",
        locator: this.page.locator("//a[@href='/gift-baskets/']//preceding-sibling::span[@class='plus']"),
      },
      mobileGiftBasketsList: {
        description: "Mobile Gift Baskets list",
        locator: this.page.locator("(//a[@href='/gift-baskets/']//following-sibling::ul)[1]"),
      },
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
    };

    this.Frenchlocators = {
      giftBasketsDropdown: {
        description: "Gift Baskets dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Paniers Cadeaux', exact: true }),
      },
      giftBasketsOptions: {
        description: "Gift Baskets options",
        locator: this.page.locator("(//a[@href='/fr/paniers-cadeaux/']//ancestor::li//span[@class='plus'])"),
      },
      dropdownItems: {
        description: "Gift Baskets dropdown items",
        locator: this.page.getByRole("navigation").locator("//a[@href='/fr/paniers-cadeaux/']/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      giftBasketsPageElements: {
        description: "Gift Baskets page elements",
        locator: this.page.getByRole('navigation').getByText('Collection Gourmande Paniers de fruits'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
      mobileGiftBasketsPage: {
        description: "Mobile Gift Baskets page",
        locator: this.page.locator("//a[@href='/fr/paniers-cadeaux/']//preceding-sibling::span[@class='plus']"),
      },
      mobileGiftBasketsList: {
        description: "Mobile Gift Baskets list",
        locator: this.page.locator("(//a[@href='/fr/paniers-cadeaux/']//following-sibling::ul)[1]"),
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
    this.giftBasketsLinkText = process.env.NODE_locale === "fr" ? "Paniers Cadeaux" : "Gift Baskets";
  }

  public async openGiftBasketsDropdown(isWeb: boolean = true,): Promise<void> {
    await test.step("Open Gift Baskets dropdown", async () => {
      if (isWeb) {
        await this.playwrightActionFactory.hover(this.locators.giftBasketsDropdown);
      } else {
        const isMenuOpen = await this.locators.mobileGiftBasketsList.locator.isVisible();
        if (!isMenuOpen) {
          // For mobile: click on the element to open dropdown
          await this.playwrightActionFactory.click(
            this.locators.mobileGiftBasketsPage
          );
        }
      }

      await this.commonUtils.closePopup();
    });
  }

    public async getAllGiftBasketsDropdownValues(): Promise<void> {
    await test.step("Get all Gift Baskets dropdown values", async () => {
      await this.playwrightVerificationFactory.getAllDropdownValues(
        this.locators.giftBasketsDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async getAllGiftBasketsDropdownValuesMobile(pageName?: string): Promise<string[]> {
    const targetLinkText = pageName || this.giftBasketsLinkText;
    this.locators.dynamicLocator.description = `Navigate to ${targetLinkText}`;
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${targetLinkText}'])[1]/following-sibling::ul[1]/li`
    );

    return await this.playwrightVerificationFactory.getAllDropdownValues(
      this.locators.mobileGiftBasketsPage,
      this.locators.dynamicLocator,
      false
    );
  }

  public async verifyAllGiftBasketsDropdownValues(): Promise<void> {
    await test.step("Verify all Gift Baskets dropdown values", async () => {

      await this.playwrightVerificationFactory.verifyAllDropdownValues(
        this.locators.giftBasketsDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async verifyAllGiftBasketsDropdownValuesMobile(
    expectedValues: string[],
    isWeb: boolean = false
  ): Promise<void> {
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${this.giftBasketsLinkText}'])[1]/following-sibling::ul[1]/li`
    );

    await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
    this.locators.mobileGiftBasketsPage,
      this.locators.dynamicLocator,
      expectedValues,
      isWeb,
      false
    );
  }

  public async openGiftBasketsOptions(): Promise<void> {
    await test.step("Open Gift Baskets Options", async () => {
      await this.playwrightActionFactory.click(this.locators.giftBasketsOptions);
    });
  }

  public async verifyGiftBasketsDropdownValuesMatch(expectedValues: string[], hoverToOpen: boolean): Promise<void> {
    await test.step("Verify Gift Baskets dropdown values match expected", async () => {
      await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
        this.locators.giftBasketsDropdown,
        this.locators.dropdownItems,
        expectedValues,
        hoverToOpen,
        false
      );
    });
  }

  public async verifyGiftBasketsDropdownValuesMatchMobile(expectedValues: string[], hoverToOpen: boolean): Promise<void> {
    await test.step("Verify Gift Baskets dropdown values match expected", async () => {
      await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
        this.locators.mobileGiftBasketsPage,
        this.locators.dropdownItems,
        expectedValues,
        hoverToOpen,
        false
      );
    });
  }

  public async selectGiftBasketsItem(giftBasketsItem: SelectGiftBasketsItemData): Promise<void> {
    this.locators.clickListItem.locator = this.page.getByRole("link", {
      name: `${giftBasketsItem.giftBasketsItem}`,
    });

        await test.step("Select Gift Baskets item", async () => {
      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.giftBasketsDropdown,
        this.locators.mobileGiftBasketsPage,
        giftBasketsItem.giftBasketsItem,
        giftBasketsItem.isWeb,
        this.locators.clickListItem
      );
    });
  }

  public async selectGiftBasketsFromDropdown(giftBasketsName: string, isWeb: boolean = true): Promise<void> {
    await test.step(`Select "${giftBasketsName}" from Gift Baskets dropdown`, async () => {
      await this.commonUtils.closePopup();
      await this.playwrightActionFactory.waitForDomLoad();

      let dropdownItemsLocator: LocatorInfo;
      if (isWeb) {
        await this.openGiftBasketsDropdown(true);
        dropdownItemsLocator = this.locators.dropdownItems;
      } else {
        this.locators.dynamicLocator.locator = this.page.locator(
          `(//a[normalize-space()='${this.giftBasketsLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 13]/a`
        );
        dropdownItemsLocator = this.locators.dynamicLocator;
      }

      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.giftBasketsDropdown,
        this.locators.giftBasketsOptions,
        giftBasketsName,
        isWeb,
        dropdownItemsLocator,
        20000
      );
    });
  }

  public async verifyGiftBasketsPageHeader(expectedHeaderText: string): Promise<void> {
    await test.step(`Verify Gift Baskets page header displays "${expectedHeaderText}"`, async () => {
      const pageHeader = {
        description: "Gift Baskets page header",
        locator: this.page.locator("h1").first(),
      };

      await this.playwrightVerificationFactory.verifyText(pageHeader, expectedHeaderText);
    });
  }

  public async verifyGiftBasketsPageElements(
  ): Promise<void> {
    await test.step("Verify Flowers & Plants page elements", async () => {
      let actualPageHeadings: string[] = []
     for(let i=1;i<=6;i++) {
      const heading = await this.page.locator(`((//a[@href="/gift-baskets/"])[2]/following::li)[${i}]`).textContent();
      if(heading) {
        actualPageHeadings.push(heading);
      }
     }
     console.log("actualPageHeadings: ", actualPageHeadings);
     const count = actualPageHeadings.length;
     expect(count).toBeGreaterThan(0);
    });
  }
  public async verifyGiftBasketsPageElementesMobile(
    expectedPageHeadings: ExpectedGiftBasketsPageHeadingsData
  ): Promise<void> {
    await test.step("Verify Gift Baskets page elements (mobile)", async () => {
      await this.playwrightVerificationFactory.verifyPageElements(
        this.locators.mobileGiftBasketsPage,
        this.locators.giftBasketsPageElements,
        expectedPageHeadings.headings
      );
    });
  }
}
