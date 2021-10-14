/**
 * Reference:
 * https://vk.com/dev/share_details
 */

const countFactoryIndexed = require('./core/count-factory-indexed.cjs');
const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://vk.com/share.php');
module.exports = shareFactory(href, 650, 610);

const callbacks = [];

window.VK = {
  Share: {
    count(id, count) {
      callbacks[id](count);
    },
  },
};

module.exports.count = countFactoryIndexed('https://vk.com/share.php?act=count&url=', '&index=', callbacks);
