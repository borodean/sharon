const hrefFactory = require('./core/href-factory');
const shareFactory = require('./core/share-factory');

const href = hrefFactory('https://t.me/share', {
  title: 'text',
});

module.exports = shareFactory(href, 600, 500);
