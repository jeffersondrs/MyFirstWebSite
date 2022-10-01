import "./contato.style.scss";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
export default function Contact() {
  return (
    <>
      <div className="bg-slate-600 w-full h-full flex flex-row items-center justify-evenly p-5">
        <div className="w-96 h-64 bg-black text-white flex flex-col justify-center items-center">
          <BsGithub className="bg-black text-white w-20 h-20" />
        </div>
        <div className="w-96 h-64 bg-black text-white flex flex-col justify-center items-center">
          <BsFacebook className="w-20 h-20 text-blue-700 bg-white rounded-full" />
        </div>
        <div className="w-96 h-64 bg-black text-white flex flex-col items-center justify-center">
          <BsLinkedin className="text-blue-600 bg-white w-20 h-20 rounded-3xl" />
        </div>
      </div>
      <div className="bg-slate-600 w-full h-full flex flex-row items-center justify-evenly p-5">
        <div className="w-96 h-64 bg-black text-white">
          <BsWhatsapp />
        </div>
        <div className="w-96 h-64 bg-black text-white">
          <SiGmail />
        </div>
        <div className="w-96 h-64 bg-black text-white">Github</div>
      </div>
      <div className="bg-slate-600 w-full h-full flex flex-row items-center justify-evenly p-5">
        <div className="w-96 h-64 bg-black text-white">
          <BsInstagram />
        </div>
        <div className="w-96 h-64 bg-black text-white">
          <BsTwitter />
        </div>
        <div className="w-96 h-64 bg-black text-white">Workana</div>
      </div>
    </>
  );
}
