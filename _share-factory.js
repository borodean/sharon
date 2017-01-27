/**
 * The definition of window.open:
 * https://html.spec.whatwg.org/multipage/browsers.html#dom-open
 *
 * The definition of the features argument:
 * https://drafts.csswg.org/cssom-view/#the-features-argument-to-the-open()-method
 */

module.exports = function (href, options) {
  function share() {
    var url = href.apply(this, arguments);

    options = Object.assign({}, options);

    if (options.width) { // maybe always have them??
      options.left = Math.round((screen.width - options.width) / 2);
    }

    if (screen.height > options.height) {
      options.top = Math.round((screen.height - options.height) / 2);
    }

    var features = Object.keys(options).map(function (key) {
      return key + '=' + options[key];
    }).join();

    window.open(url, null, features);
  }

  options = options || {};
  share.href = href;

  return share;
};
