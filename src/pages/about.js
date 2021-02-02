import React from "react"
import SkillIcons from "../components/skillIcons"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"
import SEO from "../components/seo"
import Heading from "../components/heading"

const Section = props => {
	return (
		<div
			className="flex items-center justify-center flex-col space-y-4"
			{...props}
		/>
	)
}

function AboutPage() {
	return (
		<LayoutRoot>
			<SEO title="About" />
			<MainLayout>
				<div className="space-y-12">
					<Section>
						<div className="w-full">
							<Heading>About</Heading>
							<div className="space-y-2">
								<p>
									Inam Ul Haq is a Software Developer from
									Sialkot, Pakistan. He build Web, Desktop,
									and Mobile software applications.
								</p>
								<p>
									Inam's learned software development on his
									own from online courses, YouTube, and
									documents including books, blogs, and
									software documentations.
								</p>
								<p>
									He has Diploma of Associate Engineering
									(DAE) in Electronics from GCT Sialkot,
									Pakistan. While Inam was in college, he
									learned about programming microcontrollers
									which led him to the field of computer
									software.
								</p>
							</div>
						</div>
					</Section>
					<Section>
						<div className="w-full">
							<Heading>Skills</Heading>
							<p>
								Inam had tried several different
								technologies/languages including C#, Python, and
								C/C++ but he is profound and professionally
								experienced in the listed ones.
							</p>
						</div>
						<div className="w-full">
							<SkillIcons />
						</div>
					</Section>
				</div>
			</MainLayout>
		</LayoutRoot>
	)
}

export default AboutPage
