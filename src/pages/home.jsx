import React from "react";

import TallProjectModal from "@/components/TallProjectModal";
import SquareProjectModal from "@/components/SquareProjectModal";
import ListModal from "@/components/ListModal";

import About from "@/sections/prof/about";
import Education from "@/sections/prof/education";
import Portfolio from "@/sections/prof/portfolio";
import Skills from "@/sections/prof/skills";
import Contact from "@/sections/prof/contact";
import Deployed from "@/sections/prof/deployed";

function Home() {
	return (
		<>
			<About />
			<h4>
				Alas, <i>Ryan</i> is going . . . Undesired, unwanted them, What
				makes them go? It is nothing else than the principle of the man
				who has the reason for being.
				<br/>
				嗚呼、斑鳩が行く・・・・・・
				望まれることなく、浮き世から捨てられし彼等を動かすもの。
				それは、生きる意志を持つ者の意地に他ならない。
			</h4>
			<hr className="m-20" />

			<Education />
			<h4>
				I will not die until I achieve something. Even though the ideal
				is high, I never give in. Therefore, I never die with regrets.
				<br />
				
			</h4>
			<hr className="m-20" />

			<Portfolio />
			<h4>
				What everyone wants is but a helping hand. Just enough to save
				them from the abyss.
			</h4>
			<hr className="m-20" />

			<Skills />
			<h4>
				Even if it seems certain that you will lose, retaliate. Neither
				wisdom nor technique has a place in this. A real man does not
				think of victory or defeat. He plunges recklessly towards an
				irrational death. By doing this, you will awaken from your
				dreams.
			</h4>
			<hr className="m-20" />

			<Contact />
			<h4>
				Respect, Honesty, Courage, Rectitude, Loyalty, Honour,
				Benevolence
			</h4>
			<hr className="m-20" />

			<Deployed />
			<h4>hello</h4>
			<hr className="m-20" />
		</>
	);
}

export default Home;
