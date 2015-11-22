var path = require('path')

module.exports = {
    entry: [
      'babel-polyfill',
      "./javascripts/index.js"
    ],
    output: {
        path: "./dist",
        filename: "report.js"
    },
    module: {
      loaders: [
        {
          loader: "babel-loader",

          // Skip any files outside of your project's `src` directory
          include: [
            path.resolve(__dirname, "javascripts"),
          ],

          // Only run `.js`files through Babel
          test: /\.js?$/,

          // Options to configure babel with
          query: {
            plugins: ['transform-es2015-modules-commonjs', 'transform-runtime'],
            presets: ['es2015', 'stage-0'],
          }
        },
      ]
    }
  }
