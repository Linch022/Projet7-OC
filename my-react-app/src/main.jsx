import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home";
import HousingSheet from "./pages/HousingSheet";
import About from "./pages/About.jsx";
import Footer from "./layout/Footer.jsx";
import Body from "./layout/Body.jsx";
import data from "./logements.json";
import "./styles/app.scss";
import Header from "./layout/Header";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route element={<Body />}>
					<Route
						path='/'
						element={<Home data={data} />}
					/>
					<Route
						path='/logement/:id'
						element={<HousingSheet data={data} />}
					/>
					<Route
						path='/a-propos'
						element={<About />}
					/>
					<Route
						path='*'
						element={<Error />}
					/>
				</Route>
			</Routes>
			<Footer />
		</Router>
	</StrictMode>
);
