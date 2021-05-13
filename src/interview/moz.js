

/// This is input { a: {b: 'leap'}}
// define functions (obj, a.b) to return leap

// Good reference for object methods
// https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet

function accessObj(obj, val){
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
// write fib

function fib(n){
    if(n===1){
        return 1
    }
    if(n===0){
        return 1
    }
  return fib(n-1) + fib(n-2)

}

function fibite(n){
    res = 1
    cnt = 1
    prv = 1
    while(cnt<=n){
    res = prv + res
    
    }
    return cnt;
}

console.log(fibite(5))
    



