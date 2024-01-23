// Write a function expect that helps developers test their code. 
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. 
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".
 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.




/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
 
    return{
        toBe:(val2) =>{
            if(val !== val2) throw new Error("Not Equal")
            else return true;
        },
        notToBe:(val2)=>{
            if(val === val2) throw new Error("Equal")
            else return true;
        }
    }
};


// expect(5).toBe(5); // true
// expect(5).notToBe(null); // throws "Equal"
/**
 * outer scope  : every function has access to it's vars
 * as well as as any variable deaclared outside 
 * */


// var y = 100;
// function fn() {
//     /**
//      * you are taking the value from the current/local scope*/
//     var x = 20;
//     console.log("c Value of x is ", x, y);
// }
// var x = 10;
// fn();



// var varName = 10;

// /**fn def*/
// function b() {
//     console.log("in b",varName);
// }

// function fn() {
//     var varName = 20;
//     /**fn call*/
//     b();
//     console.log(varName); // 20
// }

// fn();


// error
// 20 20
// 10 20
// 20 10

/**
 * JS says that outer scope is lexically scoped -> literal existence -> your fn definiton
 * */ 