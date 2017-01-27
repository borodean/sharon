/**
 * Reference:
 * https://developers.google.com/+/web/share/#sharelink-endpoint
 */

var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://plus.google.com/share');

module.exports = _shareFactory(href, 600, 600);
