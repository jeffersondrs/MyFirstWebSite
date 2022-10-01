import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <div className="w-full h-screen flex flex-row items-center justify-evenly p-5 flex-wrap">
        <a href="https://github.com/jeffersondrs">
          <BsGithub className="text-white w-20 h-20" />
        </a>
        <a href="https://www.linkedin.com/in/jeffersondrs/">
          <BsLinkedin className="text-white w-20 h-20" />
        </a>
        <a href="https://www.facebook.com/jefferson.duarteramos.1">
          <BsFacebook className="w-20 h-20 text-white" />
        </a>
        <a href="https://www.instagram.com/grinreborn/">
          <BsInstagram className="w-20 h-20 text-white " />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521973152800">
          <BsWhatsapp className="text-white  w-20 h-20" />
        </a>
        <a href="https://mailto:jeffersonduarte@id.uff.br">
          <SiGmail className="text-white w-20 h-20 " />
        </a>
      </div>
    </>
  );
}
