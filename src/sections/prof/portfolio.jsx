import SquareProjectModal from "/src/components/SquareProjectModal";
import TallProjectModal from "/src/components/TallProjectModal";
import TextBlock from "/src/components/TextBlock";

function Portfolio() {
	return (
		<>
			<section id="portfolio" className="scroll-mt-24">
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
							<i>Suruga-ya</i>. Capable of 6000 page scrapes an
							hour, providing speedy retrival and logging of
							price, stock, and availability information for
							products on the site.
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
							played perfectly on consoles as old as the
							PlayStation 1.
						</SquareProjectModal>
						<SquareProjectModal
							link="https://github.com/rydal05/TheYardStats"
							title="YardPodcastStats"
							image=""
						>
							Automatic AI driven transcription of hundreds of
							hours of podcast audio to learn who and what the
							most talked about people and topics are. Utilizes
							OpenAI's Whisper Model to parse episodes into
							transcribed txt files.
						</SquareProjectModal>
					</div>
					<div>
						<SquareProjectModal
							link="https://github.com/Kumo000/CourseKnight"
							title="CourseKnight"
							image=""
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
						>
							An open source JIRA subquivalent designed to
							showcase open source repos on github that have large
							deficits in their issues to pull request ratios.
							Intended to help intermediate devs find projects to
							work on and help projects gain contributors.
						</SquareProjectModal>
						<SquareProjectModal
							link="https://github.com/rydal05/DX9FakePrimary"
							title="DX9FP"
							image=""
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
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;
