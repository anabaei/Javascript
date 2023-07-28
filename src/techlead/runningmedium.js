// input  [2,1,4,7,2]
// output [2,1.5,2,3,2]

function findmedium(arr){
    const sortedArray = arr.sort()
    
    if(sortedArray.length > 2 && sortedArray.length%2 ===0){
        return(sortedArray[(sortedArray.length)/2] + sortedArray[((sortedArray.length)/2)-1])/2
    }
    else if(sortedArray.length > 2 )
    {
        
        return(sortedArray[((sortedArray.length)-1)/2])
    }
    else if(sortedArray.length === 1 ){
        return sortedArray[0]
    }
    else if(sortedArray.length === 2 ){
        return (sortedArray[0] + sortedArray[1])/2
    }
    return null 

}

const arr=[2,1,4,7]
console.log(findmedium(arr))
function running(arr){
    console.log(arr.splice(0,2))
    console.log(arr)
    const result = []
    for(let index in arr){
        const array = arr.splice(0, index)
        result.push(findmedium(array))
    }
    console.log(result)
}
running(arr);