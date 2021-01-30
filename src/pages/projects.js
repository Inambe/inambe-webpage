import React from "react"
import { graphql } from "gatsby"

import ProjectCard from "../components/projectCard"
import SEO from "../components/seo"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"

function ProjectsPage({ data }) {
	const projects = data.allContentfulWorkPost.edges

	return (
		<LayoutRoot>
			<SEO
				title="Projects"
				description="List of projects Inam has developed or currently working on."
			/>
			<MainLayout>
				<div className="grid gap-3 grid-cols-1 md:grid-cols-2">
					{projects.length &&
						projects.map(({ node }, i) => (
							<article key={i}>
								<ProjectCard project={node} />
							</article>
						))}
				</div>
			</MainLayout>
		</LayoutRoot>
	)
}
export const query = graphql`
	{
		allContentfulWorkPost(
			sort: { fields: heroImage___createdAt, order: DESC }
		) {
			edges {
				node {
					title
					tags
					heroImage {
						fluid {
							...GatsbyContentfulFluid
						}
					}
					liveLink
					sourceLink
					description {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
	}
`
export default ProjectsPage
