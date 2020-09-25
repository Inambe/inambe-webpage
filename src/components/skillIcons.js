import React from "react"
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
	DiJqueryLogo,
} from "react-icons/di"
import "./skillIcons.css"

function SkillIcons() {
	return (
		<div className="skillIcons">
			<span>
				<DiJavascript1 />
				<span>JavaScript</span>
			</span>
			<span>
				<DiNodejs />
				<span>Node.js</span>
			</span>
			<span>
				<DiReact />
				<span>React</span>
			</span>
			<span>
				<DiPhp />
				<span>PHP</span>
			</span>
			<span>
				<DiWordpress />
				<span>WordPress</span>
			</span>
			<span>
				<DiHtml5 />
				<span>HTML(5)</span>
			</span>
			<span>
				<DiCss3 />
				<span>CSS(3)</span>
			</span>
			<span>
				<DiJqueryLogo />
				<span>jQuery</span>
			</span>
			<span>
				<DiGit />
				<span>Git</span>
			</span>
			<span>
				<DiLinux />
				<span>Linux</span>
			</span>
		</div>
	)
}

export default SkillIcons
