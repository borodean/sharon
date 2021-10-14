const countFactory = require('./core/count-factory.cjs');
const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://www.facebook.com/sharer.php', {
  url: 'u',
});

module.exports = shareFactory(href, 670, 340);
module.exports.count = countFactory('https://graph.facebook.com/?id', data => data.share ? data.share.share_count : 0);
