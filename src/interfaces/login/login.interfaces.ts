export interface LoginData {
  password: string;
  skipFlag?: string;
  username: string;
}

export interface AccessDetailsData {
  hasAccess: boolean;
  title: string;
  url: string;
}

export interface DropdownsData {
  inputName: string;
  options: string[];
}
