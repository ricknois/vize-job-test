// import { useState } from "react";
import { Input } from "../../components";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div>
      <Input label="Email" setInput={() => null} hidden />
      <Input label="Email" setInput={() => null} />
    </div>
  );
}
