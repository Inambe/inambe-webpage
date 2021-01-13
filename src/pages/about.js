import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SkillIcons from "../components/skillIcons"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"
import SEO from "../components/seo"
import Heading from "../components/heading"

const Section = props => {
	return (
		<div
			className="flex items-center justify-center flex-col space-y-2 md:flex-row md:-mx-3 md:space-y-0"
			{...props}
		/>
	)
}

function AboutPage() {
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
		<LayoutRoot>
			<SEO
				title="About"
				description="Inam Ul Haq is a Software Developer from Sialkot, Pakistan."
			/>
			<MainLayout>
				<div className="space-y-24">
					<Section>
						<div className="w-full mb-5 md:mx-3 md:w-7/12 md:mb-0">
							<Heading>About</Heading>
							<div className="space-y-2">
								<p>
									Hi{" "}
									<span role="img" aria-label="Hi">
										👋
									</span>
									,<br /> I'm Inam Ul Haq, a Software
									Developer. I build Web, Desktop, and Mobile
									applications.
								</p>
								<p>
									I learned software development on my own
									from online courses, YouTube, and documents
									including books, blogs, and software
									documentations.
								</p>
								<p>
									I'd done Diploma of Associate Engineering
									(DAE) in Electronics from GCT Sialkot,
									Pakistan. While I was in college, I learned
									about programming Microcontrollers which led
									me to the field of computer software.
								</p>
							</div>
						</div>
						<div className="w-full md:mx-3 md:w-5/12">
							<Image
								fluid={portrait}
								alt="Inam Ul Haq"
								className="w-full ml-auto border-2 md:w-2/3 rounded-full"
							/>
						</div>
					</Section>
					<Section>
						<div className="w-full md:mx-3 md:w-1/2">
							<Heading>Skills</Heading>
							<p>
								I had tried several different
								technologies/languages including C#, Python, and
								C/C++ but I'm profound and professionally
								experienced in the listed ones.
							</p>
						</div>
						<div className="w-full md:mx-3 md:w-1/2">
							<SkillIcons />
						</div>
					</Section>
				</div>
			</MainLayout>
		</LayoutRoot>
	)
}

export default AboutPage
