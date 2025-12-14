import { Page, test, TestInfo, expect } from '@playwright/test';
import { LocatorInfo } from '@interfaces/locator.info.interface';
import { PlaywrightActionFactory } from '@utilities/playwright.actions.utils';
import { PlaywrightVerificationFactory } from '@utilities/playwright.verifications.utils';



export class CommonUtils {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly locators: { [key: string]: LocatorInfo };
  /**
   * @param page
   * @param testInfo
   */
  public constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
    this.playwrightActionFactory = new PlaywrightActionFactory(this.page, this.testInfo);
    this.locators = {
      popup: {
        description: 'Popup',
        locator: this.page.locator('(//form[@data-testid="klaviyo-form-TAAxMU"])[1]'),
      },
      closeButton: {
        description: 'Close button',
        locator: this.page.getByRole('button', { name: 'Close dialog' }),
      },
      teaser: {
        description: 'Teaser',
        locator: this.page.locator('(//div[@data-testid="animated-teaser"]//span)[2]'),
      },
      closeTeaserButton: {
        description: 'Close teaser button',
        locator: this.page.locator('//*[@id="title-Close-teaser"]/..//*[@stroke-linejoin="round"]'),
      },
      BloomexLogo: {
        description: "Bloomex Logo",
        locator: this.page.locator('//img[@alt="Bloomex.ca"]'),
      },
    };
  }

  public async closePopup(): Promise<void> {
    await test.step('Close Popup', async (): Promise<void> => {
      await this.page.addLocatorHandler(this.locators.popup.locator, async () => {
        await this.playwrightActionFactory.waitForSec(5);
        await this.playwrightActionFactory.click(this.locators.closeButton);
        // await expect(this.locators.popup.locator).not.toBeVisible();
        await this.playwrightActionFactory.waitForSec(3);
        await this.playwrightActionFactory.hover(this.locators.BloomexLogo);
        await this.playwrightActionFactory.waitForSec(3);
      });
    });
  } 

  public async closeTeaser(): Promise<void> {
    await test.step('Close Teaser on mobile', async (): Promise<void> => {
      await this.page.addLocatorHandler(this.locators.teaser.locator, async () => {
        await this.playwrightActionFactory.waitForSec(3);
        await this.playwrightActionFactory.forceClick(this.locators.closeTeaserButton);
        await this.playwrightActionFactory.waitForSec(2);
        await this.playwrightActionFactory.hover(this.locators.BloomexLogo);
        await this.playwrightActionFactory.waitForSec(3);
      });
    });
  }

  /**
   * @param productName - Name of the product (used for screenshot naming)
   * @param options - Optional screenshot options for visual comparison
   */
  public async performVisualComparison(
    productName: string, 
    options?: {
      fullPage?: boolean;
      maxDiffPixels?: number;
      threshold?: number;
      animations?: 'disabled' | 'allow';
      caret?: 'hide' | 'initial';
    }
  ): Promise<void> {
    await test.step(`📸 Perform visual comparison for ${productName}`, async (): Promise<void> => {
      // Clean the product name to be used as filename (remove special characters and spaces)
      const cleanProductName = productName.replace(/[^a-zA-Z0-9]/g, '_');
      const screenshotName = `${cleanProductName}.png`;
      
      // Default options for visual comparison
      const defaultOptions = {
        fullPage: true,
        maxDiffPixels: 100,
        threshold: 0.2,
        animations: 'disabled' as const,
        caret: 'hide' as const,
        ...options
      };

      try {
        // Take screenshot and compare with baseline
        // If baseline doesn't exist, it will be created automatically
        await this.playwrightActionFactory.waitForSec(3);
        await expect(this.page).toHaveScreenshot(screenshotName, defaultOptions);
        console.log(`✅ Visual comparison passed for: ${productName}`);
      } catch (error) {
        console.error(`❌ Visual comparison failed for: ${productName}`, error);
        throw error;
      }
    });
  }

  /**
   * Takes a full page screenshot for visual comparison
   * @param productName 
   */
  public async takeVisualScreenshot(productName: string): Promise<void> {
    await test.step(`📷 Take visual screenshot for ${productName}`, async (): Promise<void> => {
      // Clean the product name to be used as filename
      const cleanProductName = productName.replace(/[^a-zA-Z0-9]/g, '_');
      const screenshotName = `${cleanProductName}_visual_screenshot.png`;
      
      // Take a full page screenshot
      await this.page.screenshot({
        path: `test-results/screenshots/${screenshotName}`,
        fullPage: true,
        animations: 'disabled'
      });
      
      console.log(`📸 Screenshot saved: ${screenshotName}`);
    });
  }
}