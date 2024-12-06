// for of loop :- These are array specific loops

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello world!"
for (const num of greetings) {
    // console.log(`Each char is ${num}`);  
}

// Maps-unique value stored

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-',value);  
}

// Object for the for of here for that forin loop works
const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}
// for (const [key,value] of myObj) {
//     // console.log(key,':-',value);   
// }

const myObj1={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const key in myObj1) {
    // console.log(`${key} for ${myObj1[key]}`);
    
}

// By default forin loop always gives key value
// we can also use array with for in
const arr1=[1,2,3,4,5]

for (const num in arr1) {
    // console.log(`${num} for ${arr1[num]}`);
}

// we cannot use map for forin loop because map is not iteratble

// ForEach loop
const coding=["js","ruby","java","python","cpp"]

coding.forEach(element => {
    console.log(element);
    
});
