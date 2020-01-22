import React from "react";
import { Row, Col } from "react-grid-system";
import "./aboutPage.css";

import Portrait from "./../static/media/imgs/inam-ul-huq.png";

import Img from "../components/img";
import A from "../components/a";
import SkillIcons from "../components/skillIcons";

function AboutPage() {
	return (
		<main className="aboutPage">
			<Row align="center" className="aboutPage-sec about-sec">
				<Col>
					<p>
						Hi <span>👋</span>,<br /> I'm Inam Ul Haq, a full-stack
						web developer and tech enthusiast. I develop, maintain,
						and fix web sites/applications.
					</p>
					<p>
						I learned web and software development on my own from
						online courses, YouTube, and documents including books,
						blogs, and software documentations.
					</p>
					<p>
						I'd done the Diploma of Associate Engineering (DAE) in
						Electronics from GCT Sialkot, Pakistan. While I was in
						college, I learned about programming Microcontrollers
						which led me to the field of computer software.
					</p>
				</Col>
				<Col md={4}>
					<Img src={Portrait} alt="Inam Ul Haq" />
				</Col>
			</Row>
			<Row align="center" className="aboutPage-sec">
				<Col>
					<h2 className="aboutPage-title">Skill Set</h2>
					<p>
						I had tried several different technologies/languages
						including{" "}
						<A
							href="https://en.wikipedia.org/wiki/Java_(programming_language)"
							newTab
						>
							Java
						</A>
						,{" "}
						<A
							href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
							newTab
						>
							C#
						</A>
						, and{" "}
						<A
							href="https://en.wikipedia.org/wiki/C_(programming_language)"
							newTab
						>
							C
						</A>{" "}
						but I'm profound and professionally experienced in the
						listed technologies.
					</p>
					<SkillIcons />
				</Col>
			</Row>
		</main>
	);
}

export default AboutPage;
