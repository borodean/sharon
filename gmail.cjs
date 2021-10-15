const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://mail.google.com/mail/?view=cm', {
  title: 'su',
  url: 'body',
});

module.exports = shareFactory(href, 800, 632);
