/**
 * Reference:
 * https://dev.xing.com/plugins/share_button/docs
 */

const hrefFactory = require('./core/href-factory');
const shareFactory = require('./core/share-factory');

const href = hrefFactory('https://www.xing.com/spi/shares/new');

module.exports = shareFactory(href, 570, 530);
