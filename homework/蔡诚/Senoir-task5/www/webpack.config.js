module.exports = {
    entry: './src/js/app/index.js',
    output: {
        path: '/Users/decolo/Desktop/Senoir-task5/www/bin',
        filename: 'index.merge.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}