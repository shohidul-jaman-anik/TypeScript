"use strict";
const crush1 = {
    name: "Cream Apa",
    age: 38,
    professionn: "Beautishian",
    address: "Kurmitola,Malibag",
};
const crush2 = {
    name: "Ranu Mondol",
    professionn: "Singer",
    address: "India",
};
console.log(crush1, crush2);
const isCrushMerried = true;
// Flexible functionn which can calculate sum substract multiplicaton and  divide
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
    // console.log(operation(number1, number2));
};
calculate(10, 2, (x, y) => x + y);
calculate(10, 2, (x, y) => x - y);
calculate(10, 2, (x, y) => x * y);
calculate(10, 2, (x, y) => x / y);
