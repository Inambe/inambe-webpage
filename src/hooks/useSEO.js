import React from "react"
import { Helmet } from "react-helmet"

const useSEO = seo => {
	return (
		<Helmet title={seo.title} titleTemplate={`%s — ${seo.defaultTitle}`}>
			<link rel="canonical" href={seo.url} />
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			<meta property="og:url" content={seo.url} />
			{seo.article && <meta property="og:type" content="article" />}
			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />

			<meta
				name="twitter:card"
				content={seo.twitterCard || "summary_large_image"}
			/>
			<meta name="twitter:creator" content={seo.twitter} />
			<meta name="twitter:site" content={seo.twitter} />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
		</Helmet>
	)
}

export default useSEO
