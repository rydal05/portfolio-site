import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layout";
import Personal from "./pages/personal";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="personal" element={<Personal />} />
					<Route
						path="*"
						element={
							<div className="not-found">
								<p className="eyebrow">
									404 / A little off course
								</p>
								<h1>Feeling lost?</h1>
								<a className="button button-primary" href="/">
									Let's get you back on track. ↗
								</a>
							</div>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
