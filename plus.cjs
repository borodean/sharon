/**
 * Reference:
 * https://developers.google.com/+/web/share/#sharelink-endpoint
 */

const countFactory = require('./core/count-factory.cjs');
const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://plus.google.com/share');

module.exports = shareFactory(href, 600, 600);
module.exports.count = countFactory(
  'https://share.yandex.ru/gpp.xml?url',
  Number,
);
