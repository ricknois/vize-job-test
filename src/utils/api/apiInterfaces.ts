export interface Data {
  Id: number;
  Name: string;
  Email: string;
  Token: string;
}
export interface SignInUpTypes {
  code: number;
  message: string;
  data: Data | null;
}
