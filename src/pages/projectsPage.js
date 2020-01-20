import React from "react";
import { Row, Col } from "react-grid-system";

import Container from "../components/container";
import ProjectCard from "../components/projectCard";

import projects from "./../api/projects";

const allProjects = projects.all();

function ProjectsPage() {
	return (
		<main>
			<Container>
				<Row>
					{allProjects.length &&
						allProjects.map((p, i) => (
							<Col key={i} md={6}>
								<ProjectCard project={p} />
							</Col>
						))}
				</Row>
			</Container>
		</main>
	);
}

export default ProjectsPage;
