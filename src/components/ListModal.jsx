export default function ListModal({ title, text }) {
	return (
		<>
			<div className="">
				<h2>{title}</h2>
				<div className="gap-4 pr-4 overflow-y-auto max-h-[20vh]">
					{text.map((item) => (
						<div
							key={item.name}
							className="flex items-center gap-3"
						>
							<img
								src={item.icon}
								alt={item.name}
								className="w-10 h-10 bg-white rounded-xl flex" 
							/>
							{item.name}
						</div>
					))}
				</div>
			</div>
		</>
	);
}