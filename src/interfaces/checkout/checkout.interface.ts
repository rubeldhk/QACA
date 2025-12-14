export interface completeOrder {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  Suite?: string;
  StreetNumber?: string;
  StreetName?: string;
  city: string;
  postcode: string;
  Occasion: string;
  PersonalGreeting: string;
  Signature: string;
  DeliveryInstructions: string;
}

export interface cardDetails {
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
  cardName: string;
  cardCountry: string;
}
