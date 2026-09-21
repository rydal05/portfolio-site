export default function Icon({ name = "arrow", size = 20, ...props }) {
	const paths = {
		arrow: <path d="M5 19 19 5M5 5h14v14" />,
		right: <path d="M4 12h16m-6-6 6 6-6 6" />,
		down: <path d="M12 4v16m-6-6 6 6 6-6" />,
		mail: (
			<>
				<rect x="3" y="5" width="18" height="14" rx="3" />
				<path d="m3 7 9 6 9-6" />
			</>
		),
		pin: (
			<>
				<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
				<circle cx="12" cy="10" r="2" />
			</>
		),
		code: (
			<>
				<path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />
			</>
		),
		menu: <path d="M4 7h16M4 12h16M4 17h16" />,
		close: <path d="m6 6 12 12M6 18 18 6" />,
		copy: (
			<>
				<rect x="8" y="8" width="12" height="12" rx="2" />
				<path d="M16 8V4H4v12h4" />
			</>
		),
		check: <path d="m5 12 4 4L19 6" />,
		play: <path d="m9 5 11 7-11 7Z" />,
	};
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			{paths[name] || paths.arrow}
		</svg>
	);
}
