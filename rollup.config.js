/* eslint-disable camelcase */

module.exports = {
  input: 'index.js',
  output: {
    exports: 'default',
    format: 'iife',
    name: require('./package.json').name,
    sourcemap: true
  },
  plugins: [
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-filesize')(),
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-uglify').uglify({
      compress: {
        collapse_vars: true,
        unsafe: true
      },
      mangle: true
    })
  ]
};
