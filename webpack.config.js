module.exports = {
	entry: "./app/assets/scripts/app.js",
	output: {
		path: "./app/temp/scripts",
		filename: "App.js"
	},
	// module: {
	// 	loader: [
	// 		{
	// 			loaders: 'babel-loader',
	// 			query: {
	// 				presets: [require.resolve('babel-preset-es2015')]
	// 			},
	// 			// only apply babel to JS files, but not every single JS file
	// 			test: /\.js$/,
	// 			exclude: /node_modules/
	// 		}
	// 	]
	// }
};