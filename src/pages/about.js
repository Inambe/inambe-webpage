import React from "react"
import { Row, Col } from "react-grid-system"
import "./aboutPage.css"

import Portrait from "./../static/media/imgs/inam-ul-huq.png"

import Img from "../components/img"
import SkillIcons from "../components/skillIcons"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"
import SEO from "../components/seo"

function AboutPage() {
	return (
		<LayoutRoot>
			<SEO title="About" description="Read more about me." />
			<MainLayout>
				<main className="aboutPage">
					<Row align="center" className="aboutPage-sec about-sec">
						<Col>
							<p>
								Hi{" "}
								<span role="img" aria-label="Hi">
									👋
								</span>
								,<br /> I'm Inam Ul Huq, a full-stack web
								developer and tech enthusiast. I develop,
								maintain, and fix web sites/applications.
							</p>
							<p>
								I learned web and software development on my own
								from online courses, YouTube, and documents
								including books, blogs, and software
								documentations.
							</p>
							<p>
								I'd done the Diploma of Associate Engineering
								(DAE) in Electronics from GCT Sialkot, Pakistan.
								While I was in college, I learned about
								programming Microcontrollers which led me to the
								field of computer software.
							</p>
						</Col>
						<Col md={4}>
							<Img src={Portrait} alt="Inam Ul Huq" />
						</Col>
					</Row>
					<Row align="center" className="aboutPage-sec">
						<Col md={5}>
							<h2 className="aboutPage-title">Skills</h2>
							<p>
								I had tried several different
								technologies/languages including <u>Java</u>,{" "}
								<u>C#</u>, and <u>C</u> but I'm profound and
								professionally experienced in the listed ones.
							</p>
						</Col>
						<Col md={7}>
							<SkillIcons />
						</Col>
					</Row>
				</main>
			</MainLayout>
		</LayoutRoot>
	)
}

export default AboutPage
