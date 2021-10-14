const countFactory = require('./core/count-factory.cjs');
const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://www.facebook.com/sharer.php', {
  url: 'u',
});

module.exports = shareFactory(href, 670, 340);
module.exports.count = countFactory('https://graph.facebook.com/?access_token=550998712851057|a417089ca995161c0d147e76b1de4909&fields=og_object{engagement{count}}&id', (data) =>
  data.og_object ? data.og_object.engagement.count : 0,
);
