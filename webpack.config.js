module.exports = {
	entry: './index.jsx',
	output: {
		path: __dirname,
		filename: 'index.js',
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react'],
				plugins: ['transform-class-properties'],
			},
		}],
	},
};
