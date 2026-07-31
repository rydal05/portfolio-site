import CycleText from "../components/CycleText";
import TextBlock from "../components/TextBlock";

function Home() {
	return (
		<>
			<h1>Hi, I'm Ryan! 👋🏽</h1>
			<h2>
				<CycleText />
			</h2>
			<p></p>
			<div>
				<TextBlock title="Welcome!" text="I'm still working out what I should use this page for, I would recommend checking out any of the other pages. They are immeasurably more well utilized than this page is." />
			</div>

		</>
	);
}

export default Home;
