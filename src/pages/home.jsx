import React from "react";

import TallProjectModal from "/src/components/TallProjectModal";
import SquareProjectModal from "/src/components/SquareProjectModal";
import ListModal from "/src/components/ListModal";

import About from "/src/sections/prof/about";
import Education from "/src/sections/prof/education";
import Portfolio from "/src/sections/prof/portfolio";
import Skills from "/src/sections/prof/skills";
import Contact from "/src/sections/prof/contact";
import Deployed from "/src/sections/prof/deployed";
import Quote from "/src/components/Quote";

function Home() {
	return (
		<>
			<About />
			<Quote>
				<ul className="flex justify-between">
					<li>
						<ul>
							<li>
								Alas, <i>Ryan</i> is going . . . Undesired,
								unwanted
							</li>
							<li>
								them, What makes them go? It is nothing else
								than the
							</li>
							<li>
								principle of the man who has the reason for
								being.
							</li>
						</ul>
					</li>
					<li>
						<ul>
							<li>嗚呼、斑鳩が行く・・・・・・</li>
							<li>
								望まれることなく、浮き世から捨てられし彼等を動かすもの。
							</li>
							<li>
								それは、生きる意志を持つ者の意地に他ならない。
							</li>
						</ul>
					</li>
				</ul>
			</Quote>
			<hr className="m-20" />

			<Education />
			<Quote>
				I will not die until I achieve something. Even though the ideal
				is high, I never give in. Therefore, I never die with regrets.
			</Quote>
			<hr className="m-20" />

			<Portfolio />
			<Quote>
				What everyone wants is but a helping hand. Just enough to save
				them from the abyss.
			</Quote>
			<hr className="m-20" />

			<Deployed />
			<Quote></Quote>
			<hr className="m-20" />

			<Skills />
			<Quote>
				Even if it seems certain that you will lose, retaliate. Neither
				wisdom nor technique has a place in this. A real man does not
				think of victory or defeat. He plunges recklessly towards an
				irrational death. By doing this, you will awaken from your
				dreams.
			</Quote>
			<hr className="m-20" />

			<Contact />
			<Quote>
				Respect, Honesty, Courage, Rectitude, Loyalty, Honour,
				Benevolence
			</Quote>
			<hr className="m-20" />
		</>
	);
}

export default Home;
