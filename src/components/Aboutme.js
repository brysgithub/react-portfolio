import userAvatar from "../assets/images/spoooonge1-1.png"

function Aboutme() {
    return (
        <Aboutme>
            <section>
                <div>
                    <img src={userAvatar} alt="User Avatar"></img>
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
                </div>
            </section>
        </Aboutme>
    )
}

export default Aboutme