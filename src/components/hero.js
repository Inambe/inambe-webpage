import React from "react";
import "./hero.css";

import portrait from "./../static/media/imgs/inam-ul-huq.png";
import Img from "./img";
import Button from "./button";

function Hero() {
	return (
		<div className="hero">
			<div className="hero-intro">
				<h1>Inam Ul Huq</h1>
				<h3>Full stack web developer</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<Button type="primary" size="l">
					Contact Me
				</Button>
			</div>
			<div className="hero-portrait">
				<Img src={portrait} />
			</div>
		</div>
	);
}

export default Hero;
