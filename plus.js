/**
 * Reference:
 * https://developers.google.com/+/web/share/#sharelink-endpoint
 */

const countFactory = require('./core/count-factory');
const hrefFactory = require('./core/href-factory');
const shareFactory = require('./core/share-factory');

const href = hrefFactory('https://plus.google.com/share');

module.exports = shareFactory(href, 600, 600);
module.exports.count = countFactory('https://share.yandex.ru/gpp.xml?url', Number);
