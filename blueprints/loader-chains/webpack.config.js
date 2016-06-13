const path = require("path");
const autoprefixer = require("autoprefixer");

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
                test: /\.less$/,
                loaders: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    }
};
