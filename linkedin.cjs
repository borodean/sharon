/**
 * Reference:
 * https://developer.linkedin.com/docs/share-on-linkedin
 */

const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://www.linkedin.com/sharing/share-offsite/', {
  url: 'url',
});

module.exports = shareFactory(href, 600, 400);
