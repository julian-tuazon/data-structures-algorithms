const { expect } = require('chai');
const { fibonacciIterativeRecursive, fibonacciIterative } = require('../fibonacci');

describe('fibonacciIterative()', () => {
  context('number is 0', () => {
    it('should return 0', () => {
      expect(fibonacciIterative(0)).to.equal(0);
    });
  });
  context('number is 1', () => {
    it('should return 1', () => {
      expect(fibonacciIterative(1)).to.equal(1);
    });
  });
  context('number is a positive integer > 1', () => {
    it('should return fibonacci number at that index', () => {
      expect(fibonacciIterative(2)).to.equal(1);
      expect(fibonacciIterative(3)).to.equal(2);
      expect(fibonacciIterative(5)).to.equal(5);
      expect(fibonacciIterative(8)).to.equal(21);
      expect(fibonacciIterative(14)).to.equal(377);
    });
  });
});

describe('fibonacciIterativeRecursive()', () => {
  context('number is 0', () => {
    it('should return 0', () => {
      expect(fibonacciIterativeRecursive(0)).to.equal(0);
    });
  });
  context('number is 1', () => {
    it('should return 1', () => {
      expect(fibonacciIterativeRecursive(1)).to.equal(1);
    });
  });
  context('number is a positive integer > 1', () => {
    it('should return fibonacci number at that index', () => {
      expect(fibonacciIterativeRecursive(2)).to.equal(1);
      expect(fibonacciIterativeRecursive(3)).to.equal(2);
      expect(fibonacciIterativeRecursive(5)).to.equal(5);
      expect(fibonacciIterativeRecursive(8)).to.equal(21);
      expect(fibonacciIterativeRecursive(14)).to.equal(377);
    });
  });
});
