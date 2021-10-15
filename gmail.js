const hrefFactory = require('./core/href-factory.js');
const shareFactory = require('./core/share-factory.js');

const href = hrefFactory('https://mail.google.com/mail/?view=cm', {
  title: 'su',
  url: 'body',
});

module.exports = shareFactory(href, 800, 632);
