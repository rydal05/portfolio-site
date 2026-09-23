import About from "../sections/prof/about";
import Portfolio from "../sections/prof/portfolio";
import Deployed from "../sections/prof/deployed";
import Education from "../sections/prof/education";
import Skills from "../sections/prof/skills";
import Contact from "../sections/prof/contact";
import Reveal from "../components/Reveal";
export default function Home() {
	return (
		<>
			<About />
			<div
				className="discipline-strip"
				aria-label="Game development, full-stack applications, data and automation, creative exploration"
			>
				<span>Game development</span>
				<i>—</i>
				<span>Full-stack applications</span>
				<i>—</i>
				<span>Data & automation</span>
				<i>—</i>
				<span>Creative exploration</span>
			</div>
			<Portfolio />
			<Reveal>
				<blockquote className="interlude">
					<span aria-hidden="true">“</span>
					<p>
						What everyone wants is but a helping hand. Just enough
						to save them from the abyss.
					</p>
				</blockquote>
			</Reveal>
			<Education />
			<Skills />
			<Deployed />
			<Contact />
			<div className="closing-values">
				<p className="text-left">
					Respect · Honesty · Courage · Rectitude · Loyalty · Honour ·
					Benevolence <br />
					礼 · 誠 · 勇 · 義 · 忠義 · 名誉 · 仁 <br />
				</p>
				<p className="text-right">
					― Yamamoto Tsunetomo, Hagakure: The Book of the Samurai
				</p>
			</div>
		</>
	);
}
