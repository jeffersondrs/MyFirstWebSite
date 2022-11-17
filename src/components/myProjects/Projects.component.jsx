import Button from "../button/Button-component";
import "./project.style.scss";

export default function Project() {
  return (
    <div className="container bg-slate-500/10 my-2">
      <div className="flex flex-row p-5 justify-evenly items-center flex-wrap">
        <div className=" flex justify-center items-center m-2">
          <a href="https://github.com/jeffersondrs/StoreClothings">
            <img
              src="https://github.com/jeffersondrs/StoreClothings/raw/main/public/images/videomaker.gif"
              alt="project"
              className="w-80 "
            />
          </a>
        </div>
        <div className="bg-black/20 p-2 flex flex-col justify-center items-center text-white w-[550px]">
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
        <div className=" flex justify-center items-center m-2">
          <a href="https://github.com/jeffersondrs/monster-rolodex">
            <img
              src="https://raw.githubusercontent.com/jeffersondrs/monster-rolodex/main/public/images/b78ede62-19d9-4fc5-b35f-022331492edc.gif"
              alt="project"
              className="w-80 "
            />
          </a>
        </div>
        <div className="bg-black/20 p-2 flex flex-col justify-center items-center text-white w-[550px]">
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
        <div className="flex flex-row p-5 justify-evenly items-center flex-wrap">
        <div className=" flex justify-center items-center m-2">
          <a href="https://github.com/jeffersondrs/MyBlog">
            <img
              src="https://github.com/jeffersondrs/MyBlog/raw/main/public/videoblog.gif"
              alt="project"
              className="w-80 "
            />
          </a>
        </div>
        <div className=" bg-black/20 p-2 flex flex-col justify-center items-center text-white w-[550px]">
          <p className="text-center text-lg underline m-2">
            Projeto em React com framework Nextjs:
          </p>
          <p className="text-lg text-center">
            <p>TailwindCss e Sass para estilização</p>
            <p>Utilização de hooks useState, useRef, useContext e UseEffect</p>
            <p>GRaphQl and GraphCms para back end</p>
          </p>
          <Button
            text={"repositório"}
            link={"https://github.com/jeffersondrs/MyBlog"}
          />
        </div>
        </div>
        <div className="flex flex-row p-5 justify-evenly items-center flex-wrap">
        <div className=" flex justify-center items-center m-2">
          <a href="https://github.com/jeffersondrs/TodoList-React">
            <img
              src="https://github.com/jeffersondrs/TodoList-React/raw/main/public/videotodolist.gif"
              alt="project"
              className="w-80 "
            />
          </a>
        </div>
        <div className="bg-black/20 p-2 flex flex-col justify-center items-center text-white w-[550px]">
          <p className="text-center text-lg underline m-2">
            Projeto em React:
          </p>
          <p className="text-lg text-center">
            <p>TailwindCss para estilização</p>
            <p>Utilização de hooks useState</p>
            <p>Projeto ainda em desenvolvimento e para utilização de novas tecnologias em conjunto</p>
          </p>
          <Button
            text={"repositório"}
            link={"https://github.com/jeffersondrs/TodoList-React"}
          />
        </div>
        </div>
        
    </div>
  );
}
