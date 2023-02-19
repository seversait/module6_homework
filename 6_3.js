function getSum (number_1) {
    return function (number_2) {
        return number_1 + number_2;
    }
}
console.log(getSum(3)(1));