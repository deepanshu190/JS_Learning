// console.log("2">1);
// console.log("02">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// === :- Strict Check

// console.log("2"===2);

// Data Types -Two Types

/* Primitive(call by value)-Number,BigInt,String,boolean,null,
undefined,Symbol
*/
// Non-Primitive(call by reference)-Objects,Arrays,Functions


/*JS is a dynamically typed language because here no need to 
assign data types whereas we need to assign type in static typed language
*/

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);

// Create a object

let myObj={
    name:"Deepanshu",
    rollno:21,
}

// Create a function
const myFunction=function(){
    console.log("Hello");
    
}
