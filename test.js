// const person =(firstName, lastName) =>
// ({
// first: firstName,
// last: lastName
// })
// console.log(person("Jill", "Wilson"))
const name = "Rachel";
const age = 31;
const person = { name, age };
const a = {
  b: "eee",
};
console.log(person, a);
console.log(age);

const message = "AA";

const object = {
  message: "Hello, World!",
  getMessage() {
    const message = "Hello, Earth!";
    return this.message;
  },
  newone: (params) => {
    const message = "Hello, Earth!";
    return this;
  },
};

aaa = function () {
  console.log("sss");
};

// console.log(aaa());
// console.log(object.newone());

// console.log("__________________________________________");

function Pet(name) {
  this.name = name;
  // this.getName = () => this.name;
  function getName() {
    console.log("sss");
  }
}
const cat = new Pet("Fluffy");
// console.log(cat.getName())

//   console.log(cat.getName()); // What is logged?

//   const { getName } = cat;
//   console.log(getName());

// interviewer: what will the following code output?
const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   setTimeout(function () {
//     console.log("Index: " + i + ", element: " + arr[i]);
//   }, 3000);
// }

//\/ let is one time assign
//\/ var first associate memory

// for (var i = 0; i < 5; i++) {
//   (function () {
//     console.log("><",i);
//   })();
//   (function () {
//     setTimeout(function () {
//       console.log("-", i);
//     }, 1000);
//   })();
// }



// function hoist() {
//   a2 = 20;
//   var ab = 100;
// }

// hoist();
// console.log("?", a2); 
// console.log("?>", ab);


// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }

// for (let i in arr) {
//   console.log(i)
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);

// }
// (element => console.log(element));

// arr.forEach((element,i)  => {
//   console.log(i)
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);

// })

// Foreach doesn't have stop loose
// arr.forEach(function (element, i) {
//   console.log(i)
//   setTimeout(function() {
//     console.log('Index: new ' + i + ', element: ' + arr[i]);
//   }, 1000);

// })

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// (async ()=>{
//   for(let i=0; i< ratings.length; i++) {
//     sum = await sumFunction(sum, ratings);
//   };
//   console.log(">>", sum);
// })();

// Naively expected output: 14
// Actual output: 0

// const personw = {
//   name: "John Doe",
//   sayName: function() {
//     console.log(this.name);  // refers to the person object
//   }
// };


// At 
// personw.sayName();  // logs "John Doe" to the console
// function sum(a, b) {
//   console.log(this === window); // => true
//   this.myNumber = 20; // add 'myNumber' property to global object
//   return a + b;
// }
// sum() is invoked as a function
// this in sum() is a global object (window)
//sum(15, 16);     // => 31
//window.myNumber; 


const numbers = {
  numberA: 51,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    const calculate = function () {
      console.log(this); // => true
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
console.log(numbers.sum()); 