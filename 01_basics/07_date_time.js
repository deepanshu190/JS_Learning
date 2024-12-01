// Dates

let myDate=new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString);
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let mycreatedDate=new Date(2023,0,23)
// console.log(mycreatedDate.toDateString());

let mycreatedDate1=new Date(2023,0,23,5,3,45)
// console.log(mycreatedDate1.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

// To convert to seconds from miliseconds
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday:"long",
// })





