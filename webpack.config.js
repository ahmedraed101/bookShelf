const path = require('path')
module.exports = {
    mode: "production",
    entry: {
        index: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "src/index.js")],
        likes: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "src/likes.js")],
        showbook: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "src/showbook.js")],
        topic: ["regenerator-runtime/runtime.js", path.resolve(__dirname, "src/topic.js")]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                }
            }
        }]
    },
    output: {
        path: path.join(__dirname, "dist/scripts"),
        filename: "[name]-bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 4006,
        open: true,
        hot:true,
        compress: true,
        historyApiFallback: true
    }
}