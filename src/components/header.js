import React, { useState } from "react"
import classnames from "classnames"
import { FaBars, FaExternalLinkAlt, FaTimes } from "react-icons/fa"
import "./header.css"

import Container from "./container"
import A from "./a"
import constants from "./../constants"
import Logo from "./../static/media/imgs/logo.png"
import Img from "./img"

function Header() {
	const [sideNaveOpen, setSideNaveOpen] = useState(false)
	const navClassNames = classnames(
		"header-nav",
		sideNaveOpen ? "headerSideNav-open" : "headerSideNav-close"
	)

	return (
		<header className="header">
			<Container>
				<div className="navigationBar">
					<div className="mainLogo">
						<A noStyle to="/">
							<Img src={Logo} alt="Inam Ul Huq logo" />
						</A>
					</div>
					<button
						className="sideNavToggleBtn"
						onClick={() => setSideNaveOpen(!sideNaveOpen)}
					>
						{sideNaveOpen ? <FaTimes /> : <FaBars />}
					</button>
					<nav className={navClassNames}>
						<A noStyle to="/projects">
							Projects
						</A>
						<A noStyle to="/about">
							About
						</A>
						<A noStyle newTab eLink href={constants.URL.RESUME}>
							Resume&nbsp;
							<FaExternalLinkAlt />
						</A>
						<A noStyle to="/contact">
							Contact
						</A>
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
