const { expect } = require('chai');
const { findFactorialRecursive, findFactorialIterative } = require('../factorial');

describe('findFactorialRecursive()', () => {
  context('number is 0', () => {
    it('should return 0', () => {
      expect(findFactorialRecursive(0)).to.equal(0);
    });
  });
  context('number is 1', () => {
    it('should return 1', () => {
      expect(findFactorialRecursive(1)).to.equal(1);
    });
  });
  context('number is a positive integer > 1', () => {
    it('should return factorial of the number', () => {
      expect(findFactorialRecursive(3)).to.equal(6);
      expect(findFactorialRecursive(5)).to.equal(120);
      expect(findFactorialRecursive(8)).to.equal(40320);
      expect(findFactorialRecursive(12)).to.equal(479001600);
    });
  });
});

describe('findFactorialIterative()', () => {
  context('number is 0', () => {
    it('should return 0', () => {
      expect(findFactorialIterative(0)).to.equal(0);
    });
  });
  context('number is 1', () => {
    it('should return 1', () => {
      expect(findFactorialIterative(1)).to.equal(1);
    });
  });
  context('number is a positive integer > 1', () => {
    it('should return factorial of the number', () => {
      expect(findFactorialIterative(3)).to.equal(6);
      expect(findFactorialIterative(5)).to.equal(120);
      expect(findFactorialIterative(8)).to.equal(40320);
      expect(findFactorialIterative(12)).to.equal(479001600);
    });
  });
});
