import { Locator, Page, test, TestInfo } from '@playwright/test';
import { PlaywrightActionFactory } from '@utilities/playwright.actions.utils';
import { PlaywrightVerificationFactory } from '@utilities/playwright.verifications.utils';

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class SearchPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  /**
   * @param page
   * @param testInfo
   */
  public constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightActionFactory = new PlaywrightActionFactory(this.page, this.testInfo);
    this.playwrightVerificationFactory = new PlaywrightVerificationFactory(this.page, this.testInfo);
    this.Englishlocators = {
        dynamiclocator: {
            description: '',
            locator: this.page.locator(''),
        },
      searchInput: {
        description: 'Search input field',
        locator: this.page.locator('//input[@placeholder="Search"]'),
      },
      searchButton: {
        description: 'Search button',
        locator: this.page.locator('//span[@id="search_btn"]'),
      },
      productTitle: {
        description: 'Product title',
        locator: this.page.locator('//span[@class="product-title"]'),
      },
      homePageProductTitle: {
        description: 'Homepage product title',
        locator: this.page.locator('(//span[@class="product-title"])[1]'),
      },
      homePageProductPrice: {
        description: 'Homepage product price',
        locator: this.page.locator('(//div[contains(text(),"Bloomex Price:")]//following::span[@class="price"])[1]'),
      },
      productDescription: {
        description: 'Product description',
        locator: this.page.locator('(//div[@class="description"]//following::p)[1]'),
      },
      productName: {
        description: 'Product name',
        locator: this.page.locator('//h1'),
      },
      productPrice: {
        description: 'Product price',
        locator: this.page.locator('((//span[contains(text(),"Bloomex Price:")])[2]//following::span)[1]'),
      },
      mobileSearchIcon: {
        description: 'Mobile search icon',
        locator: this.page.locator('//a[@id="mobile_search"]'),
      },
      mobileSearchInput: {
        description: 'Mobile search input',
        locator: this.page.locator('(//input[@placeholder="Search by Keyword, Product SKU or Price"])[1]'),
      },
      mobileSearchButton: {
        description: 'Mobile search button',
        locator: this.page.locator('//span[@id="mobile_search_btn"]'),
      },
    };
    this.Frenchlocators = {
      dynamiclocator: {
          description: '',
          locator: this.page.locator(''),
      },
    searchInput: {
      description: 'Search input field',
      locator: this.page.locator('//input[@placeholder="Resercher"]'),
    },
    mobileSearchIcon: {
      description: 'Mobile search icon',
      locator: this.page.locator('//a[@id="mobile_search"]'),
    },
    searchButton: {
      description: 'Search button',
      locator: this.page.locator('//span[@id="search_btn"]'),
    },
    productTitle: {
      description: 'Product title',
      locator: this.page.locator('//span[@class="product-title"]'),
    },
    homePageProductTitle: {
      description: 'Homepage product title',
      locator: this.page.locator('(//span[@class="product-title"])[1]'),
    },
    homePageProductPrice: {
      description: 'Homepage product price',
      locator: this.page.locator('(//div[contains(text(),"Bloomex Price:")]//following::span[@class="price"])[1]'),
    },
    productDescription: {
      description: 'Product description',
      locator: this.page.locator('(//div[@class="description"]//following::p)[1]'),
    },
    productName: {
      description: 'Product name',
      locator: this.page.locator('//h1'),
    },
    productPrice: {
      description: 'Product price',
      locator: this.page.locator('((//span[contains(text(),"Bloomex Price:")])[2]//following::span)[1]'),
    },
    mobileSearchInput: {
      description: 'Mobile search input',
      locator: this.page.locator('(//input[@placeholder="Rechercher par mot cle, par code de produit ou par prix"])[1]'),
    },
    mobileSearchButton: {
      description: 'Mobile search button',
      locator: this.page.locator('//span[@id="mobile_search_btn"]'),
    },
  };

  this.locators = {};
  process.env.NODE_locale === "fr"
  ? (this.locators = this.Frenchlocators)
  : (this.locators = this.Englishlocators);
  }

  public async verifyMobileSearchInputIsVisible(): Promise<void> {
    await test.step('📱✅ Verify mobile search input is visible', async () => {
        await this.playwrightActionFactory.waitForSelector(this.locators.mobileSearchInput);
      await this.playwrightVerificationFactory.isElementVisible(this.locators.mobileSearchInput);
    });
  }

  public async verifyMobileSearchButtonIsVisible(): Promise<void> {
    await test.step('📱✅ Verify mobile search button is visible', async () => {
        await this.playwrightActionFactory.waitForSelector(this.locators.mobileSearchButton);
      await this.playwrightVerificationFactory.isElementVisible(this.locators.mobileSearchButton);
    });
  }
  public async verifyMobileSearchIconIsVisible(): Promise<void> {
    await test.step('📱✅ Verify mobile search icon is visible', async () => {
        await this.playwrightActionFactory.waitForSelector(this.locators.mobileSearchIcon);
      await this.playwrightVerificationFactory.isElementVisible(this.locators.mobileSearchIcon);
    });
  }
  public async openMobileSearchIcon(): Promise<void> {
    await test.step('📱🔍 Open mobile search icon', async () => {
        await this.playwrightActionFactory.waitForSelector(this.locators.mobileSearchIcon);
      await this.playwrightActionFactory.click(this.locators.mobileSearchIcon);
      await this.verifyMobileSearchInputIsVisible();
      await this.verifyMobileSearchButtonIsVisible();
      await this.verifyMobileSearchIconIsVisible();
    });
  }
   public async searchForProductOnMobile(productName: string): Promise<void> {
    await test.step('📱🔍 Search for product on mobile', async () => {
        await this.playwrightActionFactory.waitForSelector(this.locators.mobileSearchInput);
      await this.playwrightActionFactory.click(this.locators.mobileSearchInput);
      await this.playwrightActionFactory.sendKeysSequentially(this.locators.mobileSearchInput, productName);
      await this.playwrightActionFactory.click(this.locators.mobileSearchButton);
    });
  }

  public async openSearchproductOnMobile(productName: string): Promise<void> {
    await test.step('📱📦 Open search product on mobile', async () => {
        this.locators.dynamiclocator.description = `Product title: ${productName}`;
        this.locators.dynamiclocator.locator = this.page.locator(`//span[@class="product-title" and contains(text(), "${productName}")]`);
        await this.playwrightActionFactory.click(this.locators.dynamiclocator);
        
    });
  }
  public async verifyProductNameIsDisplayedOnMobile(productName: string): Promise<void> {
    await test.step('📱✅ Verify product name is displayed on mobile', async () => {
        await this.playwrightActionFactory.waitForSec(5);
        this.locators.dynamiclocator.description = `Product name: ${productName}`;
      this.locators.dynamiclocator.locator = this.page.locator('h1').getByText(`${productName}`);
      await this.playwrightVerificationFactory.isElementVisible(this.locators.dynamiclocator);
    });
  }
  public async verifyProductPriceIsDisplayedOnMobile(productPrice: string): Promise<void> {
    await test.step('📱💰 Verify product price is displayed on mobile', async () => {
        await this.playwrightActionFactory.waitForSelector(this.locators.dynamiclocator);
        this.locators.dynamiclocator.description = `Product price: ${productPrice}`;
      this.locators.dynamiclocator.locator = this.page.getByText(`${productPrice}`).nth(1);
      await this.playwrightVerificationFactory.isElementVisible(this.locators.dynamiclocator);
    });
  }
  public async verifyProductDescriptionIsDisplayedOnMobile(productDescription: string): Promise<void> {
    await test.step('📱📝 Verify product description is displayed on mobile', async () => {  
        await this.playwrightActionFactory.waitForSelector(this.locators.dynamiclocator);
        this.locators.dynamiclocator.description = `Product description: ${productDescription}`;
        this.locators.dynamiclocator.locator = this.page.locator(`//p[contains(text(), "${productDescription}")]`);
      await this.playwrightVerificationFactory.isElementVisible(this.locators.dynamiclocator);
    });
  }

  public async verifySearchInputIsVisible(): Promise<void> {
    await test.step('✅ Verify search input is visible', async () => {
      await this.playwrightVerificationFactory.isElementVisible(this.locators.searchInput);
    });
  }

  public async searchForProduct(productName: string): Promise<void> {
    await test.step(`🔍 Search for product: ${productName}`, async () => {
      await this.playwrightActionFactory.click(this.locators.searchInput);
      await this.playwrightActionFactory.sendKeys(this.locators.searchInput, productName);
      await this.playwrightActionFactory.click(this.locators.searchButton);
    });
  }

  public async openSearchedproduct(productName: string): Promise<void> {
    await test.step('📦 Open search product', async () => {  
        this.locators.dynamiclocator.description = `Product title: ${productName}`;
        this.locators.dynamiclocator.locator = this.page.locator(`(//span[@class="product-title" and contains(text(), "${productName}")])[1]`);
        await this.playwrightActionFactory.click(this.locators.dynamiclocator);
    });
  }

  public async verifyProductNameIsDisplayed(productName: string): Promise<void> {
    await test.step('✅ Verify product name is displayed', async () => {   
      this.locators.dynamiclocator.description = `Product name: ${productName}`;
      this.locators.dynamiclocator.locator = this.page.locator('h1').getByText(`${productName}`);
      await this.playwrightVerificationFactory.verifyText(this.locators.dynamiclocator, productName);
    });
  }

  public async verifyProductPriceIsDisplayed(productPrice: string): Promise<void> {
    await test.step('💰 Verify product price is displayed', async () => {
      await this.playwrightActionFactory.waitForSec(5);   
      this.locators.dynamiclocator.description = `Product price: ${productPrice}`;
      this.locators.dynamiclocator.locator = this.page.getByText(`${productPrice}`).nth(1);
      await this.playwrightVerificationFactory.verifyText(this.locators.dynamiclocator, productPrice);
    });
  }
   
  public async verifyProductDescriptionIsDisplayed(productDescription: string): Promise<void> {
    await test.step('📝 Verify product description is displayed', async () => {
        await this.playwrightActionFactory.waitForSec(5);   
        this.locators.dynamiclocator.description = `Product description: ${productDescription}`;
        this.locators.dynamiclocator.locator = this.page.locator(`//p[contains(normalize-space(), "${productDescription}")]`);
        await this.playwrightVerificationFactory.verifyText(this.locators.dynamiclocator, productDescription);
    });
  }
}
