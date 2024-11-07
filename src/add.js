function add(numbers) {
    const numArray = numbers.split(',').map(num => Number(num.trim())).filter(num => !isNaN(num));
    return numArray.reduce((sum, num) => sum + num, 0);
}
module.exports = add;