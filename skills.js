function calculateNumbers(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}
console.log(calculateNumbers(5, 2, '+'));
console.log(calculateNumbers(10, 3, '-'));
console.log(calculateNumbers(4, 6, '*'));
console.log(calculateNumbers(8, 2, '/'));
console.log(calculateNumbers(7, 3, '+'));
console.log(calculateNumbers(12, 4, '-'));
console.log(calculateNumbers(9, 3, '*'));