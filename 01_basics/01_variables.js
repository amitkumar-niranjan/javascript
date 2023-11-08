// https://tc39.es/ecma262/   original ECMA SCRIPT DOCUMENTATION
// MDN IS FOR MOZILLA DOCUMENTATION

const accountId = 100756342;
let accountEmail = "amit@google.com";
var accountPassword = "12345";
myName = " Amit Kumar Niranjan"
// const likely means constant: not reinitialised

// accountId = 7888; // we cannot reinitialised a const with another value it's like constant;
// console.log(accountId);

accountEmail = "hello@google.com" // we can reinitialised with new value using let.
console.log(accountEmail);
/*
Prefer not to use var in code in modern javascript
*/

console.table([accountEmail, accountPassword, myName]); // we can console o/p as table
