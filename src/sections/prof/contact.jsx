import { useEffect, useRef, useState } from "react";
import Reveal from "../../components/Reveal";
import Icon from "../../components/Icon";
const email = "rdalton2405@gmail.com";
export default function Contact() {
	const [status, setStatus] = useState("");
	const timeout = useRef(null);
	useEffect(() => () => clearTimeout(timeout.current), []);
	async function copyEmail() {
		clearTimeout(timeout.current);
		try {
			await navigator.clipboard.writeText(email);
			setStatus("Email copied!");
		} catch {
			setStatus(
				"Select the email address to copy it, or click it to write to me.",
			);
		}
		timeout.current = setTimeout(() => setStatus(""), 5000);
	}
	return (
		<section id="contact" className="section contact-section">
			<Reveal>
				<p className="eyebrow">
					<span>05</span> / Extend a hand
				</p>
				<div className="contact-heading">
					<h2>Accessible by email</h2>
					<a
						className="contact-arrow"
						href={`mailto:${email}`}
						aria-label="Send me an email"
					>
						<Icon size={48} />
					</a>
				</div>
				<div className="contact-bottom">
					<div>
						<p>
							New ideas, interesting problems, or just a
							conversation about whatever.
						</p>
						<div className="email-row">
							<a href={`mailto:${email}`}>{email}</a>
							<button
								className="icon-button"
								aria-label="Copy email address"
								onClick={copyEmail}
							>
								<Icon
									name={
										status === "Email copied!"
											? "check"
											: "copy"
									}
									size={17}
								/>
							</button>
						</div>
						<span className="copy-status" role="status">
							{status}
						</span>
					</div>
					<div className="contact-socials">
						<a
							href="https://www.linkedin.com/in/rdalton05/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn <Icon size={15} />
						</a>
						<a
							href="https://github.com/rydal05"
							target="_blank"
							rel="noreferrer"
						>
							GitHub <Icon size={15} />
						</a>
						<a
							href="https://bsky.app/profile/reddolphin.tech"
							target="_blank"
							rel="noreferrer"
						>
							Bluesky <Icon size={15} />
						</a>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
