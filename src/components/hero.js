import React from "react"
import "./hero.css"

import portrait from "./../static/media/imgs/inam-ul-huq.png"
import Img from "./img"
import Button from "./button"
import A from "./a"

function Hero() {
	return (
		<div className="hero">
			<div className="hero-intro">
				<h1>Inam Ul Huq</h1>
				<h3>Software Developer</h3>
				<p>
					Hi{" "}
					<span role="img" aria-label="Hi">
						👋
					</span>
					, I'm Inam, a human.
					<br />I use <u>JavaScript</u>, <u>PHP</u>, <u>Flutter</u>{" "}
					and many other tools and libraries to develop, maintain, and
					fix different software applications.
				</p>
				<p>
					If you want a new website, mobile or web application, or
					want to get your existing one(s) fixed, contact me.
				</p>
				<A noStyle to="/contact">
					<Button type="primary" size="mf">
						Contact Me
					</Button>
				</A>
			</div>
			<div className="hero-portrait">
				<Img src={portrait} alt="Inam Ul Huq" />
			</div>
		</div>
	)
}

export default Hero
