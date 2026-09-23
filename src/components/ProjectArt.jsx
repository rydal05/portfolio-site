import Icon from "./Icon";

export default function ProjectArt({ kind }) {
	return (
		<div className={`project-art art-${kind}`} aria-hidden="true">
			<span className="art-coordinate">
				{kind === "star"
					? "02 / GAME ENGINE"
					: kind === "scraper"
						? "01 / AUTOMATION"
						: kind === "course"
							? "KnightHacks VIII Hackathon  Entry"
							: kind === "issues"
								? "BloomKnights Hackathon Entry "
								: kind === "substreamer"
									? "Open Source"
									: "Practical Application Study"}
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
				</div>
			) : kind === "star" ? (
				<div className="star-art">
					<div className="orbit orbit-one" />
					<div className="orbit orbit-two" />
					<span className="polar-star">✦</span>
					<span className="star-wordmark">POLAR STAR</span>
				</div>
			) : kind === "course" ? (
				<div className="course-art">
					<span className="course-symbol">♞</span>
					<div>
						<span className="art-product-name">CourseKnight</span>
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
						<s>Jira</s> Freeira
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
				</div>
			) : kind === "portfolio" ? (
				<div className="portfolio-art">
					rd<span>.</span>
				</div>
			) : kind === "substreamer" ? (
				<div className="audio-art">
					<div className="waveform">
						{Array.from({ length: 4 }, (_, index) => (
							<i
								key={index}
								style={{
									height: `${18 + index * 25}%`,
								}}
							/>
						))}
						<i
							style={{
								height: `${18 + 1 * 30}%`,
							}}
						/>
						<i
							style={{
								height: `${18 + 3 * 30}%`,
							}}
						/>
						<i
							style={{
								height: `${18 + 1 * 30}%`,
							}}
						/>

						{Array.from({ length: 4 }, (_, index) => (
							<i
								key={index}
								style={{
									height: `${18 + (3 - index) * 25}%`,
								}}
							/>
						))}
					</div>
					<span className="art-caption">Substreamer</span>
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
