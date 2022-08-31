// Refactor the provided method, 
// getMostRecentInfractionsForVehicle, 
// using functional programming paradigms.

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

//Installed node modules: jquery underscore request express jade shelljs passport http sys lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever debug

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
var util = require('util');
var input = "";
var infractions = [
    {
        "plate": "ABCD 123",
        "date": "2014-12-24",
        "type": "speeding"
    },
    {
        "plate": "ABCD I23",
        "date": "2015-02-15",
        "type": "failure.to.stop.at.stop.sign"
    },
    {
        "plate": "ABCD 123",
        "date": "2016-04-14",
        "type": "operating.mobile.device"
    }
];

// process.stdin.on('data', function (text) {
//     input += text;
//     const result = getMostRecentInfractionForVehicle(input);
//     console.log(JSON.stringify(result));
// });

// process.stdin.on('end', function () {
//     //do your processing here.
  
//     const result = getMostRecentInfractionForVehicle(input);
//     console.log(JSON.stringify(result));
// });
//Edit above at your own risk


//TODO: Refactor this function to use functional programming paradigms
// function getMostRecentInfractionForVehicle(plate) {
//     plate = plate.trim()
//     let infractionsByCar = [];
//     for (var i = 0; i < infractions.length; i++) {
//         if (infractions[i].plate === plate) {
//             infractionsByCar.push(infractions[i]);
//         }
//     }
    
//     if (infractionsByCar.length > 0) {
//         const sorted = infractionsByCar.sort((a, b) => {
//             if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
//                 return -1;
//             } else if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         });
//         return sorted[0];
//     } else {
//         return undefined;
//     }
// }
// infractions = [1,2,3]
function getMostRecentInfractionForVehicle2(plate) {
    
    const redfun = (acc, currentValue) =>  if (infractions[i].plate === plate) {
        //             infractionsByCar.push(infractions[i]);
        //         } 
    const res = infractions.reduce(redfun, 0)
    console.log(res)

}


getMostRecentInfractionForVehicle2("ss");