module.exports = {
    entry: "./public/javascripts/index.js",
    output: {
        path: "./public/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
