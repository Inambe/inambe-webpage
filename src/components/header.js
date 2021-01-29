import React, { useState } from "react"
import classnames from "classnames"
import { FaBars, FaExternalLinkAlt, FaTimes } from "react-icons/fa"

import Container from "./container"
import A from "./a"
import constants from "./../constants"

const NavLink = props => {
	return <A className="p-3 text-xl no-underline md:p-0 md:pl-8" {...props} />
}

function Header() {
	const [sideNaveOpen, setSideNaveOpen] = useState(false)

	return (
		<header className="py-2">
			<Container>
				<div className="flex justify-between items-center">
					<A to="/" className="no-underline text-4xl font-black">
						Inam.
					</A>
					<button
						className="max-md:block p-2 border z-30 hidden"
						onClick={() => setSideNaveOpen(!sideNaveOpen)}
					>
						{sideNaveOpen ? <FaTimes /> : <FaBars />}
					</button>
					<nav
						className={classnames(
							"flex flex-col items-center justify-center md:flex-row max-md:side-nave-close",
							{
								"max-md:side-nave-open": sideNaveOpen,
							}
						)}
					>
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
