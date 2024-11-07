function add(numbers) {
    const numArray = numbers.split(',')
    .map(num => {
        const parsedNum = Number(num.trim())
        return {num, parsedNum}
    })
    const validNumbers = numArray.map(item => item.parsedNum).filter(num => !isNaN(num));
    const negativeNumbers = validNumbers.filter(num => num < 0)
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`)
    }
    const invalidEntries = numArray.filter(entry => isNaN(entry.parsedNum)).map(entry => entry.num.trim())
    if(invalidEntries.length > 0){
        throw new Error(`Invalid inputs: ${invalidEntries.join(', ')}`)
    }
    return validNumbers.reduce((sum, num) => sum + num, 0)
}
module.exports = add