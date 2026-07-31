import ListModal from "../components/ListModal";

const frameworks = [
	{ name: "React", icon: "" },
	{ name: "Flask", icon: "/about" },
	{ name: "Svelte", icon: "/portfolio" },
	{ name: "SQLite", icon: "/contact" },
	{ name: "BeautifulSoup", icon: "/skills" },
	{ name: "TailWindCSS", icon: "/skills" },
];

const AIML = [
	{ name: "Hugging Face", icon: "/skills" },
	{ name: "Ollama", icon: "/skills" },
	{ name: "Continue Coding Agent", icon: "/skills" },
];

const tools = [
	{ name: "Docker", icon: "/skills" },
	{ name: "Linux", icon: "/skills" },
	{ name: "Ghidra", icon: "/skills" },
	{ name: "Ida", icon: "/skills" },
	{ name: "Git", icon: "/skills" },
];

const languages = [
	{ name: "C", icon: "/skills" },
	{ name: "C++", icon: "/skills" },
	{ name: "Python", icon: "/skills" },
	{ name: "SQL", icon: "/skills" },
	{ name: "Java", icon: "/skills" },
	{ name: "HTML5", icon: "/skills" },
	{ name: "CSS", icon: "/skills" },
	{ name: "JavaScript", icon: "/skills" },
	{ name: "Lua", icon: "/skills" },
	{ name: "Delphi", icon: "/skills" },
	{ name: "GDScript", icon: "/skills" },
	{ name: "Rust", icon: "/skills" },
];

function Skills() {
	return (
		<>
			<div>
				<ListModal title="Frameworks & Libraries" text={frameworks} />
			</div>

			<div>
				<ListModal title="Languages" text={languages} />
			</div>

			<div>
				<ListModal title="AI & Machine Learning" text={AIML} />
			</div>

			<div>
				<ListModal title="Tools" text={tools} />
			</div>
		</>
	);
}

export default Skills;
