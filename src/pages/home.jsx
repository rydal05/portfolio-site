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
				<TextBlock title="HELLO" text="my name is anderdingus" />
			</div>

			<TextBlock title="HELLO" text="my name is anderdingus" />
			<TextBlock title="HELLO" text="my name is anderdingus" />
			<TextBlock title="HELLO" text="my name is anderdingus" />
		</>
	);
}

export default Home;
