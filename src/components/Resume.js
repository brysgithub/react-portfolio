import { Container, Button } from "react-bootstrap"
import pdf from "../assets/pdf/resume.pdf"

function Resume() {

    return(
        <Container className="resume-cont">
            <a href={pdf}><Button variant="primary">Download Resume</Button></a>
        </Container>
    )
}

export default Resume