var merge = require('../core/merge');

describe('merge', function () {
  it('copies the properties from a source to a target', function () {
    var target = {};
    merge(target, {foo: 'bar'});
    expect(target.foo).to.equal('bar');
  });

  it('returns the target', function () {
    var target = {};
    expect(merge(target, {})).to.equal(target);
  });

  it('overwrites target properties', function () {
    var target = {foo: 'bar'};
    merge(target, {foo: 'baz'});
    expect(target.foo).to.equal('baz');
  });

  it('keeps properties source doesn\'t have', function () {
    var target = {foo: 'bar'};
    merge(target, {baz: 'qux'});
    expect(target.foo).to.equal('bar');
  });

  it('handles undefined source', function () {
    var target = {foo: 'bar'};
    merge(target, undefined);
    expect(target).to.deep.equal({foo: 'bar'});
  });
});
