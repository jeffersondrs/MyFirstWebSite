import Button from "../button/Button-component";
import "./project.style.scss";

export default function Project() {
  return (
    <div className="w-full h-full background-projects mt-10">
      <div className="flex flex-row bg-blue-800/60 p-5 justify-evenly items-center flex-wrap">
        <a href="https://github.com/jeffersondrs/monster-rolodex">
          <img
            src="https://raw.githubusercontent.com/jeffersondrs/StoreClothings/main/public/images/ezgif.com-gif-maker.gif"
            alt="project"
            className="h-64"
          />
        </a>
        <div className=" flex flex-col justify-center items-start text-white w-[550px]">
          <p className="text-start text-lg underline m-2">
            Projeto em andamento, feito em react, utilizando tecnologias como:
          </p>
          <ul className="text-lg ">
            <li>SASS e TailwindCss para e estilização</li>
            <li>Firebase para Autenticação e login de usuários</li>
            <li>REact-Icons para criação de icones de menus e botões</li>
            <li>react router dom para navegação entre componentes</li>
          </ul>
          <p className="repos">
            <Button text={'repositório'} link={'https://github.com/jeffersondrs/StoreClothings'}/>
          </p>
        </div>
      </div>
      <div className="flex bg-blue-900/50 flex-row p-5 justify-evenly items-center flex-wrap">
        <div className="flex flex-col justify-center items-start text-white w-[550px]">
          <p className="text-start text-lg m-2">
            Projeto em React utilizando tencnologias:
          </p>
          <p>TailwindCss para e estilização</p>
          <p>Utilização de hooks useState e UseEffect</p>
          <p>Comsumindo Api externa</p>
          <p className="repos">
          <Button text={'repositório'} link={'https://github.com/jeffersondrs/monster-rolodex'}/>
          </p>
        </div>
        <a href="https://github.com/jeffersondrs/monster-rolodex">
          <img
            src="https://raw.githubusercontent.com/jeffersondrs/monster-rolodex/main/public/images/b78ede62-19d9-4fc5-b35f-022331492edc.gif"
            alt="project"
            className="h-64"
          />
        </a>
      </div>
    </div>
  );
}
