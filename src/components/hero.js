import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styles from "./hero.module.css"

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
		<div className="flex items-center flex-col-reverse -mx-2 md:flex-row">
			<div className="w-full mb-6 mx-2 text-center md:w-4/6 md:text-left">
				<div className="mb-8">
					<h1 className="text-primary font-bold text-6xl leading-none">
						Inam Ul Huq
					</h1>
					<h3 className="text-1xl italic">Software Developer</h3>
				</div>
				<div className="mb-8">
					<p className="mb-4 text-lg">
						Hi{" "}
						<span role="img" aria-label="Hi">
							👋
						</span>
						, I'm Inam, a human.
						<br />I use <u>JavaScript</u>, <u>PHP</u>,{" "}
						<u>Flutter</u>, and many other tools and libraries to
						build, maintain, and fix different kinds of software
						applications.
					</p>
					<p className="mb-4 text-lg">
						If you want a new Web, Desktop, or Mobile application,
						or want to get your existing one(s) fixed, contact me.
					</p>
				</div>
				<A noStyle to="/contact">
					<Button type="primary" size="mf">
						Contact Me
					</Button>
				</A>
			</div>
			<div className="w-2/3 mb-6 mx-2 md:w-2/6">
				<Image
					fluid={portrait}
					alt="Inam Ul Huq"
					className={styles.heroPortrait}
				/>
			</div>
		</div>
	)
}

export default Hero
