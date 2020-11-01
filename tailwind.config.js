const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [
		"./src/**/*.js",
		"./src/**/*.jsx",
		"./src/**/*.ts",
		"./src/**/*.tsx",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2872ff",
			},
			borderWidth: {
				"half-rem": "0.5rem",
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			maxHeight: {
				"main-nav-header": "4rem",
			},
			minHeight: {
				// 1rem of borders + 4rem of header + 6rem of container padding - 100vh
				"full-in-container": "calc(100vh - (1rem + 4rem + 6rem))",
			},
		},
	},
	variants: {},
	plugins: [],
}
