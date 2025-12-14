export interface AccountPageInterface {
    email: string;
    password: string;
}

export interface LoginFormInterface {
    LoginHeading?: string;
    LoginText?: string;
    EmailPlaceholder?: string;
    PasswordPlaceholder?: string;
    RememberMeOption?: string;
    LoginButton?: string;
    troubleShootText?: string;
}

export interface HoursAndContactInformationInterface {
    HoursAndContactInformation?: string;
    SupportHours?: string;
    PhoneNumber?: string;
    EmailAddress?: string;
}

export interface ContactUsFormInterface {
    ContactUsHeading?: string;
    NameInputPlaceholder?: string;
    EmailInputPlaceholder?: string;
    PhoneInputPlaceholder?: string;
    MessageInputPlaceholder?: string;
    SubmitButtonText?: string;
}

export interface LostPasswordFormInterface {
    createPasswordHeading?: string;
    paragraphText?: string;
    stilhavingtroubleText?: string;
    para1Text?: string;
    para2Text?: string;
}

export interface ShoppingCartFormInterface {
    ShoppingCartSummary?: string;
    YourCartIsEmpty?: string;
}

export interface FlowerCareVerificationInterface {
    flowerCareHeading?: string;
    flowerCareParagraphs?: string[];
}