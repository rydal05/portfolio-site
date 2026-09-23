import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
const videos = [
	"ftU5GaDe4X0",
	"IYdfunVUUug",
	"9WNEySmUK00",
	"hsUAc1BIiug",
	"2ZWfzcMz7dM",
	"Jbdj5qtpveo",
	"wYgHix1xO4M",
	"MvX_Kal5daQ",
	"x5SMS1vc7ao",
];
export default function InfiniteVideoCarousel() {
	const [active, setActive] = useState<string | null>(null);
	const [position, setPosition] = useState(0);
	const dialog = useRef<HTMLDialogElement>(null);
	const returnFocus = useRef<HTMLButtonElement | null>(null);
	const rail = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!active) return;
		const element = dialog.current;
		const previousOverflow = document.body.style.overflow;
		element?.showModal();
		document.body.style.overflow = "hidden";
		return () => {
			element?.close();
			document.body.style.overflow = previousOverflow;
			returnFocus.current?.focus();
		};
	}, [active]);
	function move(direction: number) {
		const element = rail.current;
		if (!element) return;
		const card = element.querySelector("button");
		const distance = (card?.getBoundingClientRect().width || 300) + 20;
		element.scrollBy({
			left: direction * distance,
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
				.matches
				? "instant"
				: "smooth",
		});
	}
	return (
		<div className="video-showcase">
			<div
				className="video-rail"
				ref={rail}
				onScroll={(event) => {
					const element = event.currentTarget;
					const max = element.scrollWidth - element.clientWidth;
					setPosition(max > 0 ? element.scrollLeft / max : 0);
				}}
			>
				{videos.map((id, index) => (
					<button
						className="video-card"
						key={id}
						aria-label={`Play animation project ${index + 1}`}
						onClick={(event) => {
							returnFocus.current = event.currentTarget;
							setActive(id);
						}}
					>
						<img
							src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
							alt=""
							loading="lazy"
							width="480"
							height="360"
						/>
						<span className="video-play">
							<Icon name="play" size={22} />
						</span>
						<span className="video-caption">
							ANIMATION / {String(index + 1).padStart(2, "0")}
							<Icon size={15} />
						</span>
					</button>
				))}
			</div>
			<div className="video-controls">
				<span>
					Contracted works, employer contact below for additional
					information.
				</span>
				<div>
					<button
						className="icon-button"
						aria-label="Previous videos"
						disabled={position < 0.01}
						onClick={() => move(-1)}
					>
						←
					</button>
					<button
						className="icon-button"
						aria-label="Next videos"
						disabled={position > 0.99}
						onClick={() => move(1)}
					>
						→
					</button>
				</div>
			</div>
			{active && (
				<dialog
					ref={dialog}
					className="video-dialog"
					aria-label="Animation project video"
					onCancel={() => setActive(null)}
					onClose={() => setActive(null)}
					onClick={(event) => {
						if (event.target === event.currentTarget)
							setActive(null);
					}}
				>
					<div className="dialog-header">
						<span>Animation & stage programming</span>
						<button
							autoFocus
							className="icon-button"
							aria-label="Close video"
							onClick={() => setActive(null)}
						>
							<Icon name="close" />
						</button>
					</div>
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${active}?autoplay=1&rel=0`}
						title="Animation project video"
						allow="autoplay; encrypted-media; picture-in-picture"
						allowFullScreen
					/>
					<p>
						Playback unavailable?{" "}
						<a
							href={`https://www.youtube.com/watch?v=${active}`}
							target="_blank"
							rel="noreferrer"
						>
							Watch on YouTube ↗
						</a>
					</p>
				</dialog>
			)}
		</div>
	);
}
