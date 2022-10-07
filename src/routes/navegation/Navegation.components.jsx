import { Outlet } from "react-router-dom";
import "./Nav.syles.scss";
import Contato from "./Contact.radix";

export default function Navegation() {
  return (
    <>
    <div className="bg-black w-full flex flex-row items-center justify-center p-2">
    <Contato />
    </div>
      <Outlet />
    </>
  );
}
