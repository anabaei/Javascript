
// ***********************  Deadfish has 4 commands  *************************//
// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.
function parse( data )
{
  const res = []
  let result=0
  const input = data.split('')
  for (const i of input) {
    if(i=== "i")
     result +=1
    if(i=== "d")
     result -=1
    if(i=== "s")
     result *=result
    if(i=== "o")
     res.push(result)
  }
  return res
}

// *********************** Reducer  *************************//
function parse(data) {
    let res = [];
  
    // initial is 0
    data.split('').reduce((cur, s) => {
      if (s === 'i') cur++;
      if (s === 'd') cur--;
      if (s === 's') cur = Math.pow(cur, 2);
      if (s === 'o') res.push(cur);
      
      return cur;
    }, 0);
    
    return res;
  }

// good solutions
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/solutions/javascript
// parse("iiisdoso") => [ 8, 64 ]

//console.log(parse("iiisdoso"))

// *********************** ************* //
function ipsBetween(start, end){
    const first = start.split('.')
    const sec = end.split('.')
    const index = 3
    let res1=0
    let res2=0
    let result=0
    for (const key in first) {
        let power = 8*(index-key)
        
        let temp = Math.pow(2,power)
        temp *=Math.abs(first[key])
        res1 += temp 
        
        temp = Math.pow(2,power)
        let temp2 = temp * Math.abs(sec[key])
        res2 +=temp2
        
        
    }
  
    result =Math.abs(res2 - res1)
    return result
  }

// good solution
// https://www.codewars.com/kata/526989a41034285187000de4/solutions/javascript
//   ipsBetween("10.11.12.13", "10.11.12.13");
ipsBetween("1.2.3.4", "5.6.7.8");