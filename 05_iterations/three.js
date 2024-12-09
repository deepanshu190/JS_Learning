// for each loop does not return anything

// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach(item => {
//     console.log(item)
//     return item;
// });
// console.log(values);

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// let newNums=myNums.filter((num)=>{
//     return num>4
// })
// console.log(newNums);

// const newNums=[]
// myNums.forEach((num) => {
//     if(num>4)
//         newNums.push(num)
// });
// console.log(newNums);


// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNum.map((num)=>{
// return num+10
// })
// console.log(newNums);

// chaining method

// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const values=myNum
//                .map((num)=>num*10)
//                .map((num)=>num+1)
//                .filter((num)=>num>=40)
// console.log(values);


// Reduce Methods
const myNums=[1,2,3]

const myTotal=myNums.reduce(function(acc,currval){
console.log(`acc:${acc} and currval:${currval}`);
return acc+currval
},0)
console.log(myTotal);









