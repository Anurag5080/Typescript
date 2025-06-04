"use strict";
// Interfaces
// That's how we define types to the complex objectsin TS.
const user = {
    name: "Anurag",
    age: 22,
    marriedstatus: true
};
function greet(user) {
    console.log(`Hello ${user.name}, your age is ${user.age} and you are ${user.marriedstatus ? "Married" : "Single"}`);
}
greet(user);
