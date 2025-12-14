import { Locator, Page, expect, test, TestInfo } from "@playwright/test";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import {
    ExpectedCorporateHeaderData,
    ExpectedCorporateHeaderDataFrench,
    ExpectedCorporateSectionsData,
    ExpectedCorporateSectionsDataFrench,
    FormElementsForDiscount,
    FormElementsForQuote,
    SelectCorporateMenuItemData,
    SelectCorporateMenuItemDataFrench,
} from "@interfaces/corporate/corporate.interface";
import { CommonUtils } from "@utilities/common.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class CorporatePage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly commonUtils: CommonUtils;
  private readonly corporateLinkText: string;

  public constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightActionFactory = new PlaywrightActionFactory(this.page, this.testInfo);
    this.playwrightVerificationFactory = new PlaywrightVerificationFactory(this.page, this.testInfo);
    this.commonUtils = new CommonUtils(this.page, this.testInfo);

    this.Englishlocators = {
      corporateDropdown: {
        description: "Corporate dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Corporate', exact: true }),
      },
      corporateOptions: {
        description: "Corporate options",
        locator: this.page.locator("(//a[@href='/apply-for-20-corporate-discount/']//ancestor::li//span[@class='plus'])[1]"),
      },
      dropdownItems: {
        description: "Corporate dropdown items",
        locator: this.page.getByRole("navigation").locator("//a[normalize-space()='Corporate']/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      corporatePageElements: {
        description: "Corporate page elements",
        locator: this.page.getByRole("navigation").getByText("Apply for 20% Corporate Discount Quote Request Form Corporate Gift Baskets"),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
      mobileCorporatePage: {
        description: "Mobile Corporate page",
        locator: this.page.locator("//a[normalize-space()='Corporate']//preceding-sibling::span[@class='plus']"),
      },
      discountFirstNameInput: {
        description: "Corporate discount first name input",
        locator: this.page.locator("#first_name"),
      },
      discountLastNameInput: {
        description: "Corporate discount last name input",
        locator: this.page.locator("#last_name"),
      },
      discountPhoneInput: {
        description: "Corporate discount phone input",
        locator: this.page.locator("#phone"),
      },
      discountCompanyInput: {
        description: "Corporate discount company name input",
        locator: this.page.locator("#company"),
      },
      discountWorkEmailInput: {
        description: "Corporate discount work email input",
        locator: this.page.locator("#username"),
      },
      quoteFullNameInput: {
        description: "Corporate quote full name input",
        locator: this.page.locator("#full_name"),
      },
      quoteEmailInput: {
        description: "Corporate quote email input",
        locator: this.page.locator("#email"),
      },
      quotePhoneInput: {
        description: "Corporate quote phone input",
        locator: this.page.locator("#quote-request #phone"),
      },
      quoteNumberOfBasketsInput: {
        description: "Corporate quote number of gift baskets input",
        locator: this.page.locator("#number_of_gift_basket"),
      },
      quoteEstimatedBudgetInput: {
        description: "Corporate quote estimated budget input",
        locator: this.page.locator("#estimated_budget"),
      },
      quoteApproximateDeliveryInput: {
        description: "Corporate quote approximate delivery date input",
        locator: this.page.locator("#delivery_date"),
      },
      quoteStateSelect: {
        description: "Corporate quote state/province select",
        locator: this.page.locator("#state"),
      },
      quoteProductDescriptionTextarea: {
        description: "Corporate quote product description textarea",
        locator: this.page.locator("#product_desc"),
      },
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
    };

    this.Frenchlocators = {
      corporateDropdown: {
        description: "Corporate dropdown",
        locator: this.page.getByRole('navigation').getByRole('link', { name: 'Entreprise', exact: true }),
      },
      corporateOptions: {
        description: "Corporate options",
        locator: this.page.locator("(//a[@href='/fr/demander-un-rabais-corporatif-de-20/']//ancestor::li//span[@class='plus'])[1]"),
      },
      dropdownItems: {
        description: "Corporate dropdown items",
        locator: this.page.getByRole("navigation").locator("//a[normalize-space()='Entreprise']/following-sibling::ul[1]/li/a"),
      },
      clickListItem: {
        description: "Click list item",
        locator: this.page.getByRole("link", { name: "" }),
      },
      corporatePageElements: {
        description: "Corporate page elements",
        locator: this.page.getByRole("navigation").getByText("Demander un Rabais Corporatif de 20% Formulaire de Demande de Devis Paniers Cadeaux d'entreprise"),
      },
      mobileMenu: {
        description: "Mobile menu",
        locator: this.page.locator("//button[normalize-space()='Menu']"),
      },
      mobileCorporatePage: {
        description: "Mobile Corporate page",
        locator: this.page.locator("//a[normalize-space()='Entreprise']//preceding-sibling::span[@class='plus']"),
      },
      discountFirstNameInput: {
        description: "Corporate discount first name input",
        locator: this.page.locator("#first_name"),
      },
      discountLastNameInput: {
        description: "Corporate discount last name input",
        locator: this.page.locator("#last_name"),
      },
      discountPhoneInput: {
        description: "Corporate discount phone input",
        locator: this.page.locator("#phone"),
      },
      discountCompanyInput: {
        description: "Corporate discount company name input",
        locator: this.page.locator("#company"),
      },
      discountWorkEmailInput: {
        description: "Corporate discount work email input",
        locator: this.page.locator("#username"),
      },
      quoteFullNameInput: {
        description: "Corporate quote full name input",
        locator: this.page.locator("#full_name"),
      },
      quoteEmailInput: {
        description: "Corporate quote email input",
        locator: this.page.locator("#email"),
      },
      quotePhoneInput: {
        description: "Corporate quote phone input",
        locator: this.page.locator("#quote-request #phone"),
      },
      quoteNumberOfBasketsInput: {
        description: "Corporate quote number of gift baskets input",
        locator: this.page.locator("#number_of_gift_basket"),
      },
      quoteEstimatedBudgetInput: {
        description: "Corporate quote estimated budget input",
        locator: this.page.locator("#estimated_budget"),
      },
      quoteApproximateDeliveryInput: {
        description: "Corporate quote approximate delivery date input",
        locator: this.page.locator("#delivery_date"),
      },
      quoteStateSelect: {
        description: "Corporate quote state/province select",
        locator: this.page.locator("#state"),
      },
      quoteProductDescriptionTextarea: {
        description: "Corporate quote product description textarea",
        locator: this.page.locator("#product_desc"),
      },
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
    };

    this.locators = {};
    process.env.NODE_locale === "fr" ? (this.locators = this.Frenchlocators) : (this.locators = this.Englishlocators);
    this.corporateLinkText = process.env.NODE_locale === "fr" ? "Entreprise" : "Corporate";
  }

  public async openCorporateDropdown(isWeb: boolean = true): Promise<void> {
    await test.step("Open Corporate dropdown", async () => {

      if (isWeb) {
        await this.playwrightActionFactory.hover(this.locators.corporateDropdown);
      } else {
        const isMenuOpen = await this.locators.corporateOptions.locator.isVisible();
        if (!isMenuOpen) {
          // For mobile: click on the element to open dropdown
          await this.playwrightActionFactory.click(this.locators.corporateOptions);
        }
      }

      await this.commonUtils.closePopup();
    });
  }

  public async getAllCorporateDropdownValues(): Promise<void> {
    await test.step("Get all Corporate dropdown values", async () => {
      await this.playwrightVerificationFactory.getAllDropdownValues(
        this.locators.corporateDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async getAllCorporateDropdownValuesMobile(pageName?: string): Promise<string[]> {
    const targetLinkText = pageName || this.corporateLinkText;
    this.locators.dynamicLocator.description = `Navigate to ${targetLinkText}`;
    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${targetLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 5]/a`
    );

    return await this.playwrightVerificationFactory.getAllDropdownValues(
      this.locators.mobileCorporatePage,
      this.locators.dynamicLocator,
      false
    );
  }

  public async verifyAllCorporateDropdownValues(): Promise<void> {
    await test.step("Verify all Corporate dropdown values", async () => {
      await this.playwrightVerificationFactory.verifyAllDropdownValues(
        this.locators.corporateDropdown,
        this.locators.dropdownItems,
        true
      );
    });
  }

  public async verifyAllCorporateDropdownValuesMobile(
    expectedValues: string[],
    isWeb: boolean = false
  ): Promise<void> {
    await this.openCorporateDropdown(false);
    await this.playwrightActionFactory.waitForSec(1);

    this.locators.dynamicLocator.locator = this.page.locator(
      `(//a[normalize-space()='${this.corporateLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 5]/a`
    );

    await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
      this.locators.mobileCorporatePage,
      this.locators.dynamicLocator,
      expectedValues,
      isWeb,
      true
    );
  }

  public async openCorporateOptions(): Promise<void> {
    await test.step("Open Corporate Options", async () => {
      await this.playwrightActionFactory.click(this.locators.corporateOptions);
    });
  }

  public async verifyCorporateDropdownValuesMatch(expectedValues: string[]): Promise<void> {
    await test.step("Verify Corporate dropdown values match expected", async () => {
      await this.playwrightVerificationFactory.verifyDropdownValuesMatch(
        this.locators.corporateDropdown,
        this.locators.dropdownItems,
        expectedValues,
        true,
        true
      );
    });
  }

  public async selectCorporateItem(
    corporateItem: SelectCorporateMenuItemData | SelectCorporateMenuItemDataFrench
  ): Promise<void> {
    this.locators.clickListItem.locator = this.page.getByRole("link", {
      name: `${corporateItem.menuItem}`,
    });

    await test.step("Select Corporate item", async () => {
      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.corporateDropdown,
        this.locators.mobileCorporatePage,
        corporateItem.menuItem,
        corporateItem.isDesktop,
        this.locators.clickListItem
      );
    });
  }

  public async selectCorporateFromDropdown(corporateName: string, isWeb: boolean = true): Promise<void> {
    await test.step(`Select "${corporateName}" from Corporate dropdown`, async () => {
      await this.commonUtils.closePopup();
      await this.playwrightActionFactory.waitForDomLoad();

      let dropdownItemsLocator: LocatorInfo;
      if (isWeb) {
        await this.openCorporateDropdown(true);
        dropdownItemsLocator = this.locators.dropdownItems;
      } else {
        this.locators.dynamicLocator.locator = this.page.locator(
          `(//a[normalize-space()='${this.corporateLinkText}'])[1]/following-sibling::ul[1]/li[position() <= 5]/a`
        );
        dropdownItemsLocator = this.locators.dynamicLocator;
      }

      await this.playwrightActionFactory.selectDropdownValue(
        this.locators.corporateDropdown,
        this.locators.corporateOptions,
        corporateName,
        isWeb,
        dropdownItemsLocator,
        20000
      );
    });
  }

  public async verifyCorporatePageHeader(expectedHeaderText: string): Promise<void> {
    await test.step(`Verify Corporate page header displays "${expectedHeaderText}"`, async () => {
      const pageHeader = {
        description: "Corporate page header",
        locator: this.page.getByRole("heading").first(),
      };

      await this.playwrightVerificationFactory.verifyText(pageHeader, expectedHeaderText);
    });
  }

  public async verifyCorporateDiscountForm(discountForm: FormElementsForDiscount): Promise<void> {
    await test.step("Verify corporate discount form fields", async () => {
      const discountFields: Array<{ locatorInfo: LocatorInfo; expectedPlaceholder: string }> = [
        { locatorInfo: this.locators.discountFirstNameInput, expectedPlaceholder: discountForm.firstName },
        { locatorInfo: this.locators.discountLastNameInput, expectedPlaceholder: discountForm.lastName },
        { locatorInfo: this.locators.discountPhoneInput, expectedPlaceholder: discountForm.phone },
        { locatorInfo: this.locators.discountCompanyInput, expectedPlaceholder: discountForm.companyName },
        { locatorInfo: this.locators.discountWorkEmailInput, expectedPlaceholder: discountForm.workEmail },
      ];

      for (const field of discountFields) {
        await this.playwrightVerificationFactory.waitForVisibility(field.locatorInfo);
        await expect(field.locatorInfo.locator).toHaveAttribute("placeholder", field.expectedPlaceholder);
      }
    });
  }

  public async verifyCorporateQuoteForm(quoteForm: FormElementsForQuote): Promise<void> {
    await test.step("Verify corporate quote form fields", async () => {
      const quoteFieldsWithPlaceholder: Array<{ locatorInfo: LocatorInfo; expectedPlaceholder: string }> = [
        { locatorInfo: this.locators.quotePhoneInput, expectedPlaceholder: quoteForm.phone },
      ];

      const quoteFieldsWithoutPlaceholder: LocatorInfo[] = [
        this.locators.quoteFullNameInput,
        this.locators.quoteEmailInput,
        this.locators.quoteNumberOfBasketsInput,
        this.locators.quoteEstimatedBudgetInput,
        this.locators.quoteApproximateDeliveryInput,
        this.locators.quoteStateSelect,
        this.locators.quoteProductDescriptionTextarea,
      ];

      for (const field of quoteFieldsWithPlaceholder) {
        await this.playwrightVerificationFactory.waitForVisibility(field.locatorInfo);
        await expect(field.locatorInfo.locator).toHaveAttribute("placeholder", field.expectedPlaceholder);
      }

      for (const field of quoteFieldsWithoutPlaceholder) {
        await this.playwrightVerificationFactory.waitForVisibility(field);
      }
    });
  }

  public async verifyCorporatePageElementes(
    expectedPageHeadings: ExpectedCorporateSectionsData | ExpectedCorporateSectionsDataFrench
  ): Promise<void> {
    await test.step("Verify Corporate page elements", async () => {
      await this.playwrightVerificationFactory.verifyPageElements(
        this.locators.corporateDropdown,
        this.locators.corporatePageElements,
        expectedPageHeadings.sectionHeadings
      );
    });
  }

  public async verifyPageElements(expectedPageHeadings: ExpectedCorporateHeaderData |ExpectedCorporateSectionsData | ExpectedCorporateSectionsDataFrench | FormElementsForDiscount | FormElementsForQuote | ExpectedCorporateHeaderDataFrench): Promise<void> {
    await test.step("Verify Corporate page elements", async () => {
        const headerText = (expectedPageHeadings as ExpectedCorporateHeaderData | ExpectedCorporateHeaderDataFrench).headerText;
        switch (headerText) {
            case 'SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES':
                await this.verifyCorporateDiscountForm(expectedPageHeadings as FormElementsForDiscount);
                break;
            case 'Quote Form':
                await this.verifyCorporateQuoteForm(expectedPageHeadings as FormElementsForQuote);
                break;
            case 'Corporate Gift Baskets':
            case "Paniers cadeaux d'entreprise":
                // Check if sectionHeadings exists (ExpectedCorporateSectionsData) or if it's just headerText (ExpectedCorporateHeaderData)
                if ('sectionHeadings' in expectedPageHeadings) {
                    const sectionsData = expectedPageHeadings as ExpectedCorporateSectionsData | ExpectedCorporateSectionsDataFrench;
                    if (sectionsData.sectionHeadings && sectionsData.sectionHeadings.length > 0) {
                        await this.verifyCorporatePageElementes(sectionsData);
                    } else {
                        throw new Error('ExpectedCorporateSectionsData provided but sectionHeadings is empty or undefined');
                    }
                } else {
                    // If only headerText is provided, just verify the header
                    const headerData = expectedPageHeadings as ExpectedCorporateHeaderData | ExpectedCorporateHeaderDataFrench;
                    await this.verifyCorporatePageHeader(headerData.headerText);
                }
                break;
            default:
                throw new Error(`Invalid corporate page heading: ${headerText}`);
        }
    });
  }

  public async verifyCorporatePageElementesMobile(
    expectedPageHeadings: ExpectedCorporateSectionsData | ExpectedCorporateSectionsDataFrench
  ): Promise<void> {
    await test.step("Verify Corporate page elements (mobile)", async () => {
      await this.playwrightVerificationFactory.verifyPageElements(
        this.locators.mobileCorporatePage,
        this.locators.corporatePageElements,
        expectedPageHeadings.sectionHeadings
      );
    });
  }
}