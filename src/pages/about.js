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
			<SEO
				title="About"
				description="Inam Ul Haq is a Software Developer from Sialkot, Pakistan."
			/>
			<MainLayout>
				<div className="space-y-12">
					<Section>
						<div className="w-full">
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
					</Section>
					<Section>
						<div className="w-full">
							<Heading>Skills</Heading>
							<p>
								I had tried several different
								technologies/languages including C#, Python, and
								C/C++ but I'm profound and professionally
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
