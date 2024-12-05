// falsy values : false,0,-0,BigInt(0n),"",null,NaN 
// truty values : true,[],"0",'false'," ",{},function(){}:-known as empty functions

const userEmail="d@deep.ai"
if(userEmail)
    console.log("Got user email");
else
   console.log("Don't have a user email");
    
// check if a object is empty or not
const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("Object is empty");
}

// false==0 :-true
// false=='' :-true
// 0=='' :-true

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??15
console.log(val1);


// Terniary Operator
// conditional ? true: false
const iceTeaPrice=100
iceTeaPrice<=80 ?console.log("less than 80"):console.log("more than 80")

