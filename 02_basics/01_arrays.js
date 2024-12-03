const myArr=[0,1,2,3,4,5]

const myArr2=new Array(0,1,2,3)

// console.log(myArr,typeof(myArr));
// console.log(myArr2,typeof(myArr2));

// Array Method
// push
myArr.push(6)
// console.log(myArr);

// pop
myArr.pop()
// console.log(myArr);

// unshift
myArr.unshift(8)
// console.log(myArr);

// shift
myArr.shift()
// console.log(myArr);

// Question Methods
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// Join method

// const newArr=myArr.join()
// console.log(myArr,typeof(myArr));
// console.log(newArr,typeof(newArr));

// Slice,Splice Method
// console.log("A",myArr);
const myn1=myArr.slice(1,3)
// console.log(myn1);
// console.log("B",myArr);
const myn2=myArr.splice(1,3)
// console.log("C",myArr);
// console.log(myn2);


const marvel_heroes=["thor","Ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// Concat Operator
// const heroes=marvel_heroes.concat(dc_heroes)
// console.log(heroes);

// Spread Operator
// const allheroes=[...marvel_heroes,...dc_heroes]
// console.log(allheroes);


// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Deepanshu"));
// console.log(Array.from("Deepanshu"));
// console.log(Array.from({name:"Deepanshu"})); //interesting case

// Convert multiple variables to a array
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
























