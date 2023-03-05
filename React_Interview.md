# Interview 
* Write an app to read from a json file and print it and allow to like/dislike in sorted array
* create a play stop song player
* find the average speed of cars
* design an app to allow users to chat

## Type Google
* https://github.com/alex/what-happens-when


### Promises

* https://www.youtube.com/watch?v=8aGhZQkoFbQ
* 


### Interview questions
<details>
        <summary> What is difference between map and for each </summary>

* arr.forEach((ar)=>{}) doesn't return anything, even if you return. Foreach uses same space
* arr.map returns an array,  you can add filter after that
* arr.(a => a*2).filter(a => a<4)

</details>
<details>
        <summary> Null vs Undefined</summary>

* Null is actual value, undefined means the variable is declared not initilize 
```javascript
typeOf null --> is object --> means null is actual object
typeOf undefined --> is undefined
console.log(null == undefined) // True == compare entity without matching types
```
</details>
<details>
        <summary> Event Delegation</summary>

* Add event listoner to the parent of each item, instead of defining event listenor for each item
```javascript
import React, { useState } from 'react';

function List() {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleClick(event) {
    const itemId = event.target.dataset.itemId;
    setSelectedItem(itemId);
  }

  return (
    <ul onClick={handleClick}>
      <li>
        <button data-item-id="item-1">Item 1</button>
      </li>
      <li>
        <button data-item-id="item-2">Item 2</button>
      </li>
      <li>
        <button data-item-id="item-3">Item 3</button>
      </li>
    </ul>
  );
}
```
</details>
<details>
        <summary> Flatten an array</summary>
  
* arr = [ [1,2,3], [4,5,6]]
* (...arr) -> spread one layer, 
* cancat add two or more arrays togather
```javascript
[].concat(...arr) -> flatten one layer [1,2,3,4,5,6]
```
* There is a built in flat function to pass depth flat(arr,2)
* 
</details>
<details>
        <summary> var let const</summary>

* Var is function scope,  let and const are block scope
```javascript
{
  var pvar = 3
}
// 3
{
  let plet = 3
}
// error throw 
  const pconst = 3
}
//error throw 
```
### Initialize serveral times
* ...
```javascript
var ay = 33
var ay = 34
var ay
// no problem

// throw error
let ay = 33
let ay = 34
let ay
ay = 35 

// throw error
const ay = 33
ay = 35 
const a --> error
```
* 

</details>

* 

<details>
   <summary> Call Apply Bind</summary>

* We can manipulate the context of a funciton

```javascript
var person ={
  name: "something"
  hello: function(thing){
    console.log(this.name + "from "+ thing)
  }
}

var newvar = {
  name: "coder 2"
}

person1.hello(" Js")
person1.hello.apply(newvar,[0,"Js"])
const hello = person1.hello.bind(newvar)
hello(" Js")
```

</details>
<details>
   <summary> Composing </summary>

* compose(fun1, func2, func3)
```javascript
const compose => (...funcs) => {return (args) => {return funcs.reduceRight((accumulate, value)=> value(accumulate)), args}}
```
</details>
<details>
   <summary> Create Promise All </summary>

```javascript
function testme(prop){
  return new Promise((res, rej)=>{
    setTimeout(() => {
      res(prop)
    }, 1);
  })
}
```
* Create Promise all
```javascript
let result = []
new Promise((res, rej)=>{
  forEach.promises((promise, index)=>{
    promise.then((res)=> result.push(res))
  }).catch((err)=> rej(err))
})
const res =  await Promise.all(result)
// res is an array of results, we can destrcut res as well
```
* A better error handling for errors
```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
  },
);
```

</details>

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
*  Check this function is called from where? if is function invoke it is global, but if it is method invoke this is the current object before dot
* first `This` inside is method invocation, so it is numbers. 
* `This` inside calculate, since you invoce function calculate, this inside 
 


## Closure 
* Explain what is this and show one example?
* Clusore is calling a varibale from inner function of outer funciton 

## Bind, Apply and Call 
* They are built in functions to bind to current object 
* `a.bind(null,2) ?
* What compilers uses Javascript?
* When using ES6 classes we need to bind all callbacks explicitly since there is no autobinding 

## TDD/BDD

## Difference between rebase and merge 
* Merge as it says merge two branches and keep both alive but rebase put one brance prior to the other one 


<details>
        <summary> destructure </summary>

```javascript
[a, b] = [10, 20]
[a, b, ...rest] = [10, 20, 30, 40, 50] // rest = [30, 40, 50]
```
* Destructure Object
```javascript
const numbers = [];
const obj = { a: 1, b: 2 };
const { a: numbers[0], b: numbers[1] } = obj;
// numbers[0] = 1
({ a: a1,  ...rest } = obj)
```

* Create an object from an email
```javascript
[...z] = [id, email] // id=3, email='ttt@gmail.com'
//returns 
{ '0': 3, '1': 'ttt@gmail.com' }
```
</details>


<details>
     <summary> Image Component & ProgressiveImage </summary>

* In this example, the ProgressiveImage component takes two image sources: src and lowResSrc. The component starts by rendering the lowResSrc image and sets the imageSrc state to lowResSrc using the useState hook.

The component also uses the useEffect hook to create an image object and check if the higher resolution image URL (src) is valid. If the image URL is valid, the component sets the imageSrc state to src using setImageSrc.


```javascript
import React, { useState, useEffect } from 'react';

function ProgressiveImage({ src, lowResSrc, alt, width, height }) {
  const [imageSrc, setImageSrc] = useState(lowResSrc);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  return (
    <img src={imageSrc} alt={alt} width={width} height={height} />
  );
}

export default ProgressiveImage;

```
* In this example, the App component uses the ProgressiveImage component to render an image with a width of 800 pixels and a height of 600 pixels. The component starts by rendering the low resolution image, and then replaces it with the higher resolution version once it has loaded.
  
```javascript

import ProgressiveImage from './ProgressiveImage';

function App() {
  return (
    <ProgressiveImage
      src="https://example.com/high-res-image.jpg"
      lowResSrc="https://example.com/low-res-image.jpg"
      alt="An example image"
      width={800}
      height={600}
    />
  );
}

export default App;
```


</details>

<details>
     <summary> Lazy loading components </summary>

* Write a lazy loading component
```javascript
import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```
* lazy function is used to load the LazyComponent component asynchronously, which means that the component is only loaded when it is actually needed. The Suspense component is used to provide a fallback component that is displayed while the lazy component is being loaded.
* A lazy loading is used for large components when users don't need them immediately, like images videos
* Fetch data could be in lazy load unless the data is critical of the function of component, so it is better to load data during initial render
</details>