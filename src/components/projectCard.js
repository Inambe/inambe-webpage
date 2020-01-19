import React from "react";
import { FaCode, FaLink, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./projectCard.css";

import Img from "./img";

function ProjectCard({ project }) {
	return (
		<div className="pCard">
			<div className="pCard-thumbnail">
				<Img src={require("./../static/media/imgs/" + project.img)} />
			</div>
			<div className="pCard-details">
				<h3 className="pCard-title">{project.title}</h3>
				<div className="pCard-used">
					{project.uses.map(u => (
						<span>{u.name}</span>
					))}
				</div>
				<div className="pCard-btnGroup">
					{project.live_link && (
						<a href={project.live_link} title="live">
							<FaLink />
						</a>
					)}
					{project.code_link && (
						<a href={project.code_link} title="see the code">
							<FaCode />
						</a>
					)}
					<Link to={`/projects/${project.id}`} title="read more">
						<FaArrowRight />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
