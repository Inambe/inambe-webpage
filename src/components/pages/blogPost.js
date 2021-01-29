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
				<SEO
					title={blogPost.title}
					description={blogPost.metaDescription?.metaDescription}
				/>
				{blogPost.heroImage && (
					<Img
						fluid={blogPost.heroImage.fluid}
						style={{ height: 400 }}
						alt={blogPost.title}
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
					metaDescription {
						metaDescription
					}
					body {
						childMarkdownRemark {
							html
						}
					}
					heroImage {
						fluid(maxHeight: 400, cropFocus: CENTER) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`

export default BlogPost
