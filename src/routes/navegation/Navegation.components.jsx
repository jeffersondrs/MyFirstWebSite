import { Outlet } from "react-router-dom";
import "./Nav.syles.scss";
import Contato from "./Contact.radix";
import Widget from "../../components/Widget/Widget";

export default function Navegation() {
  return (
    <div>
      <div className="bg-black flex flex-row items-center justify-center p-2">
        <Contato />
        </div>
        <Outlet />
        <Widget />
    </div>
  );
}
