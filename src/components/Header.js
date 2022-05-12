import { Link } from "react-router-dom"
import {Container, Row, Nav} from "react-bootstrap"

function Header() {

    return(
        <Container className="header">
            <Row>

                <h1>Bryan Schenck</h1>

                <Nav className="justify-content-end links" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                    </Nav.Item>
                </Nav>
                
            </Row> 
        </Container>
    )

}

export default Header