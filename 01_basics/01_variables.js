const accountId=144553
let accountEmail="deepanshu@gmail.com" //latest use
var accountPassword="12345" 
accountCity="Jaipur"
let accountState;
/*
Prefer not to use var because of issue in 
block scope and functional scope
*/
// accountId=2 :-const cannot be changed

accountEmail="ds@gmail.com"
accountPassword="123@123"
accountCity="Bengaluru"
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
// To print all variables in one row
console.table([accountEmail,accountPassword,accountCity,accountState]);


