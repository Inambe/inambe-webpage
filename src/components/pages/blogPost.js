import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Heading from "../heading"
import SEO from "../seo"
import LayoutRoot from "../../layouts/root"
import MainLayout from "../../layouts/main"
import Tag from "../tag"

function BlogPost({ data }) {
	const blogPost = data.allContentfulBlogPost.edges[0].node

	return (
		<LayoutRoot>
			<MainLayout>
				<SEO
					title={blogPost.title}
					description={blogPost.metaDescription?.metaDescription}
				/>
				<div className="mb-6 space-y-2">
					{blogPost.heroImage && (
						<Img
							fluid={blogPost.heroImage.fluid}
							style={{ height: 400 }}
							alt={blogPost.title}
						/>
					)}
					<Heading bare>{blogPost.title}</Heading>
					<div className="flex items-center text-xs">
						<time dateTime={blogPost.publishDate}>
							{blogPost.publishDateText}
						</time>
						<span className="mx-2">—</span>
						<span>
							{blogPost.tags &&
								blogPost.tags.map((t, i) => (
									<Tag key={i}>{t}</Tag>
								))}
						</span>
					</div>
				</div>
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
					tags
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
					publishDateText: publishDate(formatString: "DD MMMM, YYYY")
					publishDate: publishDate(formatString: "YYYY-MM-DD")
				}
			}
		}
	}
`

export default BlogPost
