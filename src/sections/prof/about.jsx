import heroImage from "../../assets/REDPANDA.jpg";
import CycleText from "../../components/CycleText";
import Icon from "../../components/Icon";
import Reveal from "../../components/Reveal";
export default function About() {
	return (
		<section id="home" className="hero">
			<div className="hero-topline">
				<p className="eyebrow">
					A personal collection of work & curiosity
				</p>
				<span className="location">
					<Icon name="pin" size={13} /> Orlando, Florida
				</span>
			</div>
			<div className="hero-grid">
				<Reveal className="hero-copy">
					<p className="greeting">
						<span /> Pleased to make your acquaintance.
					</p>
					<h1>
						Hi, I’m <em>Ryan.</em>
						<span className="hero-asterisk" aria-hidden="true">
							🐬
						</span>
					</h1>
					<div className="hero-role">
						<CycleText />
					</div>
					<p className="hero-description">
						I've been obsessed with computers for as long as I could
						remember.
						<br className="desktop-break" /> I build games,
						full-stack applications, and tools
						<br className="desktop-break" /> that turn curiosity
						into something useful.
					</p>
					<div className="hero-actions">
						<a className="button button-primary" href="#portfolio">
							Explore my work <Icon name="down" size={17} />
						</a>
						<a
							className="button button-quiet"
							href="https://reddolphin.tech/files/Ryan_Dalton_Resume.pdf?"
						>
							View résumé <Icon size={16} />
						</a>
					</div>
					<div className="hero-socials">
						<span>Find me elsewhere</span>
						<a
							href="https://github.com/rydal05"
							target="_blank"
							rel="noreferrer"
						>
							GitHub <Icon size={12} />
						</a>
						<a
							href="https://www.linkedin.com/in/rdalton05/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn <Icon size={12} />
						</a>
						<a
							href="https://www.instagram.com/okay.ryn/"
							target="_blank"
							rel="noreferrer"
						>
							Instagram <Icon size={12} />
						</a>
					</div>
				</Reveal>
				<Reveal className="hero-art" delay={0.12}>
					<div className="photo-orbit" aria-hidden="true" />
					<figure className="panda-portrait">
						<img
							src={heroImage}
							alt="A red panda nestled among green leaves"
							fetchPriority="high"
						/>
						<figcaption>
							<span>AILURIDAE</span>
							<span>
								The Red Panda.
								<br />
								My favorite animal.
							</span>
						</figcaption>
					</figure>
				</Reveal>
			</div>
			<Reveal className="hero-bottom">
				<div className="hero-stat">
					<strong>
						25<span>+</span>
					</strong>
					<span>
						Projects built
						<br />& ideas explored
					</span>
				</div>
				<div className="hero-stat">
					<strong>
						600<span>+</span>
					</strong>
					<span>
						Commits in a<br />
						three-month stretch
					</span>
				</div>
				<div className="hero-stat">
					<strong>
						21<span></span>
					</strong>
					<span>
						years
						<br />
						old
					</span>
				</div>
				<div className="hero-note">
					<span className="status-dot" />
					<span>
						Currently studying computer science
						<br />
						<strong>University of Central Florida</strong>
					</span>
				</div>
				<a
					className="scroll-cue"
					href="#portfolio"
					aria-label="Scroll to selected work"
				>
					<Icon name="down" size={20} />
				</a>
			</Reveal>
		</section>
	);
}
