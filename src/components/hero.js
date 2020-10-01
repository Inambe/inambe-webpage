import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import "./hero.css"

import Button from "./button"
import A from "./a"

function Hero() {
	const data = useStaticQuery(graphql`
		{
			file(relativePath: { eq: "inam-ul-huq.png" }) {
				childImageSharp {
					fluid(maxWidth: 500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)
	const portrait = data.file.childImageSharp.fluid

	return (
		<div className="hero">
			<div className="hero-intro">
				<h1>Inam Ul Huq</h1>
				<h3>Software Developer</h3>
				<p>
					Hi{" "}
					<span role="img" aria-label="Hi">
						👋
					</span>
					, I'm Inam, a human.
					<br />I use <u>JavaScript</u>, <u>PHP</u>, <u>Flutter</u>,{" "}
					and many other tools and libraries to build, maintain, and
					fix different kinds of software applications.
				</p>
				<p>
					If you want a new Web, Desktop, or Mobile application, or
					want to get your existing one(s) fixed, contact me.
				</p>
				<A noStyle to="/contact">
					<Button type="primary" size="mf">
						Contact Me
					</Button>
				</A>
			</div>
			<div className="hero-portrait">
				<Image fluid={portrait} alt="Inam Ul Huq" />
			</div>
		</div>
	)
}

export default Hero
