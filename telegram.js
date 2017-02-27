var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://t.me/share', {
  title: 'text'
});

module.exports = shareFactory(href, 600, 500);
