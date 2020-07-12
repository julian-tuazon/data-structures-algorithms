const { expect } = require('chai');
const { mergeSortedArrays } = require('../mergeSortedArrays');

describe('mergeSortedArrays()', () => {
  it('should return new sorted array with values from both arrays', () => {
    expect(mergeSortedArrays([1, 3, 23, 43, 92], [1, 3, 53, 343, 1111])).to.deep.equal([1, 1, 3, 3, 23, 43, 53, 92, 343, 1111]);
    expect(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])).to.deep.equal([0, 3, 4, 4, 6, 30, 31]);
  });
});
