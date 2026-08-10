import ProjectModal from "../components/ProjectModal";
import TextBlock from "../components/TextBlock";

function Portfolio() {
	return (
		<>
			<h1>Portfolio</h1>
			<p>
				My completed and "proud" works are all listed publically on
				GitHub page. However, you can find absolutely anything and
				everything I'm working on in my{" "}
				<a
					href="https://git.reddolphin.tech/"
					className="hover:text-[#1d7cff] text-[#e94f37]"
				>
					Forgejo git instance
				</a>
				. This serves as both mirrors to my GitHub but also the source
				of my GitHub repos for which are mirrored over there. The reason
				being I wanted my own locally accessible Git server for when my
				wifi goes offline or whenever GitHub goes down.
			</p>
			<br />
			<hr />
			<br />

			<TextBlock
				title="Previous Programming Work"
				text="Below you'll find some modals which highlight, detail, and
				concisely put together projects I've worked on in the past. For
				all intents and purposes, these are complete as they finish
				out the goal they were initially intended to pursue, although I
				may make updates here and there where necessary."
			/>

			<ProjectModal
				link="https://github.com/rydal05/SuruScraper"
				title="SuruScraper"
				image="/textures/starfield_bg.png"
				text="Homelab hosted proprietary database & wishlist notification system for suruga-ya.com and suruga-ya.jp. Capable of shoving out 1200 stock checks an hour, and improving, SuruScraper turns a site that has no native wishlist notification service and gives you the edge on allowing you to own and control your own."
				skills={[
					"Python",
					"Docker",
					"BeautifulSoup4",
					"Gunicorn",
					"Flask",
					"Vite",
					"React",
				]}
			/>
			<ProjectModal
				link="https://github.com/rydal05/DX9FakePrimary"
				title="DX9FP"
				image=""
				text="My first experiment with DLL injection, DX9FP is a drop-in DLL file that intercepts gpu level instructions to report whatever current monitor the window exists on as the primary one. Many old games utilize what the Window's OS checks off as the main screen to display its window (most usually in full screen), however, this is an archaic design that ignores how modern day users often have multiple monitors, often proprietary CRT monitors, as their choice of screen. This intends to fix that."
			/>

			<br />
			<hr />
			<br />

			<TextBlock
				title="Current Projects"
				text="Much like the above category, below you'll find modals showing
				some projects I'm currnetly working on, in as much detail as I'm
				allowed to offer."
			/>

			<ProjectModal
				link="https://github.com/rydal05/SDL3_POLAR-STAR"
				title="Polar Star Engine"
				image=""
				text="A 2D Shoot-Em-Up game engine & game created entirely within C/C++ with the use of the Simple DirectMedia Layer 3 library. Purpose built to be compiled to and played perfectly on consoles as old as the PlayStation 1."
			/>
			<ProjectModal
				link="https://github.com/rydal05/ohmyzsh-plugin-manager"
				title="OMZ Plugin Manager"
				image=""
				text="A plugin manager for OhMyZsh written in Rust. Purpose built for quick and easy enabling, disabling, insallation, and deletion of plugins for the Zsh shell config tool. I found the builtin plugin manager to be clunky and odd to work with, so I'm writing my own. Some features included that win it out over the builtin is installation of 3rd party omz plugins and quicker configuration without having to meddle with extra files."
			/>
			<ProjectModal
				link="https://github.com/rydal05/TheYardStats"
				title="YardPodcastStats"
				image=""
				text="A 2D Shoot-Em-Up game engine & game created entirely within C/C++ with the use of the Simple DirectMedia Layer 3 library. Purpose built to be compiled to and played perfectly on consoles as old as the PlayStation 1."
			/>

			<br />
			<hr />
			<br />

			<TextBlock
				title="Hackathons"
				text="Here you'll see some projects I collaborated with others on for
				hackathons. I've attended 2 hackathons thus far, my first being Knight Hacks VIII in October of 2025."
			/>

			<ProjectModal
				link="https://github.com/Kumo000/CourseKnight"
				title="CourseKnight"
				image=""
				text="A Discord Guild bot that automatically fecthes canvas webcourse updates. New grades, assignments, and teacher announcements, all with the help of Google Gemini to provide summaries and encouraging words of advice.
			"
			/>
			<ProjectModal
				link="https://github.com/rydal05/OpenSourceIssueTracker"
				title="Freeira"
				image=""
				text="An open source JIRA subquivalent designed to showcase open source repos on github that have large deficits in their issues to pull request ratios. Intended to help intermediate devs find projects to work on and help projects gain contributors.
			"
			/>

			<br />
			<hr />
			<br />

			<TextBlock
				title="Homelabbing & Self Hosted"
				text="As stated earlier, I mostly host and utilize my own
				pseudo-private Git instance which I service through the web
				using Cloudflare, Coolify, Forgejo, and an old computer my
				youngest brother had lying around. On this homelab, I run about
				10 services concurrently including but not limited to: music &
				podcast streaming, PDF/book hosting, PDF manipulation,
				SuruScraper, jellyfin, some media tracker aggregators, and my
				very own VPN."
			/>
		</>
	);
}

export default Portfolio;
