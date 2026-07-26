import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <Link to="/">
                <button>Home</button>
            </Link>

            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/portfolio">
                <button>Projects</button>
            </Link>

            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </>
    )
}

export default Navbar