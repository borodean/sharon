/**
 * Reference:
 * https://www.tumblr.com/docs/en/share_button
 */

const countFactory = require('./core/count-factory');
const hrefFactory = require('./core/href-factory');
const shareFactory = require('./core/share-factory');

const href = hrefFactory('https://www.tumblr.com/widgets/share/tool', {
  title: 'title',
  url: 'canonicalUrl',
});

module.exports = shareFactory(href, 557, 600);
module.exports.count = countFactory('https://api.tumblr.com/v2/share/stats?url', data => data.response.note_count);
