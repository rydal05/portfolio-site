import TextBlock from "../components/TextBlock";

function About() {
	return (
		<>
			<h1>About Me</h1>
			<div>
				<TextBlock
					title="Who am I?">
					Hi, I'm Ryan. I am currently pursuing my undergrad degree at the University of Central Florida for Computer Science. I'm currently in my junior year and graduating sometime 2028. I've been programming since sometime between 6th and 7th grade starting out making games on Roblox for me and my friends to play. At some point end of highschool, I branched out and found an interest in C/C++ primarily.
				</TextBlock>
			</div>

			<div>
				<TextBlock
					title="What do I do?">
					Professionally I enjoy software development, more specifically, I enjoy working with C/C++ and Python to create performant solutions to problems I find intruiging. Solving puzzles is the name of the game baby. Personally, though, I do anything and everything correlating to computers. I love using technology to solve certain problems or solving problems that technology already has. I enjoy tinkering with hardware to replace components in a system (Computer, game console, phone, etc) to make repairs or upgrades and overall enhance and extend the lifespan of the tools and toys I use.
				</TextBlock>
			</div>

			<div>
				<TextBlock
					title="What's my stack?">
					I develop almost exclusively on Linux, rotating between Arch, Fedora, and LMDE (Debian) primarily with C/C++, Python, and whatever wildcard langauge I've determined is required to get a certain job done. As far as webdev is concerned, I've worked with the usual HTML+CSS+JS in addition to frameworks like React and Svelte (with Vite). Sometimes I'll switch over to Windows when working on specific projects like things involving .NET or GPU/DLL injection stuff.
				</TextBlock>
			</div>

			<div>
				<TextBlock
					title="What are your dreams? Goals? Aspirations?">
					The dream since middle school has always been to put into the world a game that I'm proud of. It's not something I pull my full attention to always but it's always something I've carried with me and worked on throughout my life since then. Programming and computer shenanigans aside, I'd love to travel the world. Becoming a polyglot is another one of my long term goals.
				</TextBlock>
				<p></p>
			</div>
		</>
	);
}

export default About;
