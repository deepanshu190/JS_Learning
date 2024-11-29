const name="Deepanshu"
const repoCount=1
// console.log(name+repoCount);

// Nowadays backticks used 
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

// Another way to declare string
const gameName=new String('deepanshu')
// console.log(gameName);
// console.log(gameName[1]);
// console.log(gameName.__proto__); 
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

// we can negative values in slice but not in substring b/c it will start from the 0 itself when we give negative values
const newString=gameName.substring(0,4)
// console.log(newString);

const anotherString=gameName.slice(-8,4)
// console.log(anotherString);

// trim method
const newString1=" deep "
// console.log(newString1);
// console.log(newString1.trim());

// Replace method
const url="https://deepanshushukla/deepanshu%21shukla"

console.log(url.replace('%21','-'));

// include method
// console.log(url.includes('deepanshu'));

// Split method
// console.log(url.split('-'));









