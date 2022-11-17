import About from "../../components/about/About.component";
import Projects from "../../components/myProjects/Projects.component";
import Curriculum from "../../components/tecnologias/Curriculo.component";
import Video from "../../components/videocomponent/Video.component";

export default function Home() {
  return (
    <div className="container">
      <About />
      <Video />
      <Projects />
      <Curriculum />
    </div>
  );
}
