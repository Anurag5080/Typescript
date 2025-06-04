// Typescript is actually an Dev dependency.
// 
//  in js :-
//  let x = 2;
//  x = "Anurag";

// in Ts :-
//  let x : number = 2;



// function greet( x : string ){
//     console.log("Hello ${x}");
// }

// greet("Anurag");

// if we wasn't give the type of function then it iferreds its type implicitly based on the type of i/o arguments.

// function sum(x:number,y:number): number{
    // console.log(x + y);  
    // return x + y;
// };

// let ans : number = sum(2,4);

// console.log(ans);

// function delayedcall(anotherfn: (a : string) => void) {
//     setTimeout(()=> anotherfn("Anurag"),5000);
// }

// function fn(str : string){
//     console.log(`hello ${str}`);
// };

// delayedcall(fn);

// function delayedcall(anotherfn: () => number) {
//     setTimeout(anotherfn, 3000);
// }

// function fn(){
//     console.log("Hello Arpit.");
//     return 1;
// };

// delayedcall(fn);

// function delayedcall(anotherfn: ((varibale : string) => number | string) | ((variable : number) => number | string)) {
//     setTimeout(anotherfn, 3000);
// }

// function fn(argument : string | number){
//     console.log("Hello Arpit.");
//     return 1; //For more than one return type to a function, we can do that but in cocky fashion or using polymorphism but as js is loosely typed it's easy to have more than one return type to a function but as a developer not good.
// };

// delayedcall(fn);
