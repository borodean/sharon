var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://connect.ok.ru/dk?st.cmd=WidgetSharePreview', {
  url: 'st.shareUrl'
});

module.exports = shareFactory(href, 580, 350);
