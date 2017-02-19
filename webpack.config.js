module.exports = {
	entry: {
		App: "./app/assets/scripts/app.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: "./app/temp/scripts",
		// filename: "App.js"
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				// loader: 'babel',
				query: {
					// presets: [require.resolve('babel-preset-es2015')]
					presets: ['es2015']
				},
				// only apply babel to JS files, but not every single JS file
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};