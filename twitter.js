/**
 * Reference:
 * https://dev.twitter.com/web/tweet-button/web-intent
 */

const hrefFactory = require('./core/href-factory.js');
const shareFactory = require('./core/share-factory.js');

const href = hrefFactory('https://twitter.com/intent/tweet', {
  title: 'text',
});

module.exports = shareFactory(href, 550, 420);
