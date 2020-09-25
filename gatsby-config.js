/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: "Inam Ul Huq",
		titleTemplate: "%s | Inam Ul Huq",
		description:
			"Inam Ul Huq is a software developer. He use JavaScript, PHP, Flutter and many other tools to develop, maintain, and fix software applications.",
		url: "https://inambe.dev", // No trailing slash allowed!
		image: "/images/inam-ul-huq.png", // Path to your image you placed in the 'static' folder
		twitterUsername: "@MeInamUlHuq",
		siteUrl: "https://inambe.dev",
	},
	plugins: [
		"gatsby-plugin-netlify-cms",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/content/projects`,
			},
		},
		"gatsby-transformer-remark",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				sitemap: null,
				policy: [{ userAgent: "*", allow: "/", disallow: "/admin" }],
			},
		},
	],
}
