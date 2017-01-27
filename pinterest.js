var _hrefFactory = require('./_href-factory');
var _shareFactory = require('./_share-factory');

var href = _hrefFactory('https://pinterest.com/pin/create/button', {
  title: 'description'
});

module.exports = _shareFactory(href, {
  directories: 'no',
  height: 320,
  location: 'no',
  menubar: 'no',
  personalbar: 'no',
  resizable: 'yes',
  scrollbars: 'yes',
  status: 'no',
  toolbar: 'no',
  width: 750
});
