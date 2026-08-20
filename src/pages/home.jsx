import React from "react";


import TallProjectModal from "../components/TallProjectModal";
import SquareProjectModal from "../components/SquareProjectModal";
import ListModal from "../components/ListModal";


import About from "../sections/about";
import Education from "../sections/education";
import Portfolio from "../sections/portfolio";
import Skills from "../sections/skills";
import Contact from "../sections/contact";



function Home() {
	return (
		<>
			<About />
			<hr className="m-20" />
			Alas, <i>Ryan</i> is going . . . Undesired, unwanted them, What
			makes them go? It is nothing else than the principle of the man who
			has the reason for being.

			<Education />
			<hr className="m-20" />
			Respect, Honesty, Courage, Rectitude, Loyalty, Honour, Benevolence
			
			<Portfolio />
			<hr className="m-20" />
			What everyone wants is but a helping hand. Just enough to save them
			from the abyss.

			<Skills />
			<hr className="m-20"/>
			Even if it seems certain that you will lose, retaliate. Neither
			wisdom nor technique has a place in this. A real man does not think
			of victory or defeat. He plunges recklessly towards an irrational
			death. By doing this, you will awaken from your dreams.

			<Contact />
			<hr className="m-20"/>

		</>
	);
}

export default Home;
