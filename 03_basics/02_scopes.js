/*  if we declare var inside any function then its scope is global and 
outside the function also its variable work so we can avoid using var
and use let instead
*/
if(true){
let a=10
const b=20
var c=30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one()
{
    const username="Deepanshu"

    function Two()
    {
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    // Two()
}
// one()

// +++++++++++++++++++++++ interesting ++++++++++++++++++++

addone(5)
function addone(num)
{
return num+1
}


addTwo(5)
const addTwo=function(num)
{
    return num+2
}



