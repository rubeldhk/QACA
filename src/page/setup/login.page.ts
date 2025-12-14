import { LoginData } from "@interfaces/login/login.interfaces";
import { Locator, Page, test, TestInfo } from "@playwright/test";
import { getVerificationLink } from "@utilities/mailosaur/mailosaur.utils";
import { PlaywrightActionFactory } from "@utilities/playwright.actions.utils";
import { PlaywrightVerificationFactory } from "@utilities/playwright.verifications.utils";

interface LocatorInfo {
  description: string;
  locator: Locator;
}

export class LoginPage {
  private readonly page: Page;
  private readonly testInfo: TestInfo;
  private readonly playwrightActionFactory: PlaywrightActionFactory;
  private readonly playwrightVerificationFactory: PlaywrightVerificationFactory;
  private readonly locators: { [key: string]: LocatorInfo };
  private readonly Englishlocators: { [key: string]: LocatorInfo };
  private readonly Frenchlocators: { [key: string]: LocatorInfo };
  private verificationLink: string | null = null;

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
        username: {
            description: "Input Username",
            locator: this.page.locator("//input[@id='username_login']"),
        },
        password: {
            description: "Input Password",
            locator: this.page.locator("//input[@id='password_login']"),
        },
        loginButton: {
            description: "Login Button",
            locator: this.page.locator("(//button[normalize-space()='Login'])[1]"),
        },
        verifyLogin: {
            description: "Verify Login",
            locator: this.page.locator("//p[normalize-space()='Account']"),
        },
        accountPage:{
          description: "Account Page",
          locator: this.page.locator("//span[normalize-space()='Account']"),
        },
        loginInProblemClickHereLink: {
          description: "Login in problem click here link",
          locator: this.page.locator("//a[normalize-space()='Click here.']"),
        },
        resetPasswordEmailInput: {
          description: "Create password email input",
          locator: this.page.locator("//h3[normalize-space()='Create Password']//following::input[@placeholder='Enter email']"),
        },
        sendButton: {
          description: "Send button",
          locator: this.page.locator("//button[normalize-space()='Send']"),
        },
        linkSendToResetBanner: {
          description: "Link send to reset banner",
          locator: this.page.locator("//div[contains(text(),'Link to reset your password has been sent to your e-mail.')]"),
        },
        changePasswordHeading: {
          description: "Change password heading",
          locator: this.page.locator("//h3[normalize-space()='Create Password']//following::span[contains(text(),'new password and confirm')]"),
        },
        newPasswordInput: {
          description: "New password input",
          locator: this.page.locator("(//label[normalize-space()='New password']//following::input)[1]"),
        },
        confirmPasswordInput: {
          description: "Confirm password input",
          locator: this.page.locator("(//label[normalize-space()='Confirm password']//following::input)[1]"),
        },
        updatePasswordButton: {
          description: "Change password button",
          locator: this.page.locator("//button[normalize-space()='Update']"),
        },
        accountIcon: {
          description: "Account Icon",
          locator: this.page.locator("(//p[normalize-space()='Account'])[1]"),
        },
        logoutButton: {
          description: "Logout Button",
          locator: this.page.locator("//input[@value='Logout']"),
        },
    };
    this.Frenchlocators = {
      username: {
          description: "Input Username",
          locator: this.page.locator("//input[@id='username_login']"),
      },
      password: {
          description: "Input Password",
          locator: this.page.locator("//input[@id='password_login']"),
      },
      loginButton: {
          description: "Login Button",
          locator: this.page.locator("(//button[normalize-space()='Se connecter'])[1]"),
      },
      verifyLogin: {
          description: "Verify Login",
          locator: this.page.locator("//p[normalize-space()='Account']"),
      },
      accountPage:{
        description: "Account Page",
        locator: this.page.locator("//span[normalize-space()='Account']"),
      },
      loginInProblemClickHereLink: {
        description: "Login in problem click here link",
        locator: this.page.locator("//a[normalize-space()='Click here.']"),
      },
      resetPasswordEmailInput: {
        description: "Create password email input",
        locator: this.page.locator("//h3[normalize-space()='Create Password']//following::input[@placeholder='Enter email']"),
      },
      sendButton: {
        description: "Send button",
        locator: this.page.locator("//button[normalize-space()='Send']"),
      },
      linkSendToResetBanner: {
        description: "Link send to reset banner",
        locator: this.page.locator("//div[contains(text(),'Link to reset your password has been sent to your e-mail.')]"),
      },
      changePasswordHeading: {
        description: "Change password heading",
        locator: this.page.locator("//h3[normalize-space()='Create Password']//following::span[contains(text(),'new password and confirm')]"),
      },
      newPasswordInput: {
        description: "New password input",
        locator: this.page.locator("(//label[normalize-space()='New password']//following::input)[1]"),
      },
      confirmPasswordInput: {
        description: "Confirm password input",
        locator: this.page.locator("(//label[normalize-space()='Confirm password']//following::input)[1]"),
      },
      updatePasswordButton: {
        description: "Change password button",
        locator: this.page.locator("//button[normalize-space()='Update']"),
      },
      accountIcon: {
        description: "Account Icon",
        locator: this.page.locator("(//p[normalize-space()='Account'])[1]"),
      },
      logoutButton: {
        description: "Logout Button",
        locator: this.page.locator("//input[@value='Logout']"),
      },
  };

  process.env.NODE_locale === "fr"
  ? (this.locators = this.Frenchlocators)
  : (this.locators = this.Englishlocators);

  }

  public async loginTheUser(loginData: LoginData): Promise<void> {
    await test.step("Login the user", async () => {
      await this.playwrightActionFactory.sendKeys(this.locators.username, loginData.username);
      await this.playwrightActionFactory.sendKeys(this.locators.password, loginData.password);
      await this.playwrightActionFactory.click(this.locators.loginButton);

    });
  }
  public async logoutTheUser(): Promise<void> {
    await test.step("🔑 Logging out", async () => {
      await this.playwrightVerificationFactory.isElementVisible(this.locators.logoutButton);
      await this.playwrightActionFactory.click(this.locators.logoutButton);
    });
  }
