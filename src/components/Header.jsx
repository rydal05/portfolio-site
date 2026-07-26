import { Link } from "react-router-dom"

export function Header() {
    return (
        <>
            <header>
                <p>Ryan Dalton</p>

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
            </header>

        </>
    )
}

export default Header