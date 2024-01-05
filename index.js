"use strict"
// number
let number = 5.6
console.log(8/0); // infinity
console.log("max" * 8);  // NaN


//String
const clientName = "max";


//Boolean


const isMarried = false;
const isciricleEarth = true;


// null
//console.log(clieantAge);  // we hahe not variable but when use it  null   error in terminal


//Undifined

let isStudent = ""

console.log(isStudent);  // we have varriable but havenot value



// object

let student = {
//  key   value
    name: "max",  // string
    age : 28,  // number
    city: false //boolean
}

console.log(student);

//Array

//            0       1       2       array count start  zero
let color = ["red0", "blue", "pink"]

console.log(color[1]);


const place = confirm("are you here")
console.log(place);

if(place == true) {
    console.log(alert("good job"));
    currentPlae = prompt("when you come", "")
    console.log(currentPlace);
} 
else {
    console.log(alert("why late"));
}