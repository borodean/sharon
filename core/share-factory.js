/**
 * The definition of window.open:
 * https://html.spec.whatwg.org/multipage/browsers.html#dom-open
 *
 * The definition of the features argument:
 * https://drafts.csswg.org/cssom-view/#the-features-argument-to-the-open()-method
 */

module.exports = function (href, width, height) {
  function share() {
    var url = href.apply(this, arguments);

    if (width) {
      var top = Math.max(0, Math.round(((screen.height / 3) - (height / 2))));
      var left = Math.round((screen.width - width) / 2);

      window.open(url, null, 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',location,resizable,scrollbars,toolbar=no');
    } else {
      window.open(url);
    }
  }

  share.href = href;
  return share;
};
