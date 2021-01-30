import React from "react"
import { FaCode, FaLink } from "react-icons/fa"
import Image from "gatsby-image"

import A from "./a"
import Tag from "./tag"

const CardLink = props => {
	return <A eLink newTab className="p-4" {...props} />
}

function ProjectCard({ project }) {
	return (
		<div className="border shadow rounded bg-white">
			<div>
				<Image
					className="rounded-t"
					fluid={project.heroImage.fluid}
					alt={project.heroImage.title}
				/>
			</div>
			<div className="text-center p-4 border-b space-y-2">
				<h3 className="text-2xl font-extrabold">{project.title}</h3>
				<div
					className="content"
					dangerouslySetInnerHTML={{
						__html: project.description.childMarkdownRemark.html,
					}}
				/>
				<div className="text-xs">
					{project.tags.map((u, i) => (
						<Tag key={i}>{u}</Tag>
					))}
				</div>
			</div>
			<div className="flex items-center justify-around">
				{project.liveLink && (
					<CardLink href={project.liveLink}>
						Live&nbsp;
						<FaLink />
					</CardLink>
				)}
				{project.sourceLink && (
					<CardLink href={project.sourceLink}>
						Source&nbsp;
						<FaCode />
					</CardLink>
				)}
			</div>
		</div>
	)
}

export default ProjectCard
