const calculateEngravingPrice = function (message, pricePerWord) {
    let total = 0;
    const words = message.split(' ');
    for (const word of words) {
        total += pricePerWord;
    }
    return total;
}

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100