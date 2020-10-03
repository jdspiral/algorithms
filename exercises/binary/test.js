const binarySearch = require('./index.js');

const sortedArray = [-124, -40, 0, 7, 21, 100, 500];

describe('Binary sort', () => {
  test('finds element in array', () => {
    expect(binarySearch(sortedArray, 1)).toEqual(-40);
  });
});