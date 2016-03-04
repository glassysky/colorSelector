var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	plugins: [commonsPlugin],
	entry: {
		index: './app/src/js/page/entry.js'
	},
	output: {
		path: './app/dist/',
		filename: '[name].bundle.js'// name => entry's key
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.js$/, loader: 'babel' },
			{ test: /\.less$/, loader: 'style!css!less' },
			{ test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
			{ test: /\.jsx$/, loader: 'babel!jsx?harmony'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.json', '.less', '.jsx']
	}
}