import path from 'path';
import webpack from 'webpack';

export default {
	devtools: 'eval-source-map', 
	entry: [ 
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors/
        'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, '/client/index.js'),
	],
	output: {
		filename: 'bundle.js',
		path: '/',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()	
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'client'),
				loaders: [ 'react-hot-loader/webpack', 'babel' ]
			}
		]
	},
	resolve: {
		extentions: ['', '.js', '.jsx']
	}
}