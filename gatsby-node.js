const path = require("path")
const { getWorkURL, getBlogURL } = require("./src/api")

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const blogPost = path.resolve("./src/components/blog/pages/blogPost.js")
	const workPost = path.resolve("./src/components/pages/workPost.js")

	const { data } = await graphql(`
		{
			allContentfulBlogPost(limit: 100) {
				edges {
					node {
						id
						slug
					}
				}
			}
			allContentfulWorkPost(limit: 100) {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	data.allContentfulBlogPost.edges.forEach(edge => {
		createPage({
			path: getBlogURL(edge.node.slug),
			component: blogPost,
			context: {
				slug: edge.node.slug,
			},
		})
	})
	data.allContentfulWorkPost.edges.forEach(edge => {
		createPage({
			path: getWorkURL(edge.node.slug),
			component: workPost,
			context: {
				slug: edge.node.slug,
			},
		})
	})
}
