var countFactory = require('./core/count-factory');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://pinterest.com/pin/create/button', {
  title: 'description'
});

module.exports = shareFactory(href, 750, 320);
module.exports.count = countFactory('http://api.pinterest.com/v1/urls/count.json?url', function (data) {
  return data.count;
});
