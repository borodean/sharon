var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

// Doesn't load assets if opened via HTTPS
var href = hrefFactory('http://service.weibo.com/share/share.php', {
  title: 'title'
});

module.exports = shareFactory(href, 615, 505);
