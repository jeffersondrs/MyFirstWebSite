import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import "./vide.style.scss";

export default function Video() {
  return (
    <div className="flex flex-row flex-wrap w-full h-full items-center justify-evenly tech-container text-white p-8">
      <div className="w-96 h-full">
        <p className="text-center xl:text-xl lg:text-xl md:text-base sm:text-sm p-1">
          Este é meu site/portifólio, aqui tentarei expressar minhas habilidades
          e mostrar meu trabalho na forma prática, pois venho estudando a algum
          tempo e quero ter uma oportunidade para contribuir em projetos e
          contribuir com a empresa em que eu estiver.
        </p>
      </div>
      <div className="flex w-96 h-full items-center flex-col m-3">
        <div className="flex flex-row flex-wrap justify-evenly items-center">
          <SiJavascript className="bg-black my-2 text-yellow-400 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10" />
          <SiReact className="text-sky-400 my-2 react-icon xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10" />
          <SiTailwindcss className="text-sky-400 my-2 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10" />

          <img
            src="https://cdn.worldvectorlogo.com/logos/vitejs.svg"
            className="my-2 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10 "
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            className="xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10 "
          />
          <img
            src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
            className="my-2 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10 "
          />

          <img
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
            className="my-2 xl:w-28 xl:h-20 lg:w-24 lg:h-16 md:w-20 md:h-12 sm:w-14 sm:h-10 w-16 h-10 "
          />
          <img
            src="https://www.svgrepo.com/show/303205/html-5-logo.svg"
            className="my-2 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10 "
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            className="my-2 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10 "
          />
          <img
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            className="my-2 xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 sm:w-10 sm:h-10 w-10 h-10 "
          />
        </div>
        <div className="text-center mt-5">
          <p>tecnologias que utilizo no meu dia a dia</p>
        </div>
      </div>
    </div>
  );
}
