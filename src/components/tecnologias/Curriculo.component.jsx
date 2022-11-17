import { saveAs } from "file-saver";
import Curriculo from "../../assets/Curriculo.pdf";
import Widget from "../Widget/Widget";
import "./curriculo.styles.scss";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { ImDownload3 } from "react-icons/im";
import { Button } from "../button/styles";

export default function Curriculum() {
  const saveFile = () => {
    saveAs(Curriculo, "Jefferson Duarte.pdf");
  };
  return (
    <div className="container flex flex-row items-center justify-center h-full p-3 flex-wrap download-container">
      <p className="text-white text-center my-2">
        Faça Download do meu currículo clicando no botão ao lado
      </p>
      <div className="flex flex-row items-center justify-between mx-5">
        <Button
          className="download-button flex flex-row justify-evenly items-center text-white w-36 mx-2 h-8 rounded-lg hover:scale-105 hover:shadow-lg"
          onClick={saveFile}
        >
          download
          <ImDownload3 className=" hover:text-sky-500" />
        </Button>
      </div>
      <Widget />
    </div>
  );
}
