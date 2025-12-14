import { expect, Locator, Page, test, TestInfo } from "@playwright/test";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";

import { CommonUtils } from "@utilities/common.utils";
import { normalizeText, parsePriceToNumber } from "@utilities/general.utils";
interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class BestSellersPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly commonUtils: CommonUtils;
  /**
   * Normalizes text by converting non-breaking spaces to regular spaces,
   * collapsing multiple spaces, and trimming.
   */
  
  /**
   * Parses a localized price string (e.g., "65,99 $", "1 299,00 $")
   * into a JavaScript number in a locale-agnostic way.
   */
 
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
      allProducts: {
        description: "All Products",
        locator: this.page.locator("//div[@class='inner priceonly']"),
      },
      bestSellersBadge: {
        description: "Best Sellers Badge",
        locator: this.page.locator(""),
      },
      productPrices: {
        description: "Product Prices",
        locator: this.page.locator(
          "//div[@class='inner priceonly']//div[@class='real_price_list']//span[2]"
        ),
      },
      sortByPrice: {
        description: "Sort by price",
        locator: this.page.locator(""),
      },
      productTitle: {
        description: "Product Title",
        locator: this.page.locator("(//span[@class='product-title'])[1]"),
      },
      productPrice: {
        description: "Product Price",
        locator: this.page.locator("(//span[@class='real_price_list'])[1]"),
      },
      addProductToCart: {
        description: "Add Product to Cart",
        locator: this.page.locator(""),
      },
      proceedToCheckout: {
        description: "Proceed to Checkout",
        locator: this.page.locator(""),
      },
      productTitleOnCartPage: {
        description: "Product Title on Cart Page",
        locator: this.page.locator("//div[@class='name']//a"),
      },
      productPriceOnCartPage: {
        description: "Product Price on Cart Page",
        locator: this.page.locator("(//td[@data-th='total'])[1]"),
      },
    };
    this.Frenchlocators = {
      allProducts: {
        description: "All Products",
        locator: this.page.locator("//div[@class='inner priceonly']"),
      },
      bestSellersBadge: {
        description: "Best Sellers Badge",
        locator: this.page.locator(""),
      },
      productPrices: {
        description: "Product Prices",
        locator: this.page.locator(
          "//div[@class='inner priceonly']//div[@class='real_price_list']//span[2]"
        ),
      },
      sortByPrice: {
        description: "Sort by price",
        locator: this.page.locator(""),
      },
      productTitle: {
        description: "Product Title",
        locator: this.page.locator("(//span[@class='product-title'])[2]"),
      },
      productPrice: {
        description: "Product Price",
        locator: this.page.locator("(//span[@class='real_price_list'])[2]"),
      },
      addProductToCart: {
        description: "Add Product to Cart",
        locator: this.page.locator(""),
      },
      proceedToCheckout: {
        description: "Proceed to Checkout",
        locator: this.page.locator(""),
      },
      productTitleOnCartPage: {
        description: "Product Title on Cart Page",
        locator: this.page.locator("//div[@class='name']//a"),
      },
      productPriceOnCartPage: {
        description: "Product Price on Cart Page",
        locator: this.page.locator("(//td[@data-th='total'])[1]"),
      },
    };
    this.locators = {};

    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
  }

  public async verifyAllProductsHaveBestSellersBadge(
    bestSellerBadge: string
  ): Promise<void> {
    this.locators.bestSellersBadge.description = `Best Sellers Badge ${bestSellerBadge}`;
    this.locators.bestSellersBadge.locator = this.page.locator(
      `//div[@class='inner priceonly']//div[text()='${bestSellerBadge}']`
    );
    const allProductsCount = await this.locators.allProducts.locator.count();
    const bestSellersBadgeCount =
      await this.locators.bestSellersBadge.locator.count();
    await test.step(`Verify all products have best sellers badge`, async () => {
      await this.playwrightVerificationFactory.assertAreEqual(
        allProductsCount,
        bestSellersBadgeCount
      );
    });
  }

  public async sortByPrice(
    sortByPrice: string,
    sortOrder: "Ascending" | "Descending"
  ): Promise<void> {
    await test.step(`Sort by price`, async () => {
      this.locators.sortByPrice.description = `Sort by price ${sortByPrice}`;
      this.locators.sortByPrice.locator = this.page.locator(
        `(//p[normalize-space()='${sortByPrice}'])[1]`
      );
      if (sortOrder === "Ascending") {
        await this.playwrightActionFactory.click(this.locators.sortByPrice);
        await this.playwrightActionFactory.waitForSec(3);
      } else {
        await this.playwrightActionFactory.click(this.locators.sortByPrice);
        await this.playwrightActionFactory.waitForSec(3);
        await this.playwrightActionFactory.click(this.locators.sortByPrice);
        await this.playwrightActionFactory.waitForSec(3);
      }
    });
  }

  public async verifyProductPricesAreSorted(
    sortOrder: "Ascending" | "Descending"
  ): Promise<void> {
    await test.step(`Verify product prices are sorted`, async () => {
      const rawPrices =
        await this.locators.productPrices.locator.allTextContents();
      const numericPrices = rawPrices
        .map((p) =>
          parseFloat(
            p
              .replace(/[^\d,.\-]/g, "")
              .replace(/\.(?=.*\.)/g, "")
              .replace(",", ".")
          )
        )
        .filter((n) => !Number.isNaN(n));
      const sortedAsc = [...numericPrices].sort((a, b) => a - b);
      if (sortOrder === "Ascending") {
        await this.playwrightVerificationFactory.assertAreEqual(
          numericPrices,
          sortedAsc
        );
      } else {
        await this.playwrightVerificationFactory.assertAreEqual(
          numericPrices,
          [...sortedAsc].reverse()
        );
      }
    });
  }

  public async addProductToCartAndVerifyPriceAndDescription(
    addToCartButton: string,
    proceedToCheckoutButton: string
  ): Promise<void> {
    let productTitle: string;
    let productPrice: string;
    this.locators.addProductToCart.description = `Add Product to Cart ${addToCartButton}`;
    this.locators.addProductToCart.locator = this.page.locator(
      `(//div[text()='${addToCartButton}'])[1]`
    );
    this.locators.proceedToCheckout.description = `Proceed to Checkout ${proceedToCheckoutButton}`;
    this.locators.proceedToCheckout.locator = this.page.locator(
      `//button[text()='${proceedToCheckoutButton}']`
    );
    await test.step(`Fetch product title and price`, async () => {
      const rawTitle =
        (await this.locators.productTitle.locator.textContent()) || "";
      const rawPrice =
        (await this.locators.productPrice.locator.textContent()) || "";
      productTitle = normalizeText(rawTitle);
      productPrice = normalizeText(rawPrice);
      console.log("productTitle: ", productTitle);
      console.log("productPrice: ", productPrice);
    });
    await test.step(`Add product to cart `, async () => {
      await this.playwrightActionFactory.click(this.locators.addProductToCart);
    });
    await test.step(`Proceed to checkout`, async () => {
      await this.playwrightActionFactory.click(this.locators.proceedToCheckout);
    });
    await test.step(`Verify product title on cart page`, async () => {
      const productTitleOnCartPageRaw =
        (await this.locators.productTitleOnCartPage.locator.textContent()) ||
        "";
      const productTitleOnCartPage = normalizeText(
        productTitleOnCartPageRaw
      );
      await this.playwrightVerificationFactory.assertAreEqual(
        productTitle.toString(),
        productTitleOnCartPage?.toString() || ""
      );
    });
    await test.step(`Verify product price on cart page`, async () => {
      const productPriceOnCartPageRaw =
        (await this.locators.productPriceOnCartPage.locator.textContent()) ||
        "";
      const productPriceOnCartPage = normalizeText(
        productPriceOnCartPageRaw
      );
      const expectedPriceNumber = parsePriceToNumber(productPrice);
      const cartPriceNumber = parsePriceToNumber(productPriceOnCartPage);
      await this.playwrightVerificationFactory.assertAreEqual(
        expectedPriceNumber,
        cartPriceNumber
      );
    });
  }
}
