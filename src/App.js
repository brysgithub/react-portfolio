// Import Dependencies
import { HashRouter as Route, Router, Routes } from 'react-router-dom';

// Import Components
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Aboutme from './components/Aboutme.js';
import Project from './components/Project.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';

// Import top level CSS
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path= "/" element= {<Aboutme />}/>
          <Route path= "/projects" element= {<Project />}/>
          <Route path= "/contact" element= {<Contact />}/>
          <Route path= "/resume" element= {<Resume />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
