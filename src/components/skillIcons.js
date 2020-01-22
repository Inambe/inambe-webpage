import React from "react";
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
import "./skillIcons.css";

import A from "./a";

function SkillIcons() {
	return (
		<div className="skillIcons">
			<span>
				<DiJavascript1 />
				<A href="https://en.wikipedia.org/wiki/JavaScript" newTab>
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
				<A href="https://en.wikipedia.org/wiki/WordPress" newTab>
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
	);
}

export default SkillIcons;
