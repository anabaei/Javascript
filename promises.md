## Type Google
* https://github.com/alex/what-happens-when


### Promises

* https://www.youtube.com/watch?v=8aGhZQkoFbQ
* 

### Hoisting

* Variable declarations are processed before any code is execute
* 
```javascript
console.log(typeof variable); // Output: undefined.
//In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.

console.log(variable); // Output: ReferenceError: variable is not.defined. In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.
```
* https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript
* Always declare variables regardless of whether they are in a function or global scope. This clearly delineates how the interpreter should handle them at run time
```javascript
function hoist() {
  a2 = 20;
  var ab = 100;
}

hoist();
console.log("?", a2); 
console.log("?>", ab);
```
* What is the output?
```javascript
function hoist() {
  console.log(message);
  var message='Hoisting is all the rage!'
}

hoist();
// is undefined
```
* This is how the interpreter views the above code:
```javascript
function hoist() {
  var message;
  console.log(message);
  message='Hoisting is all the rage!'
}

hoist(); // Ouput: undefined
```
###  const, let
* With const, just as with let, the variable is hoisted to the top of the block
```javascript
console.log(hoist); // Output: ReferenceError: hoist is not defined
const hoist = 'The variable has been hoisted.';

hoist = "sss" // Output: TypeError: Assignment to constant variable.
```
* vv
```javascript
console.log(hoist); // Output: ReferenceError: hoist is not defined ...
let hoist = 'The variable has been hoisted.';
```
```
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function() {
    return function() {
      console.log('The index of this number is: ' + i);
    }
  }(), 3000);
}

for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function() {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }, 3000);
}
```

#### Strict
* Strict is a restricted variant of JavaScript. It provides better security and stronger error checking
* strict will not tolerate usage of a variable before declaration
```javascript
'use strict';

console.log(hoist); // Output: ReferenceError: hoist is not defined
hoist = 'Hoisted';
```
* If we missed out on declaring our variable, use strict has stopped us in our tracks by explicitly throwing a Reference error
  

## This
* Invocation is important in `this`. Invocation is simply calling a function (obj.callmyname() is not function invocation it is method call). `Context` of an invocation is the value of `this`.
```javascript
window
function myFunc(){
  this; // this here is window global object
  // in strict mode return undefine
}
myFunc()
```
* When this is used outside of any function scope (the topmost scope: global execution context), it also equals to the global object:

```javascript
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
   // const calculate ()  { // 
   // if no arrow, then this is global obj not numbers, but arrow solve it
    const calculate = () => {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
numbers.sum();
```
* first `This` inside is method invocation, so it is numbers. 
* `This` inside calculate, since you invoce function calculate, this inside 
 

## Async- Await 

* When I was node develop I always concern about performance issue but main concern was about debug ability.
* 
* Promise is an object that you can either resolve or reject it.
```javascript
var promise = new Promise(function(resolve, reject){
  if(false){
    resolve("some message")
  }
  else{
    reject("some info")
  }
})
```
## ASYNC
* Use implicit promises in `async`. Async are async function that implicitly has promises.
```javascript
async function foo(){
  return 42;
}
const p = foo();
// -> promise
p.then(console.log)
// print 42 on the next run
```
* Async function are daisy, it means you get value on the next time the micro tasks are on. 
```javascript
// semantically equivalent to just using promise result with the value
function foo(){
  return Promise.resolve(42);
}
```
* Is async await faster than promises?
* Yes, you read that right. The V8 team made improvements that make async/await functions run faster than traditional promises in the JavaScript engine.
## AWAIT
* The await expression causes async function execution `pause` until a Promise is fullfiled. It returns the value of `await` is fullfiled promise. It means execution of `async` is suspended on this await and it only resumed when the fetch promise fulfills. So if you call `foo` the implicit promise is out and then you can wait on it `then` to promise be fullfil. 
```javascript
async function foo(url){
  const r = await fetch(url);
  returns r;
}
const p = foo('https://v8.dev')
p.then(console.log);
```
* Below is equivalent to chaining a handler on to the fetch promise. The code inside handler is same as the await and the async function above
```javascript
function foo(url){
  return fetch(url).then(r => r);
}
```
### UnhandledPromiseRejectionWarning
* `Await` operator converted to a resolved Promise. If your fullfilled promise was `rejected` then you need to address rejections on top of await like below to avaoid getting `UnhandledPromiseRejectionWarning` or put `await call`   between a `try and catch`
```javascript
async function foo(url){
  const r = await fetch(url).catch(error => console.log("error");
  // r has resolved results unless there is rejection then console.log would handlepromise rejection
  returns r;
}
```
* We can await on any object that has `then` in it and it shouldn't ne a promise even. It can be even a `setTimeout()` function as this link with [NV8 google](https://www.youtube.com/watch?time_continue=402&v=DFP5DKDQfOc&feature=emb_title)

# V8
* When V8 sees an `async` it marked it as resumeable function. It means suspend it and resume it later. It creads so called an implicit promise which is a promise that is returned when you invoke the async function. 


```javascript
// now use it
promise.then(function( message ){
            console.log( message);
            },
             function(err) {
            console.log(err);
            }
          })
// we can write it as well
promise
  .then(function( message ){
            console.log( message);
            })
  .catch(function(err) {
            console.log(err);
            }
          });
```
```javascript
const apromis  = util.promisify(download)
apromise(passparams).then((res)=> anotherfun(res,new)).then(..)
```
## Tasks and Microtasks
* In v8 there are `tasks` and `microtasks`. `Tasks` handle events like `io` or `setTimeout` and execute one at a time
* Microtasks implement deffered execution for `async await` and `promises`. Microtasks queue is always empty before execution returns to `event loop`.


