const querystring = require('querystring');
const proxyquire = require('proxyquire');

let handler;

const countFactoryIndexed = proxyquire('../core/count-factory-indexed.cjs', {
  // Stub the JSONP function to echo every query parameter it gets
  '@borodean/jsonp'(options, callback) {
    const query = querystring.parse(options.url.split('?')[1]);
    if (query.error) {
      return callback(new Error(query.error));
    }

    callback(null, handler(query));
  },
});

describe('countFactoryIndexed', () => {
  it('creates a function', () => {
    const share = countFactoryIndexed('http://example.com?url=', '&index=', []);
    expect(share).to.be.a('function');
  });

  describe('created function', () => {
    it('retrieves a share count for the current page', () => {
      const count = countFactoryIndexed(
        'http://example.com?count=42&url=',
        '&index=',
        [],
      );
      handler = function (data) {
        expect(data.url).to.equal('http://foo.share/');
        return Number(data.count);
      };

      count((error, data) => {
        expect(error).to.equal(null);
        expect(data).to.equal(42);
      });
    });

    it('passes the length of the callbacks array', () => {
      let count = countFactoryIndexed(
        'http://example.com?count=42&url=',
        '&index=',
        [],
      );
      handler = function (data) {
        expect(data.index).to.equal('0');
      };

      count(() => {});

      count = countFactoryIndexed(
        'http://example.com?count=42&url=',
        '&index=',
        [function () {}],
      );
      handler = function (data) {
        expect(data.index).to.equal('1');
      };

      count(() => {});
    });

    context('when there is a string argument', () => {
      it('sets custom URL', () => {
        const count = countFactoryIndexed(
          'http://example.com?url=',
          '&index=',
          [],
        );
        handler = function (data) {
          expect(data.url).to.equal('http://bar.share/');
          return Number(data.count);
        };

        count('http://bar.share/', () => {});
      });
    });

    context('when network fails', () => {
      it('passes an error argument', () => {
        const count = countFactoryIndexed(
          'http://example.com?error=Timeout&url=',
          '&index=',
          [],
        );
        count('http://bar.share/', (error) => {
          expect(error).to.be.an.instanceof(Error);
          expect(error.message).to.equal('Timeout');
        });
      });
    });
  });
});
