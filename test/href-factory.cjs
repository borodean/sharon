const hrefFactory = require('../core/href-factory.cjs');

describe('hrefFactory', () => {
  beforeEach(() => {
    document.title = 'Sharon Stone';
  });

  it('creates a function', () => {
    const href = hrefFactory('http://example.com');
    expect(href).to.be.a('function');
  });

  describe('created function', () => {
    it('returns a share link for the current page', () => {
      const href = hrefFactory('http://example.com');
      const result = href();
      expect(result).to.equal(
        'http://example.com?url=http%3A%2F%2Ffoo.share%2F',
      );
    });

    context('when base URL contains query parameters', () => {
      it('appends new query parameters', () => {
        const href = hrefFactory('http://example.com?foo=bar');
        const result = href();
        expect(result).to.equal(
          'http://example.com?foo=bar&url=http%3A%2F%2Ffoo.share%2F',
        );
      });
    });

    context('when there is a string argument', () => {
      it('sets custom URL', () => {
        const href = hrefFactory('http://example.com');
        const result = href('http://bar.share/');
        expect(result).to.equal(
          'http://example.com?url=http%3A%2F%2Fbar.share%2F',
        );
      });
    });

    context('when there is an object argument', () => {
      it('sets query parameters', () => {
        const href = hrefFactory('http://example.com');
        const result = href({related: 'twitter:news'});
        expect(result).to.equal(
          'http://example.com?url=http%3A%2F%2Ffoo.share%2F&related=twitter%3Anews',
        );
      });

      it('sets arrayish query parameters', () => {
        const href = hrefFactory('http://example.com');
        const result = href({hashtags: ['nature', 'some spaces']});
        expect(result).to.equal(
          'http://example.com?url=http%3A%2F%2Ffoo.share%2F&hashtags=nature,some%20spaces',
        );
      });
    });

    context('when there are both arguments', () => {
      it('sets custom URL and query parameters', () => {
        const href = hrefFactory('http://example.com');
        const result = href('http://bar.share/', {via: 'example'});
        expect(result).to.equal(
          'http://example.com?url=http%3A%2F%2Fbar.share%2F&via=example',
        );
      });
    });

    context('when substitutions were provided', () => {
      it('substitutes query keys', () => {
        const href = hrefFactory('http://example.com', {tags: 'hashtags'});
        const result = href({tags: ['nature', 'sunset']});
        expect(result).to.equal(
          'http://example.com?url=http%3A%2F%2Ffoo.share%2F&hashtags=nature,sunset',
        );
      });

      it('substitutes URL key', () => {
        const href = hrefFactory('http://example.com', {url: 'u'});
        const result = href();
        expect(result).to.equal(
          'http://example.com?u=http%3A%2F%2Ffoo.share%2F',
        );
      });
    });

    context('when the title substitution was provided', () => {
      it('defaults to the current page title', () => {
        const href = hrefFactory('http://example.com', {title: 'text'});
        const result = href();
        expect(result).to.equal(
          'http://example.com?url=http%3A%2F%2Ffoo.share%2F&text=Sharon%20Stone',
        );
      });

      it('prefers the custom title', () => {
        const href = hrefFactory('http://example.com', {title: 'text'});
        const result = href({title: 'Audrey Hepburn'});
        expect(result).to.equal(
          'http://example.com?url=http%3A%2F%2Ffoo.share%2F&text=Audrey%20Hepburn',
        );
      });
    });
  });
});
