import React from "react"
import { graphql, Link } from "gatsby"

import Hero from "../components/hero"
import SEO from "../components/seo"
import MainLayout from "../layouts/main"
import LayoutRoot from "../layouts/root"
import Heading from "../components/heading"
import BlogPostCard from "../components/blogPostCard"
import Button from "../components/button"
import { FaArrowRight } from "react-icons/fa"

function Home({ data }) {
	const blogPosts = data.allContentfulBlogPost.edges

	return (
		<LayoutRoot>
			<SEO title="Home" />
			<MainLayout>
				<div className="space-y-8">
					<Hero />
					<section className="space-y-6">
						<Heading bare>Blog</Heading>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
	}
`

export default Home
