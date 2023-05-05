import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Home />} />
    </Routes>
  );
}
