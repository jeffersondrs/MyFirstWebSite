import "./project.style.scss";

export default function Project() {
  return (
    <div className="w-full h-full bg-slate-800">
      <div className="flex flex-row bg-sky-700/90 m-1 p-5 justify-evenly items-center flex-wrap">
        <a href="https://github.com/jeffersondrs/monster-rolodex">
          <img
            src="https://raw.githubusercontent.com/jeffersondrs/StoreClothings/main/public/images/ezgif.com-gif-maker.gif"
            alt="project"
            className="h-64"
          />
        </a>
        <div className="flex flex-col justify-center items-center w-[550px]">
          <p className="text-white text-start text-xl m-2">
            Projeto em andamento, feito em react, utilizando tecnologias como:
          </p>
          <ul className="text-lg text-white">
            <li>SASS e TailwindCss para e estilização</li>
            <li>Firebase para Autenticação e login de usuários</li>
            <li>REact-Icons para criação de icones de menus e botões</li>
            <li>react router dom para navegação entre componentes</li>
          </ul>
          <p className="repos">
            <a href="https://github.com/jeffersondrs/StoreClothings">
              repositório no gitHub
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-row bg-blue-800 m-1 p-5 justify-evenly items-center flex-wrap">
        <div className="flex flex-col justify-center items-center w-[550px]">
          <p className="text-white text-start text-xl">
            Projeto em React utilizando tencnologias:
          </p>
          <ul className="text-lg text-white">
            <li>TailwindCss para e estilização</li>
            <li>Utilização de hooks useState e UseEffect</li>
            <li>Comsumindo Api externa</li>
          </ul>
          <p className="repos">
            <a href="https://github.com/jeffersondrs/monster-rolodex">
              repositório no gitHub
            </a>
          </p>
        </div>
        <img
          src="https://raw.githubusercontent.com/jeffersondrs/monster-rolodex/main/public/images/b78ede62-19d9-4fc5-b35f-022331492edc.gif"
          alt="project"
          className="h-64"
        />
      </div>
    </div>
  );
}
