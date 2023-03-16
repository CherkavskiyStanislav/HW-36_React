import { usersName, salaries, users2 } from "./users.js";
import { maxSalary } from "./methods.js";

let users = {};

for (let name of usersName) {
    const key = name.toLowerCase();
    users = {...users, [key]: name};
}
  
console.log(users);

console.log(maxSalary(salaries));

const { mike, bob, nikola} = users2;
const userMike = mike;
const userBob = bob;
const userNikola = nikola;

console.log(userMike, userBob, userNikola);



