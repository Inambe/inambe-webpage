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
		},
	},
	variants: {},
	plugins: [],
}