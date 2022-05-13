import { SignInUpTypes, UsersInterface } from "./apiInterfaces";

const baseUrl = "https://devfront.vize.solutions/api/";
const apiList: Record<string, string> = {
  login: "/authaccount/login",
  registration: "/authaccount/registration",
  users: "/users?page=",
};

export async function fetchSign(
  email: string,
  password: string,
  type: string,
  name?: string
): Promise<SignInUpTypes> {
  const body = { email, password, name };
  const url = `${baseUrl}${apiList[type]}`;
  const data: Promise<SignInUpTypes> = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => response.json());

  return data;
}

export async function fetchUsers(
  token: string,
  type: string,
  page: number
): Promise<UsersInterface> {
  const url = `${baseUrl}${apiList[type]}${page}`;
  return <Promise<UsersInterface>>fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status !== 200) {
      throw new Error();
    }
    return response.json();
  });
}
