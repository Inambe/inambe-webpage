import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import Home from "./pages/home";
import Header from "./components/header";
import Container from "./components/container";

function App() {
	return (
		<Router>
			<Header />
			<Container>
				<Route path="/" exact>
					<Home />
				</Route>
			</Container>
		</Router>
	);
}

export default App;
