// Import Dependencies
import { Routes, Route } from "react-router-dom";

// Import Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Main from "./components/Main";

// Import top level CSS
import "./App.css";

function App() {
  return (
    <>
      <Header />
        <Routes>
          
          <Route path="/" element={ <Main />} />
          <Route path="/aboutme" element={ <Aboutme />} />
          <Route path="/projects" element={ <Project />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/resume" element={ <Resume />} />

        </Routes>
      <Footer />
    </>
  );
}

export default App;
