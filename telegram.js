const hrefFactory = require('./core/href-factory.js');
const shareFactory = require('./core/share-factory.js');

const href = hrefFactory('https://t.me/share', {
  title: 'text',
});

module.exports = shareFactory(href, 600, 500);
