export default function Contact() {
	return (
		<>
			<section id="contact" className="scroll-mt-30 flex justify-between">
				<div>
					<h1>— Extend a hand</h1>
					<ul className="text-3xl text-left">
						<li>
							Email:{" "}
							<a href="mailto:rdalton2405@gmail.com">
								rdalton2405@gmail.com
							</a>
						</li>
						<li>
							Linkedin:{" "}
							<a href="https://www.linkedin.com/in/rdalton05/">
								rdalton05
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h1>or...</h1>
				</div>
{/* animation where the elements extend out from the center "or" text */}
				<div>
					<h1>See what I'm up to —</h1>
					<ul className="text-3xl text-right">
						<li>
							Github:{" "}
							<a href="https://github.com/rydal05">rydal05</a>
						</li>
						<li>
							Bluesky:{" "}
							<a href="https://bsky.app/profile/reddolphin.tech">
								reddolphin.tech
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}
