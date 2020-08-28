const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
    },
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: 'localhost',
    port: 5000,
    hot: true,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
