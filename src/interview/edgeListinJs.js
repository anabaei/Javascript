
function hash() {
    hash = {}
    hash['a'] = []
    hash['b'] = [3,4,5]
    for(let i in hash)
    {
    hash[i].push(9)
    console.log(hash[i].includes(9))
    }
}



