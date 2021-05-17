
const JSON5 = require('json5')

/// This is input { a: {b: 'leap'}}
// define functions (obj, a.b) to return leap

// Good reference for object methods
// https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet

function accessObj(obj, val){
   // var json = '{"name": "Peter", "age": 22, "country": "United States", "new":{"a":"lll"}}';
    var json = '{name: "Peter", "age": 22, "country": "United States", "new":{"a":"lll"}}';
    // https://softwareengineering.stackexchange.com/questions/389927/json-without-quotes-for-keys
    const object1 = { a: 'foo', b: 42, c: {} };  
    console.log(object1.a);
   // var ob = JSON5.parse(json)
    // Converting JSON-encoded string to JS object
//    var ob = JSON.parse(json);
//    console.log(ob.name);
//    console.log(ob.new.a);

    const arr = val.split('.');
//    console.log(obj['a']['b'])
   let item;
   let res;
   for(let i in arr)
   {
       obj = obj[arr[i]] 
   }
 
 console.log(obj)
}
const a = { a: {b: {c: 'leap'}}}
accessObj(a,'a.b.c')


/// Likewise
// write fibonachi Recursive vs Iterative 

function fib(n){
    if(n===1 || n==2){
        return 1
    }
    if(n===0){
        return 1
    }
  return fib(n-1) + fib(n-2)

}

function fibite(n){
    let current=0
    if(n===0)
    {
        return current;
    }
    else if(n===1)
    {
        current = 1;
        return current;
    }
    // n = 2, current =1, prev = 1 next = prev + current
  
    current = 1
    prev = 1
    next = 1
    while(n> 1)
    {
        prev = current
        current = next
        next = current + prev
        n -=1
    }
   return current;
}

// console.log(fibite(8))
// console.log(fib(8))
    



