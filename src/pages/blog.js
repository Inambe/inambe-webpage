import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/blog/seo"
import BlogPostCard from "../components/blogPostCard"
import BlogLayout from "../components/blog/layout"

function Home({ data }) {
	const blogPosts = data.allContentfulBlogPost.edges
	const description = data.contentfulBlog.description

	return (
		<BlogLayout>
			<SEO title="Home" />
			<div className="mb-6">
				<p>{description}</p>
			</div>
			<div className="grid grid-cols-1 gap-4">
				{blogPosts.map(({ node }, i) => (
					<BlogPostCard key={i} node={node} />
				))}
			</div>
		</BlogLayout>
	)
}

export const query = graphql`
	{
		allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
			edges {
				node {
					title
					heroImage {
						fluid(maxWidth: 800, cropFocus: CENTER, quality: 100) {
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
		contentfulBlog {
			description
		}
	}
`

export default Home
