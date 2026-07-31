import ListModal from "../components/ListModal";

const frameworks = [
	{ name: "React", icon: "../assets/icons/React-Light.svg" },
	{ name: "Flask", icon: "../assets/icons/Flask-Light.svg" },
	{ name: "Svelte", icon: "../assets/icons/Svelte.svg" },
	{ name: "SQLite", icon: "../assets/icons/SQLite.svg" },
	{ name: "BeautifulSoup", icon: "../assets/icons/Python-Light.svg" },
	{ name: "TailWindCSS", icon: "../assets/icons/TailwindCSS-Light.svg" },
];

const AIML = [
	{ name: "Hugging Face", icon: "../assets/icons/hf-logo.svg" },
	{ name: "Ollama", icon: "../assets/icons/ollama.svg" },
	{ name: "Continue Coding Agent", icon: "../assets/icons/continue.png" },
];

const tools = [
	{ name: "Docker", icon: "../assets/icons/Docker.svg" },
	{ name: "Linux", icon: "../assets/icons/Linux-Light.svg" },
	{ name: "Ghidra", icon: "../assets/icons/Ghidra_logo.svg" },
	{ name: "Ida", icon: "../assets/icons/IDAIcon.png" },
	{ name: "Git", icon: "../assets/icons/Git.svg" },
    { name: "GitHub Actions", icon:"../assets/icons/GithubActions-Light.svg"}
];

const languages = [
	{ name: "C", icon: "../assets/icons/C.svg" },
	{ name: "C++", icon: "../assets/icons/CPP.svg" },
	{ name: "Python", icon: "../assets/icons/Python-Light.svg" },
	{ name: "SQL", icon: "../assets/icons/sql-database-generic-svgrepo-com.svg" },
	{ name: "Java", icon: "../assets/icons/Java-Light.svg" },
	{ name: "HTML5", icon: "../assets/icons/HTML.svg" },
	{ name: "CSS", icon: "../assets/icons/CSS.svg" },
	{ name: "JavaScript", icon: "../assets/icons/JavaScript.svg" },
	{ name: "Lua", icon: "../assets/icons/Lua-Light.svg" },
	{ name: "Delphi", icon: "../assets/icons/delphi-svgrepo-com.svg" },
	{ name: "GDScript", icon: "../assets/icons/Godot-Light.svg" },
	{ name: "Rust", icon: "../assets/icons/Rust.svg" },
];

function Skills() {
	return (
		<>
        <h1>Skills</h1>
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
