import { TbArrowNarrowRight } from "react-icons/tb";
import { SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";

export default function Video() {
  return (
    <div className="body-container bg-black/25 flex flex-row flex-wrap items-center h-full justify-center p-2">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover transfo z-[-1] blur-[1px]"
      >
        <source
          src="https://static.videezy.com/system/resources/previews/000/018/948/original/ICON-VERSION8_1.mp4"
          type="video/mp4"
        />
      </video>
      <div className="w-[500px] h-full p-3 bg-black/80 flex flex-col items-center justify-evenly text-white">
        <p className="text-center xl:text-2xl lg:text-xl md:text-base sm:text-sm">
          Seja bem vindo ao meu site/portifólio, aqui tentarei expressar minhas
          habilidades e mostrar meu trabalho na forma prática, pois venho
          estudando a algum tempo e quero ter uma oportunidade para contribuir
          em projetos e contribuir com a empresa em que eu estiver.
        </p>
        <div className="flex flex-row justify-evenly items-center">
          <p>tecnologias que utilizo no meu dia a dia</p>
          <TbArrowNarrowRight className="text-white mx-2" />
        </div>
      </div>
      <div className="w-[500px] bg-white/30 h-full mx-2 flex justify-evenly p-2 items-center flex-wrap">
        <SiJavascript className="w-20 sm:w-10 md:w-12 lg:w-16 h-20 sm:h-10 md:h-12 lg:h-16 xl:h-20 bg-black text-yellow-400" />
        <SiReact className="text-sky-700 w-20 sm:w-10 md:w-12 lg:w-16 h-20 sm:h-10 md:h-12 lg:h-16 xl:h-20 react-icon" />
        <SiTailwindcss className="text-sky-400 w-20 sm:w-10 md:w-12 lg:w-16 h-20 sm:h-10 md:h-12 lg:h-16 xl:h-20 " />

        <img
          src="https://cdn.worldvectorlogo.com/logos/vitejs.svg"
          className="w-20 sm:w-10 md:w-12 lg:w-16 h-20 sm:h-10 md:h-12 lg:h-16 xl:h-20 "
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          className="w-20 sm:w-10 md:w-12 lg:w-16 h-20 sm:h-10 md:h-12 lg:h-16 xl:h-20 "
        />
        <img
          src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
          className="w-20 sm:w-10 md:w-12 lg:w-16 h-20 sm:h-10 md:h-12 lg:h-16 xl:h-20 "
        />
        <img
          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg"
          className="w-24 sm:w-10 md:w-12 lg:w-16 h-20 sm:h-10 md:h-12 lg:h-16 xl:h-20 "
        />
        <img
          src="https://www.svgrepo.com/show/303205/html-5-logo.svg"
          className="w-20 sm:w-10 md:w-12 lg:w-16   h-20"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          className="w-20 sm:w-10 md:w-12 lg:w-16   h-20"
        />
        <img
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          className="w-20 sm:w-8 md:w-12 lg:w-14   h-20 sm:h-8 md:h-12 lg:h-14"
        />
      </div>
    </div>
  );
}
