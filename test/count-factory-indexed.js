var querystring = require('querystring');
var expect = require('chai').expect;
var proxyquire = require('proxyquire');

var handler;

var countFactoryIndexed = proxyquire('../core/count-factory-indexed', {
  // Stub the JSONP function to echo every query parameter it gets
  '@borodean/jsonp': function (options, callback) {
    var query = querystring.parse(options.url.split('?')[1]);
    if (query.error) {
      return callback(new Error(query.error));
    }
    callback(null, handler(query));
  }
});

describe('countFactoryIndexed', function () {
  it('creates a function', function () {
    var share = countFactoryIndexed('http://example.com?url=', '&index=', []);
    expect(share).to.be.a('function');
  });

  describe('created function', function () {
    it('retrieves a share count for the current page', function () {
      var count = countFactoryIndexed('http://example.com?count=42&url=', '&index=', []);
      handler = function (data) {
        expect(data.url).to.equal('http://foo.share/');
        return Number(data.count);
      };
      count(function (err, data) {
        expect(err).to.equal(null);
        expect(data).to.equal(42);
      });
    });

    it('passes the length of the callbacks array', function () {
      var count = countFactoryIndexed('http://example.com?count=42&url=', '&index=', []);
      handler = function (data) {
        expect(data.index).to.equal('0');
      };
      count(function () {});

      count = countFactoryIndexed('http://example.com?count=42&url=', '&index=', [function () {}]);
      handler = function (data) {
        expect(data.index).to.equal('1');
      };
      count(function () {});
    });

    context('when there is a string argument', function () {
      it('sets custom URL', function () {
        var count = countFactoryIndexed('http://example.com?url=', '&index=', []);
        handler = function (data) {
          expect(data.url).to.equal('http://bar.share/');
          return Number(data.count);
        };
        count('http://bar.share/', function () {});
      });
    });

    context('when network fails', function () {
      it('passes an error argument', function () {
        var count = countFactoryIndexed('http://example.com?error=Timeout&url=', '&index=', []);
        count('http://bar.share/', function (err) {
          expect(err).to.be.an.instanceof(Error);
          expect(err.message).to.equal('Timeout');
        });
      });
    });
  });
});
