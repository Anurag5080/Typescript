// in js :-
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

function delayedcall(anotherfn: (a : string) => void) {
    setTimeout(()=> anotherfn("Anurag"),5000);
}

function fn(str : string){
    console.log(`hello ${str}`);
};

delayedcall(fn);

// function delayedcall(anotherfn: () => number) {
//     setTimeout(anotherfn, 3000);
// }

// function fn(){
//     console.log("Hello Arpit.");
//     return 1;
// };

// delayedcall(fn);

