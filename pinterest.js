var _countFactory = require('./_count-factory');
var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://pinterest.com/pin/create/button', {
  title: 'description'
});

module.exports = _shareFactory(href, 750, 320);
module.exports.count = _countFactory('http://api.pinterest.com/v1/urls/count.json?url', function (data) {
  return data.count;
});
