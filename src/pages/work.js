import React from "react"
import { graphql } from "gatsby"

import WorkPostCard from "../components/workPostCard"
import SEO from "../components/seo"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"

function WorkPage({ data }) {
	const workPosts = data.allContentfulWorkPost.edges

	return (
		<LayoutRoot>
			<SEO
				title="Work"
				description="List of work Inam has done or currently doing."
			/>
			<MainLayout>
				<div className="grid gap-3 grid-cols-1 md:grid-cols-2">
					{workPosts.length &&
						workPosts.map(({ node }, i) => (
							<WorkPostCard key={i} workPost={node} />
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
					slug
					tags
					heroImage {
						fluid(maxWidth: 800, cropFocus: CENTER) {
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
export default WorkPage
