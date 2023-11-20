let data = document.querySelector("h1");
data = data.textContent

// let innerTxt = data1.textContent;
console.log( typeof data, data)
let arr = data.split("=")
// console.log(arr[0].trim);
arr[0] = arr[0].trim();

console.log(arr[0]);

let num = arr[0].split("+")
console.log(num[0],num[1]);
num[0] = Number(num[0]);
num[1] = Number(num[1]);
console.log(typeof num[0], typeof num[1],num[0],num[1]);
arr[1]= num[0] +num[1]
console.log(arr[1]);
document.querySelector("h1").innerHTML = `${num[0]}+${num[1]}=${arr[1]}`
// console.log(data);