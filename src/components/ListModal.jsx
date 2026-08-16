function ListModal({ title, text }) {
	return (
		<>
			<div className="">
				<h2>{title}</h2>
				<div className="">
					{text.map((item) => (
						<div
							key={item.name}
							className="flex m-2"
						>
							<img
								src={item.icon}
								alt={item.name}
								className="w-10 h-10 bg-white rounded-xl" 
							/>
							{item.name}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default ListModal;
