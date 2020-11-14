const webpack = require('webpack');

const plugins = [new webpack.HotModuleReplacementPlugin()];

module.exports = require('./webpack.base')({
  mode: 'development',
  devServer: {
    hot: true,
    port: 3001,
    historyApiFallback: true,
  },
  plugins,
});
