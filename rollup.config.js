module.exports = {
  entry: 'index.js',
  format: 'umd',
  moduleName: require('./package.json').name,
  plugins: [
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-filesize')(),
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-uglify')({
      compress: {
        collapse_vars: true,
        unsafe: true
      },
      mangle: true
    })
  ]
};