public async verifyUserIsLoggedIn(): Promise<void> {
    await test.step("Verify user is logged in", async () => {
      await this.playwrightVerificationFactory.isElementVisible(this.locators.verifyLogin);
    });
  }
  public async navigateToLoginPage(): Promise<void> {
    await test.step("Navigate to Login Page", async () => {
      await this.playwrightActionFactory.click(this.locators.accountPage);
    });
  }
  public async navigateToAccountPage(): Promise<void> {
    await test.step("Navigate to Account Page", async () => {
      await this.playwrightActionFactory.navigateToURL(`https://bloomex.ca/account/`);
    });
  }
  public async resetPassword(email: string): Promise<void> {
    await test.step("🔑 Resetting password", async () => {
      await this.playwrightActionFactory.click(this.locators.loginInProblemClickHereLink);
      await this.playwrightActionFactory.sendKeys(this.locators.resetPasswordEmailInput, email);
      await this.playwrightActionFactory.click(this.locators.sendButton);  
      await this.playwrightVerificationFactory.isElementVisible(this.locators.linkSendToResetBanner);
    });
  } 
  public async verifyEmailThroughMailosaur(emailAddress: string): Promise<void> {
    await test.step('Verify email through Mailosaur', async () => {
        this.verificationLink = await getVerificationLink(emailAddress);
        
        if (!this.verificationLink) {
            throw new Error(`No verification link found for email: ${emailAddress}`);
        }
        
        console.log(`✅ Extracted verification link: ${this.verificationLink}`);
    });
}
public async navigateToVerificationLink(): Promise<void> {
  await test.step('Navigate to verification link', async () => {
      if (!this.verificationLink || this.verificationLink.trim() === '') {
          throw new Error('Verification link is empty or undefined. Make sure to call verifyEmailThroughMailosaur first.');
      }
      
      console.log(`Navigating to verification link: ${this.verificationLink}`);
      try {
          await this.page.goto(this.verificationLink);
          console.log('✅ Successfully navigated to verification link');
          console.log(`Current URL: ${this.page.url()}`);
      } catch (error) {
          console.error('❌ Error navigating to verification link:', error);
          throw error;
      }
  });
}
public async changePassword(newPassword: string, confirmPassword: string): Promise<void> {
  await test.step("🔑 Changing password", async () => {
    await this.playwrightVerificationFactory.isElementVisible(this.locators.changePasswordHeading);
    await this.playwrightActionFactory.sendKeys(this.locators.newPasswordInput, newPassword);
    await this.playwrightActionFactory.sendKeys(this.locators.confirmPasswordInput, confirmPassword);
    await this.playwrightActionFactory.click(this.locators.updatePasswordButton);
  });
}

}
