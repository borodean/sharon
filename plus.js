/**
 * Reference:
 * https://developers.google.com/+/web/share/#sharelink-endpoint
 */

var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://plus.google.com/share');

module.exports = shareFactory(href, 600, 600);
