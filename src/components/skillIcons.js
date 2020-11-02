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
	DiDart,
} from "react-icons/di"

const skills = [
	{ name: "JavaScript", icon: DiJavascript1 },
	{ name: "Node.js", icon: DiNodejs },
	{ name: "React", icon: DiReact },
	{ name: "PHP", icon: DiPhp },
	{ name: "WordPress", icon: DiWordpress },
	{ name: "HTML(5)", icon: DiHtml5 },
	{ name: "CSS(3)", icon: DiCss3 },
	{ name: "jQuery", icon: DiJqueryLogo },
	{ name: "Flutter", icon: DiDart },
	{ name: "Git", icon: DiGit },
	{ name: "Linux", icon: DiLinux },
]

function SkillIcons() {
	return (
		<div className="grid grid-cols-5 gap-2 text-center text-xs lg:grid-cols-6">
			{skills.map(skill => (
				<span>
					<skill.icon className="w-full h-auto" />
					<span>{skill.name}</span>
				</span>
			))}
		</div>
	)
}

export default SkillIcons
