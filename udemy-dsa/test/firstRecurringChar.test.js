const { expect } = require('chai');
const { firstRecurringChar, firstRecurringChar2 } = require('../firstRecurringChar');

describe('firstRecurringChar()', () => {
  context('only one recurring char', () => {
    it('should return recurring char', () => {
      expect(firstRecurringChar([1, 2, 3, 4, 5, 1])).to.equal(1);
    });
  });
  context('multiple recurring chars', () => {
    it('should return only first recurring char', () => {
      expect(firstRecurringChar([1, 2, 2, 3, 3, 3, 3, 4, 5, 1])).to.equal(2);
    });
  });
  context('no recurring chars', () => {
    it('should return undefined', () => {
      expect(firstRecurringChar([1, 2, 3])).to.equal(undefined);
    });
  });
});

describe('firstRecurringChar2()', () => {
  context('only one recurring char', () => {
    it('should return recurring char', () => {
      expect(firstRecurringChar2([1, 2, 3, 4, 5, 1])).to.equal(1);
    });
  });
  context('multiple recurring chars', () => {
    it('should return only first recurring char', () => {
      expect(firstRecurringChar2([1, 2, 2, 3, 3, 3, 3, 4, 5, 1])).to.equal(2);
    });
  });
  context('no recurring chars', () => {
    it('should return undefined', () => {
      expect(firstRecurringChar2([1, 2, 3])).to.equal(undefined);
    });
  });
});
