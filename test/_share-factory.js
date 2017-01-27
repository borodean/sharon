var expect = require('chai').expect;
var sinon = require('sinon');
var _shareFactory = require('../_share-factory');

describe('_shareFactory', function () {
  beforeEach(function () {
    this.href = sinon.stub().returns('http://example.com');
  });

  it('creates a function', function () {
    var share = _shareFactory(this.href);
    expect(share).to.be.a('function');
  });

  it('sets the href method', function () {
    var share = _shareFactory(this.href);
    expect(share.href).to.equal(this.href);
  });

  describe('created function', function () {
    beforeEach(function () {
      sinon.spy(window, 'open');
    });

    afterEach(function () {
      window.open.restore();
    });

    it('opens a resource returned by the href function', function () {
      _shareFactory(this.href)();
      expect(window.open.called).to.equal(true);
      expect(window.open.args[0][0]).to.equal('http://example.com');
    });

    it('passes the arguments to the href function', function () {
      _shareFactory(this.href)('http://foo.share');
      expect(this.href.args[0]).to.deep.equal(['http://foo.share']);
    });

    it('sets window features', function () {
      _shareFactory(this.href, {
        resizable: 'yes',
        height: 480
      })();
      expect(window.open.args[0][2]).to.equal('resizable=yes,height=480');
    });
  });
});
