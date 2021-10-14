const merge = require('./merge');

module.exports = function (base, substitutions) {
  substitutions = substitutions || {};

  return function (url, options) {
    if (typeof url === 'string') {
      options = merge({url}, options);
    } else {
      options = merge({url: location}, url);
      if (substitutions.title) {
        options.title = options.title || document.title;
      }
    }

    const query = Object.keys(options).map(key => {
      const queryKey = substitutions[key] || key;
      if (Array.isArray(options[key])) {
        return queryKey + '=' + options[key].map(encodeURIComponent);
      }

      return queryKey + '=' + encodeURIComponent(options[key]);
    });

    return base + (~base.indexOf('?') ? '&' : '?') + query.join('&'); // eslint-disable-line no-implicit-coercion
  };
};
