function add(numbers) {
    const numArray = numbers.split(',').map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}
module.exports = add;