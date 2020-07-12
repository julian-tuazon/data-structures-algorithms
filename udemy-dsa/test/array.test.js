const { expect } = require('chai');
const { MyArray } = require('../array');

describe('MyArray class', () => {
  let arr;

  beforeEach(() => {
    arr = new MyArray();
    for (let i = 1; i <= 10; i++) {
      arr.push(`yeet${i}`);
    }
  });

  context('deleteAtIndex()', () => {
    it('deletes item at index and shifts array items left', () => {
      arr.deleteAtIndex(2);
      expect(arr.get(2)).to.equal('yeet4');
      expect(arr.length).to.equal(9);
    });
  });
});
