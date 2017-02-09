var merge = require('./merge');

module.exports = function (base, substitutions) {
  substitutions = substitutions || {};

  return function (url, options) {
    if (typeof url === 'string') {
      options = merge({url: url}, options);
    } else {
      options = merge({url: location}, url);
      if (substitutions.title) {
        options.title = options.title || document.title;
      }
    }

    var query = Object.keys(options).map(function (key) {
      var queryKey = substitutions[key] || key;
      if (Array.isArray(options[key])) {
        return queryKey + '=' + options[key].map(encodeURIComponent);
      }
      return queryKey + '=' + encodeURIComponent(options[key]);
    });

    return base + '?' + query.join('&');
  };
};
