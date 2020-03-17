import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAlert } from "react-alert";
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
	const alert = useAlert();
	setTimeout(() => {
		alert.show(
			<>
				📢 Looking for a nice <i>full-time</i> job
			</>
		);
	}, 2000);

	DisplayMode.CleanMode();

	return (
		<Router>
			<AccentOverlay />
			<Header />
			<Route path="/" exact>
				<Container>
					<HomePage />
				</Container>
			</Route>
			<Route path="/contact" exact>
				<ContactPage />
				<Footer />
			</Route>
			<Route path="/about" exact>
				<AboutPage />
				<Footer />
			</Route>
			<Route path="/projects" exact>
				<ProjectsPage />
				<Footer />
			</Route>
		</Router>
	);
}

export default App;
