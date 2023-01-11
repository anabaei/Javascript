// INSTRUCTIONS - accomplish the following
// 1) say hi (with sayHiToPerson) to everyone that is in class. in order and only if they are present
// 2) when a person is greeted update their greeted status
// 3) say get started (with sayGetStarted) after you've said hi to everyone
// 4) Console out the new classMembers (greeted should be updated)
// BONUS: Combine all names that didn't attend and say you got f's...should look like: "Name, Name, and Name you get F's."

// ForEach is not aware of async-await 
// JavaScript does this because forEach is not promise-aware. 
// It cannot support async and await. You cannot use await in forEach.
// https://zellwk.com/blog/async-await-in-loops/


// Filter map reduce all returns a promise, but remmeber promises are always 
// truthy so filter will never filter out anything it would be like
// Everything passes the filter...
const filtered = array.filter(() => true)

// const mapLoop = async _ => {
// 


function sayHiToPerson(name) {
    return new Promise((res, rej)=> {
       setTimeout(() => { // Can't remove the timeout
       res(`Hi, ${name}!`);
    }, Math.floor(Math.random() * (5000 - 1000) + 1000)); // random number between 1000 and 5000
    }) 
  }
  const classMembers = [
    {
      name: 'Bob',
      here: true,
      greeted: false
    },
    {
      name: 'Cindy',
      here: false,
      greeted: false
    },
    {
      name: 'Pedro',
      here: true,
      greeted: false
    },
    {
      name: 'Asha',
      here: false,
      greeted: 'false'
    },
    {
      name: 'Zahara',
      here: true,
      greeted: false
    },
    {
      name: 'Milo',
      here: false,
      greeted: false
    }
  ];
  async function sayGetStarted() {
      let arr= []
      let result;
    // classMembers.forEach(async member=>{
    //    if(member.here){
    //     console.log(member.name)
    //     result = await sayHiToPerson(member.name)
    //     arr.push(result)
    //    }
    //    console.log(arr)
    // });
    for (let i in classMembers)  {
        if(classMembers[i].here){
         console.log(classMembers[i].name)
         result = await sayHiToPerson(classMembers[i].name)
         classMembers[i].greeted = true
         console.log(result)
        }
     };
  }
 
  sayGetStarted();