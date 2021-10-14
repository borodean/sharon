const merge = require('../core/merge');

describe('merge', () => {
  it('copies the properties from a source to a target', () => {
    const target = {};
    merge(target, {foo: 'bar'});
    expect(target.foo).to.equal('bar');
  });

  it('returns the target', () => {
    const target = {};
    expect(merge(target, {})).to.equal(target);
  });

  it('overwrites target properties', () => {
    const target = {foo: 'bar'};
    merge(target, {foo: 'baz'});
    expect(target.foo).to.equal('baz');
  });

  it('keeps properties source doesn\'t have', () => {
    const target = {foo: 'bar'};
    merge(target, {baz: 'qux'});
    expect(target.foo).to.equal('bar');
  });

  it('handles undefined source', () => {
    const target = {foo: 'bar'};
    merge(target, undefined);
    expect(target).to.deep.equal({foo: 'bar'});
  });
});
