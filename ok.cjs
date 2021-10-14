const countFactoryIndexed = require('./core/count-factory-indexed.cjs');
const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://connect.ok.ru/dk?st.cmd=WidgetSharePreview', {
  url: 'st.shareUrl',
});

module.exports = shareFactory(href, 580, 350);

const callbacks = [];

window.ODKL = {
  updateCount(id, count) {
    callbacks[id](Number(count));
  },
};

module.exports.count = countFactoryIndexed(
  'https://connect.ok.ru/dk?st.cmd=extLike&ref=',
  '&uid=',
  callbacks,
);
