import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { fixContentfulAssetURL } from "../api"

const SEO = ({ title, description, image, article }) => {
	const { pathname } = useLocation()
	const { site, contentfulSettings } = useStaticQuery(query)
	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
		twitterUsername,
	} = site.siteMetadata

	const defaultImage = contentfulSettings.portrait.file.url

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${fixContentfulAssetURL(image || defaultImage)}`,
		url: `${siteUrl}${pathname}`,
	}

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<link rel="canonical" href={seo.url} />
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			<meta property="og:url" content={seo.url} />
			{article && <meta property="og:type" content="article" />}
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={twitterUsername} />
			<meta name="twitter:site" content={twitterUsername} />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
		</Helmet>
	)
}

export default SEO

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: siteUrl
				twitterUsername
			}
		}
		contentfulSettings {
			portrait {
				file {
					url
				}
			}
		}
	}
`
