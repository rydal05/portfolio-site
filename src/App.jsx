import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Contact from "./sections/contact";
import Layout from "./Layout";
import Skills from "./sections/skills";

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
