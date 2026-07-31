import ListModal from "../components/ListModal";

const frameworks = [
	{ name: "React", icon: "/public/React-Light.svg" },
	{ name: "Flask", icon: "/public/Flask-Light.svg" },
	{ name: "Svelte", icon: "/public/Svelte.svg" },
	{ name: "SQLite", icon: "/public/SQLite.svg" },
	{ name: "BeautifulSoup", icon: "/public/Python-Light.svg" },
	{ name: "TailWindCSS", icon: "/public/TailwindCSS-Light.svg" },
];

const AIML = [
	{ name: "Hugging Face", icon: "/public/hf-logo.svg" },
	{ name: "Ollama", icon: "/public/ollama.svg" },
	{ name: "Continue Coding Agent", icon: "/public/continue.png" },
];

const tools = [
	{ name: "Docker", icon: "/public/Docker.svg" },
	{ name: "Linux", icon: "/public/Linux-Light.svg" },
	{ name: "Ghidra", icon: "/public/Ghidra_logo.svg" },
	{ name: "Ida", icon: "/public/IDAIcon.png" },
	{ name: "Git", icon: "/public/Git.svg" },
    { name: "GitHub Actions", icon:"/public/GithubActions-Light.svg"}
];

const languages = [
	{ name: "C", icon: "/public/C.svg" },
	{ name: "C++", icon: "/public/CPP.svg" },
	{ name: "Python", icon: "/public/Python-Light.svg" },
	{ name: "SQL", icon: "/public/sql-database-generic-svgrepo-com.svg" },
	{ name: "Java", icon: "/public/Java-Light.svg" },
	{ name: "HTML5", icon: "/public/HTML.svg" },
	{ name: "CSS", icon: "/public/CSS.svg" },
	{ name: "JavaScript", icon: "/public/JavaScript.svg" },
	{ name: "Lua", icon: "/public/Lua-Light.svg" },
	{ name: "Delphi", icon: "/public/delphi-svgrepo-com.svg" },
	{ name: "GDScript", icon: "/public/Godot-Light.svg" },
	{ name: "Rust", icon: "/public/Rust.svg" },
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
