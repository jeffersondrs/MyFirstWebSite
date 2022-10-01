import { saveAs } from "file-saver";
import Curriculo from "../../assets/Curriculo.pdf";
import './curriculo.styles.scss'
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

export default function Curriculum() {
  const saveFile = () => {
    saveAs(Curriculo, "Jefferson Duarte.pdf");
  };
  return (
    <div className="w-full flex flex-row items-center justify-evenly h-16 flex-wrap">
      <p className="text-white text-center m-2">
        Faça Download do meu currículo clicando no botão ao lado
      </p>
      <div className="flex flex-row items-center justify-evenly">
      <HiOutlineChevronDoubleRight className="text-white setRight" />
      <button
      className="bg-violet-900 text-white w-36 mx-5 h-8 rounded-lg text-lg hover:scale-105 hover:shadow-lg"
      onClick={saveFile}
      >
      download
      </button>
      <HiOutlineChevronDoubleLeft className="text-white setLeft" />
      </div>
    </div>
  );
}
