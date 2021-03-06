'use strict';

const arrMax = require('./ArrMax');

const NUM = 59930070;
const CNT = 1000;

let now, end, time;

const data = [];
for(let i=0; i<NUM; i++){
    let tmp = Math.floor(Math.random()*100);
    data.push(tmp);
}

// console.log(`data: ${data}`);

// now = new Date();
// arrMax.maxMapLen(data, CNT);
// end = new Date();
// time = end - now;
// console.log(`maxMap-use len: ${time} ms`);

// now = new Date();
// arrMax.maxMapIdx(data, CNT);
// end = new Date();
// time = end - now;
// console.log(`maxMap-use %: ${time} ms`);

// now = new Date();
// arrMax.maxReduce(data, CNT);
// end = new Date();
// time = end - now;
// console.log(`maxReduce: ${time} ms`);

now = new Date();
arrMax.maxForeach(data, CNT);
end = new Date();
time = end - now;
console.log(`maxForeach: ${time} ms`);

now = new Date();
arrMax.maxForLength(data, CNT);
end = new Date();
time = end - now;
console.log(`maxForLength: ${time} ms`);

now = new Date();
arrMax.maxForCnt(data, CNT);
end = new Date();
time = end - now;
console.log(`maxForCnt: ${time} ms`);