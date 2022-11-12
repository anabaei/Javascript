
function returnUnique(arr) {
    let temp = {}
    for (const key of arr) {
        temp[key] ? temp[key]+=1:  temp[key]=1
        // if (Object.hasOwnProperty.call(arr, key)) {
        //     const element = arr[key];
            
        // }
    }
    return temp
}


// a = [1,2,3,4,5,6,2,3,4,57,8]
// console.log(returnUnique(a))

