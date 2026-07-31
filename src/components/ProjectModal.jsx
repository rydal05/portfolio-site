function ProjectModal({ link, title, image, text }) {
	return (
		<>
			<div class="flex-1 flex-col items-start p-10 gap-5 bg-[#212121] hover:bg-[#303030]">
				<h2>
					<a class="hover:text-[#1d7cff] text-[#e94f37]" href={link}>
						{title}
					</a>
				</h2>
				<img src={image}></img>
				<p>{text}</p>
			</div>
		</>
	);
}

export default ProjectModal;
