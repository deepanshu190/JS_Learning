//  if

// if(2==="2")
// {
// // console.log("executed if");
// }
// else
// {
//     // console.log("executed else");
// }
// comparison operator :- <,>,<=,>=,==,!=,===,!==


// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power:${power}`);   
// }

// Shorthand notation-Implicit

// const balance=1000
// if(balance>500)
    // console.log("test");

// Nested if
// if(balance<500)
// {
//     console.log("less than 500");
// }
// else if(balance<750)
// {
//     console.log("less than 750");
    
// }
// else if(balance<1200){
//     console.log("less than 1200");  
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=false
if(userLoggedIn && debitCard)
{
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in");
    
}
    