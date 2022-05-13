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

export interface UsersData {
  id: number;
  name: string;
  email: string;
  profilepicture: string;
  location: string;
  createdat: Date;
}
export interface UsersInterface {
  page: number;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: UsersData[];
}
