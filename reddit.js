/**
 * References:
 * https://www.reddit.com/buttons/
 * https://www.reddit.com/dev/api/#POST_api_submit
 * https://www.reddit.com/dev/api/#GET_api_info
 */

var countFactory = require('./core/count-factory');
var hrefFactory = require('./core/href-factory');
var shareFactory = require('./core/share-factory');

var href = hrefFactory('https://www.reddit.com/submit', {
  title: 'title'
});

module.exports = shareFactory(href);
module.exports.count = countFactory('https://www.reddit.com/api/info.json?url', function (data) {
  return data.data.children.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.data.score;
  }, 0);
}, 'jsonp');
