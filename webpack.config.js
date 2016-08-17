var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Navbar: 'app/components/Navbar.jsx',
			Timer: 'app/components/Timer.jsx',
			Countdown: 'app/components/Countdown.jsx',
			Clock: 'app/components/Clock.jsx',
			applicationStyles: 'app/styles/app.scss'
			//Greeter: 'public/components/Greeter.jsx',
		},
		extensions: ['','.js','.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015','stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};