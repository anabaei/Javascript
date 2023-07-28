/**
In JavaScript, the prototype property allows you to 
add custom methods and properties to all instances of 
a specific constructor function, 
including built-in constructors like 
Array, 
String, and 
Object

In this example, we are adding a custom method last() to the Array.prototype, 
which means all arrays created in your code will inherit this method.

 * const arr = [1, 2, 3];
 * arr.last(); // 3
 * 
 * Array.prototype.last = function() {
 * };

Write code that enhances all arrays such that you can call the array.
last() method on any array and it will return the last element. 
If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse.

 */



String.prototype.last = function() {
    console.log("ss")
};
// console.log(Array.prototype)


const arr2 = 'asd'
// arr2.last();

Array.prototype.last = function() {
    if(!this || this.length <1)
        return -1
  return this[this.length-1]
};

const arr = [1, 2, 3];
arr.last();
