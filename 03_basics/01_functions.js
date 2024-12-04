// function sayMyName(){
//     console.log("Deepanshu");
// }
// sayMyName()

// Add Two numbers

// function addTwoNumber(number1,number2)
// {
//    console.log(number1+number2);
   
// }
// addTwoNumber(5,6)

// Second way to add Two numbers
// function addTwoNumber(number1,number2)
// {
//    let result=number1+number2;
//    return result  
// }
// const result=addTwoNumber(5,6)
// console.log(result);

// function loginUserMessage(username="sam"){
//     if(username==undefined)
//     {
//         console.log("Please enter a username");
//         return;
//     }
//  return `${username} just logged in`
// }
// const result=loginUserMessage("Deepanshu")
//const result=loginUserMessage()
// const result=loginUserMessage("Deepanshu")
// console.log(result);


// ...:- rest operator
// function calculateCartPrice(val1,val2,...num1)
// {
//     return num1
// }
// console.log(calculateCartPrice(200,400,500));

const user={
    username:"Deepanshu",
    price:999
}
function handleObject(anyobject)
{
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)



