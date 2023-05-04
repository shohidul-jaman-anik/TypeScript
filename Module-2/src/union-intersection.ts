type NoobDeveloper = {
  name: string;
};

// type JuniorDeveloper = {
//   name: string;
//   experties: string;
//   experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
  name: string;
  experties: string;
  experience: number;
};

type SeniorDeveloper = JuniorDeveloper & {
  leadershipExp: number;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Moznu Mia",
  experties: "React.js",
  experience: 1,
};
