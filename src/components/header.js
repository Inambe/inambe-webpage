import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import { FaBars } from "react-icons/fa";
import "./header.css";

import Container from "./container";
import A from "./a";
import Resume from "./../static/Inam-Ul-Huq-Resume.pdf";
import Button from "../button";

function Header({ history }) {
	const [sideNaveOpen, setSideNaveOpen] = useState(false);
	const navClassNames = classnames(
		"header-nav",
		sideNaveOpen ? "headerSideNav-open" : "headerSideNav-close"
	);

	useEffect(() => {
		return history.listen(a => {
			setSideNaveOpen(false);
		});
	}, [history]);

	return (
		<header className="header">
			<Container>
				<nav className={navClassNames}>
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
					<Link to="/about">About</Link>
					<A href={Resume} newTab noStyle className="fancy">
						Resume
					</A>
					<Link to="/contact">Contact</Link>
				</nav>
				<Button
					className="sideNavToggleBtn"
					onClick={() => setSideNaveOpen(!sideNaveOpen)}
				>
					<FaBars />
				</Button>
			</Container>
		</header>
	);
}

export default withRouter(Header);
