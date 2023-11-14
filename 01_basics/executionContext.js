// An example of how browser enging works behind the scene
// here Firtst Global Context Execution Created then Execution Context get the variable as undefined
// Every function call create another sandbox containing variable context and execution phase
// it works like Lifo, i.e last end first out
// in below example there are nested function displaying the behaviour of Context phase in browser
// here Global context point "this".

function one() {
    console.log("one");
    two()
}
function two(params) {
    console.log("two");
    three()
}
function three(params) {
    console.log("three");
}

one()
two()
three()