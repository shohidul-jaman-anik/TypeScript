// Normal Function with default parametter
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(5, 3);

// Arrow Function
const addArow = (num1: number, num2: number): number => num1 + num2;

const numbers = [1, 2, 5, 3, 6];
const squireNumbers = numbers.map((n: number) => n * n);

// Function useing on object
const men: {
  name: string;
  blance: number;
  addBlance(money: number): void;
} = {
  name: "Gablu vhi",
  blance: 10,
  addBlance(money: number) {
    console.log(`My new blance is ${this.blance + money}`);
  },
};

// spread operator
const boyFriend = ["jamal", "montu", "chotu"];
const girlFriend = ["monika", "Dipika", "sultana"];

boyFriend.push(...girlFriend);
console.log(boyFriend);

// Rest parametter
const greedFriend = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greedFriend("kashem", "hashem", "kodu mia", "Bangla vhi", "English vhi");

// Array and Object destructure

const student = ["Hablu", "Gablu", "Mablu", "Jamlu"];
const [newStudent] = student;

const bestFriend = {
  fullName: "Abul Basher",
  age: 23,
};
const { fullName:string } = bestFriend;
