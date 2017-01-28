var jsonp = require('jsonp');

module.exports = function (base, parser) {
  return function (url, callback) {
    if (arguments.length < 2) {
      callback = url;
      url = location;
    }

    jsonp(base + '=' + encodeURIComponent(url), function (err, data) {
      if (err) {
        return callback(err);
      }
      callback(null, parser(data));
    });
  };
};
