import { Link } from "react-router-dom";

//TODO: update this to dynamically pull from pages in the pages subdirectory or reference a centralized dictionary for easier less confusing accesses

const navigation = [
	{ name: "Home", href: "" },
	{ name: "About", href: "/about" },
	{ name: "Portfolio", href: "/portfolio" },
	{ name: "Skills", href: "/skills" },
	{ name: "Contact", href: "/contact" },
];

export function Header() {
	return (
		<>
			<header className="sticky top-5 items-center justify-between pointer-events-auto z-50 rounded-full border border-white/24 bg-white/[0.08] transition-all duration-300 hover:bg-white/[0.12] focus-within:bg-white/[0.12] md:block backdrop-blur-[2px] md:focus-within:backdrop-blur-[2px] m-4">
				<div className="flex justify-between">
					<div
						className="font-semibold text-white m-4"
					>
						Ryan Dalton
					</div>
					<div className="m-2">
						{navigation.map((item) => {
							return (
								<Link to={item.href} key={item.name}>
									<button className="rounded-full font-semibold tracking-[0.02em] [text-shadow:0_1px_6px_rgba(0,0,0,0.38)] transition-colors duration-200 hover:[text-shadow:0_1px_8px_rgba(255,255,255,0.34)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-0 px-3 py-2 text-[0.82rem] text-white hover:text-[#1d7cff] hover:bg-white/[0.09]">
										{item.name}
									</button>
								</Link>
							);
						})}
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
