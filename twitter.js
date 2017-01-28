/**
 * Reference:
 * https://dev.twitter.com/web/tweet-button/web-intent
 */

var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://twitter.com/intent/tweet', {
  title: 'text'
});

module.exports = shareFactory(href, 550, 420);
