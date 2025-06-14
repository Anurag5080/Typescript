// Interfaces


// That's how we define types to the complex objects in TS.
const user = {
    name : "Anurag",
    age : 22,
    marriedstatus : true,
    address : {
        streetname : "Ayodhya",
        pincode : 224229
    }
}

function greet(user : {
    name : string,
    age : number,
    marriedstatus : boolean,
    address : {
        streetname : string,
        pincode : number
    }
}) {
    console.log(`Hello ${user.name}, your age is ${user.age} and you are ${user.marriedstatus ? "Married" : "Single"}`)
}

greet(user);