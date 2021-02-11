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
			screens: {
				"max-md": { max: defaultTheme.screens.md },
			},
		},
	},
	variants: {},
	plugins: [],
	corePlugins: {
		container: false,
	},
}
