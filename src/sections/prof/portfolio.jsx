import SquareProjectModal from "/src/components/SquareProjectModal";
import TallProjectModal from "/src/components/TallProjectModal";
import TextBlock from "/src/components/TextBlock";

export default function Portfolio() {
	return (
		<>
			<section id="portfolio" className="scroll-mt-30">
				<h1>— Collected Portfolio Works —</h1>
				<div className="flex flex-col justify-between">
					<div className="flex flex-row justify-between">
						<SquareProjectModal
							link="https://github.com/rydal05/SuruScraper"
							title="SuruScraper 駿—自動収集"
							image=""
							languages={[
								"Python",
								"SQL",
							]}
							frameworks={[
								"React",
							]}
							tools={[
								"Docker", "Vite", "Flask", "Gunicorn", "Git", "Github Actions"
							]}
							libraries={[
								"BeautifulSoup4",
							]}
						>
							A self hosted notifying solution for the website{" "}
							<i>Suruga-ya</i>. Capable of 6000 page scrapes an
							hour, providing speedy retrival and logging of
							price, stock, and availability information for
							products on the site.
						</SquareProjectModal>
						<SquareProjectModal
							link="https://github.com/rydal05/SDL3_POLAR-STAR"
							title="Polar Star Engine"
							image=""
							languages={[
								"C", "C++"
							]}
							frameworks={[

							]}
							tools={[
								"CMakeLists"
							]}
							libraries={[
								"Simple DirectMedia Layer 3 (SDL3)",
							]}
						>
							A 2D Shoot-Em-Up game engine & game created entirely
							within C/C++ with the use of the Simple DirectMedia
							Layer 3 library. Purpose built to be compiled to and
							played perfectly on consoles as old as the
							PlayStation 1.
						</SquareProjectModal>
						
					</div>
					<div className="flex flex-row justify-between">
						<SquareProjectModal
							link="https://github.com/Kumo000/CourseKnight"
							title="CourseKnight"
							image=""
							languages={[
								"TypeScript", "JavaScript", "CSS", "HTML"
							]}
							frameworks={[
								"React",
							]}
							tools={[
								"Nixpacks", "ViteJS", "Coolify", "Cloudflare Tunnels", "NodeJS", "npm"
							]}
							libraries={[
								"TailWindCSS",
							]}
						>
							A Discord Guild bot that automatically fetches
							canvas webcourse updates. New grades, assignments,
							and teacher announcements, all with the help of
							Google Gemini to provide summaries and encouraging
							words of advice.
						</SquareProjectModal>
						<SquareProjectModal
							link="https://github.com/rydal05/OpenSourceIssueTracker"
							title="Freeira"
							image=""
							languages={[
								"TypeScript", "JavaScript", "CSS", "HTML"
							]}
							frameworks={[
								"React",
							]}
							tools={[
								"Nixpacks", "ViteJS", "Coolify", "Cloudflare Tunnels", "NodeJS", "npm"
							]}
							libraries={[
								"TailWindCSS",
							]}
						>
							An open source JIRA subquivalent designed to
							showcase open source repos on github that have large
							deficits in their issues to pull request ratios.
							Intended to help intermediate devs find projects to
							work on and help projects gain contributors.
						</SquareProjectModal>
					</div>
					<div className="flex flex-row justify-between">
						<SquareProjectModal
							link="https://github.com/rydal05/DX9FakePrimary"
							title="DX9FP"
							image=""
							languages={[
								"C", "C++"
							]}
							frameworks={[

							]}
							tools={[
								"Visual Studio 2026"
							]}
							libraries={[
								"MinHook"
							]}
						>
							My first experiment with DLL injection, DX9FP is a
							drop-in DLL file that intercepts gpu level
							instructions to report whatever current monitor the
							window exists on as the primary one. Many old games
							utilize what the Window's OS checks off as the main
							screen to display its window (most usually in full
							screen), however, this is an archaic design that
							ignores how modern day users often have multiple
							monitors, often proprietary CRT monitors, as their
							choice of screen. This intends to fix that.
						</SquareProjectModal>
						<SquareProjectModal
							link="https://github.com/rydal05/portfolio-site"
							title="Portfolio Site"
							image=""
							languages={[
								"TypeScript", "JavaScript", "CSS", "HTML"
							]}
							frameworks={[
								"React",
							]}
							tools={[
								"Nixpacks", "ViteJS", "Coolify", "Cloudflare Tunnels", "NodeJS", "npm"
							]}
							libraries={[
								"TailWindCSS",
							]}
						>
							This very site! I'm hosting it using my homelab in which I use Coolify to manage all of my services, with deployment handled automatically via an actions runner that builds the site via Nixpacks whenever I merge changes from the minor branch into main. I have a healthcheck that runs periodically to ensure I'm aware of downtime
						</SquareProjectModal>
					</div>
					<div className="flex flex-row justify-between">
						<SquareProjectModal
							link="https://github.com/rydal05/TheYardStats"
							title="YardPodcastStats"
							image=""
							languages={[
								"Python"
							]}
							frameworks={[

							]}
							tools={[
								"OpenAI's Whisper"
							]}
							libraries={[
								"WhisperModel", "NumPy",
							]}
						>
							Automatic AI driven transcription of hundreds of
							hours of podcast audio to learn who and what the
							most talked about people and topics are. Utilizes
							OpenAI's Whisper Model to parse episodes into
							transcribed txt files.
						</SquareProjectModal>
					</div>
				</div>











			</section>
		</>
	);
}
