import CycleText from "../components/CycleText";
import TextBlock from "../components/TextBlock";
import TallProjectModal from "../components/SquareProjectModal";
import SquareProjectModal from "../components/SquareProjectModal";

function Home() {
	return (
		<>
			{/* top */}

			<h2>Game, Fullstack, and Data Developer.</h2>
			<h1>Hi, I'm Ryan! 👋🏽</h1>
			<h2>
				<CycleText />
			</h2>
			<h3>Orlando, FL</h3>

			<div>
				<p>View Resume</p>
				<p>github</p>
				<p>linkedin</p>
				<p>facebook</p>
				<p>instagram</p>
			</div>

			<div>
				<p>age</p>
				<p>YOE</p>
				<p>project count</p>
				{/* pull from github */}
				<p>git commits</p>
				{/* pull info from github */}
				{/* link to more indepth on me */}
			</div>

			{/* education */}
			<div></div>

			<div>{/* some boxes with little tidbits of information */}</div>

			{/* portfolio */}

			<div>
				<SquareProjectModal
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
					Homelab hosted proprietary database & wishlist notification
					system for suruga-ya.com and suruga-ya.jp. Capable of
					shoving out 1200 stock checks an hour, and improving,
					SuruScraper turns a site that has no native wishlist
					notification service and gives you the edge on allowing you
					to own and control your own.
				</SquareProjectModal>
				<SquareProjectModal
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
					Homelab hosted proprietary database & wishlist notification
					system for suruga-ya.com and suruga-ya.jp. Capable of
					shoving out 1200 stock checks an hour, and improving,
					SuruScraper turns a site that has no native wishlist
					notification service and gives you the edge on allowing you
					to own and control your own.
				</SquareProjectModal>
				<SquareProjectModal
					link="https://github.com/rydal05/SDL3_POLAR-STAR"
					title="Polar Star Engine"
					image=""
				>
					A 2D Shoot-Em-Up game engine & game created entirely within
					C/C++ with the use of the Simple DirectMedia Layer 3
					library. Purpose built to be compiled to and played
					perfectly on consoles as old as the PlayStation 1.
				</SquareProjectModal>
				<SquareProjectModal
					link="https://github.com/rydal05/TheYardStats"
					title="YardPodcastStats"
					image=""
				>
					A 2D Shoot-Em-Up game engine & game created entirely within
					C/C++ with the use of the Simple DirectMedia Layer 3
					library. Purpose built to be compiled to and played
					perfectly on consoles as old as the PlayStation 1.
				</SquareProjectModal>

				<SquareProjectModal
					link="https://github.com/rydal05/DX9FakePrimary"
					title="DX9FP"
					image=""
				>
					My first experiment with DLL injection, DX9FP is a drop-in
					DLL file that intercepts gpu level instructions to report
					whatever current monitor the window exists on as the primary
					one. Many old games utilize what the Window's OS checks off
					as the main screen to display its window (most usually in
					full screen), however, this is an archaic design that
					ignores how modern day users often have multiple monitors,
					often proprietary CRT monitors, as their choice of screen.
					This intends to fix that.
				</SquareProjectModal>
				<a>link to indepth page</a>
			</div>

			{/* hackathons */}

			<div>
				<SquareProjectModal
					link="https://github.com/Kumo000/CourseKnight"
					title="CourseKnight"
					image=""
				>
					A Discord Guild bot that automatically fecthes canvas
					webcourse updates. New grades, assignments, and teacher
					announcements, all with the help of Google Gemini to provide
					summaries and encouraging words of advice.
				</SquareProjectModal>
				<SquareProjectModal
					link="https://github.com/rydal05/OpenSourceIssueTracker"
					title="Freeira"
					image=""
				>
					An open source JIRA subquivalent designed to showcase open
					source repos on github that have large deficits in their
					issues to pull request ratios. Intended to help intermediate
					devs find projects to work on and help projects gain
					contributors.
				</SquareProjectModal>
			</div>

			{/* skills */}

			<div>some experience shit here</div>

			{/* contact */}

			<div>contact me shit here</div>

			<div>invitation to personal site stuff</div>
		</>
	);
}

export default Home;
