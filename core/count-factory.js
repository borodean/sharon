const jsonp = require('@borodean/jsonp');

module.exports = function (base, parser, parameter) {
  return function (url, callback) {
    if (arguments.length < 2) {
      callback = url;
      url = location;
    }

    jsonp({
      url: base + '=' + encodeURIComponent(url),
      parameter,
    }, (error, data) => {
      if (error) {
        return callback(error);
      }

      callback(null, parser(data));
    });
  };
};
