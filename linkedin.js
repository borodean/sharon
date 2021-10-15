/**
 * Reference:
 * https://developer.linkedin.com/docs/share-on-linkedin
 */

const hrefFactory = require('./core/href-factory.js');
const shareFactory = require('./core/share-factory.js');

const href = hrefFactory('https://www.linkedin.com/sharing/share-offsite/', {
  url: 'url',
});

module.exports = shareFactory(href, 500, 400);
