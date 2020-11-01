import React from "react"
import { FaCode, FaLink } from "react-icons/fa"

import Img from "./img"
import A from "./a"

const CardLink = props => {
	return <A eLink newTab className="p-2 no-underline" {...props} />
}

function ProjectCard({ project }) {
	const { frontmatter } = project

	return (
		<div className="border bg-white">
			<div>
				<Img src={frontmatter.thumbnail} />
			</div>
			<div className="text-center border-b p-2 space-y-2">
				<h3 className="text-xl font-semibold">{frontmatter.title}</h3>
				<p className="text-sm">{frontmatter.description}</p>
				<div className="text-xs">
					{frontmatter.uses.map((u, i) => (
						<span
							className="inline-block bg-gray-300 mr-1 py-1 px-2 rounded"
							key={i}
						>
							{u}
						</span>
					))}
				</div>
			</div>
			<div className="flex items-center justify-around">
				{frontmatter.live_link && (
					<CardLink href={frontmatter.live_link}>
						<FaLink />
						&nbsp;Live
					</CardLink>
				)}
				{frontmatter.source_link && (
					<CardLink href={frontmatter.source_link}>
						<FaCode />
						&nbsp;Source
					</CardLink>
				)}
			</div>
		</div>
	)
}

export default ProjectCard
