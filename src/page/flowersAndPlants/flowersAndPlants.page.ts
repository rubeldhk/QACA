import { expect, Locator, Page, test, TestInfo } from "@playwright/test";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import { SelectFlowersAndPlantsItemData, ExpectedFlowersAndPlantsPageHeadingsData } from "@interfaces/flowersAndPlants/flowersAndPlants.interface";
import { CommonUtils } from "@utilities/common.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class FlowersAndPlantsPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly commonUtils: CommonUtils;
  private readonly flowersAndPlantsLinkText: string;

  public constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightActionFactory = new PlaywrightActionFactory(this.page, this.testInfo);
    this.playwrightVerificationFactory = new PlaywrightVerificationFactory(this.page, this.testInfo);
    this.commonUtils = new CommonUtils(this.page, this.testInfo);

    this.Englishlocators = {
      flowersAndPlantsDropdown: {
        description: "Flowers & Plants dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Flowers | Plants' }),
      },
      flowersAndPlantsOptions: {
        description: "Flowers & Plants options",
        locator: this.page.locator("(//a[@href='/flowers/']//ancestor::li//span[@class='plus'])"),
      },
      dropdownItems: {
        description: "Flowers & Plants dropdown items",
        locator: this.page.getByRole("navigation").locator("//a[@href='/flowers/']/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      flowersAndPlantsPageElements: {
        description: "Flowers & Plants page elements",
        locator: this.page.getByRole('navigation').getByText('Roses Flower & Planter Baskets Mixed Bouquets Daisy Bouquets Lilies Tropical Plants & Planter Baskets'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
    mobileFlowersAndPlantsPage: {
        description: "Mobile Flowers & Plants page",
        locator: this.page.locator("//a[@href='/flowers/']//preceding-sibling::span[@class='plus']"),
      },
      mobileFlowersAndPlantsList: {
        description: "Mobile Flowers & Plants list",
        locator: this.page.locator("(//a[@href='/flowers/']//following-sibling::ul)[1]"),
      },
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
    };

    this.Frenchlocators = {
      flowersAndPlantsDropdown: {
        description: "Flowers & Plants dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Fleurs', exact: true })
      },
      flowersAndPlantsOptions: {
        description: "Flowers & Plants options",
        locator: this.page.locator("(//a[@href='/fr/fleurs/']//ancestor::li//span[@class='plus'])"),
      },
      dropdownItems: {
        description: "Flowers & Plants dropdown items",
        locator: this.page.getByRole("navigation").locator("//a[@href='/fr/fleurs/']/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      flowersAndPlantsPageElements: {
        description: "Flowers & Plants page elements",
        locator: this.page.getByRole('navigation').getByText('Bouquets Mélangés Plantes'),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
      mobileFlowersAndPlantsPage: {
        description: "Mobile Flowers & Plants page",
        locator: this.page.locator("//a[@href='/fr/fleurs/']//preceding-sibling::span[@class='plus']"),
      },
      mobileFlowersAndPlantsList: {
        description: "Mobile Flowers & Plants list",
        locator: this.page.locator("(//a[@href='/fr/fleurs/']//following-sibling::ul)[1]"),
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
    this.flowersAndPlantsLinkText = process.env.NODE_locale === "fr" ? "Flowers & Plants" : "Flowers | Plants";
  }

  public async openFlowersAndPlantsDropdown(isWeb: boolean = true,): Promise<void> {
    await test.step("Open Flowers & Plants dropdown", async () => {
      if (isWeb) {
        await this.playwrightActionFactory.hover(this.locators.flowersAndPlantsDropdown);
      } else {
        const isMenuOpen = await this.locators.mobileFlowersAndPlantsList.locator.isVisible();
        if (!isMenuOpen) {
          // For mobile: click on the element to open dropdown
          await this.playwrightActionFactory.click(
            this.locators.mobileFlowersAndPlantsPage
          );
        }
      }

      await this.commonUtils.closePopup();
    });
  }

    public async getAllFlowersAndPlantsDropdownValues(): Promise<void> {
    await test.step("Get all Flowers & Plants dropdown values", async () => {
      await this.playwrightVerificationFactory.getAllDropdownValues(
        this.locators.flowersAndPlantsDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async getAllFlowersAndPlantsDropdownValuesMobile(pageName?: string): Promise<string[]> {
    const targetLinkText = pageName || this.flowersAndPlantsLinkText;
    this.locators.dynamicLocator.description = `Navigate to ${targetLinkText}`;
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${targetLinkText}'])[1]/following-sibling::ul[1]/li`
    );

    return await this.playwrightVerificationFactory.getAllDropdownValues(
      this.locators.mobileFlowersAndPlantsPage,
      this.locators.dynamicLocator,
      false
    );
  }

  public async verifyAllFlowersAndPlantsDropdownValues(): Promise<void> {
    await test.step("Verify all Flowers & Plants dropdown values", async () => {

      await this.playwrightVerificationFactory.verifyAllDropdownValues(
        this.locators.flowersAndPlantsDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async verifyAllFlowersAndPlantsDropdownValuesMobile(
    expectedValues: string[],
    isWeb: boolean = false
  ): Promise<void> {
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${this.flowersAndPlantsLinkText}'])[1]/following-sibling::ul[1]/li`
    );

    await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
    this.locators.mobileFlowersAndPlantsPage,
      this.locators.dynamicLocator,
      expectedValues,
      isWeb,
      false
    );
  }

  public async openFlowersAndPlantsOptions(): Promise<void> {
    await test.step("Open Flowers & Plants Options", async () => {
      await this.playwrightActionFactory.click(this.locators.flowersAndPlantsOptions);
    });
  }

  public async verifyFlowersAndPlantsDropdownValuesMatch(expectedValues: string[], hoverToOpen: boolean): Promise<void> {
    await test.step("Verify Flowers & Plants dropdown values match expected", async () => {
      await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
        this.locators.flowersAndPlantsDropdown,
        this.locators.dropdownItems,
        expectedValues,
        hoverToOpen,
        false
      );
    });
  }

  public async verifyFlowersAndPlantsDropdownValuesMatchMobile(expectedValues: string[], hoverToOpen: boolean): Promise<void> {
    await test.step("Verify Flowers & Plants dropdown values match expected", async () => {
      await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
        this.locators.mobileFlowersAndPlantsPage,
        this.locators.dropdownItems,
        expectedValues,
        hoverToOpen,
        false
      );
    });
  }

  public async selectFlowersAndPlantsItem(flowersAndPlantsItem: SelectFlowersAndPlantsItemData): Promise<void> {
    this.locators.clickListItem.locator = this.page.getByRole("link", {
      name: `${flowersAndPlantsItem.flowersAndPlantsItem}`,
    });

        await test.step("Select Flowers & Plants item", async () => {
      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.flowersAndPlantsDropdown,
        this.locators.mobileFlowersAndPlantsPage,
        flowersAndPlantsItem.flowersAndPlantsItem,
        flowersAndPlantsItem.isWeb,
        this.locators.clickListItem
      );
    });
  }

  public async selectFlowersAndPlantsFromDropdown(flowersAndPlantsName: string, isWeb: boolean = true): Promise<void> {
    await test.step(`Select "${flowersAndPlantsName}" from Flowers & Plants dropdown`, async () => {
      await this.commonUtils.closePopup();
      await this.playwrightActionFactory.waitForDomLoad();

      let dropdownItemsLocator: LocatorInfo;
      if (isWeb) {
        await this.openFlowersAndPlantsDropdown(true);
        dropdownItemsLocator = this.locators.dropdownItems;
      } else {
        this.locators.dynamicLocator.locator = this.page.locator(
          `(//a[normalize-space()='${this.flowersAndPlantsLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 13]/a`
        );
        dropdownItemsLocator = this.locators.dynamicLocator;
      }

      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.flowersAndPlantsDropdown,
        this.locators.flowersAndPlantsOptions,
        flowersAndPlantsName,
        isWeb,
        dropdownItemsLocator,
        20000
      );
    });
  }

  public async verifyFlowersAndPlantsPageHeader(expectedHeaderText: string): Promise<void> {
    await test.step(`Verify Flowers & Plants page header displays "${expectedHeaderText}"`, async () => {
      const pageHeader = {
        description: "Flowers & Plants page header",
        locator: this.page.locator("h1").first(),
      };

      await this.playwrightVerificationFactory.verifyText(pageHeader, expectedHeaderText);
    });
  }

  public async verifyFlowersAndPlantsPageElements(
    expectedPageHeadings: ExpectedFlowersAndPlantsPageHeadingsData
  ): Promise<void> {
    await test.step("Verify Flowers & Plants page elements", async () => {
      const actualPageHeadings = []
     for(let i=1;i<=6;i++) {
      const heading = await this.page.locator(`((//a[@href="/flowers/"])[2]/following::li)[${i}]`).textContent();
      if(heading) {
        actualPageHeadings.push(heading);
      }
     }
     console.log("actualPageHeadings: ", actualPageHeadings);
     console.log("expectedPageHeadings.headings: ", expectedPageHeadings.headings);
     // Verify each expected heading exists in actual headings (order independent)
     for (const expectedHeading of expectedPageHeadings.headings) {
       expect(actualPageHeadings).toContain(expectedHeading);
     }
    });
  }

  public async verifyFlowersAndPlantsPageElementesMobile(
    expectedPageHeadings: ExpectedFlowersAndPlantsPageHeadingsData
  ): Promise<void> {
    await test.step("Verify Flowers & Plants page elements (mobile)", async () => {
      await this.playwrightVerificationFactory.verifyPageElements(
        this.locators.mobileFlowersAndPlantsPage,
        this.locators.flowersAndPlantsPageElements,
        expectedPageHeadings.headings
      );
    });
  }
}

