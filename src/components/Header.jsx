import { Link } from "react-router-dom"

const navigation = [
    { name: 'Home', href: '' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Skills',href: '/skills'},
]

export function Header() {
    return (
        <>
            <header className="flex list-none p-0 gap-4">
                <div className="font-mono">Ryan Dalton</div>
                <div>
                    <ul className="flex gap-4">
                        <li>Github logo</li>
                        <li>Linkedin logo</li>
                        <li>Tertiary logo</li>
                    </ul>
                </div>
                {navigation.map((item) => {
                    return (
                        <Link to={item.href} key={item.name}>
                            <button className="m-4 font-mono hover:bg-sky-300">{item.name}</button>
                        </Link>
                    )
                })}
            </header>

        </>
    )
}

export default Header