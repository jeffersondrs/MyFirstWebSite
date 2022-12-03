import Button from "../button/Button-component";
import "./project.style.scss";

export default function Project() {
  return (
    <div className=" bg-slate-500/10 my-2">
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
          <h1 className="text-center text-xl m-2">
            Projeto E-commerce website:
          </h1>

          <ul className="text-sm italic">
            <li>Biblioteca React</li>
            <li>Sass e TailwindCss para estilização</li>
            <li>Firebase para autenticação e login de usuários</li>
            <li>React-icons para criação de ícones do menu e botões</li>
            <li>React-router-dom para navegação entre componentes</li>
          </ul>
          <div className="flex flex-row w-64 justify-center items-center">
            <Button
              text={"repositório"}
              link={"https://github.com/jeffersondrs/StoreClothings"}
            />
            <Button
              text={"deploy"}
              link={"https://clothesbr-ecommerce.netlify.app/"}
            />
          </div>
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
          <p className="text-center text-xl m-2">
            Projeto em Json Monsters:
          </p>
          <ul className="text-sm italic">
            <li>TailwindCss para e estilização</li>
            <li>Utilização de hooks useState e UseEffect</li>
            <li>Comsumindo Api externa</li>
          </ul>
          <div className="flex flex-row w-64 justify-center items-center">
            <Button
              text={"repositório"}
              link={"https://github.com/jeffersondrs/monster-rolodex"}
            />
            <Button
              text={"deploy"}
              link={"https://main--monstersjson.netlify.app/"}
            />
          </div>
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
        <div className="bg-black/20 p-2 flex flex-col justify-center items-center text-white w-[550px]">
          <h1 className="text-center text-xl m-2">Projeto Blog pessoal:</h1>
          <ul className="text-sm italic">
            <li>Biblioteca React</li>
            <li>Framework Nextjs</li>
            <li>TailwindCss e Sass para estilização</li>
            <li>
              Hooks useState, useRef, useContext e UseEffect
            </li>
            <li>GraphQl e GraphCms para back-end</li>
          </ul>
          <div className="flex flex-row w-64 justify-center items-center">
            <Button
              text={"repositório"}
              link={"https://github.com/jeffersondrs/MyBlog"}
            />
            <Button
              text={"deploy"}
              link={"https://my-blog-jeffersondrs.vercel.app/"}
            />
          </div>
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
          <h1 className="text-center text-xl m-2">Projeto Todo-list</h1>
          <ul className="text-sm italic">
            <li>React</li>
            <li>TailwindCss para estilização</li>
            <li>Utilização de hooks useState</li>
            <li>
              Projeto ainda em desenvolvimento...
            </li>
          </ul>
          <div className="flex flex-row w-64 justify-center items-center">
            <Button
              text={"repositório"}
              link={"https://github.com/jeffersondrs/TodoList-React"}
            />
            <Button
              text={"deploy"}
              link={"https://my-blog-jeffersondrs.vercel.app/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
