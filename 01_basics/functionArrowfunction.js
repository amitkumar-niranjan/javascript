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
        console.log(this.name); // here inside object "this keyword" inside function behaving like its scope
        return this.age
    },
}

console.log(data.call());