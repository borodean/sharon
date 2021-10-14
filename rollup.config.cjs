/* eslint-disable camelcase */

const commonjs = require('@rollup/plugin-commonjs');
const filesize = require('rollup-plugin-filesize');
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const {terser} = require('rollup-plugin-terser');
const {name} = require('./package.json');

module.exports = {
  input: 'index.cjs',
  output: {
    exports: 'default',
    format: 'iife',
    name,
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    filesize(),
    nodeResolve(),
    terser({
      compress: {
        collapse_vars: true,
        unsafe: true,
      },
      mangle: true,
    }),
  ],
};
