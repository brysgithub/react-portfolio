import userAvatar from "../assets/images/avatar.jpg"

import { Container, Figure } from "react-bootstrap"

function Aboutme() {
    return (
            <Container className="avatar-card">
                {/* <div>
                    <Image variant="rounded" src={userAvatar} alt="User Avatar"></Image>
                    <h2>About Me</h2>
                </div>
                <div>
                    <p>
                        biographical data goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur maiores asperiores harum autem, nam mollitia, ab voluptatum officiis ullam est iure tempore. Accusamus ipsam neque unde atque fuga temporibus.
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur maiores asperiores harum autem, nam mollitia, ab voluptatum officiis ullam est iure tempore. Accusamus ipsam neque unde atque fuga temporibus.
                    </p>
                </div> */}

                {/* <Card className="avatar-card">
                    <Card.Img className="avatar-img" variant="top" src={userAvatar} alt="User Avatar"/>
                    <Card.Body>
                        <Card.Text>
                            <p>
                                biographical data goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur maiores asperiores harum autem, nam mollitia, ab voluptatum officiis ullam est iure tempore. Accusamus ipsam neque unde atque fuga temporibus.
                            </p>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur maiores asperiores harum autem, nam mollitia, ab voluptatum officiis ullam est iure tempore. Accusamus ipsam neque unde atque fuga temporibus.
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card> */}

                <Figure className="about-figure">
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="User Avatar"
                        src={userAvatar}
                    />
                    <Figure.Caption>
                            biographical data goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur maiores asperiores harum autem, nam mollitia, ab voluptatum officiis ullam est iure tempore. Accusamus ipsam neque unde atque fuga temporibus.
                        <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur maiores asperiores harum autem, nam mollitia, ab voluptatum officiis ullam est iure tempore. Accusamus ipsam neque unde atque fuga temporibus.
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut ullam omnis ipsa perspiciatis deleniti eaque corporis impedit porro odio numquam nam error autem aliquid, repellat, id doloribus animi quasi?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aut ullam omnis ipsa perspiciatis deleniti eaque corporis impedit porro odio numquam nam error autem aliquid, repellat, id doloribus animi quasi?
                    </Figure.Caption>
                </Figure>
            </Container>
    )
}

export default Aboutme