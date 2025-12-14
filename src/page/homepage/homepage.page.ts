import { Locator, Page, test, TestInfo } from "@playwright/test";
import { getEnvVariable } from "@utilities/env.utils";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";
import { verifyBreadCrumbs } from "@interfaces/homepage/homePage.interface";
import {
  FooterLinks,
  NavDropdownItems,
  HelpDeskChat,
  BloomexOtherDomainsLinks,
  ElementExists,
} from "@interfaces/homepage/homePage.interface";
import { CommonUtils } from "@utilities/common.utils";
import { verifyPage } from "@interfaces/bestSellers/bestSellers.inrerface";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class HomepagePage {
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
      sliderImage: {
        description: "Slider image",
        locator: this.page.locator('//div[@id="block-for-slider"]'),
      },
      BloomexLogo: {
        description: "Bloomex Logo",
        locator: this.page.locator('//img[@alt="Bloomex.ca"]'),
      },
      productCards: {
        description: "Product cards",
        locator: this.page.locator("//div[@price_ordering]"),
      },
      headerMenu: {
        description: "Header menu container",
        locator: this.page.locator('//ul[contains(@class,"menu")]'),
      },
      designerCollection: {
        description: "Designer collection",
        locator: this.page.locator(
          '//div[normalize-space()="Designer Collection"]'
        ),
      },
      gourmetCollection: {
        description: "Gourmet collection",
        locator: this.page.getByText("Gourmet Collection"),
      },
      faq: {
        description: "FAQ",
        locator: this.page.getByText("FAQs"),
      },
      helpAndAccountLinks: {
        description: "Help and account link",
        locator: this.page.locator(""),
      },
      policiesLinks: {
        description: "Policies link",
        locator: this.page.locator(""),
      },
      footerLinks: {
        description: "Footer link",
        locator: this.page.locator(""),
      },
      headerNavItem: {
        description: "Header nav item",
        locator: this.page.locator(
          '//ul[contains(@class,"menu")]//li[contains(@class,"menu-item-has-children")]/a'
        ),
      },
      headerDropdownPanel: {
        description: "Header dropdown panel",
        locator: this.page.locator(
          '//ul[contains(@class,"menu")]//li[contains(@class,"menu-item-has-children")]//ul'
        ),
      },
      navMenuItems: {
        description: "Nav menu items",
        locator: this.page.locator(""),
      },
      navDropdowns: {
        description: "Nav dropdowns",
        locator: this.page.locator(""),
      },
      navDropdownItems: {
        description: "Nav dropdown items",
        locator: this.page.locator(""),
      },
      mobileMenuBar: {
        description: "Mobile menu bar",
        locator: this.page.locator('//button//span[text()="Menu"]'),
      },
      mobileNavDropdowns: {
        description: "Mobile nav dropdowns",
        locator: this.page.locator(""),
      },
      mobileNavDropdownItems: {
        description: "Mobile nav dropdown items",
        locator: this.page.locator(""),
      },
      openChatButton: {
        description: "Open chat button",
        locator: this.page.locator("(//div[@aria-label='Open chat']//*)[1]"),
      },
      nameInput: {
        description: "Name input",
        locator: this.page.locator("//input[@name='firstname']"),
      },
      chatOptionInput: {
        description: "Chat option input",
        locator: this.page.locator(""),
      },
      messageInput: {
        description: "Message input",
        locator: this.page.locator("//textarea[@name='message']"),
      },
      startChatButton: {
        description: "Start chat button",
        locator: this.page.locator("//button[text()='Start chat']"),
      },
      sentMessage: {
        description: "Sent message",
        locator: this.page.locator(""),
      },
      closeChatButton: {
        description: "Close chat button",
        locator: this.page.locator("(//div[@aria-label='Close chat']//*)[1]"),
      },
      chatWindow: {
        description: "Chat window",
        locator: this.page.locator("//div[@class='dimelo-chat-window']"),
      },
      openChatButtonOnMobile: {
        description: "Open chat button on mobile",
        locator: this.page.locator("//a[@id='mobile_chat']//p"),
      },
      closeChatButtonOnMobile: {
        description: "Close chat button on mobile",
        locator: this.page.locator("//span[@title='Minimize']"),
      },
      chatWindowOnMobile: {
        description: "Chat window on mobile",
        locator: this.page.locator("//div[@class='dimelo-chat-body']"),
      },
      sortByPrice: {
        description: "Sort by price",
        locator: this.page.locator(
          "(//p[normalize-space()='Sort by price'])[1]"
        ),
      },
      socialMediaLinks: {
        description: "Social media links",
        locator: this.page.locator(""),
      },
      socialMediaImage: {
        description: "Social media images",
        locator: this.page.locator(""),
      },
      text: {
        description: "Text",
        locator: this.page.locator(""),
      },
      accountpageMenu: {
        description: "Account page menu",
        locator: this.page.locator(
          "(//a[normalize-space()='Help/Account'])[2]"
        ),
      },
      bloomexLinks: {
        description: "Bloomex links",
        locator: this.page.locator(""),
      },
      free20GiftCertificateLink: {
        description: "Free $20 gift certificate link",
        locator: this.page.locator(""),
      },
      free20GiftCertificateImage: {
        description: "Free $20 gift certificate image",
        locator: this.page.locator(""),
      },
      heading: {
        description: "Heading",
        locator: this.page.locator(""),
      },
      breadcrumbs: {
        description: "Breadcrumbs",
        locator: this.page.locator(""),
      },
      popupLabel: {
        description: "Popup label",
        locator: this.page.getByRole('button', { name: 'Get 15% Off Your First Order' }),
      },
      popUpHeading: {
        description: "Pop-up heading",
        locator: this.page.getByText('Here\'s 15% Off Your First'),
      },
      popUpBody: {
        description: "Pop-up body",
        locator: this.page.getByText('When you join our list, you\''),
      },
    };
    this.Frenchlocators = {
      dynamicLocator: {
        description: "",
        locator: this.page.locator(""),
      },
      navMenuItems: {
        description: "Nav menu items",
        locator: this.page.locator(""),
      },
      navDropdowns: {
        description: "Nav dropdowns",
        locator: this.page.locator(""),
      },
      navDropdownItems: {
        description: "Nav dropdown items",
        locator: this.page.locator(""),
      },
      footerLinks: {
        description: "Footer link",
        locator: this.page.locator(""),
      },
      socialMediaLinks: {
        description: "Social media links",
        locator: this.page.locator(""),
      },
      socialMediaImage: {
        description: "Social media image",
        locator: this.page.locator(""),
      },
      openChatButton: {
        description: "Open chat button",
        locator: this.page.locator("(//div[@aria-label='Open chat']//*)[1]"),
      },
      nameInput: {
        description: "Name input",
        locator: this.page.locator("//input[@name='firstname']"),
      },
      chatOptionInput: {
        description: "Chat option input",
        locator: this.page.locator(""),
      },
      messageInput: {
        description: "Message input",
        locator: this.page.locator("//textarea[@name='message']"),
      },
      startChatButton: {
        description: "Start chat button",
        locator: this.page.locator("//button[text()='Start chat']"),
      },
      sentMessage: {
        description: "Sent message",
        locator: this.page.locator(""),
      },
      closeChatButton: {
        description: "Close chat button",
        locator: this.page.locator("(//div[@aria-label='Close chat']//*)[1]"),
      },
      chatWindow: {
        description: "Chat window",
        locator: this.page.locator("//div[@class='dimelo-chat-window']"),
      },
      openChatButtonOnMobile: {
        description: "Open chat button on mobile",
        locator: this.page.locator("//a[@id='mobile_chat']//p"),
      },
      closeChatButtonOnMobile: {
        description: "Close chat button on mobile",
        locator: this.page.locator("//span[@title='Minimize']"),
      },
      chatWindowOnMobile: {
        description: "Chat window on mobile",
        locator: this.page.locator("//div[@class='dimelo-chat-body']"),
      },
      mobileMenuBar: {
        description: "Mobile menu bar",
        locator: this.page.locator('//button//span[text()="Menu"]'),
      },
      mobileNavDropdowns: {
        description: "Mobile nav dropdowns",
        locator: this.page.locator(""),
      },
      mobileNavDropdownItems: {
        description: "Mobile nav dropdown items",
        locator: this.page.locator(""),
      },
      BloomexLogo: {
        description: "Bloomex Logo",
        locator: this.page.locator('//img[@alt="Bloomex.ca"]'),
      },
      sliderImage: {
        description: "Slider image",
        locator: this.page.locator('//div[@id="block-for-slider"]'),
      },
      productCards: {
        description: "Product cards",
        locator: this.page.locator("//div[@price_ordering]"),
      },
      text: {
        description: "Text",
        locator: this.page.locator(""),
      },
      accountpageMenu: {
        description: "Account page menu",
        locator: this.page.locator(
          "(//a[normalize-space()='Aide / Compte'])[2]"
        ),
      },
      bloomexLinks: {
        description: "Bloomex links",
        locator: this.page.locator(""),
      },
      free20GiftCertificateLink: {
        description: "Free $20 gift certificate link",
        locator: this.page.locator(""),
      },
      free20GiftCertificateImage: {
        description: "Free $20 gift certificate image",
        locator: this.page.locator(""),
      },
      heading: {
        description: "Heading",
        locator: this.page.locator(""),
      },
      breadcrumbs: {
        description: "Breadcrumbs",
        locator: this.page.locator(""),
      },
      popupLabel: {
        description: "Popup label",
        locator: this.page.getByRole('button', { name: 'Get 15% Off Your First Order' }),
      },
    };
    this.locators = {};

    process.env.NODE_locale === "fr"
      ? (this.locators = this.Frenchlocators)
      : (this.locators = this.Englishlocators);
  }

  public async navigateToHomepage(): Promise<void> {
    await test.step("Navigate to homepage", async () => {
      // await this.playwrightActionFactory.waitForSec(5);
      await this.playwrightActionFactory.navigateToURL("");
      await this.playwrightActionFactory.waitForSec(3);
    });
  }

  public async navigateToMobileMenu(
    pageName: string,
    menuItem?: string | ""
  ): Promise<void> {
    await test.step(`Navigate to ${pageName} page`, async () => {
      if (pageName === "Best Sellers") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[text()="${pageName}"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Specials") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[text()="${pageName}"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "By Price") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Occasions") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Flowers") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Gift Hampers") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Collections") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Corporate") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Help/Account") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
        if (menuItem) {
          await this.navigateToAccountPageItemOnMobile(menuItem);
        }
      }
      if (pageName === "Policies") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Aide / Compte") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
        if (menuItem) {
          await this.navigateToAccountPageItemOnMobile(menuItem);
        }
      };
      if (pageName === "Politiques") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
      if (pageName === "Par Prix") {
        this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//a[normalize-space()="${pageName}"]/preceding-sibling::span[@class="plus"]`
        );
        await this.playwrightActionFactory.waitForSelector(
          this.locators.dynamicLocator
        );
        await this.playwrightActionFactory.click(this.locators.dynamicLocator);
      }
    });
  }
  public async navigateToAccountPageItem(navItem: string): Promise<void> {
    await this.playwrightActionFactory.hover(this.locators.accountpageMenu);
    await test.step(`Navigate to ${navItem} page`, async () => {
      this.locators.dynamicLocator.description = `Navigate to ${navItem} page`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `(//a[contains(text(),"${navItem}")])[2]`
      );
      await this.playwrightActionFactory.forceClick(
        this.locators.dynamicLocator
      );
    });
  }
  public async navigateToAccountPageItemOnMobile(
    navItem: string
  ): Promise<void> {
    await test.step(`Navigate to ${navItem} page`, async () => {
      this.locators.dynamicLocator.description = `Navigate to ${navItem} page`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `(//a[contains(text(),"${navItem}")])[1]`
      );
      await this.playwrightActionFactory.waitForSelector(
        this.locators.dynamicLocator
      );
      await this.playwrightActionFactory.forceClick(
        this.locators.dynamicLocator
      );
    });
  }

  public async navigateToPage(pageName: string): Promise<void> {
    await test.step(`Navigate to ${pageName} page`, async () => {
      this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `//a[text()="${pageName}"]`
      ).last();
      await this.playwrightActionFactory.forceClick(
        this.locators.dynamicLocator
      );
      await this.playwrightActionFactory.waitForSec(5);
    });
  }

  public async navigateToPageOnMobile(pageName: string): Promise<void> {
    await test.step("Click on mobile menu bar", async () => {
      await this.clickMobileMenuBar();
    });
    await test.step(`Navigate to ${pageName} page`, async () => {
      this.locators.dynamicLocator.description = `Navigate to ${pageName} page`;
      this.locators.dynamicLocator.locator = this.page.locator(
        `//a[text()="${pageName}"]`
      ).first();
      await this.playwrightActionFactory.forceClick(
        this.locators.dynamicLocator
      );
      await this.playwrightActionFactory.waitForSec(5);
    });
  }

  public async verifyPage(verifyPage: verifyPage): Promise<void> {
    await this.playwrightActionFactory.waitForDomLoad();
    await test.step(`Verify ${verifyPage.pageName} page title`, async () => {
      await this.playwrightVerificationFactory.verifyTitle(verifyPage.title);
    });
   await test.step(`Verify ${verifyPage.pageName} page url`, async () => {
    await this.playwrightVerificationFactory.verifyUrlContains(verifyPage.url);
   });
  }

  public async verifyTitle(title: string): Promise<void> {
    await test.step(` Verify Homepage Page title: ${title}`, async (): Promise<void> => {
      await this.playwrightVerificationFactory.verifyTitle(title);
      await this.playwrightActionFactory.waitForDomLoad();
    });
  }

  public async verifySliderImageIsVisible(): Promise<void> {
    await test.step("Verify slider image is visible", async () => {
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.sliderImage
      );
    });
  }

  public async verifyBloomexLogoIsVisible(): Promise<void> {
    await test.step("Verify Bloomex logo is visible", async () => {
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.BloomexLogo
      );
    });
  }

  public async verifyProductCardsAreVisible(): Promise<void> {
    await test.step("Verify product cards are visible", async () => {
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.productCards
      );
    });
  }

  public async verifyDesignerCollectionIsVisible(): Promise<void> {
    await test.step("Verify designer collection is visible", async () => {
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.designerCollection
      );
    });
  }

  public async verifyNavMenuItems(navMenuItems: string[]): Promise<void> {
    for (const navDropdown of navMenuItems) {
      await test.step(`Verify nav dropdown: ${navDropdown} is visible`, async () => {
        this.locators.navMenuItems.description = `${navDropdown}`;
        this.locators.navMenuItems.locator = this.page.locator(
          `//a[text()="${navDropdown}"]`
        );
        await this.playwrightVerificationFactory.isElementVisible(
          this.locators.navMenuItems
        );
      });
    }
  }

  public async clickMobileMenuBar(): Promise<void> {
    await test.step("Click menu bar", async () => {
      await this.playwrightActionFactory.click(this.locators.mobileMenuBar);
    });
  }

  public async verifyNavDropdowns(
    navDropdowns: NavDropdownItems
  ): Promise<void> {
    for (const [key, values] of Object.entries(navDropdowns)) {
      await test.step(`Hover over nav menu item: ${key}`, async () => {
        if (
          key === "Gift Baskets" ||
          key === "Corporate" ||
          key === "Paniers Cadeaux"
        ) {
          this.locators.navMenuItems.locator = this.page
            .locator(`//a[text()="${key}"]`)
            .last();
        } else {
          this.locators.navMenuItems.locator = this.page
            .locator(`//a[contains(text(),"${key}")]`)
            .last();
        }
        await this.playwrightActionFactory.hover(this.locators.navMenuItems);
      });
      if (values.length === 0) {
        await test.step(`Verify nav dropdown: ${key} is not visible`, async () => {
          this.locators.navDropdowns.locator = this.page.locator(
            `//a[contains(text(),"${key}")]/following-sibling::ul`
          );
          await this.playwrightVerificationFactory.verifyNotExist(
            this.locators.navDropdowns
          );
        });
      } else {
        await test.step(`Verify nav dropdown: ${key} is visible`, async () => {
          this.locators.navDropdowns.locator = this.page.locator(
            `//a[contains(text(),"${key}")]/following-sibling::ul`
          );
          await this.playwrightVerificationFactory.isElementVisible(
            this.locators.navDropdowns
          );
        });
        for (const [index, item] of values.entries()) {
          await test.step(`Verify nav dropdown item: ${item} text is visible`, async () => {
            this.locators.navDropdownItems.locator = this.page.locator(
              `(//a[contains(text(),"${key}")]/following-sibling::ul//li)[${index + 1}]`
            );
            await this.playwrightVerificationFactory.verifyText(
              this.locators.navDropdownItems,
              item
            );
          });
        }
      }
    }
  }

  public async verifyNavDropdownItems(
    navDropdownItems: NavDropdownItems
  ): Promise<void> {
    for (const [key, values] of Object.entries(navDropdownItems)) {
      if (key === "Gift Baskets" || key === "Corporate") {
        this.locators.mobileNavDropdowns.locator = this.page
          .locator(`//a[text()="${key}"]/..//span[@class="plus"]`)
          .last();
      } else {
        this.locators.mobileNavDropdowns.locator = this.page.locator(
          `//a[contains(.,"${key}")]/..//span[@class="plus"]`
        );
      }
      if (values.length === 0) {
        await test.step(`Verify nav dropdown item: ${key} text is not visible`, async () => {
          await this.playwrightVerificationFactory.verifyNotExist(
            this.locators.mobileNavDropdowns
          );
        });
      } else {
        await test.step(`Click on ${key} dropdown`, async () => {
          await this.playwrightActionFactory.click(
            this.locators.mobileNavDropdowns
          );
        });

        for (const [index, item] of values.entries()) {
          await test.step(`Verify nav dropdown item: ${item} text is visible`, async () => {
            this.locators.mobileNavDropdownItems.locator = this.page.locator(
              `(//a[contains(.,"${key}")]/following-sibling::ul//li)[${index + 1}]`
            );
            await this.playwrightVerificationFactory.verifyText(
              this.locators.mobileNavDropdownItems,
              item
            );
          });
        }
        await test.step(`Click on plus icon to close the dropdown`, async () => {
          this.locators.mobileNavDropdowns.locator = this.page.locator(
            `//a[contains(.,"${key}")]/..//span[@class="minus"]`
          );
          await this.playwrightActionFactory.click(
            this.locators.mobileNavDropdowns
          );
        });
      }
    }
  }

  public async verifyUserHasAccessTo(pageUrl: string): Promise<void> {
    let baseUrl = getEnvVariable("EN_URL");
    await this.playwrightVerificationFactory.verifyUserHasAccess(
      baseUrl + pageUrl,
      true
    );
  }

  public getPage(): Page {
    return this.page;
  }

  public createHomepagePage(page: Page): HomepagePage {
    return new HomepagePage(page, this.testInfo);
  }

  public async verifyText(text: string): Promise<void> {
    await test.step(`Verify text: ${text} is visible`, async () => {
      this.locators.text.locator = this.page.locator(`(//*[text()="${text}"])[1]`);
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.text
      );
    });
  }

  public async verifyHeading(heading: string): Promise<void> {
    await test.step(`Verify heading: ${heading} is visible`, async () => {
      this.locators.heading.locator = this.page.locator(`(//h1[text()="${heading}"])[1]`);
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.heading
      );
    });
  }

  public async verifyLinks(
    bloomexLinks: BloomexOtherDomainsLinks
  ): Promise<void> {
    for (const [index, url] of Object.entries(bloomexLinks)) {
      this.locators.bloomexLinks.locator = this.page
        .locator(`//a[contains(.,"${index}")]`)
        .last();

      await test.step(`Verify bloomex other domains link: ${index} is visible`, async () => {
        await this.playwrightVerificationFactory.isElementVisible(
          this.locators.bloomexLinks
        );
      });
      await test.step(`Verify bloomex other domains link: ${index} has attribute: href with value: ${url}`, async () => {
        await this.playwrightVerificationFactory.assertElementHasAttribute(
          this.locators.bloomexLinks,
          "href",
          url
        );
      });
    }
  }

  public async verifyCollectionMenu(collectionMenu: BloomexOtherDomainsLinks): Promise<void> {
    for (const [index, url] of Object.entries(collectionMenu)) {
      this.locators.bloomexLinks.locator = this.page
        .locator(`//ul[@class="left_menu"]//a[text()="${index}"]`)
        .last();

      await test.step(`Verify bloomex other domains link: ${index} is visible`, async () => {
        await this.playwrightVerificationFactory.isElementVisible(
          this.locators.bloomexLinks
        );
      });
      await test.step(`Verify bloomex other domains link: ${index} has attribute: href with value: ${url}`, async () => {
        await this.playwrightVerificationFactory.assertElementHasAttribute(
          this.locators.bloomexLinks,
          "href",
          url
        );
      });
    }
  }

  public async verifyFree20GiftCertificateLink(
    href: string,
    image: string
  ): Promise<void> {
    await test.step(`Verify free $20 gift certificate link is visible`, async () => {
      this.locators.free20GiftCertificateLink.locator = this.page.locator(
        `//a[@href="${href}"]`
      );
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.free20GiftCertificateLink
      );
    });

    await test.step(`Verify free $20 gift certificate image is visible`, async () => {
      this.locators.free20GiftCertificateImage.locator = this.page.locator(
        `//img[@alt="${image}"]`
      );
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.free20GiftCertificateImage
      );
    });
  }

  public async verifyFooterLinks(footerLinks: FooterLinks): Promise<void> {
    for (const [index, url] of Object.entries(footerLinks)) {
      this.locators.footerLinks.locator = this.page
        .locator(`//a[contains(.,"${index}")]`)
        .last();

      await test.step(`Verify footer link: ${index} is visible`, async () => {
        await this.playwrightVerificationFactory.isElementVisible(
          this.locators.footerLinks
        );
      });
      await test.step(`Navigate to footer link: ${index}`, async () => {
        await this.playwrightActionFactory.forceClick(
          this.locators.footerLinks
        );
        await this.playwrightActionFactory.waitForSec(5);
        await this.playwrightActionFactory.waitForDomLoad();
      });

      await test.step(`Verify link is navigated to the correct url: ${url}`, async () => {
        await this.verifyUserHasAccessTo(url);
      });
    }
  }

  public async verifyFlowerShopPartnersLinks(
    flowerShopPartnersLinks: FooterLinks
  ): Promise<void> {
    for (const [index, url] of Object.entries(flowerShopPartnersLinks)) {
      this.locators.footerLinks.locator = this.page
        .locator(`//a[text()="${index}"]`)
        .last();

      await test.step(`Verify footer link: ${index} has attribute: href with value: ${url}`, async () => {
        await this.playwrightVerificationFactory.assertElementHasAttribute(
          this.locators.footerLinks,
          "href",
          url
        );
      });
    }
  }

  public async verifyElementExists(
    elementExists: ElementExists
  ): Promise<void> {
    this.locators.dynamicLocator.locator = this.page
      .locator(
        `//${elementExists.tag}[@${elementExists.attribute}="${elementExists.value}"]`
      )
      .last();
    await test.step(`Verify element exists: ${elementExists.value}`, async () => {
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.dynamicLocator
      );
    });
  }

  public async verifySectionIsVisible(section: string): Promise<void> {
    this.locators.dynamicLocator.locator = this.page.locator(
      `/(//h1[text()="${section}"]/../../..//following-sibling::div[@class="container products"])[1]`
    );
    await test.step(`Verify section is visible: ${section}`, async () => {
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.dynamicLocator
      );
    });
  }
  public async verifySocialMediaLinks(
    socialMediaLinks: FooterLinks
  ): Promise<void> {
    for (const [index, url] of Object.entries(socialMediaLinks)) {
      this.locators.socialMediaImage.locator = this.page
        .locator(`//img[@alt="${index}"]`)
        .last();

      this.locators.socialMediaLinks.locator = this.page
        .locator(`//img[@alt="${index}"]/..`)
        .last();

      await test.step(`Verify social media link: ${index} is visible`, async () => {
        await this.playwrightVerificationFactory.isElementVisible(
          this.locators.socialMediaImage
        );
      });

      await test.step(`Verify social media link: ${index} has attribute: href with value: ${url}`, async () => {
        await this.playwrightVerificationFactory.assertElementHasAttribute(
          this.locators.socialMediaLinks,
          "href",
          url
        );
      });
    }
  }

  public async sortByPrice(
    sortOrder: "Ascending" | "Descending"
  ): Promise<void> {
    await test.step("Sort by price", async () => {
      await this.playwrightActionFactory.click(this.locators.sortByPrice);
      if (sortOrder === "Ascending") {
        this.locators.dynamicLocator.description = `Sort by price ${sortOrder}`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//span[contains(@class, 'glyphicon glyphicon-sort-by-attributes')]`
        );
        const isVisible =
          await this.locators.dynamicLocator.locator.isVisible();
        if (isVisible) {
          await this.playwrightActionFactory.click(
            this.locators.dynamicLocator
          );
        }
      } else {
        this.locators.dynamicLocator.description = `Sort by price ${sortOrder}`;
        this.locators.dynamicLocator.locator = this.page.locator(
          `//span[contains(@class, 'glyphicon glyphicon-sort-by-attributes-alt')]`
        );
        const isVisible =
          await this.locators.dynamicLocator.locator.isVisible();
        if (isVisible) {
          await this.playwrightActionFactory.click(
            this.locators.dynamicLocator
          );
        }
      }
    });
  }

  public async clickOpenChatButton(): Promise<void> {
    await test.step("Click on open chat button", async () => {
      await this.playwrightActionFactory.forceClick(
        this.locators.openChatButton
      );
    });
  }

  public async clickOpenChatOnMobile(): Promise<void> {
    await test.step("Click on open chat button on mobile", async () => {
      await this.playwrightActionFactory.forceClick(
        this.locators.openChatButtonOnMobile
      );
      await this.playwrightActionFactory.waitForSec(3);
    });
  }

  public async verifyHelpDeskAndChat(
    HelpDeskChat: HelpDeskChat
  ): Promise<void> {
    this.locators.chatOptionInput.locator = this.page.locator(
      `//span[text()='${HelpDeskChat["Chat Option"]}']/preceding-sibling::input[@type='radio']`
    );
    this.locators.sentMessage.locator = this.page.locator(
      `//div[contains(text(),"${HelpDeskChat["Test Message"]}")]`
    );

    await test.step("Enter the name in the name input field", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.nameInput,
        HelpDeskChat["Name"]
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Select the chat option in the chat option input field", async () => {
      await this.playwrightActionFactory.click(this.locators.chatOptionInput);
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Enter the message in the message input field", async () => {
      await this.playwrightActionFactory.sendKeys(
        this.locators.messageInput,
        HelpDeskChat["Test Message"]
      );
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Click on the start chat button", async () => {
      await this.playwrightActionFactory.click(this.locators.startChatButton);
      await this.playwrightActionFactory.waitForSec(2);
    });

    await test.step("Verify that the chat is started and the sent message is visible", async () => {
      await this.playwrightVerificationFactory.isElementVisible(
        this.locators.sentMessage
      );
    });
  }

  public async closeHelpDeskAndChat(): Promise<void> {
    await test.step("Click on the close chat button", async () => {
      await this.playwrightActionFactory.forceClick(
        this.locators.closeChatButton
      );
      await this.playwrightActionFactory.waitForSec(4);
    });

    await test.step("Verify that the chat is closed", async () => {
      await this.playwrightVerificationFactory.isElementHidden(
        this.locators.chatWindow
      );
    });
  }

  public async closeHelpDeskAndChatOnMobile(): Promise<void> {
    await test.step("Click on the close chat button", async () => {
      await this.playwrightActionFactory.forceClick(
        this.locators.closeChatButtonOnMobile
      );
      await this.playwrightActionFactory.waitForSec(4);
    });

    await test.step("Verify that the chat is closed", async () => {
      await this.playwrightVerificationFactory.isElementHidden(
        this.locators.chatWindowOnMobile
      );
    });
  }

  public async verifyRandomNavigation(text: string, expectedUrl: string): Promise<void> {
    const baseUrl = process.env.NODE_locale === "fr" ? process.env.FR_URL : process.env.EN_URL;
    await test.step("Navigate to random url ", async () => {
      console.log( `Navigating to: ${baseUrl}/${text}`);
      await this.playwrightActionFactory.navigateToURL(`${baseUrl}/${text}`);
      await this.playwrightActionFactory.waitForSec(4);
      await this.playwrightVerificationFactory.verifyUrlsAreEqual(expectedUrl +'/');
    });
  }

  public async verifyBreadcrumbs(verifyBreadCrumbs: verifyBreadCrumbs): Promise<void> {
    for (const [index, url] of Object.entries(verifyBreadCrumbs)) {
      this.locators.breadcrumbs.locator = this.page.locator(
        `//div[contains(@class,'navbar-collapse')]//a[normalize-space()="${index}"]`
      ).first();

      await test.step(`Click on breadcrumb: ${index}`, async () => {
        await this.playwrightActionFactory.click(this.locators.breadcrumbs);
        await this.playwrightActionFactory.waitForSec(3);
      });

      await test.step(`Verify breadcrumb url is navigated to the correct url: ${url}`, async () => {
        await this.playwrightVerificationFactory.verifyUrlContains(
          url as string
        );
      });
    }
  }

  public async verifyBreadcrumbsOnMobile(verifyBreadCrumbs: verifyBreadCrumbs): Promise<void> {
    for (const [index, url] of Object.entries(verifyBreadCrumbs)) {
      await test.step(`Click on mobile menu bar`, async () => {
        await this.clickMobileMenuBar();
      });
      this.locators.breadcrumbs.locator = this.page.locator(
        `//div[contains(@class,'mobile_menu')]//a[normalize-space()="${index}"]`
      ).first();

      await test.step(`Click on breadcrumb: ${index}`, async () => {
        await this.playwrightActionFactory.click(this.locators.breadcrumbs);
        await this.playwrightActionFactory.waitForSec(3);
      });

      await test.step(`Verify breadcrumb url is navigated to the correct url: ${url}`, async () => {
        await this.playwrightVerificationFactory.verifyUrlContains(
          url as string
        );
      });
    }
  }

  public async verifyPopup(): Promise<void> {
    await test.step("Click on Pop-Up Label", async () => {
      await this.playwrightActionFactory.waitForSelector(this.locators.popupLabel);
      await this.playwrightActionFactory.click(this.locators.popupLabel);
    });

    await test.step("Verify Pop-up text is visible", async () => {
      // Check if popUpHeading and popUpBody exist in current locale locators
      if (this.locators.popUpHeading && this.locators.popUpBody) {
        await this.playwrightVerificationFactory.isElementVisible(this.locators.popUpHeading);
        await this.playwrightVerificationFactory.isElementVisible(this.locators.popUpBody);
        
        // Get and verify the text content
        const headingText = await this.locators.popUpHeading.locator.textContent();
        const bodyText = await this.locators.popUpBody.locator.textContent();
        
        // Verify text is not empty
        if (!headingText || headingText.trim() === "") {
          throw new Error("Popup heading text is empty");
        }
        if (!bodyText || bodyText.trim() === "") {
          throw new Error("Popup body text is empty");
        }
      }
    });

    // If using French locators (popUpHeading doesn't exist), verify English text is not visible
    if (!this.locators.popUpHeading) {
      await test.step("Verify English text is not visible for French locale", async () => {
        // Verify English heading text is not visible
        await this.playwrightVerificationFactory.verifyNotExist(this.Englishlocators.popUpHeading);
        // Verify English body text is not visible
        await this.playwrightVerificationFactory.verifyNotExist(this.Englishlocators.popUpBody);
      });
    }
  }
}
