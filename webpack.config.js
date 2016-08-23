var webpack = require('webpack');

module.exports = {
  entry: "./app/components/Main.js",
  output: {
    filename: "public/index.js"
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime', 'transform-class-properties', 'transform-es2015-destructuring', 'transform-object-rest-spread'],
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
