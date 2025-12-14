import { Locator, Page, test, TestInfo } from "@playwright/test";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import {
  normalizeText,
  parsePriceToNumber,
  sumPrices,
  sumPricesForFrench,
} from "@utilities/general.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class AddToCartPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private readonly locators: { [key: string]: LocatorInfo };
  private productName: string | null = "";
  private productPrice: string | null = "";
  private productPrice2: string | null = "";
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

    // Define locators with descriptions
    this.Englishlocators = {
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
      productName: {
        description: "Product Name",
        locator: this.page.locator("(//span[@class='product-title'])[1]"),
      },
      productPrice: {
        description: "Product Price",
        locator: this.page.locator("(//span[@class='real_price_list'])[1]"),
      },
      productPrice2: {
        description: "Product Price 2",
        locator: this.page.locator("(//span[@class='price'])[1]"),
      },
      addToCartButton: {
        description: "Add to Cart Button",
        locator: this.page.locator(""),
      },
      proceedToCheckout: {
        description: "Proceed To Checkout Button",
        locator: this.page.locator(""),
      },
      cartHeading: {
        description: "Cart Heading",
        locator: this.page.locator(""),
      },
      productNameOnCartPage: {
        description: "Product Name on Cart Page",
        locator: this.page.locator("//div[@class='name']//a"),
      },
      productPriceOnCartPage: {
        description: "Product Price on Cart Page",
        locator: this.page.locator(""),
      },
      productQuantityOnCartPage: {
        description: "Product Quantity on Cart Page",
        locator: this.page.locator("//div[@class='quantity']//input"),
      },
      proceedToCheckoutButtonOnCartPage: {
        description: "Proceed To Checkout Button on Cart Page",
        locator: this.page.locator(""),
      },
      checkoutHeading: {
        description: "Checkout Heading",
        locator: this.page.locator("//h3[text()='EXPRESS CHECKOUT']"),
      },
      increaseProductQuantityButton: {
        description: "Increase Product Quantity Button",
        locator: this.page.locator("//span[@class='plus']").last(),
      },
      decreaseProductQuantityButton: {
        description: "Decrease Product Quantity Button",
        locator: this.page.locator("//span[@class='minus']").last(),
      },
      totalBill: {
        description: "Total Bill",
        locator: this.page.locator("//span[@class='cart_subtotal']"),
      },
      totalBillOnCheckoutPage: {    
        description: "Total Bill on Checkout Page",
        locator: this.page.locator("(//td[@data-th='total'])[1]"),
      },
    };
    this.Frenchlocators = {
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
      productName: {
        description: "Product Name",
        locator: this.page.locator("(//span[@class='product-title'])[1]"),
      },
      productPrice: {
        description: "Product Price",
        locator: this.page.locator("(//span[@class='real_price_list'])[1]"),
      },
      productPrice2: {
        description: "Product Price 2",
        locator: this.page.locator("(//span[@class='price'])[1]"),
      },
      addToCartButton: {
        description: "Add to Cart Button",
        locator: this.page.locator(""),
      },
      proceedToCheckout: {
        description: "Proceed To Checkout Button",
        locator: this.page.locator(""),
      },
      cartHeading: {
        description: "Cart Heading",
        locator: this.page.locator(""),
      },
      productNameOnCartPage: {
        description: "Product Name on Cart Page",
        locator: this.page.locator("//div[@class='name']//a"),
      },
      productPriceOnCartPage: {
        description: "Product Price on Cart Page",
        locator: this.page.locator(""),
      },
      productQuantityOnCartPage: {
        description: "Product Quantity on Cart Page",
        locator: this.page.locator("//div[@class='quantity']//input"),
      },
      proceedToCheckoutButtonOnCartPage: {
        description: "Proceed To Checkout Button on Cart Page",
        locator: this.page.locator(""),
      },
      checkoutHeading: {
        description: "Checkout Heading",
        locator: this.page.locator("//h3[text()='EXPRESSE CAISSE']"),
      },
      increaseProductQuantityButton: {
        description: "Increase Product Quantity Button",
        locator: this.page.locator("//span[@class='plus']").last(),
      },
      decreaseProductQuantityButton: {
        description: "Decrease Product Quantity Button",
        locator: this.page.locator("//span[@class='minus']").last(),
      },
      totalBill: {
        description: "Total Bill",
        locator: this.page.locator("//span[@class='cart_subtotal']"),
      },
      totalBillOnCheckoutPage: {    
        description: "Total Bill on Checkout Page",
        locator: this.page.locator("(//td[@data-th='total'])[1]"),
      },
    };
    this.locators = {};

    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
  }

  public async addProductToCart(
    addToCartButton: string,
    proceedToCheckoutButton: string
  ): Promise<void> {
    this.locators.addToCartButton.description = `Add to Cart Button: ${addToCartButton}`;
    this.locators.addToCartButton.locator = this.page.locator(
      `(//div[text()='${addToCartButton}'])[1]`
    );
    this.locators.proceedToCheckout.description = `Proceed To Checkout Button: ${proceedToCheckoutButton}`;
    this.locators.proceedToCheckout.locator = this.page.locator(
      `//button[text()='${proceedToCheckoutButton}']`
    );
    await test.step("Get Product Name and Price", async () => {
      this.productName = normalizeText(
        (await this.playwrightActionFactory.getText(
          this.locators.productName
        )) || ""
      );
      this.productPrice = normalizeText(
        (await this.playwrightActionFactory.getText(
          this.locators.productPrice
        )) || ""
      );
    });

    await test.step("Click on Add to Cart Button", async () => {
      await this.playwrightActionFactory.click(this.locators.addToCartButton);
      await this.playwrightActionFactory.waitForSec(2);
    });
    await test.step("Click on Proceed To Checkout Button", async () => {
      await this.playwrightActionFactory.click(this.locators.proceedToCheckout);
    });
  }

  public async verifyProductCartPage(
    cartHeading: string,
    productQuantity: string
  ): Promise<void> {
    this.locators.cartHeading.description = `Cart Heading: ${cartHeading}`;
    this.locators.cartHeading.locator = this.page.locator(
      `//h3[contains(text(),'${cartHeading}')]`
    );
    this.locators.productPriceOnCartPage.description = `Product Price on Cart Page: ${this.productPrice}`;
    this.locators.productPriceOnCartPage.locator = this.page.locator(
      `//td[@data-th="price"]`
    );

    await test.step("Verify Cart Heading", async () => {
      await this.playwrightVerificationFactory.expectElementExist(
        this.locators.cartHeading
      );
    });

    await test.step("Verify Product Name on Cart Page", async () => {
      const productNameOnCartPage = normalizeText(
        (await this.playwrightActionFactory.getText(
          this.locators.productNameOnCartPage
        )) || ""
      );
      await this.playwrightVerificationFactory.assertAreEqual(
        this.productName ?? "",
        productNameOnCartPage
      );
    });
    await test.step("Verify Product Price on Cart Page", async () => {
      const expectedPriceNumber = parsePriceToNumber(this.productPrice ?? "");
      const cartPriceNumber = parsePriceToNumber(
        normalizeText(
          (await this.playwrightActionFactory.getText(
            this.locators.productPriceOnCartPage
          )) || ""
        )
      );
      await this.playwrightVerificationFactory.assertAreEqual(
        expectedPriceNumber,
        cartPriceNumber
      );
    });

    await test.step("Verify Product Quantity on Cart Page", async () => {
      await this.verifyProductQuantityOnCartPage(productQuantity);
    });
  }

  public async verifyProductQuantityOnCartPage(
    productQuantity: string
  ): Promise<void> {
    const productQuantityValue =
      await this.playwrightActionFactory.getInputValue(
        this.locators.productQuantityOnCartPage
      );
    await this.playwrightVerificationFactory.assertAreEqual(
      productQuantityValue,
      productQuantity
    );
  }

  public async proceedToCheckout(
    proceedToCheckoutButtonOnCartPage: string
  ): Promise<void> {
    this.locators.proceedToCheckoutButtonOnCartPage.description = `Proceed To Checkout Button on Cart Page: ${proceedToCheckoutButtonOnCartPage}`;
    this.locators.proceedToCheckoutButtonOnCartPage.locator = this.page.locator(
      `//a[contains(text(),'${proceedToCheckoutButtonOnCartPage}')]`
    );
    await test.step("Click on Proceed To Checkout Button on Cart Page", async () => {
      await this.playwrightActionFactory.click(
        this.locators.proceedToCheckoutButtonOnCartPage
      );
      await this.playwrightActionFactory.waitForSec(3);
    });

    await test.step("Verify Checkout Heading", async () => {
      await this.playwrightVerificationFactory.expectElementExist(
        this.locators.checkoutHeading
      );
    });
  }

  public async increaseProductQuantity(
    increasedProductQuantity: string
  ): Promise<void> {
    await test.step("Increase Product Quantity", async () => {
      await this.playwrightActionFactory.click(
        this.locators.increaseProductQuantityButton
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Verify Increased Product Quantity on Cart Page", async () => {
      await this.verifyProductQuantityOnCartPage(increasedProductQuantity);
    });
  }

  public async decreaseProductQuantity(
    decreasedProductQuantity: string
  ): Promise<void> {
    await test.step("Increase Product Quantity", async () => {
      await this.playwrightActionFactory.click(
        this.locators.increaseProductQuantityButton
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Decrease Product Quantity", async () => {
      await this.playwrightActionFactory.click(
        this.locators.decreaseProductQuantityButton
      );
      await this.playwrightActionFactory.waitForSec(4);
    });

    await test.step("Verify Decreased Product Quantity on Cart Page", async () => {
      await this.verifyProductQuantityOnCartPage(decreasedProductQuantity);
    });
  }

  public async updateProductQuantity(addToCartButton: string): Promise<void> {
    this.locators.addToCartButton.description = `Add to Cart Button: ${addToCartButton}`;
    this.locators.addToCartButton.locator = this.page.locator(
      `(//div[text()='${addToCartButton}'])[1]`
    );
    await test.step("Click add to cart button to add another product", async () => {
      await this.playwrightActionFactory.click(this.locators.addToCartButton);
      await this.playwrightActionFactory.waitForSec(3);
    });

    await test.step("Get Product and Product Price of the second product", async () => {
      this.productPrice2 = await this.playwrightActionFactory.getText(
        this.locators.productPrice2
      );
    });

    await test.step("Verify total bill of the two products", async () => {
      const totalBillValue = await this.playwrightActionFactory.getText(
        this.locators.totalBill
      );
      const totalPrice = sumPrices(
        this.productPrice ?? "",
        this.productPrice2 ?? ""
      );
      await this.playwrightVerificationFactory.assertAreEqual(
        totalBillValue ?? "",
        totalPrice
      );
    });
  }

  public async verifyPriceIncreasesOnCheckoutPage(): Promise<void> {
    let totalPrice = "";
    const totalBillValue = await this.playwrightActionFactory.getText(
      this.locators.totalBillOnCheckoutPage
    );
    await test.step("Verify Total Bill on Checkout Page", async () => {
    process.env.NODE_locale === "fr"
    ? (totalPrice = sumPricesForFrench(this.productPrice ?? "", this.productPrice ?? ""))
    : (totalPrice = sumPrices(this.productPrice ?? "", this.productPrice ?? ""));
    await this.playwrightVerificationFactory.assertAreEqual(
        totalBillValue ?? "",
        totalPrice
      );
    });
  }

  public async verifyPriceDecreasesOnCheckoutPage(): Promise<void> {
    let totalPrice = "";
    const totalBillValue = await this.playwrightActionFactory.getText(
      this.locators.totalBillOnCheckoutPage
    );
    await test.step("Verify Total Bill on Checkout Page", async () => {
    process.env.NODE_locale === "fr"
    ? (totalPrice = sumPricesForFrench(this.productPrice ?? "", ""))
    : (totalPrice = sumPrices(this.productPrice ?? "",  ""));
    await this.playwrightVerificationFactory.assertAreEqual(
      totalBillValue ?? "",
      totalPrice
    );
    });
  }

  public async verifyPriceIncreasesOnOrderPriceDetail(): Promise<void> {
    let totalPrice = "";
    const totalBillValue = await this.playwrightActionFactory.getText(
      this.locators.totalBillOnCheckoutPage
    );
    await test.step("Verify Total Bill on Order Price Detail", async () => {
    process.env.NODE_locale === "fr"
    ? (totalPrice = sumPricesForFrench(this.productPrice ?? "", this.productPrice ?? ""))
    : (totalPrice = sumPrices(this.productPrice ?? "", this.productPrice ?? ""));
    await this.playwrightVerificationFactory.assertAreEqual(
      totalBillValue ?? "",
      totalPrice
    );
    });
  }

  public async verifyPriceDecreasesOnOrderPriceDetail(): Promise<void> {
    let totalPrice = "";
    const totalBillValue = await this.playwrightActionFactory.getText(
      this.locators.totalBillOnCheckoutPage
    );
    await test.step("Verify Total Bill on Order Price Detail", async () => {
    process.env.NODE_locale === "fr"
    ? (totalPrice = sumPricesForFrench(this.productPrice ?? "", ""))
    : (totalPrice = sumPrices(this.productPrice ?? "", ""));
    await this.playwrightVerificationFactory.assertAreEqual(
      totalBillValue ?? "",
      totalPrice
    );
    });
  }
}
