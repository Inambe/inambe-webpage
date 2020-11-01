import React, { useState } from "react"
import classnames from "classnames"
import { FaBars, FaExternalLinkAlt, FaTimes } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import styles from "./header.module.css"

import Container from "./container"
import A from "./a"
import constants from "./../constants"
import Logo from "./../static/media/imgs/logo.png"
import Img from "./img"
import { tailwindScreen } from "../api/runtime"

const NavLink = props => {
	return <A className="p-3 no-underline md:p-0 md:pl-6" {...props} />
}

function Header() {
	const [sideNaveOpen, setSideNaveOpen] = useState(false)

	const isSM = useMediaQuery({
		query: `(max-width: ${tailwindScreen("md") - 1}px)`,
	})

	const navClassName = classnames(
		"flex flex-col items-center justify-center md:flex-row",
		{
			[styles.DrawerSidebar]: isSM,
			[styles.DrawerSidebarOpen]: isSM && sideNaveOpen,
			[styles.DrawerSidebarClose]: isSM && !sideNaveOpen,
		}
	)

	return (
		<header className="max-h-main-nav-header bg-white border-b">
			<Container>
				<div className="flex justify-between items-center">
					<A to="/" className="hover:bg-primary">
						<Img
							className="w-16"
							src={Logo}
							alt="Inam Ul Huq logo"
						/>
					</A>
					{isSM ? (
						<button
							className="p-2 border z-20"
							onClick={() => setSideNaveOpen(!sideNaveOpen)}
						>
							{sideNaveOpen ? <FaTimes /> : <FaBars />}
						</button>
					) : null}
					<nav className={navClassName}>
						<NavLink to="/projects">Projects</NavLink>
						<NavLink to="/about">About</NavLink>
						<NavLink newTab eLink href={constants.URL.RESUME}>
							Resume&nbsp;
							<FaExternalLinkAlt />
						</NavLink>
						<NavLink to="/contact">Contact</NavLink>
					</nav>
				</div>
			</Container>
		</header>
	)
}

export default Header
