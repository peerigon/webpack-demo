const path = require("path");

module.exports = {
    entry: require.resolve("./app/main"),
    output: {
        path: "dist",
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "app"),
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(jpe?g|gif|png)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            }
        ]
    }
};
