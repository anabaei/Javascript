// console dir is better than console log to show objects

const axios = require('axios')
const { resolve } = require('path')
const api= "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"

async function test(param) {
   return;
    return new Promise(function (res, rej){
       
        if(true){
            console.log("___")
           // res("true")
           return true;
        }
        else{
            console.log("yes false")
            rej("false")
        }
       
    })
}
async function b(){
  aa =  await test("ss")
  console.log(aa)
}
b();

// async function tt(){
//     let a = await test("S")
//     console.log(a)
// }

// tt()

// function test22(param) {
   
//     return new Promise(function (res, rej){
      
//         axios.get(api)
//         .then(response => {
//         res(">>2 "+response.headers.date);
//         })
     
      
//     })
// }


// async function tt2(){
//     let a = await test22("S")
//     console.log(a)
// }

// tt2()




// ////// .    

// function test33(param) {
        
//         axios.get(api)
//         .then(response => {
//         console.log(">>3",response.headers.date);
//         })
        
// }

// test33("S")


async function call(api, i) {   
    let response = await axios.get(api)
    console.dir(response.data.data.id);
    
    
}

let arr = ['https://reqres.in/api/users/1',
'https://reqres.in/api/users/2',
'https://reqres.in/api/users/3',
'https://reqres.in/api/users/4'
 ]
 

//  async function b(){
//     arr.forEach(element => {
//       await call(element, 0)
//     });
// }
async function a(){
 console.log("1before")
 call(arr[0], 0)
 console.log("2before")
 for (let i=0; i < arr.length; i++){
    console.log('index= ',i)
  await call(arr[i], 0)
  console.log('index after= ',i)
 }
 console.log("after")
}
// a()

