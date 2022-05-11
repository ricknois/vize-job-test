import { useState } from "react";
import { Button, Input } from "../../components";
import { GoogleSvg, FacebookSvg } from "../../assets";

export default function Login() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="bg-back1 h-screen flex flex-col">
      <div className="flex justify-center items-center h-1/3">
        <span className="text-white text-3xl font-extrabold">Login</span>
      </div>

      <div className="flex flex-1 flex-col bg-back3 px-8">
        <div className="mb-6">
          <Input label="Email" setInput={setEmail} hidden />
          <Input label="Password" setInput={() => null} />
        </div>
        <Button title="Entrar" onPress={() => null} />
        <span className="text-sm text-font mt-10 mb-4 text-center">
          Or continue with
        </span>
        <div className="flex space-x-4">
          <Button
            title="Google"
            Icon={GoogleSvg}
            onPress={() => console.log(email)}
          />
          <Button
            title="Facebook"
            Icon={FacebookSvg}
            onPress={() => console.log(email)}
          />
        </div>
        <span className="text-sm text-font mt-10 mb-4 text-center">
          Don’t have account? Create now
        </span>
      </div>
    </div>
  );
}
