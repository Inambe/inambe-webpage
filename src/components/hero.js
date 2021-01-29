import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import Button from "./button"
import A from "./a"
import Heading from "./heading"

function Hero() {
	const portraitQ = useStaticQuery(graphql`
		{
			contentfulSettings {
				portrait {
					fluid {
						...GatsbyContentfulFluid
					}
					title
				}
			}
		}
	`)
	const portrait = portraitQ.contentfulSettings.portrait

	return (
		<section className="flex flex-col items-center space-y-6">
			<div className="w-2/3 md:w-4/12">
				<Image
					fluid={portrait.fluid}
					alt={portrait.title}
					className="rounded-full border-primary border-half-rem"
				/>
			</div>
			<div className="text-center space-y-4">
				<div>
					<Heading bare>Inam Ul Haq</Heading>
					<h3 className="italic text-xl">Software Developer</h3>
				</div>
				<div className="text-xl">
					<p>
						Hi{" "}
						<span role="img" aria-label="Hi">
							👋
						</span>
						, I'm Inam, a human.
						<br />I build, fix, and maintain different kinds of
						software applications.
					</p>
				</div>
				<div>
					<A to="/contact">
						<Button>Let's talk!</Button>
					</A>
				</div>
			</div>
		</section>
	)
}

export default Hero
