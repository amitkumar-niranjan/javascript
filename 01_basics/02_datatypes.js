// there are two types of data types in JS
// 1. Primitive 2. non Primitive
// Examples:

let name = "Amit"
let age = 35
let isLoggedIn = true
let data = null // standard value
let value = undefined
//bigint
// symbol -> unique
// null -> standalone value its type is object

// we can check the type of these variables using type of propertise of JS

console.table([typeof name,typeof age,typeof isLoggedIn,typeof data,typeof value]);
// String, number, boolean, object, undefined

/*********************OPERATION*************************** */

console.log(1+2+"2"); // 32
console.log("2"+1+2); // 212
console.log(Number(true)); // 1 
console.log(true); // 1 
/*******Non primitive data types*********** */
const arr = [1,2,3,"4"];
console.log(arr);
arr.map((i)=>{
    console.log(typeof i);
})

const myObj = {
    name:"Amit",
    age: 35,
    salary: function(){
        console.log(80000);
    },
    pic:{
        flower:"rose",
        health:{
            status:"good"
        },
    }
}

