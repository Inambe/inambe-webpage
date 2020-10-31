import React from "react"
import { FaCode, FaLink } from "react-icons/fa"

import Img from "./img"
import A from "./a"

const CardLink = props => {
	return (
		<A
			eLink
			newTab
			className="flex items-center p-3 hover:text-primary"
			{...props}
		/>
	)
}

function ProjectCard({ project }) {
	const { frontmatter } = project

	return (
		<div className="border border-gray-500 bg-white">
			<div>
				<Img src={frontmatter.thumbnail} />
			</div>
			<div className="text-center px-2">
				<h3 className="text-xl font-semibold leading-none my-2">
					{frontmatter.title}
				</h3>
				<p className="leading-none mb-2">{frontmatter.description}</p>
				<div className="text-xs mb-2">
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
