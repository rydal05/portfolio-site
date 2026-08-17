import CycleText from "../components/CycleText";
import TextBlock from "../components/TextBlock";
import TallProjectModal from "../components/TallProjectModal";
import SquareProjectModal from "../components/SquareProjectModal";
import ListModal from "../components/ListModal";

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

function Home() {
	return (
		<>
			<h1 className="font-helvetica">A pleasure to meet your acquiantance.</h1>
			I will not die until I achieve something. Even though the ideal is
			high, I never give in. Therefore, I never die with regrets.
			<br />
			嗚呼、斑鳩が行く・・・・・・
			望まれることなく、浮き世から捨てられし彼等を動かすもの。
			それは、生きる意志を持つ者の意地に他ならない。
			<hr className="m-20" />
			<div className="flex justify-between">
				<div className="flex-row text-left">
					<h2 className="font-helvetica">Game, Fullstack, and Data Developer.</h2>
					<h1>Hi, I'm Ryan! 👋🏽</h1>
					<h2>
						<CycleText />
					</h2>
					<h3 className="m-4">Orlando, FL</h3>

					<div className="flex gap-8">
						<button className="border rounded-4xl border-[#e94f37] w-20 h-10">
							<span className="text-[#e94f37]">View CV</span>
						</button>
						<div className="flex flex-row gap-4">
							<span>
								<a>
									<svg
										className="border rounded-4xl border-[#e94f37] p-1 w-10 h-10"
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 496 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
									</svg>
								</a>
							</span>
							<span>
								<a>
									<svg
										className="border rounded-4xl border-[#e94f37] p-1 w-10 h-10"
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 448 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
									</svg>
								</a>
							</span>
							<span>
								<a>
									<svg
										className="border rounded-4xl border-[#e94f37] p-1 w-10  h-10"
										stroke="currentColor"
										fill="currentColor"
										strokeWidth="0"
										viewBox="0 0 448 512"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
									</svg>
								</a>
							</span>
						</div>
					</div>
				</div>

				<img src="/REDPANDA.jpg" className="h-60 object-contain " />
			</div>
			<div className="flex justify-between my-20">
				<span className="text-5xl flex">
					21
					<span className="text-sm text-left self-center mx-4">
						years
						<br />
						old
					</span>
				</span>
				<span className="text-5xl flex">
					0
					<span className="text-sm text-left self-center mx-4">
						years
						<br />
						of experience
					</span>
				</span>

				<span className="text-5xl flex">
					25+
					<span className="text-sm text-left self-center mx-4">
						projects
					</span>
				</span>
				<span className="text-5xl flex text-left">
					424
					<span className="text-sm text-left self-center mx-4">
						commits
						<br /> in the past 3 months
					</span>
				</span>
			</div>
			Alas, <i>Ryan</i> is going . . . Undesired, unwanted them, What
			makes them go? It is nothing else than the principle of the man who
			has the reason for being."
			<hr className="m-20" />
			<h1>Education History</h1>
			<div className="flex justify-between">
				<TextBlock
					title="Palm Beach Central High School"
					degree="High School Diploma"
					years="2019-2023"
				>
					<ul>
						<li className="font-helvetica">
							Obtained AICE Diploma and got the Florida Bright
							Futures Scholarship.
						</li>
						<li>
							Moved to Orlando from West Palm Beach at 18 years
							old and started at Valencia College.
						</li>
					</ul>
					<br />
				</TextBlock>

				<TextBlock
					title="Valencia College"
					degree="Associates Degree: Articulated Computer
					Science Degree"
					years="2023-2025"
				>
					<ul>
						<li>
							Obtained an Arituclated A.S in Computer Science
							while working full-time.
						</li>
						<li>
							Transferred to UCF via the DirectConnect program.
						</li>
					</ul>
				</TextBlock>

				<TextBlock
					title="University of Central Florida"
					degree="Bachelor's Degree: Computer Science"
				>
					<ul>
						<li className="">Currently pursuing my bachelor's degree here.</li>
						<li>
							I intend to take up a minor in math and engineering
							in the near future
						</li>
						<li>
							I participate in the Hack@UCF and KnightHacks club,
							and look forward to joining the Satalite club. Avid
							participant of KnightHacks hackathons and other
							events posted by computer clubs.
						</li>
					</ul>
				</TextBlock>

				<TextBlock
					title="The Future..."
					degree="Masters, PHD"
					years="2028-onward"
				>
					In the future I'd love to pursue a masters or even a
					doctorate somewhere in the computer science field. Although
					I'm not 100% where I'll take it, I know my love for
					computers will land me here eventually.
				</TextBlock>
			</div>
			Even if it seems certain that you will lose, retaliate. Neither
			wisdom nor technique has a place in this. A real man does not think
			of victory or defeat. He plunges recklessly towards an irrational
			death. By doing this, you will awaken from your dreams.
			<hr className="m-20" />
			<h1>Portfolio lightning round</h1>
			<div className="flex">
				<div>
					<TallProjectModal
						link="https://github.com/rydal05/SuruScraper"
						title="SuruScraper"
						image="/textures/starfield_bg.png"
						skills={[
							"Python",
							"Docker",
							"BeautifulSoup4",
							"Gunicorn",
							"Flask",
							"Vite",
							"React",
						]}
					>
						A self hosted notifying solution for the website{" "}
						<i>Suruga-ya</i>. Capable of 6000 page scrapes an hour,
						providing speedy retrival and logging of price, stock,
						and availability information for products on the site.
					</TallProjectModal>
				</div>
				<div>
					<SquareProjectModal
						link="https://github.com/rydal05/SDL3_POLAR-STAR"
						title="Polar Star Engine"
						image=""
					>
						A 2D Shoot-Em-Up game engine & game created entirely
						within C/C++ with the use of the Simple DirectMedia
						Layer 3 library. Purpose built to be compiled to and
						played perfectly on consoles as old as the PlayStation
						1.
					</SquareProjectModal>
					<SquareProjectModal
						link="https://github.com/rydal05/TheYardStats"
						title="YardPodcastStats"
						image=""
					>
						Automatic AI driven transcription of hundreds of hours
						of podcast audio to learn who and what the most talked
						about people and topics are. Utilizes OpenAI's Whisper
						Model to parse episodes into transcribed txt files.
					</SquareProjectModal>
				</div>
				<div>
					<SquareProjectModal
						link="https://github.com/Kumo000/CourseKnight"
						title="CourseKnight"
						image=""
					>
						A Discord Guild bot that automatically fecthes canvas
						webcourse updates. New grades, assignments, and teacher
						announcements, all with the help of Google Gemini to
						provide summaries and encouraging words of advice.
					</SquareProjectModal>
					<SquareProjectModal
						link="https://github.com/rydal05/OpenSourceIssueTracker"
						title="Freeira"
						image=""
					>
						An open source JIRA subquivalent designed to showcase
						open source repos on github that have large deficits in
						their issues to pull request ratios. Intended to help
						intermediate devs find projects to work on and help
						projects gain contributors.
					</SquareProjectModal>
					<SquareProjectModal
						link="https://github.com/rydal05/DX9FakePrimary"
						title="DX9FP"
						image=""
					>
						My first experiment with DLL injection, DX9FP is a
						drop-in DLL file that intercepts gpu level instructions
						to report whatever current monitor the window exists on
						as the primary one. Many old games utilize what the
						Window's OS checks off as the main screen to display its
						window (most usually in full screen), however, this is
						an archaic design that ignores how modern day users
						often have multiple monitors, often proprietary CRT
						monitors, as their choice of screen. This intends to fix
						that.
					</SquareProjectModal>
				</div>
			</div>
			Respect, Honesty, Courage, Rectitude, Loyalty, Honour, Benevolence
			<hr className="m-20" />
			<h1>Some of my skillset</h1>
			<div className="flex justify-center gap-20">
				<ListModal title="Frameworks & Libraries" text={frameworks} />

				<ListModal title="Languages" text={languages} />

				<ListModal title="AI & Machine Learning" text={AIML} />

				<ListModal title="Tools" text={tools} />
			</div>
			{/* contact */}
			What everyone wants is but a helping hand. Just enough to save them
			from the abyss.
			<hr className="m-20" />
			<h1>Extend a hand</h1>
			<hr />
			<h1>Come learn about me more personally</h1>
		</>
	);
}

export default Home;
