export default function ListModal({ title, text }) {
	return (
		<div className="skill-group">
			<h3>
				{title}
				<span>{text.length.toString().padStart(2, "0")}</span>
			</h3>
			<ul className="skill-list">
				{text.map((item) => (
					<li key={item.name}>
						<img
							src={item.icon}
							alt=""
							loading="lazy"
							width="24"
							height="24"
						/>
						<span>{item.name}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
