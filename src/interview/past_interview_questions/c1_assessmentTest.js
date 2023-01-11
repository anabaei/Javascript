// A test 
// Return non duplicate numbers as an array

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var rawInput = "";

process.stdin.on('data', function (text) {
    rawInput += text;
});
 
process.stdin.on('end', function () {
    const input = JSON.parse(rawInput);
    const output = duplicate(input);
    console.log(JSON.stringify(output));
});
//Edit above at your own risk

function duplicate(arr) {
    //TODO: Implement this method
    return  arr.concat(arr)
}


console.log(duplicate([1, 2, 3, 4, 5]))