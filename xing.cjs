/**
 * Reference:
 * https://dev.xing.com/plugins/share_button/docs
 */

const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://www.xing.com/spi/shares/new');

module.exports = shareFactory(href, 570, 530);
