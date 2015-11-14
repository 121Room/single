// TODO use babel loader

module.exports = {
    entry: "./javascripts/index.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
