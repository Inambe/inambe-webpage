/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		siteUrl: "https://inambe.dev",
	},
	plugins: [
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images-contentful",
						options: {
							maxWidth: 800,
						},
					},
					{ resolve: `gatsby-remark-prismjs`, options: {} },
				],
			},
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				sitemap: null,
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		"gatsby-plugin-sitemap",
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-159434559-1",
				head: true,
			},
		},
		"gatsby-plugin-postcss",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: "./src/static/media/imgs/inam-bnw-cropped-1x1.png",
				name: `Inam Ul Haq`,
				short_name: `Inambe`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#2872ff`,
				display: `standalone`,
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: "16ws5xghsvsm",
				accessToken: "sVG5e9WFlIO52PsiBD2eI6G98uEq5XRjdcdYdNxP-tk",
			},
		},
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `inambe-dev`,
			},
		},
	],
}
