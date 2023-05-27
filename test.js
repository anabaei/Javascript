
// // const person =(firstName, lastName) =>
// // ({
// // first: firstName,
// // last: lastName
// // })
// // console.log(person("Jill", "Wilson"))
// const name = "Rachel";
// const age = 31;
// const person = { name, age };
// const a = {
//   b: "eee",
// };
// // console.log(person, a);
// // console.log(age);

// const message = "AA";

// const object = {
//   message: "Hello, World!",
//   getMessage() {
//     const message = "Hello, Earth!";
//     return this.message;
//   },
//   newone: (params) => {
//     const message = "Hello, Earth!";
//     return this;
//   },
// };

// aaa = function () {
//   console.log("sss");
// };

// // console.log(aaa());
// // console.log(object.newone());

// // console.log("__________________________________________");

// // function Pet(name) {
// //   this.name = name;
// //   // this.getName = () => this.name;
// //   function getName() {
// //     console.log("sss");
// //   }
// // }
// // const cat = new Pet("Fluffy");
// // console.log(cat.getName())

// //   console.log(cat.getName()); // What is logged?

// //   const { getName } = cat;
// //   console.log(getName());

// // interviewer: what will the following code output?
// const arr = [10, 12, 15, 21];
// // for (let i = 0; i < arr.length; i++) {
// //   console.log(i);
// //   setTimeout(function () {
// //     console.log("Index: " + i + ", element: " + arr[i]);
// //   }, 3000);
// // }

// //\/ let is one time assign
// //\/ var first associate memory

// // for (var i = 0; i < 5; i++) {
// //   (function () {
// //     console.log("><",i);
// //   })();
// //   (function () {
// //     setTimeout(function () {
// //       console.log("-", i);
// //     }, 1000);
// //   })();
// // }



// // function hoist() {
// //   a2 = 20;
// //   var ab = 100;
// // }

// // hoist();
// // console.log("?", a2); 
// // console.log("?>", ab);


// // for (var i = 0; i < arr.length; i++) {
// //   // pass in the variable i so that each function
// //   // has access to the correct index
// //   setTimeout(function(i_local) {
// //     return function() {
// //       console.log('The index of this number is: ' + i_local);
// //     }
// //   }(i), 3000);
// // }

// // for (var i in arr) {
// //   console.log(i)
// //   setTimeout(function() {
// //     console.log('Index: ' + i + ', element: ' + arr[i]);
// //   }, 3000);

// // }
// // (element => console.log(element));

// // arr.forEach((element,i)  => {
// //   console.log(i)
// //   setTimeout(function() {
// //     console.log('Index: ' + i + ', element: ' + arr[i]);
// //   }, 3000);

// // })

// // Foreach doesn't have stop loose
// // arr.forEach(function (element, i) {
// //   console.log(",,,")
// //   setTimeout(function() {
// //     console.log('Index: new ' + i + ', element: ' + arr[i]);
// //   }, 1000);

// // })

// // const ratings = [5, 4, 5];
// // let sum = 0;

// // const sumFunction = async (a, b) => a + b;

// // ratings.forEach(async (rating) => {
// //   sum = await sumFunction(sum, rating);
// // });

// // (async ()=>{
// //   for(let i=0; i< ratings.length; i++) {
// //     sum = await sumFunction(sum, ratings);
// //   };
// //   console.log(">>", sum);
// // })();

// // Naively expected output: 14
// // Actual output: 0

// // const personw = {
// //   name: "John Doe",
// //   sayName: function() {
// //     console.log(this.name);  // refers to the person object
// //   }
// // };


// // At 
// // personw.sayName();  // logs "John Doe" to the console
// // function sum(a, b) {
// //   console.log(this === window); // => true
// //   this.myNumber = 20; // add 'myNumber' property to global object
// //   return a + b;
// // }
// // sum() is invoked as a function
// // this in sum() is a global object (window)
// //sum(15, 16);     // => 31
// //window.myNumber; 


// const numbers = {
//   numberA: 51,
//   numberB: 10,
//   sum: function() {
//     console.log(this === numbers); // => true
//     const calculate = function () {
//       console.log(this); // => true
//       return this.numberA + this.numberB;
//     }
//     return calculate();
//   }
// };
// // console.log(numbers.sum()); 


// ar = [1,2,3,4,5]

// // b3 = ar.forEach((a, index)=>{
// //   return "S"
// // })
// // console.log(b3)

// // a3 = ar.map(a => a*2 ).filter(a=> a)


// q = [
//   [1,2,3],
//   [4,5,["a","b"],6]
// ]

// // console.log([].concat(rb,ra,rb))
// // console.log(...q)

// function flatten(arr, depth=1) {
//   result = []
//   arr.forEach(element => {
//     if(typeof element === Array){
//       flatten(element)
//     }
//     result = result.concat(...element)
   
//   });
//   console.log(result)
// }
// // flatten(q)

// {
//   var pp = 3
// }

// function s(){
//   var pp1 = 1
// }
// s()

// var ay = 33
// var ay = 34

// // console.log(ay)

// const person1 ={
//   name: "coder",
//   hello: function(thing){
//     console.log(this.name + " from "+ thing)
//   }
// }

// var newvar = {
//   name: "coder 2"
// }

// // person1.hello(" Js")
// // person1.hello.apply(newvar,[0,"Js"])
// // const hello = person1.hello.bind(newvar)
// // hello(" Js")

// const rr  = arr.reduce((acc, curr)=>{
//   return curr*2 
// },0)

// // console.log(rr)

// res = Promise.resolve("hi").then(val => console.log(val) )
// // console.log(res)

// function testme(prop){
//   return new Promise((res, rej)=>{
//     setTimeout(() => {
//       res(prop)
//     }, 1);
//   })
// }

// promises = [Promise.resolve("hi"), Promise.resolve("you"), Promise.reject("no")]

// // results = []
// // promises.forEach((promise, index)=>{
    
// // })
a = [1,2,3,4,5]

// const tt = a.reduce((previous, current) => { 
//   previous  + current
//   console.log(current, previous)
//   return previous
// }, 0)
// console.log(tt)




const pro = (variable) =>{
 return new Promise((res, rej)=>{
    if(variable==="you"){
      console.log("resolve1")
      console.log("")
    }
    if(variable==="me"){
      console.log("reject1")
      console.log("")
    }
  })
}

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

function displayResult(result) {
  console.log("The result is: " + result);
}



(async () => {
  await pro("you")
  add(2, 3, displayResult)
}
)();



// function sayHiToPerson(name) {
//   return new Promise((res, rej)=> {
//      setTimeout(() => { // Can't remove the timeout
//      res(`Hi, ${name}!`);
//   }, Math.floor(Math.random() * (5000 - 1000) + 1000)); // random number between 1000 and 5000
//     rej('Bye');
//   }) 
// }


















let x = [2,3,4,1,0,9,5]
let temp
for(let i in x){
   for(let j=0; j< x.length-1; j++){
    if(x[i]<x[j]){
      x[i], x[j] = x[j], x[i]
    //  temp = x[i]
    //  x[i] = x[j]
    //  x[j] = temp 
    }
   }



}
// console.log(x)
//console.log(x.split(2))
console.log(x.splice(2))
console.log(x)

