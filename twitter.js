/**
 * Reference:
 * https://dev.twitter.com/web/tweet-button/web-intent
 */

var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://twitter.com/intent/tweet', {
  title: 'text'
});

module.exports = _shareFactory(href, 550, 420);
