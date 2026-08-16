import bubble from "./bubble";

function TallProjectModal({ link, title, image, skills, children}) {
	return (
		<>
			<div className="flex max-w-xl min-h-2xl flex-col p-10 gap-5 bg-[#212121] hover:bg-[#303030]">
				<h2>
					<a
						className="hover:text-[#1d7cff] text-[#e94f37]"
						href={link}
					>
						{title}
					</a>
				</h2>
				{image && ( 
					<img src={image} className="h-48 w-96 object-contain" />
				)}
				<p>{children}</p>

			</div>
		</>
	);
}

export default TallProjectModal;
