const countFactory = require('./core/count-factory');
const hrefFactory = require('./core/href-factory');
const shareFactory = require('./core/share-factory');

const href = hrefFactory('https://www.facebook.com/sharer.php', {
  url: 'u',
});

module.exports = shareFactory(href, 670, 340);
module.exports.count = countFactory('https://graph.facebook.com/?id', data => data.share ? data.share.share_count : 0);
