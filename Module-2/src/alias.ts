type CrushDetails = {
  name: string;
  age?: number;
  professionn: string;
  address: string;
};

const crush1: CrushDetails = {
  name: "Cream Apa",
  age: 38,
  professionn: "Beautishian",
  address: "Kurmitola,Malibag",
};

const crush2: CrushDetails = {
  name: "Ranu Mondol",
  professionn: "Singer",
  address: "India",
};
console.log(crush1, crush2);

type crushMerriedType = boolean;
const isCrushMerried: crushMerriedType = true;

// Flexible function which can calculate sum subtract multiplication and  divide

const calculate = (
  number1: number,
  number2: number,
  operation: (x: number, y: number) => number
) => {
  return operation(number1, number2);
  // console.log(operation(number1, number2));
};

calculate(10, 2, (x, y) => x + y);
calculate(10, 2, (x, y) => x - y);
calculate(10, 2, (x, y) => x * y);
calculate(10, 2, (x, y) => x / y);
