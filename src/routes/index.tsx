import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Register, Users } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
