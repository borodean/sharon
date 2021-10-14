/**
 * References:
 * https://www.reddit.com/buttons/
 * https://www.reddit.com/dev/api/#POST_api_submit
 * https://www.reddit.com/dev/api/#GET_api_info
 */

const countFactory = require('./core/count-factory.cjs');
const hrefFactory = require('./core/href-factory.cjs');
const shareFactory = require('./core/share-factory.cjs');

const href = hrefFactory('https://www.reddit.com/submit', {
  title: 'title',
});

module.exports = shareFactory(href);
module.exports.count = countFactory(
  'https://www.reddit.com/api/info.json?url',
  (data) =>
    data.data.children.reduce(
      (previousValue, currentValue) => previousValue + currentValue.data.score,
      0
    ),
  'jsonp'
);
