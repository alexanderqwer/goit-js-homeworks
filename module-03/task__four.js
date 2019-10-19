const countTotalSalary = function (employees) {

    const total = Object.values(employees);

    let allTottal = 0;

    for (const count of total) {
        allTottal += count;
    }
    return allTottal;
}

console.log(countTotalSalary({})); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80,
    }),
); // 330

console.log(
    countTotalSalary({
        kiwi: 200,
        lux: 50,
        chelsy: 150,
    }),
); // 400