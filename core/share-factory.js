var popup = require('./popup');

var count = 0;

module.exports = function (href, width, height) {
  function share() {
    var url = href.apply(this, arguments);
    popup(url, null, width, height);
  }

  share.defer = function (url) {
    url = url || 'about:blank';
    var name = 'sharon' + count++;

    popup(url, name, width, height);

    return function () {
      var url = href.apply(this, arguments);
      popup(url, name);
    };
  };

  share.href = href;
  return share;
};
