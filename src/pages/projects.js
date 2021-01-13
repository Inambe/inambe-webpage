import React from "react"
import { graphql } from "gatsby"

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
				<div className="grid gap-3 grid-cols-1 md:grid-cols-2">
					{projects.length &&
						projects.map((project, i) => (
							<article key={i}>
								<ProjectCard project={project.node} />
							</article>
						))}
				</div>
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
