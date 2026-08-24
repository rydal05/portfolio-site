export default function TextBlock({ title, children }) {
	return (
		<>
			<div className="flex-1 flex flex-col items-start p-10 gap-5 bg-[#212121] hover:bg-[#303030] min-expandable z-auto">
				<div className="min-h-[4rem] flex items-end w-full">
					<h2 className="text-xl font-bold text-left">{title}</h2>
				</div>
				<div className="w-full text-left">{children}</div>
			</div>
		</>
	);
}
