
function parseCustomDelimiter(numbers) {
    const delimiterRegex = /^\/\/(.+?)\n/
    const customDelimiter = numbers.match(delimiterRegex)
    let delimiter = /[,;\n\r]+/
    
    if (customDelimiter) {
        delimiter = customDelimiter[1]
        numbers = numbers.slice(customDelimiter[0].length)
    }
    
    return { numbers, delimiter }
}

function validateNumbers(numbers, delimiter) {
    const numArray = numbers.split(delimiter).map(num => {
        const parsedNum = Number(num.trim())
        return { num, parsedNum }
    })

    const validNumbers = numArray.map(item => item.parsedNum).filter(num => !isNaN(num))
    const negativeNumbers = validNumbers.filter(num => num < 0)
    const invalidEntries = numArray.filter(entry => isNaN(entry.parsedNum)).map(entry => entry.num.trim())

    return { validNumbers, negativeNumbers, invalidEntries }
}

function add(numbers) {
    const { numbers: parsedNumbers, delimiter } = parseCustomDelimiter(numbers)
    const { validNumbers, negativeNumbers, invalidEntries } = validateNumbers(parsedNumbers, delimiter)
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`)
    }
    if (invalidEntries.length > 0) {
        throw new Error(`Invalid inputs: ${invalidEntries.join(', ')}`)
    }
    return validNumbers.reduce((sum, num) => sum + num, 0)
}
module.exports = { add, parseCustomDelimiter, validateNumbers }