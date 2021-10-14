/**
 * Merges source object into target
 * Required until Object.assign gets wide browser support:
 * http://kangax.github.io/compat-table/es6/#test-Object_static_methods_Object.assign
 */

module.exports = function (target, source) {
  if (source) {
    for (const key of Object.keys(source)) {
      target[key] = source[key];
    }
  }

  return target;
};
