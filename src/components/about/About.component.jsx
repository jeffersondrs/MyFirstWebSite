import Avatar from "./Avatar.component";
import "./about.styles.scss";

export default function About() {
  return (
    <>
      <div className="w-full text-white justify-evenly flex flex-row p-6 flex-wrap-reverse">

        <div className="w-96 p-1 flex flex-col justify-center items-center rounded-xl">
          <h1 className="text-xl text-center typetext my-2">
           Meu nome é Jefferson
          </h1>
          <h2 className=" text-center">seja bem vindo ao meu portfolio</h2>
          <p className="text-center p-2">
            EStudante de programação e graduando em análise e desenvolvimento de
            sistemas, em busca da primeira oportunidade. <br></br> Espero que
            goste da experiência e fique a vontade para explorar as
            funcionalidades que criei para esse projeto pessoal, também quero
            vender o meu peixe 😁
          </p>
        </div>


        <div className="flex flex-col items-center justify-center p-2 mb-5 w-80 rounded-2xl">
            <Avatar />
          <div className="thisIsMe">
            <p className="w-64 text-center">Esse sou eu, ou quase... 😜</p>
          </div>
        </div>

      </div>
    </>
  );
}
