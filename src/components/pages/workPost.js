import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Heading from "../heading"
import SEO from "../seo"
import LayoutRoot from "../../layouts/root"
import MainLayout from "../../layouts/main"
import Tag from "../tag"

function WorkPost({ data }) {
	const workPost = data.allContentfulWorkPost.edges[0].node

	return (
		<LayoutRoot>
			<MainLayout>
				<SEO
					title={workPost.title}
					description={workPost.metaDescription?.metaDescription}
					image={workPost.heroImage?.file.url}
				/>
				<div className="mb-6 space-y-2">
					{workPost.heroImage && (
						<Img
							fluid={workPost.heroImage.fluid}
							style={{ height: 400 }}
							alt={workPost.title}
						/>
					)}
					<Heading bare>{workPost.title}</Heading>
					<div className="flex items-center text-xs">
						<span>
							{workPost.tags &&
								workPost.tags.map((t, i) => (
									<Tag key={i}>{t}</Tag>
								))}
						</span>
					</div>
				</div>
				<div
					className="content"
					dangerouslySetInnerHTML={{
						__html: workPost.body.childMarkdownRemark.html,
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
						file {
							url
						}
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
