const add = require('./add.js')

test('adds string with a single number', () => {
    expect(add("1")).toBe(1);
  });