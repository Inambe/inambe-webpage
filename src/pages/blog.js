import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"
import Heading from "../components/heading"
import BlogPostCard from "../components/blogPostCard"

function Home({ data }) {
	const blogPosts = data.allContentfulBlogPost.edges

	return (
		<LayoutRoot>
			<SEO title="Home" />
			<MainLayout>
				<Heading>Blog</Heading>
				<div className="grid grid-cols-1 gap-4">
					{blogPosts.map(({ node }, i) => (
						<BlogPostCard key={i} node={node} />
					))}
				</div>
			</MainLayout>
		</LayoutRoot>
	)
}

export const query = graphql`
	{
		allContentfulBlogPost(
			limit: 3
			sort: { fields: publishDate, order: DESC }
		) {
			edges {
				node {
					title
					heroImage {
						fluid(maxWidth: 800, cropFocus: CENTER) {
							...GatsbyContentfulFluid
						}
					}
					description {
						childMarkdownRemark {
							html
						}
					}
					publishDateText: publishDate(
						formatString: "DD MMMM, YYYY"
						locale: ""
					)
					publishDate: publishDate(formatString: "YYYY-MM-DD")
					slug
					tags
				}
			}
		}
	}
`

export default Home
