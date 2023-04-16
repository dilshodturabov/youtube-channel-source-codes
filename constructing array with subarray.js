// welcome guys!
let bigArr = [];

let count = 1;
for(let i=0; i < 3; i++){
  let littleArr = [];
  for(let j=0; j<3; j++){
    littleArr.push(count);
    count++;
  }
  bigArr.push(littleArr);
}

console.log(bigArr);