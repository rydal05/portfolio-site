import InfiniteVideoCarousel from "../../components/InfiniteVideoCarousel";
import SectionHeading from "../../components/SectionHeading";
import Reveal from "../../components/Reveal";
export default function Deployed() {
	return (
		<section id="freelance" className="section freelance-section">
			<Reveal>
				<SectionHeading
					number="4.0"
					label="Beyond the code"
					title="Other"
					accent="3D Animation & Set Design."
				>
					3D animation and stage programming. Creative work that found
					its way to millions of screens.
				</SectionHeading>
			</Reveal>
			<Reveal>
				<InfiniteVideoCarousel />
			</Reveal>
			<div className="freelance-bottom">
				<p>
					Contributed animation and programming to work reaching
					approximately <strong>75 million YouTube views</strong>,{" "}
					<strong>50 million TikTok views</strong>, and{" "}
					<strong>5 million interactions</strong>. Built with
					reusability and extensibility in mind.
				</p>
				<a href="mailto:devjcmedia@gmail.com">
					Project references <span>↗</span>
				</a>
			</div>
		</section>
	);
}
