// write a code to eliminate duplicate array to unique
// 1. bruteforce approach
const arr = [1,2,3,4,4,5,5,6,7,6];
const ansArr = [];
let temp=0;
let count = 0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
            
            if(count >= 2){
                temp=arr[i];
                arr.pop(arr[i])
            }

        } 
        ansArr.push(temp);

    }
    // if(count <=1)
    count =0;
    // temp=-1;
    
}
console.log(arr, ansArr);