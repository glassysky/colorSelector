var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	plugins: [commonsPlugin],
	entry: {
		index: './app/src/js/page/index.js'
	},
	output: {
		path: './app/dist/js/page',
		filename: '[name].bundle.js'// name => entry's key
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.js$/, loader: 'jsx-loader?harmony' },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader?sourceMap' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.less']
	}
}