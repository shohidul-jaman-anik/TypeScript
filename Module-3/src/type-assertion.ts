let emni: any;

emni = "Next Level Web Development";

(emni as string).length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted Result is ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return `The Converted Result is ${value} gram`;
  }
}

const resultToBeNumber = kgToGram(100) as number;
const resultToBeString = <string>kgToGram("50");

console.log(resultToBeNumber);
console.log(resultToBeString);
