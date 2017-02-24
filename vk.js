/**
 * Reference:
 * https://vk.com/dev/share_details
 */

var countFactoryIndexed = require('./core/count-factory-indexed');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('http://vk.com/share.php');
module.exports = shareFactory(href, 650, 610);

var callbacks = [];

window.VK = {
  Share: {
    count: function (id, count) {
      callbacks[id](count);
    }
  }
};

module.exports.count = countFactoryIndexed('https://vk.com/share.php?act=count&url=', '&index=', callbacks);
