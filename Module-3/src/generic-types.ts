type GenericArray<T> = Array<T>;

const productNumbers: GenericArray<number> = [1, 3, 5, 7];
const productNumbers2: GenericArray<string> = ["2", "5", "7", "9"];
const productNumbers3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const user: GenericArray<NameRollType> = [
  { name: "Montu mia", roll: 10 },
  { name: "Jhontu mia", roll: 20 },
];

type GenericTuple<x, y> = [x, y];

const relation: GenericTuple<string, string> = ["Montu", "Monika"];
const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "Montu",
    salary: 10000000,
  },
  "Monika",
];

const relationWithSalary2: GenericTuple<{name:string,salary:number},string > = [
  {
    name: "Montu",
    salary: 10000000,
  },
  "Monika",
];
