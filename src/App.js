// Import Dependencies
import { HashRouter as Router, Route,  Routes } from "react-router-dom";

// Import Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

// Import top level CSS
import "./App.css";

console.log("app")

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
