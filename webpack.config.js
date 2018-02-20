module.exports = {
  context: __dirname,
  entry: "./frontend/scripts/entry.jsx",
    output: {
        path: __dirname,
        filename: "./frontend/bundle.js"
    },
    resolve: {
      extensions: ['.js', '.jsx', '*']
    },
    module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }
      ]
    },
    devtool: 'source-maps',
    watch: true
};
