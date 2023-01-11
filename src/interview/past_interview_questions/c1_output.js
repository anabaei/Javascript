
// what is out put and why

const a = ['12341234','5678901234','10','7890','123456a'].map(parseInt)


// const a = ['12341234', '5678901234'].map(
//     (val, index, array) => {
//         parseInt(val, index, array)
//     }
// );
// console.log(a)
//  First iteration: val = '1', index = 0, array = ['1', '7', '11']
// console.log(a)
// parseInt('1', 0, ['1', '7', '11']); 

const b =  parseInt(5, 4, ['12341234','5678901234','10','7890','123456a'])

 console.log(b)

const c = ['1', '7', '11'].map(parseInt); 
const c1 = parseInt('1', 0, ['1', '7', '11']); 
const c2 = parseInt('2', 1, ['1', '7', '11']);
const c3 = parseInt('3', 2, '11');
const c4 = parseInt('5678901234', 1) 
console.log(a)
