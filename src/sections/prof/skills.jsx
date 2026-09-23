import ListModal from "../../components/ListModal";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";

const iconModules = import.meta.glob("/src/assets/skill_icons/*.{svg,png}", {
	eager: true,
	import: "default",
});

const icon = (filename) => {
	const match = iconModules[`/src/assets/skill_icons/${filename}`];
	if (!match) console.warn(`Missing icon: ${filename}`);
	return match;
};

const frameworks = [
	{ name: "React", icon: icon("React-Light.svg") },
	{ name: "Flask", icon: icon("Flask-Light.svg") },
	{ name: "Svelte", icon: icon("Svelte.svg") },
	{ name: "SQLite", icon: icon("SQLite.svg") },
	{ name: "BeautifulSoup", icon: icon("Python-Light.svg") },
	{ name: "TailWindCSS", icon: icon("TailwindCSS-Light.svg") },
];

const AIML = [
	{ name: "Hugging Face", icon: icon("hf-logo.svg") },
	{ name: "Ollama", icon: icon("ollama.svg") },
	{ name: "Continue Coding Agent", icon: icon("continue.png") },
];

const tools = [
	{ name: "Docker", icon: icon("Docker.svg") },
	{ name: "Linux", icon: icon("Linux-Light.svg") },
	{ name: "Ghidra", icon: icon("Ghidra_logo.svg") },
	{ name: "Ida", icon: icon("IDAIcon.png") },
	{ name: "Git", icon: icon("Git.svg") },
	{ name: "GitHub Actions", icon: icon("GithubActions-Light.svg") },
];

const languages = [
	{ name: "C", icon: icon("C.svg") },
	{ name: "C++", icon: icon("CPP.svg") },
	{ name: "Python", icon: icon("Python-Light.svg") },
	{ name: "SQL", icon: icon("sql-database-generic-svgrepo-com.svg") },
	{ name: "Java", icon: icon("Java-Light.svg") },
	{ name: "HTML5", icon: icon("HTML.svg") },
	{ name: "CSS", icon: icon("CSS.svg") },
	{ name: "JavaScript", icon: icon("JavaScript.svg") },
	{ name: "Lua", icon: icon("Lua-Light.svg") },
	{ name: "Delphi", icon: icon("delphi-svgrepo-com.svg") },
	{ name: "GDScript", icon: icon("Godot-Light.svg") },
	{ name: "Rust", icon: icon("Rust.svg") },
];

export default function Skills() {
	const groups = [
		["Languages", languages],
		["Frameworks & libraries", frameworks],
		["Tools & infrastructure", tools],
		["AI & machine learning", AIML],
	];
	return (
		<section id="skills" className="section skills-section">
			<Reveal>
				<SectionHeading
					number="3.0"
					label="The toolkit"
					title="Skills"
					accent="A quick overview."
				>
					From low-level systems to the web, these are the
					technologies I reach for, experiment with, and keep
					learning.
				</SectionHeading>
			</Reveal>
			<div className="skills-grid">
				{groups.map(([title, items], index) => (
					<Reveal key={title} delay={index * 0.06}>
						<ListModal title={title} text={items} />
					</Reveal>
				))}
			</div>
		</section>
	);
}
