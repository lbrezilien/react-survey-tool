
module.exports = {

  entry: {
    main: ['./src/main.jsx']
  },
  output: {
    filename: './app/[name].js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
  }
}
