const constants = require("../constants")

module.exports.fixContentfulAssetURL = url => {
	if (url.startsWith(constants.HTTP_SCHEME)) return url

	return `${constants.HTTP_SCHEME}${url}`
}

module.exports.getWorkURL = slug => {
	return `/work/${slug}/`
}

module.exports.getBlogURL = slug => {
	return `/blog/${slug}/`
}
