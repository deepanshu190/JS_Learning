/* singleton(When objects are made with the help of constructor not with
the object literals)
Object.create
*/

// Object Literals
const mykey1=Symbol("mykey1")

const jsUser={
    name:"Deepanshu",
    age:20,
    location:"Lucknow",
    [mykey1]:"key1",
    email:"deepanshu@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// we cannot access symbol in this way 
// console.log(jsUser["mykey1"],typeof(jsUser.mykey1));

// This is the correct way to access
// console.log(jsUser[mykey1]);

// how to change value in objects
jsUser.email="deepanshu@chatgpt.com"
// console.log(jsUser.email);

// how to freeze some object value(which does not change further)
// Object.freeze(jsUser)
jsUser.email="deepanshu@chatgpt1.com"
// console.log(jsUser);

jsUser.greetings=function(){
    console.log("Hello js Users");  
}

// when we are reference to the same object then we use 'this' keyword
jsUser.greetingsTwo=function()
{
    console.log(`Hello Js user,${this.name}`)
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());









