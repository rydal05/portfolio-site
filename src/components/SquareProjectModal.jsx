import bubble from "/src/components/bubble";

export default function SquareProjectModal({ link, title, image, languages, frameworks, tools, libraries, children }) {
	return (
		<>
			<div className="flex-1 max-w-2xl max-h-2xl flex-col p-10 gap-5 bg-[#212121] hover:bg-[#303030] min-expandable">
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
				<p className="text-left">&emsp;{children}</p>
				<ul className="text-left pt-4" >
					{languages && languages.length > 0 && 
					<li>
						Languages: {languages.join(", ")}
					</li>
					}
					{frameworks && frameworks.length > 0 && 
					<li>
						Frameworks: {frameworks.join(", ")}
					</li>
					}
					{libraries && libraries.length > 0 &&
					<li>
						Libraries: {libraries.join(", ")}
					</li>
					}

					{tools && tools.length > 0 && 
					<li>
						Tools: {tools.join(", ")}
					</li>
					}
				</ul>
			</div>
		</>
	);
}