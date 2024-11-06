const add = require('./add.js')

test('adds string with a single number', () => {
    expect(add("1")).toBe(1);
});

test('adds string of numbers separated by commas', () => {
    expect(add("5,10,16")).toBe(31);
});
  