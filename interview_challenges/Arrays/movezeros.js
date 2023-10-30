// Example usage:
const inputArray = [0, 2, 3, 0, 0, 4, 5, 0, 6];

const moveZerosToCenter=(arr)=>{
   const zeroCount = arr.filter(item => item===0 ).length;
   const rightZeros = Math.floor(zeroCount/2)
   const leftZeros = zeroCount - rightZeros

   const result = []

   for(i=0; i< rightZeros; i++){
    result.push(0)
   }
   for(i=0; i< inputArray.length; i++){
    if(i!==0){
        result.push(i)
    }
   }
   for(i=0; i<leftZeros; i++){
    result.push(0)
   }
    return result;
}


const resultArray = moveZerosToCenter(inputArray);
console.log(resultArray); 

//Time complexity is 2n = O(n)
//space = O(n)


// Make space complexity one with two pointers
// one move from left, if it is none zero, then need to swap with 