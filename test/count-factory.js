var querystring = require('querystring');
var expect = require('chai').expect;
var jsdom = require('jsdom');
var proxyquire = require('proxyquire');

var countFactory = proxyquire('../core/count-factory', {
  // Stub the JSONP module to echo every query parameter it gets
  jsonp: function (url, callback) {
    var query = querystring.parse(url.split('?')[1]);
    if (query.error) {
      return callback(new Error(query.error));
    }
    callback(null, query);
  }
});

describe('countFactory', function () {
  beforeEach(function () {
    jsdom.changeURL(window, 'http://foo.share');
  });

  it('creates a function', function () {
    var share = countFactory(this.base, this.callback);
    expect(share).to.be.a('function');
  });

  describe('created function', function () {
    it('retrieves a share count for the current page', function () {
      var count = countFactory('http://example.com?count=42&url', function (data) {
        expect(data.url).to.equal('http://foo.share/');
        return Number(data.count);
      });
      count(function (err, data) {
        expect(err).to.equal(null);
        expect(data).to.equal(42);
      });
    });

    context('when there is a string argument', function () {
      it('sets custom URL', function () {
        var count = countFactory('http://example.com?url', function (data) {
          expect(data.url).to.equal('http://bar.share/');
        });
        count('http://bar.share/', function () {});
      });
    });

    context('when network fails', function () {
      it('passes an error argument', function () {
        var count = countFactory('http://example.com?error=Timeout&url', function () {});
        count('http://bar.share/', function (err) {
          expect(err).to.be.an.instanceof(Error);
          expect(err.message).to.equal('Timeout');
        });
      });
    });
  });
});
