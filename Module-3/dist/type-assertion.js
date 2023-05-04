"use strict";
let emni;
emni = "Next Level Web Development";
emni.length;
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted Result is ${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `The Converted Result is ${value} gram`;
    }
}
const resultToBeNumber = kgToGram(100);
const resultToBeString = kgToGram("50");
console.log(resultToBeNumber);
console.log(resultToBeString);
