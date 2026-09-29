const { add } = require('./src/utils/maths');

test('addition de 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});