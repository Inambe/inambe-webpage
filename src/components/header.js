import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

import Container from "./container";
import A from "./a";
import Resume from "./../static/Inam-Ul-Huq-Resume.pdf";

function Header() {
	return (
		<header className="header">
			<Container>
				<nav className="header-nav">
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/about">About</Link>
					<A href={Resume} newTab noStyle className="fancy">
						Resume
					</A>
					<Link to="/contact">Contact</Link>
				</nav>
			</Container>
		</header>
	);
}

export default Header;
