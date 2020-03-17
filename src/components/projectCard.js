import React from "react";
import { FaCode, FaLink } from "react-icons/fa";
import "./projectCard.css";

import Img from "./img";
import A from "./a";

function ProjectCard({ project }) {
	return (
		<div className="pCard">
			<div className="pCard-thumbnail">
				<Img src={require("./../static/media/imgs/" + project.img)} />
			</div>
			<div className="pCard-details">
				<h3 className="pCard-title">{project.title}</h3>
				<p className="pCard-desc">{project.description}</p>
				<div className="pCard-used">
					{project.uses.map((u, i) => (
						<span key={i}>{u.name}</span>
					))}
				</div>
				<div className="pCard-btnGroup">
					{project.live_link && (
						<A noStyle newTab href={project.live_link} title="live">
							<FaLink />
						</A>
					)}
					{project.code_link && (
						<A
							noStyle
							newTab
							href={project.code_link}
							title="see the code"
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
	);
}

export default ProjectCard;
