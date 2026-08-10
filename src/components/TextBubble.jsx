function TextBubble({ title, text }) {
	return (
		<>
			<div className="items-center justify-between pointer-events-auto relative z-50 rounded-xl border border-white/24 bg-white/[0.08] transition-all duration-300 hover:bg-white/[0.12] focus-within:bg-white/[0.12] md:block md:hover:backdrop-blur-[2px] md:focus-within:backdrop-blur-[2px] m-4">
				<h2 className="p-4">{title}</h2>
				<p className="text-left p-4">{text}</p>
			</div>
		</>
	);
}

export default TextBubble;
