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

// let numberOfSeries;

// function startApp(){
//      numberOfSeries =  +prompt("nechta serial kurdingiz", "");


//      while(numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)){
//         numberOfSeries =  +prompt("nechta serial kurdingiz", "");
//      }
// }
// startApp();

// const seriesDb = {
//  count: numberOfSeries,
//  series: {},
//  actors: {},
//  genres: [],
//  private: false

// }

// function rememberMySeries(){

//     for(let i = 0; i<2; i++){
//         const a = prompt("last time watch movie?"),
//     b = prompt("what give you mark");
    
//     if(a != null && b != null && a != "" && b != "" ){
//         seriesDb.series[a] =b;
//     console.log("done");
//     } else{
//         console.log("error");
//         i--;
//     }
// }
// }
// rememberMySeries();

// function dedectLevelSeries(){

//     if(numberOfSeries.count < 5){
//     console.log(alert("siz kam kurarkansiz"));
//     } else if(numberOfSeries.count < 10) {
//         console.log(alert("siz kilassik tomashabin kensiz"));
//     }else {
//         console.log(alert("siz manyaksiz"));
//     }
// }
// dedectLevelSeries()

// console.log(seriesDb);


// loop     3 way  1st while  2nd do while  3rd for  (eng asosiysi)

// let startNum =  10

// while (startNum <= 20){
//     console.log(startNum);
//     startNum++;
// }

// do{
//     console.log(startNum);
//     startNum++;
// }while (startNum <= 10)


//for uziga uta argument qabul qiladi


// for(let i = 1;  i<=10; i++){
//     if (i === 9){
//       //  break
//       continue;
//     }
//     console.log(i);
// }

// let numberOfSeries;
// const seriesDb = {
//      count: numberOfSeries,
//      series: {},
//      actors: {},
//      genres: [],
//      private: false
    
//     }

// function showDb(hidden){
//     if(!hidden){
//         console.log(seriesDb);
//     }
// }

// showDb(seriesDb.private);


// function writtenGenres(){
//     for (let i = 0; i <= 2; i++){
//         const genre = prompt(`yaxshi kurgan janringiz  ${i + 1}`);
//         seriesDb.genres[i] = genre
//     }
// }
// writtenGenres()

