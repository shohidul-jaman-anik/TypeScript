//  Ternary Operator
const age: number = 22;

if (age > 18) {
  console.log("Yes");
} else {
  console.log("No");
}

const isAdult = age >= 18 ? "Yes" : "NO";
console.log(isAdult);

// Nullish Coeslancing Operator (null and undefined)
const isAuthenticUser = "";
const userName = isAuthenticUser ?? "Guest";
const userName2 = isAuthenticUser ? isAuthenticUser : "Guest";
console.log({ userName }, { userName2 });

type manus = {
  name: string;
  age: number;
  address: {
    city: "No city";
    road: "No Road";
    home?: "";
  };
};

const manus1: manus = {
  name: "Human",
  age: 25,
  address: {
    city: "No city",
    road: "No Road",
  },
};

const home = manus1?.address?.home ?? "No Home";
console.log(home)
