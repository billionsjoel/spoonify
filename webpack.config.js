const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'modules/assets/css/style.css',
			chunkFilename: 'modules/assets/css/[id].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpeg|jpg|gif)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash:6].[ext]',
						outputPath: 'images',
						publicPath: 'images',
						emitFile: true,
						esModule: false,
					},
				},
			},
		],
	},
	devServer: {
		static: './dist',
	},
};
