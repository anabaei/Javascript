// const person =(firstName, lastName) =>
// ({
// first: firstName,
// last: lastName
// })
// console.log(person("Jill", "Wilson"))
const name = 'Rachel';
const age = 31;
const person = { name, age };
const a = {
    b:"eee"
}
console.log(person, a);
console.log(age);


const message = "AA"

const object = {
    message: 'Hello, World!',
    getMessage() {
      const message = 'Hello, Earth!';
      return this.message;
    },
    newone: params => {
        const message = 'Hello, Earth!';
        return this;
      }
  };

aaa = function() {
    console.log("sss")
    }

console.log(aaa())
console.log(object.newone());

console.log("__________________________________________")

function Pet(name) {
    this.name = name;
    // this.getName = () => this.name;
    function getName() {
        console.log("sss")
    }
  }
  const cat = new Pet('Fluffy');
  console.log(cat.getName())
  
//   console.log(cat.getName()); // What is logged?
  
  
//   const { getName } = cat;
//   console.log(getName());  




