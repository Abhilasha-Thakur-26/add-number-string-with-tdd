function add(numbers) {
    const numArray = numbers.split(',').map(num => Number(num.trim()));
    return numArray.reduce((sum, num) => sum + num, 0);
}
module.exports = add;