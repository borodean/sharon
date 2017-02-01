/**
 * Reference:
 * https://dev.xing.com/plugins/share_button/docs
 */

var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://www.xing.com/spi/shares/new');

module.exports = shareFactory(href, 570, 530);
