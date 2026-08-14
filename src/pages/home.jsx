import CycleText from "../components/CycleText";
import TextBlock from "../components/TextBlock";
import TallProjectModal from "../components/TallProjectModal";
import SquareProjectModal from "../components/SquareProjectModal";

function Home() {
	return (
		<>
			<h1 className="m">A pleasure to meet your acquiantance.</h1>

			<hr className="m-20"/>

			<div className="flex justify-between">
				<div className="flex-row text-left">
					<h2>Game, Fullstack, and Data Developer.</h2>
					<h1>Hi, I'm Ryan! 👋🏽</h1>
					<h2>
						<CycleText />
					</h2>
					<h3 className="m-4">Orlando, FL</h3>

					<div className="flex gap-8">
						<button className="border rounded-4xl border-[#e94f37] w-20 h-10">
							<span className="text-[#e94f37]">View CV</span>
						</button>
						<span>github</span>
						<span>linkedin</span>
						<span>facebook</span>
						<span>instagram</span>
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
				{/* <span className="text-5xl flex">
					0
					<span className="text-sm text-left self-center">years<br/>of expeirence</span>
				</span> */}

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
						<br /> in the past year
					</span>
				</span>
			</div>

			<hr className="m-20"/>

			<h1>Education History</h1>

			<div className="flex justify-between">
				<TextBlock
					title="Palm Beach Central High School"
					degree="High School Diploma"
					years="2019-2023"
				>
					Obtained AICE Diploma and got Florida Bright Futures
					Scholarship Moved to Orlando and started at Valencia College
				</TextBlock>

				<TextBlock
					title="Valencia College"
					degree="Associates Degree: Articulated Computer
					Science Degree"
					years="2023-2025"
				>
					Hello my name is ander minugs
				</TextBlock>

				<TextBlock
					title="University of Central Florida"
					degree="Bachelor's Degree: Computer Science"
				>
					hello my name is andergingus
				</TextBlock>

				<TextBlock
					title="The Future..."
					degree="Masters, PHD"
					years="2028-onward"
				>
					hello my name is anderslingus
				</TextBlock>
			</div>

					<hr className="m-20"/>

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
						Homelab hosted proprietary database & wishlist
						notification system for suruga-ya.com and suruga-ya.jp.
						Capable of shoving out 1200 stock checks an hour, and
						improving, SuruScraper turns a site that has no native
						wishlist notification service and gives you the edge on
						allowing you to own and control your own.
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
						A 2D Shoot-Em-Up game engine & game created entirely
						within C/C++ with the use of the Simple DirectMedia
						Layer 3 library. Purpose built to be compiled to and
						played perfectly on consoles as old as the PlayStation
						1.
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

							<hr className="m-20"/>

			

			<h1>Some of my skillset</h1>

			<div>some experience shit here</div>

			{/* contact */}

			<h1>Extend a hand</h1>

			<h1>Come learn about me more personally</h1>
		</>
	);
}

export default Home;
