function ListModal({ title, text }) {
    const getIconUrl = (path) => {
        return new URL(path, import.meta.url).href;
    };

	return (
		<>
			<h2>{title}</h2>
            <div className="flex gap-4">
			{text.map((item) => {
				return (
					<div key={item.name} className="flex flex-col items-center">
						<img src={getIconUrl(item.icon)} className="w-10 h-10 bg-white rounded-xl"/>
						{item.name}
					</div>
				);
			})}
            </div>
		</>
	);
}

export default ListModal;
