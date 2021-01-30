/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: "Inam Ul Haq",
		titleTemplate: "%s | Inam Ul Haq",
		description:
			"Inam Ul Haq is a software developer from Sialkot, Pakistan. He build Web, Desktop, and Mobile applications.",
		siteUrl: "https://inambe.dev", // No trailing slash allowed!
		twitterUsername: "@MeInamUlHaq",
	},
	plugins: [
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
				appName: "Inam Ul Haq", // Inferred with your package.json
				developerName: "Inam Ul Haq",
				developerURL: "https://inambe.dev",
				theme_color: "#2872ff",
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: "16ws5xghsvsm",
				accessToken: "sVG5e9WFlIO52PsiBD2eI6G98uEq5XRjdcdYdNxP-tk",
			},
		},
	],
}
