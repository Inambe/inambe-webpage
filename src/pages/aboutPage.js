import React from "react";
import { Row, Col } from "react-grid-system";
import "./aboutPage.css";

import Portrait from "./../static/media/imgs/inam-ul-huq.png";
import ProjectGroupPhot from "./../static/media/imgs/gct-project-group-photo.jpg";

import Img from "../components/img";
import A from "../components/a";

function AboutPage() {
	return (
		<main className="aboutPage">
			<h1>About me</h1>
			<Row className="aboutPage__sec">
				<Col md={4}>
					<Img src={Portrait} alt="Inam Ul Huq" />
				</Col>
				<Col>
					<p>
						Hi <span>👋</span>, <br />
						I'm Inam ul huq, a full-stack web developer and tech
						enthusiast. I learned web and software development on my
						own from online courses, YouTube, and a lot of documents
						including books and blogs.
					</p>
				</Col>
			</Row>
			<Row className="aboutPage__sec">
				<Col>
					<p>
						I started learning about computer programming, or
						computers in general, out of curiosity when our teachers
						would leave off the topics involving computers or
						computer programming while teaching us Applied
						Electronics. I started learning to program with C/C++.
						Later I programmed an{" "}
						<A href="https://www.arduino.cc/" target="_blank">
							Arduino
						</A>{" "}
						board for our final year project which, first got us
						elected for the competition from within our college, and
						later won in the district-wide competition.
					</p>
				</Col>
				<Col md={4}>
					<Img
						src={ProjectGroupPhot}
						alt="final year project group photo at GCT Sialkot"
					/>
				</Col>
			</Row>
		</main>
	);
}

export default AboutPage;
