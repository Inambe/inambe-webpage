import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Disqus } from "gatsby-plugin-disqus"

import Heading from "../heading"
import SEO from "../seo"
import LayoutRoot from "../../layouts/root"
import MainLayout from "../../layouts/main"
import Tag from "../tag"

function BlogPost({ location, data }) {
	const blogPost = data.allContentfulBlogPost.edges[0].node
	const postUrl = data.site.siteMetadata.siteUrl + location.pathname

	return (
		<LayoutRoot>
			<MainLayout>
				<SEO
					title={blogPost.title}
					description={blogPost.metaDescription?.metaDescription}
					image={blogPost.heroImage?.file.url}
					article
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
					<div className="flex md:items-center flex-col md:flex-row space-y-2 md:space-y-0 text-xs">
						<time dateTime={blogPost.publishDate}>
							{blogPost.publishDateText}
						</time>
						<span className="hidden md:block mx-2">—</span>
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
				<Disqus
					config={{
						/* Replace PAGE_URL with your post's canonical URL variable */
						url: postUrl,
						/* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
						identifier: blogPost.slug,
						/* Replace PAGE_TITLE with the title of the page */
						title: blogPost.title,
					}}
				/>
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
					slug
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
						fluid(maxWidth: 800, cropFocus: CENTER, quality: 100) {
							...GatsbyContentfulFluid
						}
					}
					publishDateText: publishDate(formatString: "DD MMMM, YYYY")
					publishDate: publishDate(formatString: "YYYY-MM-DD")
				}
			}
		}
		site {
			siteMetadata {
				siteUrl
			}
		}
	}
`

export default BlogPost
