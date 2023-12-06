
function brackets(str){
     
    const queue = []
    const openers = ['{','[', '(']
    const closers = ['}', ']', ')']
   
   
    
   for(ch of str){
    console.log(ch)
    if(openers.includes(ch)){
        queue.push(ch)
    }
    console.log('queue == ', queue)
    if(closers.includes(ch)){
        
        const item = queue.pop()
        
        const indexofopeners = openers.indexOf(item)
        console.log(indexofopeners)
        const indexofclosers = closers.indexOf(ch)
        console.log(indexofclosers)
        if(indexofclosers !== indexofopeners)
        {
            return false
        }
    }
    
   }
   if(!queue.length)
   return true;
   else return false;
}


console.log(brackets('{ [ ]  ( ) }'))