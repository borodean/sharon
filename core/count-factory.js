var jsonp = require('@borodean/jsonp');

module.exports = function (base, parser, parameter) {
  return function (url, callback) {
    if (arguments.length < 2) {
      callback = url;
      url = location;
    }

    jsonp({
      url: base + '=' + encodeURIComponent(url),
      parameter: parameter
    }, function (err, data) {
      if (err) {
        return callback(err);
      }
      callback(null, parser(data));
    });
  };
};
