import { useState } from "react";
import { Button, Input } from "../../components";
import { GoogleSvg, FacebookSvg } from "../../assets";
import { fetchSign } from "../../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  async function fetchLogin() {
    const data = await fetchSign(email, password, "login");
    if (data.message !== "success") {
      setIsValid(false);
    }
  }

  return (
    <div className="bg-back1 h-screen flex flex-col">
      <div className="flex justify-center items-center h-1/3">
        <span className="text-white text-3xl font-extrabold">Login</span>
      </div>

      <div className="flex flex-1 flex-col bg-back3 px-8">
        <span className="text-red-600 text-center mt-2 h-6">
          {!isValid && "Invalid user or password"}
        </span>

        <div className="mb-6">
          <Input label="Email" setInput={setEmail} />
          <Input label="Password" setInput={setPassword} hidden />
        </div>

        <Button
          title="Entrar"
          onPress={() => fetchLogin()}
          isDisabled={!email && !password}
        />
        <span className="text-sm text-font mt-10 mb-4 text-center">
          Or continue with
        </span>
        <div className="flex space-x-4">
          <Button
            title="Google"
            Icon={GoogleSvg}
            onPress={() => console.log("Google")}
          />
          <Button
            title="Facebook"
            Icon={FacebookSvg}
            onPress={() => console.log("Facebook")}
          />
        </div>
        <span className="text-sm text-font mt-10 mb-4 text-center">
          Don’t have account? Create now
        </span>
      </div>
    </div>
  );
}
