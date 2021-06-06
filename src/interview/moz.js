
const JSON5 = require('json5')

/// This is input { a: {b: 'leap'}}
// define functions (obj, a.b) to return leap

// Good reference for object methods
// https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet

function accessObj(obj, val){
   // var json = '{"name": "Peter", "age": 22, "country": "United States", "new":{"a":"lll"}}';
    var json = '{name: "Peter", "age": 22, "country": "United States", "new":{"a":"lll"}}';
    // https://softwareengineering.stackexchange.com/questions/389927/json-without-quotes-for-keys
    

    // JSON format and javascript obejct are formats are different. 
    
    // stringify convert object to JSON text. 
    // json.parse convert string(json) to a javascript object

    // JavaScript object
    const object1 = { a: 'foo', b: 42, c: {} };  
    console.log(obj.a.b.c)
    
    // JSON format, string format
    var string = '{"name": "Peter", "age": 22, "country": "United States", "new":{"a":"lll"}}';

    // obj-> string -> json
    const a = JSON.stringify(object1);
    console.log(a)
    const b = JSON.parse(a)
    console.log(b.b)



    // console.log(JSON.stringify(json));
    // console.log(json);
    // console.log( typeof json)
    // console.log(typeof a)
    // console.log(JSON.parse(object1))
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
//accessObj(a,'a.b.c')


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
    



// Ava
// input: [1, [ 2, 3, [ 4, [ 5 ] ], 6, 7, [ 8, 9 ]]]
// output [1, 2, 3, 4, 5, 6, 7, 8, 9]

function solution(arr, result)
{
arr.forEach( item =>{
    if(typeof item !== "object")
    {
        result.push(item)
    }
    else
    solution(item, result)
 })
 return result
}
const input = [1, [ 2, 3, [ 4, [ 5 ] ], 6, 7, [ 8, 9 ]]]
//console.log(solution(input, []))


// find a number in sorted array 
const arr = [1,2,3,4,5,5,6,7,8,9,9,9,10,11,12,13,17]

function _helper(arr, num, pivot){
    
   
    
    if (arr.length === 2)
     {
        if(arr[0] === num || arr[1] === num )
        console.log(num)
        else
        return false
     }

     if (arr.length < 2)
     return false
    
    pivot = Math.round(arr.length/2);
    const upper = arr.splice(pivot) 

    if(arr[pivot] === num)
     return {num, pivot}

    if(arr[pivot] > num)
    _helper(arr, num, pivot)   
    else
    _helper(upper, num, pivot)
 
}

function solution(arr, num)
{
    const pivot = Math.round(arr.length/2);
    if(arr[pivot] === num)
      return num, pivot
    if (arr.length <2)
     return false
    
    _helper(arr, num, pivot);
}


// solution(arr,13)





// x = ["a", "b", "c", "d", "e", "f", "g"];
// y = x.splice(3);
// console.log(x); // ["a", "b", "c"]
// console.log(y); // ["d", "e", "f", "g"]


/// GOOGLE
//  Input: {
//   'a': 1,
//   'b': {
//     'c': 2,
//     'd': {
//       'e': 3
//     }
//   }
// }
// Output: {
//   'a': 1,
//   'b.c': 2,
//   'b.d.e': 3
// }

function flattern(inn){
   const res = {}
   for(let i in inn){
       if(typeof inn[i] !== "object")
        res[i] = inn[i]
       let temp;
        while(true)
        {
         temp = inn[i]+ "."
         
        }
    
   } 
  return inn;
};

const inn = { 'a': 1, 'b':{ 'c': 2, 'd':{ 'e': 3 } } };
console.log(flattern(inn))