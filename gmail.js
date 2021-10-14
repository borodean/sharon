const hrefFactory = require('./core/href-factory');
const shareFactory = require('./core/share-factory');

const href = hrefFactory('https://mail.google.com/mail/?view=cm', {
  title: 'su',
  url: 'body',
});

module.exports = shareFactory(href, 800, 632);
