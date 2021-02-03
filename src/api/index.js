import constants from "../constants"

export const fixContentfulAssetURL = url => {
	if (url.startsWith(constants.HTTP_SCHEME)) return url

	return `${constants.HTTP_SCHEME}${url}`
}
