import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { fixContentfulAssetURL } from "../../api"
import useSEO from "../../hooks/useSEO"

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
		defaultTitle,
		twitter,
		article,
	}

	return useSEO(seo)
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
