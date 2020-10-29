import { graphql } from "gatsby"
import React from "react"
import { Row, Col } from "react-grid-system"

import ProjectCard from "../components/projectCard"
import SEO from "../components/seo"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"

function ProjectsPage({ data }) {
	const projects = data.allMarkdownRemark.edges

	return (
		<LayoutRoot>
			<SEO
				title="Projects"
				description="List of projects I've developed or currently working on."
			/>
			<MainLayout>
				<main>
					<Row>
						{projects.length &&
							projects.map((project, i) => (
								<Col key={i} md={6}>
									<ProjectCard project={project.node} />
								</Col>
							))}
					</Row>
				</main>
			</MainLayout>
		</LayoutRoot>
	)
}
export const query = graphql`
	{
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/projects/" } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						description
						uses
						source_link
						live_link
						thumbnail
					}
				}
			}
		}
	}
`
export default ProjectsPage
