/**
 * Reference:
 * https://developer.linkedin.com/docs/share-on-linkedin
 */

var _countFactory = require('./_count-factory');
var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://www.linkedin.com/shareArticle', {
  title: 'title'
});

module.exports = _shareFactory(href, 600, 400);
module.exports.count = _countFactory('http://www.linkedin.com/countserv/count/share?url', function (data) {
  return data.count;
});
