import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
const education = [
	{
		years: "2019 — 2023",
		title: "Palm Beach Central",
		degree: "High School Diploma",
		text: "An AICE diploma, a Florida Bright Futures scholarship, and the start of a lifelong curiosity for computers.",
	},
	{
		years: "2023 — 2025",
		title: "Valencia College",
		degree: "A.S. · Articulated Computer Science",
		text: "Earned my associate degree while working full-time. Moved from West Palm Beach to Orlando, then transferred through DirectConnect.",
	},
	{
		years: "2025 — PRESENT ",
		title: "University of Central Florida",
		degree: "B.S. · Computer Science, in progress",
		text: "Building a deeper foundation in computer science. Active in KnightHacks, with an interest in math, engineering, and the communities around them.",
		current: true,
	},
	{
		years: "2028 & BEYOND",
		title: "Still curious.",
		degree: "More questions. More possibilities.",
		text: "A master’s, maybe a doctorate. There’s a lot left to learn, and I’m excited to see where that takes me.",
		future: true,
	},
];

const certifications = [
	{
		years: "Expected Dec. 2026",
		title: "Linux+",
		certification: "CompTIA",
		current: true,
		text: "Working knowledge of the Linux operating system to better understand the operating system I love so dearly. System architecture, security hardening, and command-line automation.",
	},
	{
		years: "Expected Mar. 2027",
		title: "Security+",
		certification: "CompTIA",
		future: true,
		text: "Develop secure coding habits, and work in aligned to government standard. Understand common vulnerabilities and open myself up to being more cognizant of how I can develop and consider software from a defensive standpoint.",
	},
	{
		years: "Expected Mar. 2027",
		title: "Network+",
		certification: "CompTIA",
		future: true,
		text: "Building a strong foundation in how data moves across networks and system design. Writing secure code, understanding network protocols, and better understanding how to talk to DevOps teams.",
	},
];

export default function Education() {
	return (
		<section id="education" className="section education-section">
			<Reveal>
				<SectionHeading
					number="2.0"
					label="The journey"
					title="Education"
					accent="Formal studies."
				>
					Each chapter brings a new perspective. Here’s how I got
					here, and a little of where I’m headed.
				</SectionHeading>
			</Reveal>
			<div className="timeline">
				{education.map((item, index) => (
					<Reveal key={item.title} delay={index * 0.07}>
						<article
							className={`timeline-item ${item.current ? "is-current" : ""} ${item.future ? "is-future" : ""}`}
						>
							<span className="timeline-dot" />
							<p className="eyebrow">{item.years}</p>
							<h3>{item.title}</h3>
							<p className="degree">{item.degree}</p>
							<p>{item.text}</p>
							{item.current && (
								<span className="current-label">
									<span className="status-dot" /> Learning,
									building, trying, failing, and trying again.
								</span>
							)}
						</article>
					</Reveal>
				))}
			</div>

			<Reveal>
				<SectionHeading
					number="2.5"
					label="The journey: Director's Cut"
					title="Certifications"
					accent="Self directed tertiary learning."
				>
					Outside of my formal schooling, I maintain and pursue my
					interest in other computer related studies. An opportunity
					funded and supported by the UCF institution.
				</SectionHeading>
			</Reveal>
			<div className="timeline">
				{certifications.map((item, index) => (
					<Reveal key={item.title} delay={index * 0.07}>
						<article
							className={`timeline-item ${item.current ? "is-current" : ""} ${item.future ? "is-future" : ""}`}
						>
							<span className="timeline-dot" />
							<p className="eyebrow">{item.years}</p>
							<h3>{item.title}</h3>
							<p className="degree">{item.certification}</p>
							<p>{item.text}</p>
							{item.current && (
								<span className="current-label">
									<span className="status-dot" />
									Studying, reviewing, and studying some more.
								</span>
							)}
						</article>
					</Reveal>
				))}
			</div>
		</section>
	);
}
