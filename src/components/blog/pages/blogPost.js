import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Disqus } from "gatsby-plugin-disqus"
import { FaCalendarAlt } from "react-icons/fa"

import SEO from "../seo"
import Tag from "../../tag"
import BlogLayout from "../layout"
import PostHeading from "../postHeading"

function BlogPost({ location, data }) {
	const blogPost = data.allContentfulBlogPost.edges[0].node
	const postUrl = data.contentfulSettings.siteUrl + location.pathname

	return (
		<BlogLayout>
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
				<PostHeading>{blogPost.title}</PostHeading>
				<div className="space-y-2 text-sm">
					<div>
						{blogPost.tags &&
							blogPost.tags.map((t, i) => <Tag key={i}>{t}</Tag>)}
					</div>
					<div className="flex items-center">
						<FaCalendarAlt className="mr-1" />
						<time dateTime={blogPost.publishDate}>
							{blogPost.publishDateText}
						</time>
					</div>
				</div>
			</div>
			<div
				className="content"
				dangerouslySetInnerHTML={{
					__html: blogPost.body.childMarkdownRemark.html,
				}}
			></div>
			<Disqus
				className="mt-12"
				config={{
					/* Replace PAGE_URL with your post's canonical URL variable */
					url: postUrl,
					/* Replace PAGE_IDENTIFIER with your page's unique identifier variable */
					identifier: blogPost.slug,
					/* Replace PAGE_TITLE with the title of the page */
					title: blogPost.title,
				}}
			/>
		</BlogLayout>
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
		contentfulSettings {
			siteUrl
		}
	}
`

export default BlogPost
