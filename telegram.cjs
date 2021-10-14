const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://t.me/share', {
  title: 'text',
});

module.exports = shareFactory(href, 600, 500);
