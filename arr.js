 // arraylar va arraylarga tegishli looplar

// let arr = []            // array bu karobkaga uxshedi  kup narsa solsa buladi
 
// arraydan string qirqib  olish
 // Json.stringify  arrayni stringa utkazadi
 //let arr = ["max" , "rex" , "lex"]


 //console.log(arr.splice(0,2));    //splice ikta qiymat oladi  qayerdan boshlash nechta kesib olish arrey bn ishledi kupro


 // slice bn splice  farqi :   
 // slice  1 qayerdan boshlab qayerda tugatish                               splice  1 qayerdan boshlab nechata kesib olish
 // slice  2 sliceda qirqib olinsa arr yoki variableda ma'lumot qoaldi       spliceda qolmaydi qirqib olib arr ichida ma'lumot uchib ketadi


 //  arrayni srtinga utkizishning ikkinchi yuli

 //  .join arrayni stringa utkazadi joinda harqanday characjter yoki malumot berilsa   ma'lumot urtasiga qushadirj

//  let arr = ["max" , "rex" , "lex"]

//  console.log(arr.join("dud"));
//  console.log(arr.concat("red"));   // concat array qo'shadi     bir molumot ikkinchi  malumotga qoshamiz  malumotni ohiridan qo'shadi


 // spread ham malumot qushadu   ... orqali   

//  let arr = [1,2,3,...b,5]
//  let b = [4]

//  console.log(arr);

// arrayga malumot qushish uchirish       delete and add


// push    ohiridan malimot qushish uchun
// pop     ohiridan malumot uchirish
// unshift boshidan malumot qushish
// shift   boshidan malumot uchirish        bu 4tA method  faqat birmarta qushasiz

                        // array loop


// let arr = [1,2,3,4]

// const map1 = arr.map((x)=> x * 2)  //  map uziga 3qiymat oladi 1 value  2 itemlarini indexsi 33 array buladi  map o'z ichiga callback funksiya oladi returnga qaytadi

// console.log(map1);


// let numbers = [1,4,9]
// let doubles = numbers.map(function(num){
//     return num *2
// })
// console.log(doubles);



 //  ForEach   3qiymat oladi 1 value  2index 3 arrayni uzi.  hozirgi kunda array ishlatilmedi yozmaham buladi . foreach yangi array hosil qilmaydi returnga qaytmaydi

// let text = ["be","coder","edu"]
// text.unshift("hi")

// console.log(text)     // unshift boshidan malumot qushadi


//sort

// let fruit = ["banana","apple","Orange" ]
// console.log(fruit.sort())

