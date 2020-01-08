import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Container from "./container";

function Header() {
	return (
		<header className="header">
			<Container>
				<nav className="header-nav">
					<Link to="/">Home</Link>
					<Link to="/portfolio">Portfolio</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
