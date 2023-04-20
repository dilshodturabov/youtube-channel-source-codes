function sum(arr){
  let output = [];
  for(let i =0; i < arr.length; i++){
    output.push(arr[i]+1);
  }
  return output;
}


let result = sum([1,2,3,4]);
let result2 = sum([0,1,0,4,3]);

console.log(result);
console.log(result2)
