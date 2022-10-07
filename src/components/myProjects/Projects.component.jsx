import Button from "../button/Button-component";
import "./project.style.scss";

export default function Project() {
  return (
    <div className="w-full h-full background-projects mt-10">
      <div className="flex flex-row p-5 justify-evenly items-center flex-wrap">
        <div className="rounded-3xl flex justify-center items-center m-2">
          <a href="https://github.com/jeffersondrs/StoreClothings">
            <img
              src="https://raw.githubusercontent.com/jeffersondrs/StoreClothings/main/public/images/ezgif.com-gif-maker.gif"
              alt="project"
              className="w-80 rounded-3xl"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center text-white w-[550px]">
          <p className="text-center text-lg underline m-2">
            Projeto em andamento, feito em react, utilizando tecnologias como:
          </p>
          <p className="text-lg text-center">
            <p>SASS e TailwindCss para e estilização</p>
            <p>Firebase para Autenticação e login de usuários</p>
            <p>REact-Icons para criação de icones de menus e botões</p>
            <p>react router dom para navegação entre componentes</p>
          </p>
          <Button
            text={"repositório"}
            link={"https://github.com/jeffersondrs/StoreClothings"}
          />
        </div>
      </div>
      <div className="flex flex-row p-5 justify-evenly items-center flex-wrap">
        <div className="rounded-3xl flex justify-center items-center m-2">
          <a href="https://github.com/jeffersondrs/monster-rolodex">
            <img
              src="https://raw.githubusercontent.com/jeffersondrs/monster-rolodex/main/public/images/b78ede62-19d9-4fc5-b35f-022331492edc.gif"
              alt="project"
              className="w-80 rounded-3xl"
            />
          </a>
        </div>
        <div className="flex flex-col justify-center items-center text-white w-[550px]">
          <p className="text-center text-lg underline m-2">
            Projeto em React utilizando tencnologias:
          </p>
          <p className="text-lg text-center">
            <p>TailwindCss para e estilização</p>
            <p>Utilização de hooks useState e UseEffect</p>
            <p>Comsumindo Api externa</p>
          </p>
          <Button
            text={"repositório"}
            link={"https://github.com/jeffersondrs/monster-rolodex"}
          />
        </div>
      </div>
    </div>
  );
}
