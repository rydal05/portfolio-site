import { useState } from "react";
import { projects } from "../../data/projects";

import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
import ProjectArt from "../../components/ProjectArt";
import Icon from "../../components/Icon";

const categories = [
	"All work",
	"Web",
	"Games & systems",
	"Data & AI",
	"Open Source Contributions",
];
export default function Portfolio() {
	const [category, setCategory] = useState("All work");
	const [expanded, setExpanded] = useState(false);

	const handleToggleExpand = () => {
		if (expanded) {
			const targetSection = document.getElementById("portfolio");
			targetSection?.scrollIntoView({ behavior: "smooth" });
		}
		setExpanded((prev) => !prev);
	};

	const filtered = projects.filter(
		(project) => category === "All work" || project.category === category,
	);
	const visible =
		category === "All work" && !expanded ? filtered.slice(0, 4) : filtered;

	return (
		<section id="portfolio" className="section work-section">
			<Reveal>
				<SectionHeading
					number="1.0"
					label="Selected works"
					title="Projects"
					accent="Tools, hackathon entries, and more."
				>
					A few things I’ve built, broken, and made better. From
					useful everyday tools to worlds of my own.
				</SectionHeading>
			</Reveal>
			<div className="work-toolbar">
				<div
					className="filter-list"
					role="group"
					aria-label="Filter projects"
				>
					{categories.map((item) => (
						<button
							key={item}
							aria-pressed={category === item}
							onClick={() => {
								setCategory(item);
								setExpanded(false);
							}}
						>
							{item}
							{item === "All work" && (
								<span>
									{projects.length
										.toString()
										.padStart(2, "0")}
								</span>
							)}
						</button>
					))}
				</div>
				<span className="work-count" role="status">
					{visible.length} of {filtered.length} projects
				</span>
			</div>
			<div className="project-grid">
				{visible.map((project) => (
					<Reveal key={project.id}>
						<article className="project-card">
							<a
								className="project-art-link"
								href={project.link}
								target="_blank"
								rel="noreferrer"
								aria-label={`View ${project.name} on GitHub`}
							>
								<ProjectArt
									kind={project.visual}
									tag={project.tag}
								/>
								<span className="art-link-icon">
									<Icon />
								</span>
							</a>
							<div className="project-copy">
								<p className="eyebrow project-type">
									{project.type}
								</p>
								<h3>
									<a
										href={project.link}
										target="_blank"
										rel="noreferrer"
									>
										{project.name}
										<Icon size={20} />
									</a>
								</h3>
								<p>{project.summary}</p>
								<div className="project-tags">
									{project.tags.map((tag) => (
										<span key={tag}>{tag}</span>
									))}
								</div>
								<details className="project-details">
									<summary>
										Under the hood <span>+</span>
									</summary>
									<p>{project.stack}</p>
								</details>
							</div>
						</article>
					</Reveal>
				))}
			</div>
			{category === "All work" && (
				<div className="more-work">
					<button
						className="button button-outline"
						onClick={handleToggleExpand}
					>
						{expanded
							? "Show selected projects"
							: "Explore all " + projects.length + " projects"}
						<Icon name={expanded ? "right" : "down"} size={16} />
					</button>
				</div>
			)}
		</section>
	);
}
