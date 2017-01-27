/**
 * Reference:
 * https://dev.twitter.com/web/tweet-button/web-intent
 */

var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://twitter.com/intent/tweet', {
  title: 'text'
});

module.exports = _shareFactory(href, {
  height: 420,
  location: 'yes',
  resizable: 'yes',
  scrollbars: 'yes',
  toolbar: 'no',
  width: 550
});
