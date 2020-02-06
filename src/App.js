import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage";
import Header from "./components/header";
import Container from "./components/container";
import ContactPage from "./pages/contactPage";
import AboutPage from "./pages/aboutPage";
import Footer from "./components/footer";
import ProjectsPage from "./pages/projectsPage";
import DisplayMode from "./api/displayMode";
import AccentOverlay from "./components/accentOverlay";

function App() {
	DisplayMode.CleanMode();
	return (
		<Router>
			<Header />
			<Route path="/" exact>
				<AccentOverlay />
				<Container>
					<HomePage />
				</Container>
			</Route>
			<Route path="/contact" exact>
				<AccentOverlay />
				<Container>
					<ContactPage />
				</Container>
				<Footer />
			</Route>
			<Route path="/about" exact>
				<AccentOverlay />
				<Container>
					<AboutPage />
				</Container>
				<Footer />
			</Route>
			<Route path="/projects" exact>
				<AccentOverlay />
				<ProjectsPage />
			</Route>
		</Router>
	);
}

export default App;
