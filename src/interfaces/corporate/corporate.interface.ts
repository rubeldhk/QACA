export type CorporateMenuOption =
  | "Apply for 20% Corporate Discount"
  | "Quote Request Form"
  | "Corporate Gift Baskets";

export interface SelectCorporateMenuItemData {
  isDesktop: boolean;
  menuItem: CorporateMenuOption;
}

export interface ExpectedCorporateMenuData {
  expectedEntries: CorporateMenuOption[];
}

export interface ExpectedCorporateHeaderData {
  headerText:
    | "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES"
    | "Quote Form"
    | "Corporate Gift Baskets";
}

export interface FormElementsForDiscount {
    firstName: string;
    lastName: string;
    phone: string;
    companyName: string;
    workEmail: string;
}

export interface FormElementsForQuote {
    name: string;
    email: string;
    phone: string;
    numberOfBaskets: string;
    estimatedBudget: string;
    approximateDeliveryDate: string;
    stateOrProvince: string;
    productDescription: string;
}

export interface ExpectedCorporateSectionsData {
  sectionHeadings: Array<
    | "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES"
    | "Quote Form"
    | "Corporate Gift Baskets"
  >;
}

export type CorporateMenuOptionFrench =
  | "Demander un Rabais Corporatif de 20%"
  | "Formulaire de Demande de Devis"
  | "Paniers Cadeaux d'entreprise";

export interface SelectCorporateMenuItemDataFrench {
  isDesktop: boolean;
  menuItem: CorporateMenuOptionFrench;
}

export interface ExpectedCorporateMenuDataFrench {
  expectedEntries: CorporateMenuOptionFrench[];
}

export interface ExpectedCorporateHeaderDataFrench {
  headerText:
    | "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES"
    | "Quote Form"
    | "Paniers cadeaux d'entreprise";
}

export interface ExpectedCorporateSectionsDataFrench {
  sectionHeadings: Array<
    | "SIGN UP NOW AND SAVE 20% OFF ON ALL COMPANY PURCHASES"
    | "Quote Form"
    | "Paniers cadeaux d'entreprise"
  >;
}

