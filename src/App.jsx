import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tools from "./components/Tools";
import Skill from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto md:px-12 px-5">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Tools />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
