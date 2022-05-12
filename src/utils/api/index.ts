import { SignInUpTypes } from "./apiInterfaces";

const baseUrl = "https://devfront.vize.solutions/api/";
const apiList: Record<string, string> = {
  login: "/authaccount/login",
  registration: "/authaccount/registration",
};

export async function fetchSign(
  email: string,
  password: string,
  type: string,
  name?: string
): Promise<SignInUpTypes> {
  const body = { email, password, name };
  console.log(body);
  const url = `${baseUrl}${apiList[type]}`;
  const data = fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => response.json());

  return data;
}
