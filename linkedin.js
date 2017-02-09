/**
 * Reference:
 * https://developer.linkedin.com/docs/share-on-linkedin
 */

var countFactory = require('./core/count-factory');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://www.linkedin.com/shareArticle', {
  title: 'title'
});

module.exports = shareFactory(href, 600, 400);
module.exports.count = countFactory('https://www.linkedin.com/countserv/count/share?url', function (data) {
  return data.count;
});
