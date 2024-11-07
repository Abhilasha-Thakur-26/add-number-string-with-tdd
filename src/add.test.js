const add = require('./add.js')

test('adds string with a single number', () => {
    expect(add("1")).toBe(1);
});

test('adds string of numbers separated by commas', () => {
    expect(add("5,10,16")).toBe(31);
});

test('handles string of numbers having extra spcaces ahead of numbers',() =>{
    expect(add("5, 10, 16")).toBe(31)
})

test('handles string of numbers having extra spcaces at the end of numbers',() =>{
    expect(add("5, 10 , 16 ")).toBe(31)
})