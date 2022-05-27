import { Container, Row, Col } from "react-bootstrap"

function Footer() {

    return(
        <Container className="footer" fixed="bottom">
            <Row>
                <Col>Github: <a href="https://github.com/brysgithub">brysgithub</a></Col>
                <Col>LinkedIn: <a href="https://www.linkedin.com/in/bryan-schenck-4b56a1223/">Bryan Schenck</a></Col>
                <Col>Call: (971) 867-4052 </Col>
                <Col>Copyright &#169; 2022 Bryan Schenck </Col>
            </Row>
        </Container>
    )
}

export default Footer