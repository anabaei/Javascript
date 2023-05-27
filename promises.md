

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
* When V8 sees an `async` it marked it as resumeable function. It means suspend it and resume it later. It creats so called an implicit promise which is a promise that is returned when you invoke the async function. 


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
* Microtasks implement defferent execution for `async await` and `promises`. Microtasks queue is always empty before execution returns to `event loop`.


