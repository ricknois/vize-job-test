import { useEffect, useState } from "react";
import { Button, Input } from "../../components";
import { fetchSign } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = getLocalStorage();
    if (token) {
      navigate("/home");
    }
  }, []);

  async function fetchRegister() {
    await fetchSign(email, password, "registration", name)
      .then((data) => {
        if (data.message === "success") {
          navigate("/");
        } else {
          setMessage(data.message || "Try again later");
        }
      })
      .catch(() => setMessage("Try again later"));
  }

  return (
    <div className="bg-back1 h-screen flex flex-col">
      <div className="flex justify-center items-center h-1/3">
        <span className="text-white text-3xl font-extrabold">Register</span>
      </div>

      <div className="flex flex-1 flex-col bg-back3 px-8">
        <span className="text-red-600 text-center mt-2 h-6">{message}</span>

        <div className="mb-6">
          <Input label="Name" setInput={setName} />
          <Input label="Email" setInput={setEmail} />
          <Input label="Password" setInput={setPassword} hidden />
        </div>
        <Button
          title="Register"
          onPress={() => fetchRegister()}
          isDisabled={!name && !email && !password}
        />
      </div>
    </div>
  );
}
