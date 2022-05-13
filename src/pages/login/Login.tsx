import { useEffect, useState } from "react";
import { Button, Input } from "../../components";
import { GoogleSvg, FacebookSvg } from "../../assets";
import { fetchSign } from "../../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = getLocalStorage();
    if (token) {
      navigate("/home");
    }
  }, []);

  async function fetchLogin() {
    await fetchSign(email, password, "login")
      .then((data) => {
        if (data.message === "success") {
          setLocalStorage(data.data?.Token || "");
          navigate("/home");
        } else {
          setMessage(data.message || "Try again later");
        }
      })
      .catch(() => setMessage("Try again later"));
  }

  return (
    <div className="bg-back1 h-screen flex flex-col md:flex-row">
      <div className="flex justify-center items-center h-1/3 md:h-screen md:w-1/3">
        <span className="text-white text-3xl font-extrabold">Login</span>
      </div>

      <div className="flex flex-1 flex-col bg-back3 px-8 md:h-screen md:justify-center">
        <span className="text-red-600 text-center mt-2 h-6">{message}</span>

        <div className="mb-6">
          <Input label="Email" setInput={setEmail} />
          <Input label="Password" setInput={setPassword} hidden />
        </div>

        <Button
          title="Log in"
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
        <div className="flex mt-5 items-center justify-center space-x-1">
          <span className="text-sm text-font">Don’t have account?</span>
          <Link to="/register" className="text-sm text-white">
            Create now
          </Link>
        </div>
      </div>
    </div>
  );
}
