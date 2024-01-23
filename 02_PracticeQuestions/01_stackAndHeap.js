// prefix and post fix operations

let a = 100;
++a;
console.log(a);
let b = 200;
b++;
++a

// console.log(a);
// console.log(b);

// +++++++++++++++++++++++++Stack and Heap++++++++++++++++++++++++++++
// Stack (Primitive data types) Heap (Non Primitives data types)
// 
// In Non primitive data type assigning operator only giving reference of same data
// therefore once we change the value of data it will change on both places
// this is known as heap memory, call by reference
let userOne = {
    email: "hello@hello.com",
    name: "Amit",
}
let userTwo = userOne;

userTwo.email = "amit@hello.com"
// console.log(userOne.email);
// console.log(userTwo.email);

// In Primitive data type example with assignment operators
// In below example we see the value is change individuals
// this is an example of call by value.
let am = "7:00 pm"
let pm = am;

am = "7:00 am"

console.log(am);
console.log(pm);
