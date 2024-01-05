"use strict"
// number
// let number = 5.6
// console.log(8/0); // infinity
// console.log("max" * 8);  // NaN


// //String
// const clientName = "max";


// //Boolean


// const isMarried = false;
// const isciricleEarth = true;


// null
//console.log(clieantAge);  // we hahe not variable but when use it  null   error in terminal


//Undifined

// let isStudent = ""

// console.log(isStudent);  // we have varriable but havenot value



// object

// let student = {
// //  key   value
//     name: "max",  // string
//     age : 28,  // number
//     city: false //boolean
// }

// console.log(student);

//Array

//            0       1       2       array count start  zero
// let color = ["red0", "blue", "pink"]

// console.log(color[1]);


// const place = confirm("are you here")
// console.log(place);

// if(place == true) {
//     console.log(alert("good job"));
//     currentPlae = prompt("when you come", "")
//     console.log(currentPlace);
// } 
// else {
//     console.log(alert("why late"));
// }

// inrement  ++  ==   +1
// decrement --  ==   -1


// let incr = 10
// let decr = 5


// console.log(++incr);  +1
// console.log(--decr);   -1


// console.log(5%2);  // qoldiq


// console.log(5*5 == 25);   // string bulsaham   uqidi 

// console.log(5*5 === "25");  //  qiymatham  malumot turi tugri bulsagina  tru beradi hozir false chqadi



// // && va      || yoki

// const isAge = true
// const isClose = false
// const isChacked = true

// console.log(isAge && isClose); // ikkali tugri bulsagina true chiqdi
// console.log(isAge || isClose); // bittasi tugri chiqsa buldi true chiqdi
// console.log(isAge && !isClose && isChacked); //  ! undov falsni truga aylantrib beradi

const numberOfSeries =  +prompt("nechta serial kurdingiz", "")

const seriesDb = {
 count: numberOfSeries,
 series: {},
 actors: {},
 genres: [],
 private: false

}
const a = prompt("last time watch movie?"),
b = prompt("what give you mark"),
c = prompt("last time watch movie"),
d = prompt("what give you mark");

seriesDb.series[a] =b;
seriesDb.series[c] =d;

console.log(seriesDb);