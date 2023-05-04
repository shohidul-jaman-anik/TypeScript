interface CurshInterface<T, U = null> {
  name: string;
  husband: T;
  grandMother?: U;
}



const crush1: CurshInterface<boolean, string> = {
  name: "Sumaiya",
  husband: true,
  grandMother: "Sabana",
};

const crush2: CurshInterface<string> = {
  name: "Sagorika",
  husband: "Sagor",
};

const crush3: CurshInterface<{ name: string; age: number }> = {
  name: "Sokina",
  husband: {
    name: "Sona mia",
    age: 30,
  },
};
