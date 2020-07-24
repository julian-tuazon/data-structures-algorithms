const { expect } = require('chai');
const { reverseStringIteratively, reverseStringRecursively } = require('../reverseString');

describe('reverseStringIteratively()', () => {
  context('string is empty', () => {
    it("should return ''", () => {
      expect(reverseStringIteratively('')).to.equal('');
    });
  });
  context('string is not empty', () => {
    it('should return reversed string', () => {
      expect(reverseStringIteratively('apPle')).to.equal('elPpa');
      expect(reverseStringIteratively('f0od')).to.equal('do0f');
      expect(reverseStringIteratively('!g reat&')).to.equal('&taer g!');
    });
  });
});

describe('reverseStringRecursively()', () => {
  context('string is empty', () => {
    it("should return ''", () => {
      expect(reverseStringRecursively('')).to.equal('');
    });
  });
  context('string is not empty', () => {
    it('should return reversed string', () => {
      expect(reverseStringRecursively('apPle')).to.equal('elPpa');
      expect(reverseStringRecursively('f0od')).to.equal('do0f');
      expect(reverseStringRecursively('!g reat&')).to.equal('&taer g!');
    });
  });
});
