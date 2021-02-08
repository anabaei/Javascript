/// Object.assign(): // to , The Object.keys()
/// obj = new Map()
/// obj.set(1,"a")
/// obj.set(1,"a") 
//  obj.keys()   obj.values() obj.get(1)
///  obje.size  // return 2   length only uses for arrays 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Notice javascript classes are prototype base 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Create a Queue //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Queue is a data structure to save data and is first in First out
// Create A Queue class with underflow 
class Queue{
   
    //  array is used to implement queue 
    constructor() 
    { 
        this.items = []; 
    }

    enqueue(item){
        this.items.push(item)
    }
    dequeue(){
        if(this.items.length === 0)
        {
            return "underflow"
        }
       return this.items.shift()
    }
    front(){
      return this.items[this.items.length -1]
    }

}
//  o = new Queue()
//  o.enqueue("amir")
//  o.enqueue("hasasn")
 

//  console.log(o.dequeue())
//  console.log(o.dequeue())
//  console.log(o.dequeue())
//  console.log(o.items)
// User binary tree in this case https://www.geeksforgeeks.org/implementation-queue-javascript/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////// Create a Stack //////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Stack is a data structure to save data and is first in last out
// Create A Stack class with underflow 

class stack{
    constructor(){
        this.items = []
    }

    pop(){
        if( this.items.length === 0)
        return "underflow"
        return this.items.pop()
    }
    push(item){
        this.items.push(item)
    }
    head(){
        return this.items[this.items.length -1]
    }
    isEmpty() 
    { 
        return this.items.length == 0; 
    } 
    
}

a = new stack()
// a.push("a")
// a.push("b")
// console.log(a.head())
// console.log(a)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////// Create a Stack overflow //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Recursive functions use stack datastructure to keep track of executing functions. Their stack has limited size so we can go over the stack

function fact(num)
{
    if (num <=1) return 1;
    else{
      return  num *  fact(num-1)
    }
    
}

// console.log(fact(100000))
// get error  Maximum call stack size exceeded

a = [{a:1},{b:20},{c:30}];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////    FIND a Cycle in Graph    /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MAP data type you can get keys as objMap.keys() and can assign objects as objMap.set(vertix, [])
/// https://www.geeksforgeeks.org/implementation-graph-javascript/

class graph{

    constructor(){
        this.numberofVertex = []
        this.adjacent = new Map();
    }
    // addvertex
    // addedge
    // printGraph

