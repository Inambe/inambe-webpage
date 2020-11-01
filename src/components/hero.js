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
		<div className="min-h-full-in-container flex items-center flex-col-reverse md:flex-row md:-mx-2">
			<div className="w-full mb-6 text-center md:text-left md:mx-2 md:w-8/12 lg:w-6/12">
				<div className="mb-8">
					<h1 className="text-primary text-4xl font-bold md:text-6xl leading-none">
						Inam Ul Huq
					</h1>
					<h3 className="text-xl italic">Software Developer</h3>
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
			<div className="w-2/3 mb-6 md:mx-2 md:w-4/12 lg:w-4/12 lg:mx-auto">
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
