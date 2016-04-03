/**
 * Created by joshoy on 16/4/3.
 */

var path = require("path");
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  entry: [
    path.resolve(__dirname, 'app/main.js')
  ],
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,   // 匹配所有的.js和.jsx文件
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {
        test: /\.css$/,      // Only .css files
        loader: 'style!css'  // Run both loaders
      },
      // LESS
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      // Images
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      // Fonts
      {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      }
    ],
    noParse: [pathToReact]
  }
};

module.exports = config;