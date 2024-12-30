/**
 * math.test.js
 */

const { add, sub } = require('../src/math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3);
});
