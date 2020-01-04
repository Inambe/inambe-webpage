import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import Home from "./pages/home";
import Header from "./components/header";
import Container from "./components/container";
import Contact from "./pages/contact";

function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/contact" exact>
					<Contact />
				</Route>
			</Container>
		</Router>
	);
}

export default App;
