
var checkIfInstanceOf = function(obj, classFunction) {
    
    if(typeof obj=== 'function'){
        console.log(false)
    }
    else if(classFunction === BigInt){
        console.log(obj)
        console.log(typeof obj)
        console.log(typeof obj === 'bigint')
        return (typeof obj === 'bigint'); 
    }
    else if(typeof obj==='object'){
        console.log(obj instanceof classFunction); 
        return
    }
    else if(classFunction === Number){
        console.log(typeof obj === 'number'); 
    }
 
    
  };
  
  const date = new Date();
 // Passing Date constructor function as the second argument
  

//   Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
//   Output: true
class Animal {
    constructor(){
        console.log("")
    }
    display(name){
        console.log('')
    }
}
class Dog extends Animal{
    constructor(){
        super();
        console.log("")
    }
}

const Doggy = new Dog()
console.log(Doggy.display("amir"))

// checkIfInstanceOf(Doggy, Dog); 
// checkIfInstanceOf(5, Number); 
checkIfInstanceOf(5n, BigInt)
console.log('???',typeof date )


