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
				<div className="flex flex-col md:flex-row md:flex-wrap md:-mx-2">
					{projects.length &&
						projects.map((project, i) => (
							<article
								className="w-full mb-2 md:w-1/2 md:px-2 lg:w-1/3"
								key={i}
							>
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
