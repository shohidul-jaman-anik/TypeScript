type User = {
  name: string;
  age: number;
};

type extendUsers = User & {
  role: string;
};

const userWithTypeAlias: extendUsers = {
  name: "Type Alias",
  age: 100,
  role: "Unknown",
};

interface Iuser {
  name: string;
  age: number;
}

interface extendUser extends Iuser {
  role: String;
}

const userWithInterface: extendUser = {
  name: "Interface",
  age: 200,
  role: "Unknown",
};

// Function
type addNumbersType = (num1: number, num2: number) => number;
interface IaddNumbers {
  (num1: number, num2: number): number;
}

const addNumbers: addNumbersType = (num1, num2) => {
  return num1 + num2;
};

// Array
type rollNumbersType = number[];
interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers: IRollNumbers = [1, 4, 5, 6];
