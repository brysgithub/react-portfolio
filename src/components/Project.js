import pewPewImg from "../assets/images/pewPewScreenshot.png"
import passGenImg from "../assets/images/passGenScreenshot.png"
import portfolioImg from "../assets/images/portfolioScreenshot.png"
import weatherImg from "../assets/images/weatherScreenshot.png"

import { Container, Card, Button, Row } from "react-bootstrap"

function Project() {

    return(
        <Container>
            <Row className="justify-content-center">
                <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={pewPewImg} />
                    <Card.Body>
                        <Card.Title>Pewpew Spaceman</Card.Title>
                        <Card.Text>
                            Fun game made using the MERN stack. Made in 2 weeks!
                        </Card.Text>
                        <a href="https://pewpewpewpew-spaceman.herokuapp.com/"><Button variant="primary">Play</Button></a>
                        <a href="https://github.com/Morgoth27/pewpew_spaceman"><Button variant="primary">Github</Button></a>
                    </Card.Body>
                </Card>
                
                <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={passGenImg} />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                            Password generator made with Javascript. Hosted on Github.
                        </Card.Text>
                        <a href="https://brysgithub.github.io/password-gen-hw3/"><Button variant="primary">Generate</Button></a>
                        <a href="https://github.com/brysgithub/password-gen-hw3"><Button variant="primary">Github</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={weatherImg} />
                    <Card.Body>
                        <Card.Title>Weather API Dash</Card.Title>
                        <Card.Text>
                            Weather dashboard that makes calls to OpenweatherAPI
                        </Card.Text>
                        <a href="https://brysgithub.github.io/weather-dashboard-hw6/"><Button variant="primary">Forecast</Button></a>
                        <a href="https://github.com/brysgithub/weather-dashboard-hw6"><Button variant="primary">Github</Button></a>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin: '1rem' }}>
                    <Card.Img variant="top" src={portfolioImg} />
                    <Card.Body>
                        <Card.Title>React Portfolio</Card.Title>
                        <Card.Text>
                            Personal portfolio made in react with react-bootstrap. Wait, you're here already?
                        </Card.Text>
                        <a href="https://brysgithub.github.io/react-portfolio/#/"><Button variant="primary">View</Button></a>
                        <a href="https://github.com/brysgithub/react-portfolio"><Button variant="primary">Github</Button></a>
                    </Card.Body>
                </Card>
            </Row>    
        </Container>
    )

}

export default Project