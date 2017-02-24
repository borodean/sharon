var jsonp = require('@borodean/jsonp');

module.exports = function (base0, base1, callbacks) {
  return function (url, callback) {
    if (arguments.length < 2) {
      callback = url;
      url = location;
    }

    var id = callbacks.length;
    var src = base0 + encodeURIComponent(url) + base1 + id;

    jsonp(callbacks, id, src, callback);
  };
};
