import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/blog/seo"
import BlogPostCard from "../components/blogPostCard"
import BlogLayout from "../components/blog/layout"
import PostHeading from "../components/blog/postHeading"

function Home({ data }) {
	const blogPosts = data.allContentfulBlogPost.edges
	const description = data.contentfulBlog.description

	return (
		<BlogLayout>
			<SEO title="Home" />
			<div className="pb-8 border-b">
				<PostHeading>Latest</PostHeading>
				<p className="text-base text-gray-500">{description}</p>
			</div>
			<div className="grid grid-cols-1">
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
