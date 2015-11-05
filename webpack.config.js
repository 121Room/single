module.exports = {
    entry: "./public/javascripts/",
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
