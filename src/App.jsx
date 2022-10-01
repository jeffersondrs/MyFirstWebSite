import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navegation from "./routes/navegation/Navegation.components";
import About from "./components/about/About.component";
import Contact from "./components/contact/Contact.component";
import Home from "./routes/home/Home.index";

function App() {
  return (
    <Routes>
      <Route path="" element={<Navegation />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
