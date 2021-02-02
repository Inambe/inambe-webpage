import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Heading from "../heading"
import SEO from "../seo"
import LayoutRoot from "../../layouts/root"
import MainLayout from "../../layouts/main"

function WorkPost({ data }) {
	const blogPost = data.allContentfulWorkPost.edges[0].node

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
						className="mb-6"
					/>
				)}
				<Heading>{blogPost.title}</Heading>
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
		allContentfulWorkPost(filter: { slug: { eq: $slug } }) {
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
						fluid(maxWidth: 800, cropFocus: CENTER) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`

export default WorkPost