   addedge(){
     this.edges.push()
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////       Check input strings are properly nested       ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////'(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return True
// "{ [ ( ] ) }" should return False
// input is the whole
// scan on charactor one by one,  while it is scanning opens puting in stack,
// if reached to a closer pop stack and check the hash number if same continue if not through errors
// resource for map datastructure https://flaviocopes.com/javascript-data-structures-map/
// https://www.interviewcake.com/question/python/bracket-validator?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23251:%20Bracket%20Validator&utm_medium=email&utm_medium=email

class ReadCode{
    constructor(code){
        this.code = code
        this.stack = []
        this.opcl = new Map([['{', '}'], ['[', ']'], ['(', ')']])
        this.closed = []
        this.opens = []
     
    }
    
    scan(){
        for (const v of this.opcl.values()) {
            this.closed.push(v)
          }
          for (const v of this.opcl.keys()) {
            this.opens.push(v)
          }
      
        for(let i=0; i< this.code.length; i++)
        {
            if( this.opens.indexOf(this.code[i]) !== -1)
            {
                this.stack.push(this.code[i])
            }
            else if (this.closed.indexOf(this.code[i]) !== -1)
            {
                let open= this.stack[this.stack.length -1]
                let expectedClose = this.opcl.get(open)
                if(expectedClose === this.code[i])
                {
                        this.stack.pop()
                }
                else if(expectedClose !== this.code[i])
                {
                    return false
                }
            }
        }
      return this.stack.length === 0
    }
}


// ob = new ReadCode("dfsasffsd{{}}(");
// console.log(ob.scan());


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  Linked list         /////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// first create a linked list then find the n th from the last https://www.interviewcake.com/question/python/kth-to-last-node-in-singly-linked-list?utm_source=weekly_email&utm_source=drip&utm_campaign=weekly_email&utm_campaign=Interview%20Cake%20Weekly%20Problem%20%23250:%20Merge%20Sorted%20Arrays&utm_medium=email&utm_medium=email
// Good resource https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/
// JavaScript Anonymouse functions https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions

// using prototype to get attributes of the object 
// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }

//   Person.prototype.nationality = "English";

class Node{
    constructor(data, next = null){
       this.data = data
       this.next = next
    }
}

// And we need a linkedlist to keep head pointer, and it is always at the begining is null
class Linkedlist{
    constructor()
    {
        this.head = null
    }
    n(){
        a = new Node("b")
    }
}

//// Now Create functions using classes
// 1- Insert At begining 
// 2- Insert At End
// 3- Insert At random positions 

linklist = new Linkedlist()
linklist.n()

function insertAtBegining(data){
    let newnode = new Node(data)
    newnode.next =  linklist.head
    linklist.head = newnode
    return newnode
 }

/// Insert node at the begining linkedlist
   
//  insertAtBegining("a")
//  insertAtBegining("b")
//  insertAtBegining("c")
//  console.log(linklist.head)
 
///////// REVERS STRING //////

   function reverse(str)
    {
       let result = []
      for( let i = str.size -1 ; i > -1 ; i--)
       {
         result.concat(str[i])
       }

    return result.join('')
    }
    
   // console.log(reverse('amir'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// GRAPH with Weight ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Greedy An algorithm to travers all nodes in the shortest expense(each edge has an expense) https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/
// we try this https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/

class mygraph{
    constructor(n)
    {
     this.numbreofvertex = n
     this.ajlist = new Map()
    }
    addVertex(v)
    {
     this.ajlist.set(v,[])
    }
    addEdge(str, end, w)
    {
     let temp = this.ajlist.get(str)
     temp.push([end,w])

    }

    printGraph(){
        for (let i of this.ajlist.keys())
        {
            let list = this.ajlist.get(i)

            for( let j in list)
            {
                console.log(i + "->"+ list[j][0] + " weight= " +list[j][1])
            }

        }
    }

    ///// Add salesman function here////
    // sort edges bases on their wieght
    // take one by one and chck if there is no cycle
    // check all vertix are covered

     getarray(){
         let sort = []

         for(let i of this.ajlist.keys())
         {
          for(let j of this.ajlist.get(i))
          {

              sort.push([i,j[0],j[1]])
          }
         }
          return sort;
        }

        sortnow(){
         let sort = this.getarray()

         for(let j in sort)
         {
                 for(let i =j; i< sort.length; i++)
                 {
                   if(sort[j][2] > sort[i][2] )
                   {
                       let temp = sort[i]
                       sort[i]=  sort[j]
                       sort[j] = temp
                   }

                 }
         }
         return sort
     }

     //////////// Now based on sorted ones take one by one and check if not included and not cycle 

     isCycleUnit(adjlist, node){

         let result;
         let visited = new Map()
         for(let j in arr) {
            visited.set(arr[j][0], false)
        }

         while(typeof node !== "undefined")
         {

            if (!visited.get(node))
            {
                visited.set(node, true);
                node = adjlist.get(node)
            }
            else if (visited.get(node))
            {
                console.log("has cycle")
                return true
            }
         }
     }
     isCycle(arr){

      let adjlist = new Map()

      for(let i in arr) {
          adjlist.set(arr[i][0], arr[i][1])
      }

      for(let i in  arr) {
       if(this.isCycleUnit(adjlist, arr[i][0]))
       {
           return true
       }

      }
    }

     sortedges()
     {

         let result = []
         let sorted = this.sortnow()
         for(let i in sorted)
         {
           result = [...result,[sorted[i][0], sorted[i][1]]]
         }
      return result; 
    }

    // travers all edges based on orders and put them into result. check if it makes cycle, if yes pop esle continue  
    // it is two dimentional array: each item has start, end vertex 
    findpath(arr)
    {
     let result = []
     for (let i in arr)
     {
       result.push(arr[i])
       console.log(arr[i])
       if(this.isCycle(result))
       {

           console.log("yes")
           result.pop()
       }

     }
     return result; 
    }

    ///////////////////////////////////
} 

a = new mygraph(6)
a.addVertex("a")
a.addVertex("b")
a.addVertex("c")
a.addVertex("d")
a.addVertex("e")
a.addVertex("f")

b = new mygraph(3)
b.addVertex("a")
b.addVertex("b")
b.addVertex("c")
b.addVertex("d")
b.addVertex("g")
b.addVertex("l")

b.addEdge("a","b",1)
b.addEdge("b","c",2)
b.addEdge("c","a",3)
 //b.addEdge("c","d",3)
//b.addEdge("c","g",3)
//b.addEdge("c","l",3)






a.addEdge("a","b",3)
a.addEdge("b","c",1)
a.addEdge("c","d",35)
a.addEdge("a","c",5)
a.addEdge("c","f",8)
a.addEdge("c","e",2)
a.addEdge("c","d",35)
a.addEdge("b","e",14)
a.addEdge("b","d",6)
a.addEdge("d","e",11)
a.addEdge("f","e",1)



brr = b.sortedges()
arr = a.sortedges()

// for(let i of arr) { console.log(i)}
//a.hascycleUnirected(arr)
//console.log(a.hascycle(arr))
let resu = a.findpath(arr)
console.log("resu= "+resu)
//b.isCycle(brr)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// Salesman approach ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Greedy An algorithm to travers all nodes in the shortest expense(each edge has an expense) https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/
// we try this https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/
///






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// find shortest path ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A drivers wants to find shortest path among two cities









/////// alternatives to array.push
/// [...array,2] === array.push(2)
//// insert at the first of array [2,...array]
/// old school array[array.length] = 2