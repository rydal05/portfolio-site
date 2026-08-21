import bubble from "/src/components/bubble";

export default function SquareProjectModal({ link, title, image, skills, children}) {
	return (
		<>
			<div className="flex-1 max-w-2xl max-h-2xl flex-col p-10 gap-5 bg-[#212121] hover:bg-[#303030]">
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