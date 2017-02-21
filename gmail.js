var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://mail.google.com/mail/?view=cm', {
  title: 'su',
  url: 'body'
});

module.exports = shareFactory(href, 800, 632);
