import { Link } from "react-router-dom"

//TODO: update this to dynamically pull from pages in the pages subdirectory or reference a centralized dictionary for easier less confusing accesses

const navigation = [
    { name: 'Home', href: '' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Skills', href: '/skills' },
]

export function Header() {
    return (
        <>
            <header className="flex items-center justify-between">
                <div>
                    <div className="font-mono text-left m-2">Ryan Dalton</div>
                </div>
                <div className="flex-col"> 
                    {navigation.map((item) => {
                        return (
                            
                            <Link to={item.href} key={item.name}> 
                                <button className="m-4 font-mono gap-4 hover:bg-sky-300">{item.name}</button>
                            </Link>
                        )
                    })}
                </div>
            </header>

        </>
    )
}

export default Header