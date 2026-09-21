import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const navigation = [
	["home", "Home"],
	["portfolio", "Work"],
	["education", "Education"],
	["skills", "Skills"],
	["contact", "Contact"],
];
export default function Header() {
	const [active, setActive] = useState("home");
	const [open, setOpen] = useState(false);
	const menuButton = useRef(null);
	useEffect(() => {
		let frame;
		const updateActive = () => {
			const cutoff = Math.min(window.innerHeight * 0.35, 240);
			const current = [...navigation].reverse().find(([id]) => {
				const section = document.getElementById(id);
				return section && section.getBoundingClientRect().top <= cutoff;
			});
			setActive(current?.[0] || "home");
		};
		const scheduleUpdate = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(updateActive);
		};
		updateActive();
		window.addEventListener("scroll", scheduleUpdate, { passive: true });
		window.addEventListener("resize", scheduleUpdate);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", scheduleUpdate);
			window.removeEventListener("resize", scheduleUpdate);
		};
	}, []);
	return (
		<header
			className="site-header"
			onKeyDown={(event) => {
				if (event.key === "Escape") {
					setOpen(false);
					menuButton.current?.focus();
				}
			}}
		>
			<a
				className="wordmark"
				href="/#home"
				aria-label="Ryan Dalton, home"
				onClick={() => setOpen(false)}
			>
				<span className="brand-mark">
					rd<span>.</span>
				</span>
				<span>Ryan Dalton</span>
			</a>
			<button
				ref={menuButton}
				className="menu-toggle icon-button"
				aria-label={open ? "Close navigation" : "Open navigation"}
				aria-expanded={open}
				aria-controls="main-navigation"
				onClick={() => setOpen(!open)}
			>
				<Icon name={open ? "close" : "menu"} />
			</button>
			<nav
				id="main-navigation"
				className={open ? "navigation is-open" : "navigation"}
				aria-label="Main navigation"
			>
				{navigation.map(([id, label]) => (
					<a
						key={id}
						className={active === id ? "active" : ""}
						href={`/#${id}`}
						aria-current={active === id ? "location" : undefined}
						onClick={() => setOpen(false)}
					>
						{label}
						{id === "contact" && <Icon size={13} />}
					</a>
				))}
			</nav>
		</header>
	);
}
