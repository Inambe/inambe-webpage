import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import classnames from "classnames"
import { FaBars, FaExternalLinkAlt, FaTimes } from "react-icons/fa"

import Container from "./container"
import A from "./a"
import constants from "./../constants"

const NavLink = props => {
	return <A className="p-3 no-underline md:p-0 md:pl-8" {...props} />
}

function Header() {
	const [sideNaveOpen, setSideNaveOpen] = useState(false)

	const logoQ = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "inam-bnw-cropped-h-64-p-8.png" }) {
				childImageSharp {
					original {
						src
					}
				}
			}
		}
	`)
	const logo = logoQ.file.childImageSharp.original.src

	return (
		<header className="max-h-main-nav-header">
			<Container>
				<div className="flex justify-between items-center">
					<A to="/" className="hover:bg-primary">
						<img src={logo} alt="Inam Ul Huq logo" />
					</A>
					<button
						className="max-md:block p-2 border z-20 hidden"
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
