// write a code to eliminate duplicate array to unique

const arr = [1,2,3,4,4,5,5,6,7,6];

function removeDuplicates(params) {
    return Array.from(new Set(params))
    
}
const ansArr = removeDuplicates(arr);
console.log(arr, ansArr);