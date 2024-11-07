function add(numbers) {
    const numArray = numbers.split(',').map(num => Number(num.trim())).filter(num => !isNaN(num))
    const negativeNumbers = numArray.filter(num => num < 0)
    if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`)
    }
    return numArray.reduce((sum, num) => sum + num, 0)
}
module.exports = add