var shareFactory = require('../core/share-factory');

describe('shareFactory', function () {
  beforeEach(function () {
    this.href = sinon.stub().returns('http://example.com');
  });

  it('creates a function', function () {
    var share = shareFactory(this.href, 640, 480);
    expect(share).to.be.a('function');
  });

  it('sets the href method', function () {
    var share = shareFactory(this.href, 640, 480);
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
      shareFactory(this.href, 640, 480)();
      expect(window.open.called).to.equal(true);
      expect(window.open.args[0][0]).to.equal('http://example.com');
    });

    it('passes the arguments to the href function', function () {
      shareFactory(this.href, 640, 480)('http://foo.share');
      expect(this.href.args[0]).to.deep.equal(['http://foo.share']);
    });

    it('sets window features', function () {
      shareFactory(this.href, 640, 480)();
      expect(window.open.args[0][2]).to.contain('location,resizable,scrollbars,toolbar=no');
    });

    it('sets window dimensions', function () {
      shareFactory(this.href, 640, 480)();
      expect(window.open.args[0][2]).to.contain('width=640');
      expect(window.open.args[0][2]).to.contain('height=480');
    });

    it('centers the window', function () {
      screen.width = 1920;
      screen.height = 1080;

      shareFactory(this.href, 640, 480)();
      expect(window.open.args[0][2]).to.contain('left=640');
      expect(window.open.args[0][2]).to.contain('top=120');
    });

    it('keeps the window below the top edge of the screen', function () {
      screen.width = 320;
      screen.height = 240;

      shareFactory(this.href, 640, 480)();
      expect(window.open.args[0][2]).to.contain('top=0');
    });

    it('opens a new tab instead of a popup', function () {
      shareFactory(this.href)();
      expect(window.open.args[0]).to.have.lengthOf(1);
    });
  });
});
