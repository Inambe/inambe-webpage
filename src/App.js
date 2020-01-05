import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage";
import Header from "./components/header";
import Container from "./components/container";
import ContactPage from "./pages/contactPage";

function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" exact>
					<HomePage />
				</Route>
				<Route path="/contact" exact>
					<ContactPage />
				</Route>
			</Container>
		</Router>
	);
}

export default App;
