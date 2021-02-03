import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { fixContentfulAssetURL } from "../../api"

const SEO = ({ title, description, image, article }) => {
	const { pathname } = useLocation()
	const { contentfulSettings, contentfulBlog } = useStaticQuery(query)

	const { defaultTitle, defaultDescription, defaultImage } = contentfulBlog
	const { siteUrl, twitter } = contentfulSettings

	const defaultImageURL = defaultImage.file.url

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${fixContentfulAssetURL(image || defaultImageURL)}`,
		url: `${siteUrl}${pathname}`,
	}

	return (
		<Helmet title={seo.title} titleTemplate={`%s — ${defaultTitle}`}>
			<link rel="canonical" href={seo.url} />
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			<meta property="og:url" content={seo.url} />
			{article && <meta property="og:type" content="article" />}
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={twitter} />
			<meta name="twitter:site" content={twitter} />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
		</Helmet>
	)
}

export default SEO

const query = graphql`
	query BlogSEO {
		contentfulSettings {
			siteUrl
			twitter
		}
		contentfulBlog {
			defaultTitle: title
			defaultDescription: description
			defaultImage: image {
				file {
					url
				}
			}
		}
	}
`
