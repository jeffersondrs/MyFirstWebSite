import { Outlet } from "react-router-dom";
import "./Nav.syles.scss";
import Contato from "./Contact.radix";

export default function Navegation() {
  return (
    <>
    <div className="bg-white w-full flex flex-row items-center justify-center">
    <Contato />
    </div>
      <Outlet />
    </>
  );
}
