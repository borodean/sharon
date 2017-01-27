module.exports = {
  entry: 'index.js',
  format: 'umd',
  moduleName: require('./package.json').name,
  plugins: [
    require('rollup-plugin-commonjs')()
  ]
};
