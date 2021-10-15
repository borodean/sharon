/**
 * The definition of window.open:
 * https://html.spec.whatwg.org/multipage/browsers.html#dom-open
 *
 * The definition of the features argument:
 * https://drafts.csswg.org/cssom-view/#the-features-argument-to-the-open()-method
 */

module.exports = function (url, name, width, height) {
  if (width) {
    const top = Math.max(0, Math.round(screen.height / 3 - height / 2));
    const left = Math.round((screen.width - width) / 2);

    return window.open(
      url,
      name,
      'width=' +
        width +
        ',height=' +
        height +
        ',top=' +
        top +
        ',left=' +
        left +
        ',location,resizable,scrollbars,toolbar=no'
    );
  }

  return window.open(url, name);
};
