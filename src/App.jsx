import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "/src/pages/home";
import About from "/src/sections/prof/about";
import Portfolio from "/src/sections/prof/portfolio";
import Contact from "/src/sections/prof/contact";
import Layout from "/src/Layout";
import Skills from "/src/sections/prof/skills";

//TODO: update this to dynamically pull from pages in the pages subdirectory or reference a centralized dictionary for easier less confusing accesses
const navigation = [
	{ name: "Professional", href: "", element: Home },
	{ name: "Personal", href: "", element: Home },
];

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						{navigation.map((item) => {
							const Component = item.element;
							return (
								<Route
									key={item.name}
									path={item.href}
									element={<Component />}
								/>
							);
						})}
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
