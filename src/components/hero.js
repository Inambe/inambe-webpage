import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaGithub, FaTwitter } from "react-icons/fa"

import A from "./a"
import constants from "../constants"
import Card from "./card"

function Hero() {
	const portraitQ = useStaticQuery(graphql`
		{
			contentfulSettings {
				title
			}
		}
	`)
	const { title } = portraitQ.contentfulSettings

	return (
		<Card Component="section" className="space-y-4 text-center py-12">
			<div>
				<h1 className="text-5xl font-bold">{title}</h1>
				<h3 className="text-lg italic  text-gray-500">
					Software Developer
				</h3>
			</div>

			<div className="flex justify-center space-x-3">
				<A eLink newTab href={constants.URL.GITHUB}>
					<FaGithub size={25} />
				</A>

				<A eLink newTab href={constants.URL.TWITTER}>
					<FaTwitter size={25} />
				</A>
			</div>
		</Card>
	)
}

export default Hero
