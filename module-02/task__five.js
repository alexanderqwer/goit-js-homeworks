const formatString = function (string) {
    let qwe;
    if (string.length <= 40) {
        qwe = string;
    } else {
        qwe = string.slice(0, 40) + '...';
    }
    return qwe;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));