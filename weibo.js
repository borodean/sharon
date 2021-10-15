const hrefFactory = require('./core/href-factory.js');
const shareFactory = require('./core/share-factory.js');

// Doesn't load assets if opened via HTTPS
const href = hrefFactory('http://service.weibo.com/share/share.php', {
  title: 'title',
});

module.exports = shareFactory(href, 615, 505);
