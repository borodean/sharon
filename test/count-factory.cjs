/* eslint-disable max-nested-callbacks */

const querystring = require('querystring');
const proxyquire = require('proxyquire');

const countFactory = proxyquire('../core/count-factory.cjs', {
  // Stub the JSONP function to echo every query parameter it gets
  '@borodean/jsonp'(options, callback) {
    const query = querystring.parse(options.url.split('?')[1]);
    if (query.error) {
      return callback(new Error(query.error));
    }

    callback(null, query);
  },
});

describe('countFactory', () => {
  it('creates a function', () => {
    const share = countFactory('http://example.com?url', () => {});
    expect(share).to.be.a('function');
  });

  describe('created function', () => {
    it('retrieves a share count for the current page', () => {
      const count = countFactory('http://example.com?count=42&url', (data) => {
        expect(data.url).to.equal('http://foo.share/');
        return Number(data.count);
      });
      count((error, data) => {
        expect(error).to.equal(null);
        expect(data).to.equal(42);
      });
    });

    context('when there is a string argument', () => {
      it('sets custom URL', () => {
        const count = countFactory('http://example.com?url', (data) => {
          expect(data.url).to.equal('http://bar.share/');
        });
        count('http://bar.share/', () => {});
      });
    });

    context('when network fails', () => {
      it('passes an error argument', () => {
        const count = countFactory(
          'http://example.com?error=Timeout&url',
          () => {},
        );
        count('http://bar.share/', (error) => {
          expect(error).to.be.an.instanceof(Error);
          expect(error.message).to.equal('Timeout');
        });
      });
    });
  });
});
