import React from "react"
import { FaCode, FaLink } from "react-icons/fa"
import "./projectCard.css"

import Img from "./img"
import A from "./a"

function ProjectCard({ project }) {
	const { frontmatter } = project

	return (
		<div className="pCard">
			<div className="pCard-thumbnail">
				<Img src={frontmatter.thumbnail} />
			</div>
			<div className="pCard-details">
				<h3 className="pCard-title">{frontmatter.title}</h3>
				<p className="pCard-desc">{frontmatter.description}</p>
				<div className="pCard-used">
					{frontmatter.uses.map((u, i) => (
						<span key={i}>{u}</span>
					))}
				</div>
				<div className="pCard-btnGroup">
					{frontmatter.live_link && (
						<A
							eLink
							noStyle
							newTab
							href={frontmatter.live_link}
							title="see it live"
						>
							<FaLink />
						</A>
					)}
					{frontmatter.source_link && (
						<A
							eLink
							noStyle
							newTab
							href={frontmatter.source_link}
							title="see the source"
						>
							<FaCode />
						</A>
					)}
					{/* <Link to={`/projects/${project.id}`} title="read more">
						<FaArrowRight />
					</Link> */}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
