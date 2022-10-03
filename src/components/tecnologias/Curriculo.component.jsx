import { saveAs } from "file-saver";
import Curriculo from "../../assets/Curriculo.pdf";
import "./curriculo.styles.scss";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { ImDownload3 } from "react-icons/im";

export default function Curriculum() {
  const saveFile = () => {
    saveAs(Curriculo, "Jefferson Duarte.pdf");
  };
  return (
    <div className="w-full flex flex-row items-center justify-center h-20 flex-wrap mb-8">
      <p className="text-white text-center my-2">
        Faça Download do meu currículo clicando no botão ao lado
      </p>
      <div className="flex flex-row items-center justify-between mx-5">
        <HiOutlineChevronDoubleRight className="text-white setRight" />
        <button
          className="bg-violet-900 flex flex-row justify-evenly items-center text-white w-36 mx-2 h-8 rounded-lg hover:scale-105 hover:shadow-lg"
          onClick={saveFile}
        >
          download
          <ImDownload3 className="text-sky-500 hover:text-white" />
        </button>
        <HiOutlineChevronDoubleLeft className="text-white setLeft" />
      </div>
    </div>
  );
}
