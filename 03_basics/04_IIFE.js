// Immediately Invoked Function Expression(IIFE)

// Global scope ke pollution se kabhi kabhi problem hoti hai to usko hatane ke lia hmne IIFE ka use kara hai 

(function chai()
{
    // named IIFE
    console.log(`DB Connected`);
})();

// we have to use semicolon at end of each IIFE

((name)=>{
console.log(`DB connected Two ${name}`);
})("Deepanshu");
