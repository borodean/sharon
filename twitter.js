/**
 * Reference:
 * https://dev.twitter.com/web/tweet-button/web-intent
 */

const hrefFactory = require('./core/href-factory');
const shareFactory = require('./core/share-factory');

const href = hrefFactory('https://twitter.com/intent/tweet', {
  title: 'text',
});

module.exports = shareFactory(href, 550, 420);
