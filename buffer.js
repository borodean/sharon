/**
 * References:
 * https://buffer.com/extras/button
 * https://buffer.com/developers/api/links
 */

const countFactory = require('./core/count-factory.js');
const hrefFactory = require('./core/href-factory.js');
const shareFactory = require('./core/share-factory.js');

const href = hrefFactory('https://buffer.com/add', {
  title: 'text',
});

module.exports = shareFactory(href, 850, 600);
module.exports.count = countFactory(
  'https://api.bufferapp.com/1/links/shares.json?url',
  (data) => data.shares
);
