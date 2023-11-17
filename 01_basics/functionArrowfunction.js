function amit() {
    let name = "amit";
    console.log(this.name); // hwew in side of function this not pointing to inside scope variable.
    console.log(name);  // we can call it directly
}
// amit();

const data = {
    name: "Amit",
    age: 89,
    sex: "male",
    call: function() {
        console.log(this); // here this is point to current object scope
        console.log(this.name); // here inside object "this keyword" inside function behaving like its scope
        return this.age
    },
    arrowfunction: ()=> {
        console.log(this);
    },
}

console.log(data.call());
console.log(data.arrowfunction());

// fact = 6;
// const factorial = (fact) =>{
//     fact = fact * factorial(fact-1);
// }
// console.log(factorial(fact));
const arr = [1,2,3,4,5]
let tot=0;
arr.map((v,i)=>{
    tot=tot+v; 
})
console.log(tot);