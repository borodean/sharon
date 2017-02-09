/**
 * Reference:
 * https://www.tumblr.com/docs/en/share_button
 */

var countFactory = require('./core/count-factory');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://www.tumblr.com/widgets/share/tool', {
  title: 'title',
  url: 'canonicalUrl'
});

module.exports = shareFactory(href, 557, 600);
module.exports.count = countFactory('https://api.tumblr.com/v2/share/stats?url', function (data) {
  return data.response.note_count;
});
