import { Link } from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"

function Header() {

    return(
        <Container>
            <div className="row">
                <div className="col-8">
                    <h1>Bryan Schenck</h1>
                </div>
            
                <div className="col-3">
                    <div className="row">
                        <div>
                            <Link to="/">About-</Link>
                        
                            <Link to="/projects">Projects-</Link>
                       
                            <Link to="/contact">Contact-</Link>
                        
                            <Link to="/resume">Resume</Link>
                        </div>
                    </div>
                </div>
            </div> 
        </Container>
    )

}

export default Header