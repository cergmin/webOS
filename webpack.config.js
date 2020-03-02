let path = require('path');

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
    devServer: {
		hot: false,
        inline: false
	}
};

module.exports = conf;
