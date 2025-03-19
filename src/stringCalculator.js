function add(numbers) {
    if (numbers === "") return 0;
    const numList = numbers.split(",").map(Number);
    return numList.reduce((sum, num) => sum + num, 0);
}

module.exports = add;