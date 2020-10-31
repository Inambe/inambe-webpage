import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SkillIcons from "../components/skillIcons"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"
import SEO from "../components/seo"

const Section = props => {
	return (
		<div
			className="flex items-center flex-col -mx-2 mb-8 md:flex-row md:mb-16"
			{...props}
		/>
	)
}
const SectionHeading = props => {
	// eslint-disable-next-line jsx-a11y/heading-has-content
	return <h2 className="text-4xl text-primary font-extrabold" {...props} />
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
			<SEO title="About" description="Read more about Inam Ul Huq." />
			<MainLayout>
				<main>
					<Section>
						<div className="w-full mx-2 md:w-9/12">
							<SectionHeading>About</SectionHeading>
							<p className="mb-2">
								Hi{" "}
								<span role="img" aria-label="Hi">
									👋
								</span>
								,<br /> I'm Inam Ul Huq, a Software Developer. I
								build Web, Desktop, and Mobile applications.
							</p>
							<p className="mb-2">
								I learned software development on my own from
								online courses, YouTube, and documents including
								books, blogs, and software documentations.
							</p>
							<p className="mb-2">
								I'd done Diploma of Associate Engineering (DAE)
								in Electronics from GCT Sialkot, Pakistan. While
								I was in college, I learned about programming
								Microcontrollers which led me to the field of
								computer software.
							</p>
						</div>
						<div className="w-full mx-2 md:w-3/12">
							<Image fluid={portrait} alt="Inam Ul Huq" />
						</div>
					</Section>
					<Section>
						<div className="w-full mx-2 md:w-1/3">
							<SectionHeading>Skills</SectionHeading>
							<p className="mb-2">
								I had tried several different
								technologies/languages including <u>Java</u>,{" "}
								<u>C#</u>, and <u>C</u> but I'm profound and
								professionally experienced in the listed ones.
							</p>
						</div>
						<div className="w-full mx-2 md:w-2/3">
							<SkillIcons />
						</div>
					</Section>
				</main>
			</MainLayout>
		</LayoutRoot>
	)
}

export default AboutPage
