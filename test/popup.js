var expect = require('chai').expect;
var sinon = require('sinon');
var popup = require('../core/popup');

describe('popup', function () {
  beforeEach(function () {
    sinon.spy(window, 'open');
  });

  afterEach(function () {
    window.open.restore();
  });

  it('opens a resource', function () {
    popup('http://example.com');
    expect(window.open.called).to.equal(true);
    expect(window.open.args[0][0]).to.equal('http://example.com');
  });

  it('sets window name', function () {
    popup('http://example.com', 'name');
    expect(window.open.args[0][1]).to.equal('name');
  });

  describe('when dimensions are provided', function () {
    it('sets window features', function () {
      popup('http://example.com', 'name', 640, 480);
      expect(window.open.args[0][2]).to.contain('location,resizable,scrollbars,toolbar=no');
    });

    it('sets window dimensions', function () {
      popup('http://example.com', 'name', 640, 480);
      expect(window.open.args[0][2]).to.contain('width=640');
      expect(window.open.args[0][2]).to.contain('height=480');
    });

    it('centers the window', function () {
      screen.width = 1920;
      screen.height = 1080;

      popup('http://example.com', 'name', 640, 480);
      expect(window.open.args[0][2]).to.contain('left=640');
      expect(window.open.args[0][2]).to.contain('top=120');
    });

    it('keeps the window below the top edge of the screen', function () {
      screen.width = 320;
      screen.height = 240;

      popup('http://example.com', 'name', 640, 480);
      expect(window.open.args[0][2]).to.contain('top=0');
    });
  });

  describe('when dimensions are not provided', function () {
    it('opens a new tab instead of a window', function () {
      popup('http://example.com', 'name');
      expect(window.open.args[0]).to.have.lengthOf(2);
    });
  });
});
