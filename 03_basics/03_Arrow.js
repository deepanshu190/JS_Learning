const user={
    username:"Deepanshu",
    price:999,

    welcomeMessage: function(){
    //  console.log(`${this.username},welcome to website`);
    //  console.log(this);
    }
}
user.welcomeMessage()
user.username="Deep"
user.welcomeMessage()

// console.log(this);

// This can be used with the objects only not with the function it will give give undefined
function one()
{
    let username="Deepanshu"
    // console.log(this.username);   
}
one()


const chai= function()
{
    let username="Deepanshu"
    // console.log(this.username);   
}
chai()

// Declare function through arrow function
const two=()=>
{
    let username="Deepanshu"
    // console.log(this.username); 
    // console.log(this);
    
}
two()


// Add two no using arrow function
const AddTwo=(num1,num2)=>{
return num1+num2;
}
console.log(AddTwo(3,4));


