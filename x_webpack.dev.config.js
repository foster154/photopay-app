var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
          { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development'),
        'STRIPE_PUBLISHABLE_KEY': JSON.stringify('pk_test_ytV814lZralEMSiDXYjESlg1')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}