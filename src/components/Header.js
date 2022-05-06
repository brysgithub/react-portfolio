import { Link } from "react-router-dom"

function Header() {

    // const location = useLocation();

    return(
        <Header>
            <Link to='/'>
                <div>
                    <h1>Bryan Schenck</h1>
                </div>
            </Link>
            <Link>
                <div>
                    <Link to="/projects">Projects</Link>
                </div>
            </Link>
        </Header>
    )

}

export default Header