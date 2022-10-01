import { CgArrowLongDown } from "react-icons/cg";
import About from "../../components/about/About.component";
import Projects from "../../components/myProjects/Projects.component";
import Video from "../../components/videocomponent/Video.component"

export default function Home() {
  return (
    <>
      <About />
      <Video />
      <Projects />
    </>
  );
}
