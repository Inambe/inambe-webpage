import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import { FaBars, FaExternalLinkAlt } from "react-icons/fa";
import "./header.css";

import Container from "./container";
import A from "./a";
import Resume from "./../static/Inam-Ul-Huq-Resume.pdf";
import TextLogo from "./../static/media/imgs/text-logo.png";
import Button from "../button";
import Img from "./img";

function Header({ history }) {
	const [sideNaveOpen, setSideNaveOpen] = useState(false);
	const navClassNames = classnames(
		"header-nav",
		sideNaveOpen ? "headerSideNav-open" : "headerSideNav-close"
	);

	useEffect(() => {
		return history.listen((a) => {
			setSideNaveOpen(false);
		});
	}, [history]);

	return (
		<header className="header">
			<Container>
				<div className="navigationBar">
					<div className="mainLogo">
						<Link to="/">
							<Img src={TextLogo} />
						</Link>
					</div>
					<Button
						className="sideNavToggleBtn"
						onClick={() => setSideNaveOpen(!sideNaveOpen)}
					>
						<FaBars />
					</Button>
					<nav className={navClassNames}>
						<Link to="/projects">Projects</Link>
						<Link to="/about">About</Link>
						<A href={Resume} newTab noStyle>
							Resume&nbsp;
							<FaExternalLinkAlt />
						</A>
						<Link to="/contact">Contact</Link>
					</nav>
				</div>
			</Container>
		</header>
	);
}

export default withRouter(Header);
