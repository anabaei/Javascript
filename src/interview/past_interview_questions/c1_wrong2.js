// What is wrong with the code?

// It should only collect those numbers that are even, however if it is collecting all numbers (even the odd ones).

// Fix it to collect all the even numbers.

// Input will be numbers, separated by spaces.

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var rawInput = "";

process.stdin.on('data', function (text) {
    rawInput += text;
    var inputs = rawInput.split(' ');  
    inputs.forEach(function (n) {
        n = n.trim()
        
        addEvensOnly(n);            
    });
    console.log('even numbers:', JSON.stringify(evenNumbers));
   
});


var evenNumbers = [];

process.stdin.on('end', function () {
    var inputs = rawInput.split(' ');    
  
    inputs.forEach(function (n) {
        addEvensOnly(n);            
    });
    console.log('even numbers:', JSON.stringify(evenNumbers));
});
//Edit above at your own risk

//TODO: Fix this function
function addEvensOnly(num) {
    num = Number.parseInt(num, 10)
    if (num % 2 === 0)
        console.log(num, 'is even, adding!');
        evenNumbers.push(num);
}