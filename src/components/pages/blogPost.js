import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Heading from "../heading"
import SEO from "../seo"
import LayoutRoot from "../../layouts/root"
import MainLayout from "../../layouts/main"

function BlogPost({ data }) {
	const blogPost = data.allContentfulBlogPost.edges[0].node

	return (
		<LayoutRoot>
			<MainLayout>
				<SEO title={blogPost.title} />
				{blogPost.heroImage && (
					<Img
						fluid={blogPost.heroImage.fluid}
						style={{ height: 300 }}
					/>
				)}
				<Heading page>{blogPost.title}</Heading>
				<div
					className="content"
					dangerouslySetInnerHTML={{
						__html: blogPost.body.childMarkdownRemark.html,
					}}
				></div>
			</MainLayout>
		</LayoutRoot>
	)
}

export const query = graphql`
	query($slug: String!) {
		allContentfulBlogPost(filter: { slug: { eq: $slug } }) {
			edges {
				node {
					title
					body {
						childMarkdownRemark {
							html
						}
					}
					heroImage {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`

export default BlogPost
