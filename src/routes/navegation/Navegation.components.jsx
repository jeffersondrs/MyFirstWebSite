import { Outlet } from "react-router-dom";
import "./Nav.syles.scss";
import Home from "./Navegation.home";
import Contato from "../../components/contact/Contact.radix";

export default function Navegation() {
  return (
    <>
      <div className="flex flex-row items-center flex-wrap justify-center w-full h-full bg-sky-500">
        <div>
        <Home />
        </div>
        <div className="h-12 flex flex-row justify-center items-center w-[400px]">
        <Contato />
        </div>
      </div>
      <Outlet />
    </>
  );
}
