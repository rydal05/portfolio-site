import ListModal from "../components/ListModal";

// Eagerly import every icon in the assets folder as a URL string
const iconModules = import.meta.glob("../assets/*.{svg,png}", {
    eager: true,
    import: "default",
});

// Helper to grab the resolved URL by original filename
const icon = (filename) => {
    const match = iconModules[`../assets/${filename}`];
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
