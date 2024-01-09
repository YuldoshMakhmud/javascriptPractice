//  function bu  block code
// function 3hil yuli bor
// 1- Decalaration function
// 2- expression function
// 3- Arrov function

// sayHello()
//  function sayHello(){
//     console.log("hello");
//  }


//  let sayHi = function(){
//     console.log("Hello");
//  }
//  sayHi()

//  hello = ()=>{
//     return "hello world"
//  }
//  console.log(hello());


// function coffee(){
//    console.log("ameracano");
// };
// coffee()

// let age = 30;

// function sayMyName(name,surname){
//    age=20;
//    console.log(`my name is ${name} ${surname}`);
//    console.log(age);
// }

// sayMyName("maxmud", "badriddinov")
// console.log(age);



// function calc(a,b){
//    return a+b;
// }
// console.log(calc(5,5));

function User (name,lastNAme,birthDay){
   this.name= name
   this.lastNAme= lastNAme
   this.birthDay =new Date(birthDay).getFullYear()
}


//Instant obyekt

const user1 = new User("bexruz", "xolmuminov","1995-12-08")
const user2 = new User("bexruz2", "xolmuminov2","1995-12-08")

console.log(user1);
console.log(user2);