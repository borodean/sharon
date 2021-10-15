const popup = require('./popup.js');

let count = 0;

module.exports = function (href, width, height) {
  function share() {
    const url = Reflect.apply(href, this, arguments);
    return popup(url, null, width, height);
  }

  share.defer = function (url = 'about:blank') {
    const name = 'sharon' + count++;

    popup(url, name, width, height);

    return function () {
      const url = Reflect.apply(href, this, arguments);
      return popup(url, name);
    };
  };

  share.href = href;
  return share;
};
