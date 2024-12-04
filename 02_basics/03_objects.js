// Object declared using singleton
const tinderUser=new Object() //singleton Object
// const tinderUser1={} //non-singleton Object
// console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="Deepanshu"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"sum@gmail.com",
    fullname:{
        userFullName:{
            firstname:"Deepanshu",
            lastname:"Shukla"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname);

// Object combine
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

// const obj3=Object.assign({},obj1,obj2,obj4)
// const obj3={...obj1,...obj2}

// console.log(obj3);

// Jab database se value aa rhi ho
const users=[
    {
      id:1234,
      email:"deep@gmail.com"  
    },
    {
        id:1234,
        email:"deep1@gmail.com"  
    },
    {
        id:1234,
        email:"deep2@gmail.com"  
    },
]
// console.log(users[0].email);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring of an objects
const course={
    coursename:"js",
    price:"999",
    courseInstructor:"Hitesh"
}
const {courseInstructor:instructor}=course
console.log(instructor);








