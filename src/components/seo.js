import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { fixContentfulAssetURL } from "../api"
import useSEO from "../hooks/useSEO"

const SEO = ({ title, description, image, article }) => {
	const { pathname } = useLocation()
	const { contentfulSettings } = useStaticQuery(query)
	const {
		defaultTitle,
		defaultDescription,
		siteUrl,
		twitter,
		portrait,
	} = contentfulSettings

	const defaultImage = portrait.file.url

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${fixContentfulAssetURL(image || defaultImage)}`,
		url: `${siteUrl}${pathname}`,
		article,
		twitter,
		defaultTitle,
	}

	return useSEO(seo)
}

export default SEO

const query = graphql`
	query SEO {
		contentfulSettings {
			defaultTitle: title
			defaultDescription: description
			siteUrl
			twitter
			portrait {
				file {
					url
				}
			}
		}
	}
`
