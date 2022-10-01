import Avatar from "./Avatar.component";
import "./about.styles.scss";

export default function About() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full h-full bg-slate-900 text-white flex flex-row items-center justify-evenly p-20 flex-wrap">
          <div className="h-full flex flex-col justify-evenly items-center w-[400px]">
            <h1 className="font-bold text-xl typetext m-4">
              Olá! Meu nome é Jefferson
            </h1>
            <h2 className=" text-center">seja bem vindo ao meu portfolio</h2>
            <p className="text-center m-4">
              EStudante de programação e graduando em análise e desenvolvimento
              de sistemas, em busca da primeira oportunidade. <br></br> Espero
              que goste da experiência e fique a vontade para explorar as
              funcionalidades que criei para esse projeto pessoal, também quero
              vender o meu peixe 😁
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="avatar mb-4">
              <Avatar />
            </div>
            <div className="thisIsMe">
              <p className="w-64 text-center">Esse sou eu, ou quase... 😜</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
