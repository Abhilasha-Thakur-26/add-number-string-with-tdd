const add = require('./add.js')

test('adds string with a single number', () => {
    expect(add("1")).toBe(1)
});

test('adds string of numbers separated by commas', () => {
    expect(add("5,10,16")).toBe(31)
});

test('handles string of numbers having extra spcaces ahead of numbers',() =>{
    expect(add("5, 10, 16")).toBe(31)
})

test('handles string of numbers having extra spcaces at the end of numbers',() =>{
    expect(add("5, 10 , 16 ")).toBe(31)
})

/*  Since the task description didn't mention
    about entries which are not numbers I am taking it as edge 
    case and for now I am filtering out entries which are NaN */

test('handles entries which are not numbers ',()=>{
    expect(add("5, 1 0, 16")).toBe(21)
    expect(add("5, , 16")).toBe(21)
    expect(add("")).toBe(0)
})

test('throws exception for negative numbers ',()=>{
    expect(() => { add("20, 4, -10, 0") }).toThrow('Negative numbers not allowed: -10')
    expect(() => { add("9, 7, -2, -4")}).toThrow('Negative numbers not allowed: -2, -4')
})