const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let config = {
	output: {
		filename: "[name].bundle.js"
	},
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					"css-loader"
				]
			}
		]
	}
};
module.exports = (env, argv) => {
	const { mode } = argv;
	process.env.NODE_ENV = mode;
	const developing = mode !== "production" ? true : false;

	if (developing) {
		// config for development only
	} else {
		// config for production only
	}

	return config;
};
