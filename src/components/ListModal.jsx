function ListModal({ title, text }) {
	return (
		<>
			<h2>{title}</h2>
			{navigation.map((item) => {
				return (
					<p>
						<img src={item.icon}></img>
						{item.name}
					</p>
				);
			})}
		</>
	);
}

export default ListModal;
