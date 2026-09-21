export default function ProjectArt({ kind }) {
	return (
		<div className={`project-art art-${kind}`} aria-hidden="true">
			<span className="art-coordinate">
				{kind === "star"
					? "02 / GAME ENGINE"
					: kind === "scraper"
						? "01 / AUTOMATION"
						: "DESIGN STUDY"}
			</span>
			{kind === "scraper" ? (
				<div className="scraper-art">
					<div className="art-kanji">駿</div>
					<div className="scraper-flow">
						<span>SURUGA-YA</span>
						<i />
						<span className="flow-active">
							SCRAPE <b>↗</b>
						</span>
						<i />
						<span>NOTIFY</span>
					</div>
					<span className="art-caption">
						A watchful eye. Around the clock.
					</span>
				</div>
			) : kind === "star" ? (
				<div className="star-art">
					<div className="orbit orbit-one" />
					<div className="orbit orbit-two" />
					<span className="polar-star">✦</span>
					<span className="star-wordmark">POLAR STAR</span>
					<span className="art-caption">
						AN ENGINE FOR LITTLE WORLDS
					</span>
				</div>
			) : kind === "course" ? (
				<div className="course-art">
					<span className="course-symbol">♞</span>
					<div>
						<span className="art-product-name">CourseKnight</span>
						<span className="art-caption">
							YOUR COURSES. IN THE LOOP.
						</span>
					</div>
					<div className="notification-lines">
						<i />
						<i />
						<i />
					</div>
				</div>
			) : kind === "issues" ? (
				<div className="issues-art">
					<span className="art-product-name">
						Open source
						<br />
						<em>makes the world go round.</em>
					</span>
					<div className="issue-chips">
						<span>
							<i /> help wanted
						</span>
						<span>↗ good first issue</span>
					</div>
				</div>
			) : kind === "system" ? (
				<div className="system-art">
					<div className="monitor">
						<span>
							DX9<span className="coral">FP</span>
						</span>
					</div>
					<span className="art-caption">
						THE RIGHT SCREEN. EVERY TIME.
					</span>
				</div>
			) : kind === "portfolio" ? (
				<div className="portfolio-art">
					rd<span>.</span>
					<span className="art-caption">
						PERPETUALLY UNDER CONSTRUCTION
					</span>
				</div>
			) : (
				<div className="audio-art">
					<div className="waveform">
						{Array.from({ length: 32 }, (_, index) => (
							<i
								key={index}
								style={{
									height: `${18 + ((index * 37) % 65)}%`,
								}}
							/>
						))}
					</div>
					<span className="art-caption">
						THE YARD / FROM AUDIO TO INSIGHT
					</span>
				</div>
			)}
			<span className="art-corner">+</span>
		</div>
	);
}
