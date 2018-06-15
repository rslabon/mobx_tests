const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        pathinfo: true,
        publicPath: "/"
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                loader: require.resolve("babel-loader"),
                options: {
                    cacheDirectory: true
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};