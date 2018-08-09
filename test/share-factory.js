var expect = require('chai').expect;
var proxyquire = require('proxyquire');
var sinon = require('sinon');

var popup = sinon.spy();
var shareFactory = proxyquire('../core/share-factory', {
  './popup': popup
});

describe('shareFactory', function () {
  beforeEach(function () {
    this.href = sinon.stub().returns('http://example.com');
    this.share = shareFactory(this.href, 640, 480);
  });

  afterEach(function () {
    popup.resetHistory();
  });

  it('creates a function', function () {
    expect(this.share).to.be.a('function');
  });

  it('sets the href method', function () {
    expect(this.share.href).to.equal(this.href);
  });

  describe('created function', function () {
    it('opens a resource returned by the href function', function () {
      this.share();
      expect(popup.args[0][0]).to.equal('http://example.com');
    });

    it('passes the arguments to the href function', function () {
      this.share('http://foo.share');
      expect(this.href.args[0]).to.deep.equal(['http://foo.share']);
    });

    it('sets popup dimensions', function () {
      this.share();
      expect(popup.args[0][2]).to.equal(640);
      expect(popup.args[0][3]).to.equal(480);
    });
  });

  describe('defer function', function () {
    it('opens a blank page', function () {
      this.share.defer();
      expect(popup.args[0][0]).to.equal('about:blank');
    });

    it('opens the provided page', function () {
      this.share.defer('http://foo.blank');
      expect(popup.args[0][0]).to.equal('http://foo.blank');
    });

    it('sets popup dimensions', function () {
      this.share.defer();
      expect(popup.args[0][2]).to.equal(640);
      expect(popup.args[0][3]).to.equal(480);
    });

    it('returns a function', function () {
      const share = this.share.defer();
      expect(share).to.be.a('function');
    });

    describe('returned function', function () {
      it('opens a resource returned by the href function', function () {
        this.share.defer()();
        expect(popup.args[1][0]).to.equal('http://example.com');
      });

      it('passes the arguments to the href function', function () {
        this.share.defer()('http://foo.share');
        expect(this.href.args[0]).to.deep.equal(['http://foo.share']);
      });

      it('uses the same window', function () {
        this.share.defer()();
        expect(popup.args[0][1]).to.equal(popup.args[1][1]);
      });
    });
  });
});
