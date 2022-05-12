// Import Dependencies
import { Routes, Route } from "react-router-dom";

// Import Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// Import top level CSS
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
        <Routes>
          
          <Route path="/" element={ <Aboutme />} />
          <Route path="/projects" element={ <Project />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/resume" element={ <Resume />} />

        </Routes>
      <Footer />
    </>
  );
}

export default App;
