var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/js/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loaders: ['react-hot-loader', 'babel-loader'],
				exclude: /node_modules/,
				include: __dirname
			},
			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
					'postcss-loader',
				],
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(woff2?|ttf|eot|svg)$/,
				loaders: ['url-loader?limit=10000'],
			},
		]
	},
	devServer: {
		historyApiFallback: true
	},
	devtool: 'source-map',
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
