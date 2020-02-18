import React, { useEffect, useState } from "react";
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
			<AccentOverlay />
			<Header />
			<Route path="/" exact>
				<Container>
					<HomePage />
				</Container>
			</Route>
			<Route path="/contact" exact>
				<Container>
					<ContactPage />
				</Container>
				<Footer />
			</Route>
			<Route path="/about" exact>
				<Container>
					<AboutPage />
				</Container>
				<Footer />
			</Route>
			<Route path="/projects" exact>
				<ProjectsPage />
			</Route>
		</Router>
	);
}

export default App;
