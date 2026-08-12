function TextBlock({ title, children }) {
	return (
		<>
			<div className="flex-1 flex-col items-start p-10 gap-5 bg-[#212121] hover:bg-[#303030">
				<h2 className="p-4">{title}</h2>
				<p className="text-left p-4">{children}</p>
			</div>
		</>
	);
}

export default TextBlock;
