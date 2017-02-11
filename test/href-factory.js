var expect = require('chai').expect;
var hrefFactory = require('../core/href-factory');

describe('hrefFactory', function () {
  beforeEach(function () {
    document.title = 'Sharon Stone';
  });

  it('creates a function', function () {
    var href = hrefFactory('http://example.com');
    expect(href).to.be.a('function');
  });

  describe('created function', function () {
    it('returns a share link for the current page', function () {
      var href = hrefFactory('http://example.com');
      var result = href();
      expect(result).to.equal('http://example.com?url=http%3A%2F%2Ffoo.share%2F');
    });

    context('when base URL contains query parameters', function () {
      it('appends new query parameters', function () {
        var href = hrefFactory('http://example.com?foo=bar');
        var result = href();
        expect(result).to.equal('http://example.com?foo=bar&url=http%3A%2F%2Ffoo.share%2F');
      });
    });

    context('when there is a string argument', function () {
      it('sets custom URL', function () {
        var href = hrefFactory('http://example.com');
        var result = href('http://bar.share/');
        expect(result).to.equal('http://example.com?url=http%3A%2F%2Fbar.share%2F');
      });
    });

    context('when there is an object argument', function () {
      it('sets query parameters', function () {
        var href = hrefFactory('http://example.com');
        var result = href({related: 'twitter:news'});
        expect(result).to.equal('http://example.com?url=http%3A%2F%2Ffoo.share%2F&related=twitter%3Anews');
      });

      it('sets arrayish query parameters', function () {
        var href = hrefFactory('http://example.com');
        var result = href({hashtags: ['nature', 'some spaces']});
        expect(result).to.equal('http://example.com?url=http%3A%2F%2Ffoo.share%2F&hashtags=nature,some%20spaces');
      });
    });

    context('when there are both arguments', function () {
      it('sets custom URL and query parameters', function () {
        var href = hrefFactory('http://example.com');
        var result = href('http://bar.share/', {via: 'example'});
        expect(result).to.equal('http://example.com?url=http%3A%2F%2Fbar.share%2F&via=example');
      });
    });

    context('when substitutions were provided', function () {
      it('substitutes query keys', function () {
        var href = hrefFactory('http://example.com', {tags: 'hashtags'});
        var result = href({tags: ['nature', 'sunset']});
        expect(result).to.equal('http://example.com?url=http%3A%2F%2Ffoo.share%2F&hashtags=nature,sunset');
      });

      it('substitutes URL key', function () {
        var href = hrefFactory('http://example.com', {url: 'u'});
        var result = href();
        expect(result).to.equal('http://example.com?u=http%3A%2F%2Ffoo.share%2F');
      });
    });

    context('when the title substitution was provided', function () {
      it('defaults to the current page title', function () {
        var href = hrefFactory('http://example.com', {title: 'text'});
        var result = href();
        expect(result).to.equal('http://example.com?url=http%3A%2F%2Ffoo.share%2F&text=Sharon%20Stone');
      });

      it('prefers the custom title', function () {
        var href = hrefFactory('http://example.com', {title: 'text'});
        var result = href({title: 'Audrey Hepburn'});
        expect(result).to.equal('http://example.com?url=http%3A%2F%2Ffoo.share%2F&text=Audrey%20Hepburn');
      });
    });
  });
});
