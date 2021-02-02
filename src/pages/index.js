import React from "react"
import { graphql, Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa"

import Hero from "../components/hero"
import SEO from "../components/seo"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"
import Heading from "../components/heading"
import BlogPostCard from "../components/blogPostCard"
import Button from "../components/button"

function Home({ data }) {
	const blogPosts = data.allContentfulBlogPost.edges

	return (
		<LayoutRoot>
			<SEO title="Home" />
			<MainLayout>
				<div className="space-y-12">
					<Hero />
					<section className="space-y-6">
						<Heading bare>Blog</Heading>
						<div className="grid grid-cols-1 gap-4">
							{blogPosts.map(({ node }, i) => (
								<BlogPostCard key={i} node={node} />
							))}
						</div>
						<div className="text-center">
							<Link to="/blog">
								<Button>
									More <FaArrowRight />
								</Button>
							</Link>
						</div>
					</section>
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
					publishDateText: publishDate(formatString: "DD MMMM, YYYY")
					publishDate: publishDate(formatString: "YYYY-MM-DD")
					slug
					tags
				}
			}
		}
	}
`

export default Home
