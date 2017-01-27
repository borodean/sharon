/**
 * Reference:
 * https://developer.linkedin.com/docs/share-on-linkedin
 */

var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://www.linkedin.com/shareArticle', {
  title: 'title'
});

module.exports = _shareFactory(href, {
  width: 600,
  height: 400
});
