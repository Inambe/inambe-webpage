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
			"Inam Ul Huq is a software developer from Sialkot, Pakistan. He build Web, Desktop, and Mobile applications.",
		siteUrl: "https://inambe.dev", // No trailing slash allowed!
		image: "/images/inam-ul-huq.png", // Path to your image you placed in the 'static' folder
		twitterUsername: "@MeInamUlHuq",
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `media`,
				path: `${__dirname}/content/media`,
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
		"gatsby-plugin-sitemap",
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-159434559-1",
				head: true,
				exclude: ["/admin"],
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		"gatsby-plugin-postcss",
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/static/media/imgs/inam-bnw-cropped-1x1.png",
				appName: "Inam Ul Huq", // Inferred with your package.json
				developerName: "Inam Ul Huq",
				developerURL: "https://inambe.dev",
				theme_color: "#2872ff",
			},
		},
	],
}
