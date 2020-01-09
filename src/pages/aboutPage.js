import React from "react";
import { Row, Col } from "react-grid-system";
import {
	DiReact,
	DiJavascript1,
	DiPhp,
	DiNodejs,
	DiGit,
	DiWordpress,
	DiHtml5,
	DiCss3,
	DiLinux,
	DiJqueryLogo
} from "react-icons/di";
import "./aboutPage.css";

import Portrait from "./../static/media/imgs/inam-ul-huq.png";
import ProjectGroupPhot from "./../static/media/imgs/gct-project-group-photo.jpg";

import Img from "../components/img";
import A from "../components/a";
import { Link } from "react-router-dom";

function AboutPage() {
	return (
		<main className="aboutPage">
			<h1>About me</h1>
			<div className="aboutPage__sec">
				<Row>
					<Col>
						<p>
							Hi <span>👋</span>, I'm Inam ul huq, a full-stack
							web developer and tech enthusiast. I develop,
							maintain, and fix web sites/applications. If you
							want a new web site/application or want to get your
							existing one fixed,{" "}
							<A to="/contact" rrLink>
								contact me
							</A>{" "}
							to get a free quote.
						</p>
						<p>
							I learned web and software development on my own
							from online courses, YouTube, and documents
							including books, blogs, and documentations.
						</p>
					</Col>
					<Col md={3}>
						<Img src={Portrait} alt="Inam Ul Huq" />
					</Col>
				</Row>
			</div>
			<div className="aboutPage__sec">
				<h2>Technical Skills</h2>
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
				<div className="skillIcons">
					<span>
						<DiJavascript1 />
						<A
							href="https://en.wikipedia.org/wiki/JavaScript"
							newTab
						>
							JavaScript
						</A>
					</span>
					<span>
						<DiNodejs />
						<A href="https://en.wikipedia.org/wiki/Node.js" newTab>
							Node.js
						</A>
					</span>
					<span>
						<DiReact />
						<A
							href="https://en.wikipedia.org/wiki/React_(web_framework)"
							newTab
						>
							React
						</A>
					</span>
					<span>
						<DiPhp />
						<A href="https://en.wikipedia.org/wiki/PHP" newTab>
							PHP
						</A>
					</span>
					<span>
						<DiWordpress />
						<A
							href="https://en.wikipedia.org/wiki/WordPress"
							newTab
						>
							WordPress
						</A>
					</span>

					<span>
						<DiHtml5 />
						<A href="https://en.wikipedia.org/wiki/HTML" newTab>
							HTML(5)
						</A>
					</span>
					<span>
						<DiCss3 />
						<A href="https://en.wikipedia.org/wiki/CSS" newTab>
							CSS(3)
						</A>
					</span>
					<span>
						<DiJqueryLogo />
						<A href="https://en.wikipedia.org/wiki/JQuery" newTab>
							jQuery
						</A>
					</span>
					<span>
						<DiGit />
						<A href="https://en.wikipedia.org/wiki/Git" newTab>
							Git
						</A>
					</span>
					<span>
						<DiLinux />
						<A href="https://en.wikipedia.org/wiki/Linux" newTab>
							Linux
						</A>
					</span>
				</div>
			</div>
			<div className="aboutPage__sec">
				<h2>How did I start?</h2>
				<Row>
					<Col>
						<p>
							I started learning about computer programming, or
							computers in general, out of curiosity when our
							teachers would leave off the topics involving
							computers or computer programming while teaching us
							Applied Electronics. I started learning to program
							with C/C++. Later I programmed an{" "}
							<A href="https://www.arduino.cc/" newTab>
								Arduino
							</A>{" "}
							board for our final year project which, first got us
							elected for the competition from within our college,
							and later won in the district-wide competition.
						</p>
					</Col>
					<Col md={4}>
						<Img
							src={ProjectGroupPhot}
							alt="final year project group photo at GCT Sialkot"
						/>
					</Col>
				</Row>
			</div>
		</main>
	);
}

export default AboutPage;
