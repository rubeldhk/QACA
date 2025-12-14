import { AccountPage } from "@page/accountpage/accountpage.page";
import { test as base } from "@playwright/test";
import { CommonUtils } from "@utilities/common.utils";
import { PoliciesPage } from "@page/policiespage/policiespage.page";
import { BestSellersPage } from "@page/bestSellers/bestSellers.page";
import { HomepagePage } from '@page/homepage/homepage.page';
import { SpecialCollectionsPage } from '@page/specialCollections/specialCollections.page';
import { AddToCartPage } from '@page/addtocart/addtocart.page';
import { OccasionsPage } from '@page/occasions/occasions.page';
import { CheckoutPage } from '@page/checkout/checkout.page';
import { LoginPage } from '@page/setup/login.page';
import { CorporatePage } from '@page/corporate/corporate.page';
import { SearchPage } from '@page/search/search.page';
import { PricePage } from "@page/pricepage/price.page";
import { FlowersAndPlantsPage } from '@page/flowersAndPlants/flowersAndPlants.page';
import { GiftBasketsPage } from '@page/giftBaskets/giftBaskets.page';

type TestFixtures = {
  homepagePage: HomepagePage;
  specialCollectionsPage: SpecialCollectionsPage;
  occasionsPage: OccasionsPage;
  corporatePage: CorporatePage;
  flowersAndPlantsPage: FlowersAndPlantsPage;
  giftBasketsPage: GiftBasketsPage;
  commonUtils: CommonUtils;
  accountPage: AccountPage;
  policiesPage: PoliciesPage;
  bestSellersPage: BestSellersPage;
  addToCartPage: AddToCartPage;
  checkoutPage: CheckoutPage;
  loginPage: LoginPage;
  searchPage: SearchPage;
  pricePage: PricePage;
};

export const test = base.extend<TestFixtures>({
  homepagePage: async ({ page }, use) => {
    const homepagePage = new HomepagePage(page, base.info());
    await use(homepagePage);
  },
  specialCollectionsPage: async ({ page }, use) => {
    const specialCollectionsPage = new SpecialCollectionsPage(page, base.info());
    await use(specialCollectionsPage);
  },
  occasionsPage: async ({ page }, use) => {
    const occasionsPage = new OccasionsPage(page, base.info());
    await use(occasionsPage);
  },
  corporatePage: async ({ page }, use) => {
    const corporatePage = new CorporatePage(page, base.info());
    await use(corporatePage);
  },
  flowersAndPlantsPage: async ({ page }, use) => {
    const flowersAndPlantsPage = new FlowersAndPlantsPage(page, base.info());
    await use(flowersAndPlantsPage);
  },
  giftBasketsPage: async ({ page }, use) => {
    const giftBasketsPage = new GiftBasketsPage(page, base.info());
    await use(giftBasketsPage);
  },
  commonUtils: async ({ page }, use) => {
    const commonUtils = new CommonUtils(page, base.info());
    await commonUtils.closePopup();
    await commonUtils.closeTeaser();
    await use(commonUtils);
  },
  accountPage: async ({ page }, use) => {
    const accountPage = new AccountPage(page, base.info());
    await use(accountPage);
  },
  policiesPage: async ({ page }, use) => {
    const policiesPage = new PoliciesPage(page, base.info());
    await use(policiesPage);
  },
  pricePage: async ({ page }, use) => {
    const pricePage = new PricePage(page, base.info());
    await use(pricePage);
  },
  bestSellersPage: async ({ page }, use) => {
    const bestSellersPage = new BestSellersPage(page, base.info());
    await use(bestSellersPage);
  },
  addToCartPage: async ({ page }, use) => {
    const addToCartPage = new AddToCartPage(page, base.info());
    await use(addToCartPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page, base.info());
    await use(checkoutPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page, base.info());
    await use(loginPage);
  },
  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page, base.info());
    await use(searchPage);
  },
});

export { test as defaultTest };
