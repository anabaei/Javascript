// What is wrong with the code?

// It should should properly output the difference between squared numbers.

// Inputs will be a pair of numbers, separated by a space.

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug


// Standard input and standard out put allow us to communicate with a process while it is running

// https://www.youtube.com/watch?v=__-D_s6P3Tk
// Event listenor on process. When user type anything on terminal and hit the enter, we raise 
// this callback function and data that sent as an argument. 
// process.stdin.on('data', ()=>{

//})


//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var rawInput = [];
var result, result2;

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var rawInput = "";
var result, result2;

process.stdin.on('data', function (text) {
    rawInput += text;
});


process.stdin.on('data', function (text) {
    const input = text.split(' ');
    const inputs = input.map(str => str.trim());
    const result1 = square(inputs[0]);
    const result2 = square(inputs[1]);
    const subtracted = Math.abs(result1 - result2);
    console.log(subtracted);
});



function square(num) {
    num = Number.parseInt(num, 10)
    result = num * num;
    return result;
}

//inputs 3, 4
