var countFactoryIndexed = require('./core/count-factory-indexed');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://connect.ok.ru/dk?st.cmd=WidgetSharePreview', {
  url: 'st.shareUrl'
});

module.exports = shareFactory(href, 580, 350);

var callbacks = [];

window.ODKL = {
  updateCount: function (id, count) {
    callbacks[id](Number(count));
  }
};

module.exports.count = countFactoryIndexed('https://connect.ok.ru/dk?st.cmd=extLike&ref=', '&uid=', callbacks);
