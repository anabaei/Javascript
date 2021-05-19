
// // Array functions 
// // https://ultimatecourses.com/blog/array-find-javascript

// // valid ipv4 

// function isValidIP(str) {
//     const arr = str.split(".");
//     let result = true;
//     if(!arr || arr.length !== 4)
//     {
//         result = false
//     }
//     arr.forEach(element => {
//         console.log(parseInt(element))
//        if(element[0] === 0 || parseInt(element) > 255 || parseInt(element) < 0)
//        {
//           console.log(arr, element[0] === 0 ||  parseInt(element) > 255 )
//            result = false  
//        }
  
//     });
//     return result;
//   }

//   a = [1,2,3,4,5,6]
//   const res = a.reduce((prev, curr, index, arr)=>{ return prev* curr}, 1);
//   console.log(res)


//   // function with no params
//   let sayHi = _ => console.log("Hi");

//   console.log(sayHi())


//   /// use of this in arrow funcitons 
//   let me = { 
//     name: "Ashutosh Verma", 
//     thisInArrow:() => { 
//     console.log("My name is " + this.name); // no 'this' binding here 
//     }, 
//     thisInRegular(){ 
//     console.log("My name is " + this.name); // 'this' binding works here 
//     } 
//    };
//    me.thisInArrow(); 
//    me.thisInRegular();

// // arrow functions can not have ducplicate params name 
// //(x, x) => {}
// // SyntaxError: duplicate argument names not allowed in this context

// // arrow functions are only callable and not constructible, 
// // i.e arrow functions can never be used as constructor functions. 
// // Hence, they can never be invoked with the new keyword.
// // let add = (x, y) => console.log(x + y);
// // new add(2,3);
// // uncaught type error: add is not a constructor 


// // Hoisting in javascript
// console.log(typeof c);
// console.log(typeof a);
// console.log(typeof b);

// (function(){
//     var a = b = 42;
//   })();

 

//   var c=32



//   /// good example for async/await 
//   function resolveAfter2Seconds(x) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(x);
//       }, 0);
//     });
//   }
  
  
//   async function add1(x) {
//     const a =  resolveAfter2Seconds(20);
//     console.log(a)

//     // return x + a + b;
//   }
//   add1(10).then(v => {
//     console.log(v);
//   });
  
  
// //   async function add2(x) {
// //     const p_a = resolveAfter2Seconds(20);
// //     const p_b = resolveAfter2Seconds(30);
// //     return x + await p_a + await p_b;
// //   }
  
// //   add2(10).then(v => {
// //     console.log(v);
// //   });

// arr = [1,2,3,4,5,6]

// // arr.forEach((element, index, array) => { ... } )
// // function getUniqueValues(arrOfNum) {
// //     const set = new Set(arrOfNum);
// //     return [...set];
// //   }

// Convert Set to array 

let myArray = ['value1', 'value2', 'value3']

// Use the regular Set constructor to transform an Array into a Set
let mySet = new Set(myArray)

console.log(mySet)
console.log([...mySet])
