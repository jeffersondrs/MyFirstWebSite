import { Outlet } from "react-router-dom";
import "./Nav.syles.scss";
import Contato from "./Contact.radix";

export default function Navegation() {
  return (
    <>
      <Contato />
      <Outlet />
    </>
  );
}
