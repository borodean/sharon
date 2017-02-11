/**
 * Reference:
 * https://vk.com/dev/share_details
 */

var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('http://vk.com/share.php');
module.exports = shareFactory(href, 650, 610);
