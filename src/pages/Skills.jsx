import ListModal from "../components/ListModal";

const frameworks = [
	{ name: "React", icon: "../assets/React-Light.svg" },
	{ name: "Flask", icon: "../assets/Flask-Light.svg" },
	{ name: "Svelte", icon: "../assets/Svelte.svg" },
	{ name: "SQLite", icon: "../assets/SQLite.svg" },
	{ name: "BeautifulSoup", icon: "../assets/Python-Light.svg" },
	{ name: "TailWindCSS", icon: "../assets/TailwindCSS-Light.svg" },
];

const AIML = [
	{ name: "Hugging Face", icon: "../assets/hf-logo.svg" },
	{ name: "Ollama", icon: "../assets/ollama.svg" },
	{ name: "Continue Coding Agent", icon: "../assets/continue.png" },
];

const tools = [
	{ name: "Docker", icon: "../assets/Docker.svg" },
	{ name: "Linux", icon: "../assets/Linux-Light.svg" },
	{ name: "Ghidra", icon: "../assets/Ghidra_logo.svg" },
	{ name: "Ida", icon: "../assets/IDAIcon.png" },
	{ name: "Git", icon: "../assets/Git.svg" },
    { name: "GitHub Actions", icon:"../assets/GithubActions-Light.svg"}
];

const languages = [
	{ name: "C", icon: "../assets/C.svg" },
	{ name: "C++", icon: "../assets/CPP.svg" },
	{ name: "Python", icon: "../assets/Python-Light.svg" },
	{ name: "SQL", icon: "../assets/sql-database-generic-svgrepo-com.svg" },
	{ name: "Java", icon: "../assets/Java-Light.svg" },
	{ name: "HTML5", icon: "../assets/HTML.svg" },
	{ name: "CSS", icon: "../assets/CSS.svg" },
	{ name: "JavaScript", icon: "../assets/JavaScript.svg" },
	{ name: "Lua", icon: "../assets/Lua-Light.svg" },
	{ name: "Delphi", icon: "../assets/delphi-svgrepo-com.svg" },
	{ name: "GDScript", icon: "../assets/Godot-Light.svg" },
	{ name: "Rust", icon: "../assets/Rust.svg" },
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
