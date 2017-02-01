var countFactory = require('./core/count-factory');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://www.facebook.com/sharer.php', {
  url: 'u'
});

module.exports = shareFactory(href, 670, 340);
module.exports.count = countFactory('http://graph.facebook.com/?id', function (data) {
  return data.share ? data.share.share_count : 0;
});
