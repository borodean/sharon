/**
 * References:
 * https://buffer.com/extras/button
 * https://buffer.com/developers/api/links
 */

var countFactory = require('./core/count-factory');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://buffer.com/add', {
  title: 'text'
});

module.exports = shareFactory(href, 850, 600);
module.exports.count = countFactory('https://api.bufferapp.com/1/links/shares.json?url', function (data) {
  return data.shares;
});
