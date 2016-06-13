const path = require("path");

module.exports = {
    entry: require.resolve("./app/main"),
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "app"),
                loader: "babel-loader"
            }
        ]
    },
    devtool: "eval-source-map"
};
