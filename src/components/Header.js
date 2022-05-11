import { Link, useLocation } from "react-router-dom"

function Header() {
    
    const location = useLocation();

    return(
        <header>
            
                <div>
                    <h1>Bryan Schenck</h1>
                </div>
            
            
                <div>
                    <Link to="/aboutme" className={location.pathname === "/"?"nav_highlighted shadow":""}>About</Link>
                </div>
                <div>
                    <Link to="/projects" className={location.pathname === "/projects"?"nav_highlighted shadow":""}>Projects</Link>
                </div>
                <div>
                    <Link to="/contact" className={location.pathname === "/contact"?"nav_highlighted shadow":""}>Contact</Link>
                </div>
                <div>
                    <Link to="/resume" className={location.pathname === "/resume"?"nav_highlighted shadow":""}>Resume</Link>
                </div>
            
        </header>
    )

}

export default Header