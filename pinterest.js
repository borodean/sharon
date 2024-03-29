const countFactory = require('./core/count-factory.js');
const hrefFactory = require('./core/href-factory.js');
const shareFactory = require('./core/share-factory.js');

const href = hrefFactory('https://www.pinterest.com/pin/create/button/', {
  title: 'description',
});

module.exports = shareFactory(href, 750, 320);
module.exports.count = countFactory(
  'https://api.pinterest.com/v1/urls/count.json?url',
  (data) => data.count
);
