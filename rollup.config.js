/* eslint-disable camelcase */

module.exports = {
  entry: 'index.js',
  format: 'iife',
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
  ],
  sourceMap: true
};
