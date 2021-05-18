
// Array functions 
// https://ultimatecourses.com/blog/array-find-javascript

// valid ipv4 

function isValidIP(str) {
    const arr = str.split(".");
    let result = true;
    if(!arr || arr.length !== 4)
    {
        result = false
    }
    arr.forEach(element => {
        console.log(parseInt(element))
       if(element[0] === 0 || parseInt(element) > 255 || parseInt(element) < 0)
       {
          console.log(arr, element[0] === 0 ||  parseInt(element) > 255 )
           result = false  
       }
  
    });
    return result;
  }

  a = [1,2,3,4,5,6]
  const res = a.reduce((prev, curr, index, arr)=>{ return prev* curr}, 1);
  console.log(res)


  // function with no params
  let sayHi = _ => console.log("Hi");

  console.log(sayHi())


  /// use of this in arrow funcitons 
  let me = { 
    name: "Ashutosh Verma", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };
   me.thisInArrow(); 
   me.thisInRegular();

// arrow functions can not have ducplicate params name 
(x, x) => {}
// SyntaxError: duplicate argument names not allowed in this context

// arrow functions are only callable and not constructible, 
// i.e arrow functions can never be used as constructor functions. 
// Hence, they can never be invoked with the new keyword.
let add = (x, y) => console.log(x + y);
new add(2,3);
// uncaught type error: add is not a constructor 

