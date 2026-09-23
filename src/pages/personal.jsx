import React from "react";
import SLEEP from "../../src/assets/panda_sleep.jpg";

export default function Personal() {
	return (
		<>
			<div className="hero">
				<div className="hero-topline">
					<p className="eyebrow">
						hi. if you're seeing this, then that means this page is
						currently under construction. sorry ! check back at a
						later time !
					</p>
					<figure className="panda-portrait">
						<img
							src={SLEEP}
							alt="A sleeping panda on the bus."
							fetchPriority="low"
						/>
						<figcaption>
							<span>Content Attribution: satoroku_18</span>
						</figcaption>
					</figure>
				</div>
			</div>
		</>
	);
}
