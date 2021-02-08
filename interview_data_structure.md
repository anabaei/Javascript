<details>
        <summary> Start </summary>

*  Current jobs don't utilize complex algorithms.  So our skills as software developer degrade over time and we forget data structures and algorithms
* Coding is not a talent - it is pure skill acquired through practice and repetition
* link to [facebook discussion](https://www.facebook.com/groups/techinterviewpro)
* use python3 and code runner to run python in vs code
</details>

<details>
       <summary>  valid Binary Search Tree </summary>

* rule: BST maintains a property that all nodes to the left are less than value and on the right are geater than the value
* We need data structure for each node 
```python 
class Node(object):
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right
```

</details>

<details> 
      <summary>Fib </summary>

* Common solution is recursive
* Time complexity in recursive here is 2^n, make it it O(n)
* Space complexity is O(n), to make it o(1) use iterative solution and start from bottom
</details>
<details> 
       <summary> Max profit in Shares</summary>

* In stock market write a program to get max profit of daily exchange. Notice sell and buy should have at least one minute time difference
* Nestet loop can be O(n^2)
```javascript
const stockPrices = [11,10, 7, 5, 8, 11, 9];
function getMaxProfit(stockPrices)
{
    if (stockPrices.length < 2) {
    throw new Error(' least 2 prices');
  }
   let buyIndex= 0;
   let sellIndex=0;
   for(let i in stockPrices)
   {
       if(stockPrices[i]< stockPrices[buyIndex])
        {
           buyIndex = i;
        }
        else if(stockPrices[i]> stockPrices[sellIndex] && i > buyIndex + 1)
        {
           sellIndex = i;
        }
   }
   console.log(stockPrices[buyIndex]);
   console.log(stockPrices[sellIndex]);
}
getMaxProfit(stockPrices);
```
* O(n) time and O(1)O(1) space

</details>
<details>
        <summary> BST, DFS, BFS</summary>


* * use node class --> Binary trees. [BST](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/)
```javascript
class BinarySearchTree 
{ 
    constructor() 
    { 
        this.root = null; 
    } 
  
    // function to be implemented 
    // insert(data) 
    // remove(data) 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
} 
```
* Remve Data on BFS when node [has two childs](https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/)
```javascript
1- If right node has left subtree then findMin(node.righ) and 
2- else findMax(node.left) 
Then replace the value with current node and remove the node you found
```
## BFS and DFS

* use actual value string or number on each node --> Graphs. Use `new Map` a node
* BFS using queue when get list of adjacents but DFS is just a recursive ...
* DFS can be travers [inorder,preorder](https://www.youtube.com/watch?v=1WxLM2hwL-U) and postorders same as BST
</details>
<details>
       <summary> Technical JS</summary>

* A map data structure best way to keep of hash data
```javascript
v = new Map();
v["key"] = "A";
Object.keys()         
Object.keys(v).length 

v.set("a",[]);    // set a node
v.get('a').push('b') // set adjacent node b
v.get('a').push('c') // set adjacent node c
// iterate over map
for (const [key, value] of v) {
  console.log(`${key}: ${value}`)
}
// get(), set(), keys(), has(), forEach() are useful in map
```
* Or you can use `new Set()` but then there is no `has`, `get`, `set` 
```javascript
v = new Set();
v["a"] = []
v["a"].push('b')
v["a"].push('c')

```
</details>

<details> 
       <summary> Graph Coloring</summary>

* we have `d+1` colors and want to color a graph where no two same color on the same edge
* Go through all nodes, then for each one check the colors of the neighbors and push into an array of illigal colors. Then go through all d colors and if not exist in illegal color then add color that node and break
</details>
* `Greedy Algorithm` Always been greedy to take biggest possible solutions and add it up to the end. Sometimes it may not give the best answer. Like you want to pay 67 dollars and first take 50 then 20 then 5 etc.. you start from the biggest one you greedy
* `Brute Force`  as cashier you want to try all possible answers and picking the best one. Or trying to fit as many overlapping meetings as possible in a conference room? Run through all possible schedules and pick the one gets most

<details> 
       <summary> S.AA.P   </summary>

### Question
* Q: There is a function gets a number and mulitple it several times until our number includes all 0-9 digites. 
This function should return how many times it multiple our number to reach that 

* We need convert our number to a list then put each item into a hash until our hashed is full
```javascript
function br(num){
     res = {}
     cnt = 1;
     m = 0
     while(Object.keys(res).length !== 10)
     {
          num = num * cnt;
          
               //  convert strings to nombers, we could use .map(x=>x) as well
               let re = [...num+''].map(Number);
               for( r of re ){
                    res[r] = true;
               }
               console.log(res);
                
          cnt+=1;
     }
    console.log(num, cnt);
}
```
### Question
* Travers into a json file 
```javascript
let json = {a: 1, b: 2}
for (key in a){
     console.log(key);
     console.log(a[key].length);
}
// or below retuns keys as well
Object.json.keys();
```
### Question
* There is a bakery it has a batch job with k capacity and has to serve each group by once. if customer came in with 4,3 orders then then the first group of 4 needs to wait until the second batch is ready. but in other order 3,4 they don't need to wait. Write a function to calculate how much maximum group can get fresh cakes
```javascript

```

### SQL Questions
* Query [online compiler](https://sqliteonline.com/)
* Write a query to find customerID of the customer who has placed second highest number of orders. 
We already have custotmerID of the highest number orders 
* Each customer has many orders 
```javascript

```

### Node.js db 
* best practice to use db.select using async await and catch correct error
</details>

