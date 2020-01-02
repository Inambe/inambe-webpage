import React from "react";
import "./hero.css";

import portrait from "./../static/media/imgs/inam-ul-huq.png";
import Img from "./img";
import Button from "./button";
import A from "./a";

function Hero() {
	return (
		<div className="hero">
			<div className="hero-intro">
				<h1>Inam Ul Huq</h1>
				<h3>Full stack web developer</h3>
				<p>
					Hi 👋, I'm Inam Ul Huq. I'm a full stack web developer. I
					develop, maintain and fix websites and web applications. I
					use{" "}
					<A
						href="https://en.wikipedia.org/wiki/JavaScript"
						target="_blank"
					>
						JavaScript
					</A>
					,{" "}
					<A href="https://en.wikipedia.org/wiki/PHP" target="_blank">
						PHP
					</A>{" "}
					and its frameworks.
				</p>
				<p>
					If you want a new web site/application or want to get your
					existing one(s) fixed, contact me to get a free quote.
				</p>
				<Button type="primary" size="m">
					Contact Me
				</Button>
			</div>
			<div className="hero-portrait">
				<Img src={portrait} alt="Inam Ul Huq" />
			</div>
		</div>
	);
}

export default Hero;
