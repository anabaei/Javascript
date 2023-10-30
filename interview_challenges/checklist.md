
# Checklist

1- Sorting
2- arrays 
2- Trees
3- Graphs
3.5 - Dynamic programming
4- Node.js
5- React





### Sorting 
* Quick sort average and best O(nlogn), worse O(n^2)
* Merge sort average, best, worst O(nlogn)
* Quick-sort is in place sorting which doesn't need axillary array but merge-sort need it
* Both quick-sort and merge-sort are recursive which needs call stack space
* If array size is billions then quick sort takes 12 min, merge-sort takes 18 minutes and insertion-sort takes 317 years!!
* quick sort works better in big inputs
* quick sort is in place but merge-sort is not
* Merge sort does have advantage of stability
  
### Stability (in sorting)
* It means if two items in have same key values, when sorting their location stay with no change 
* `Selection sorting` is not stable (because we swap values). 
nested loop array on each index, select min from the rest of array, use temp var to save min_val, and replace it at the end then add one to index.
* `Bubble sorring` is stable. It only compares itself with the next to it, but in selection it compares through whole array
* `Insertion sort` is stable (check one by one push to right ). Nested loop only check with previose if it is smaller then, left to right and check again. This logic is as 
```javascript
while j >= 0 and  key < arr[j]:
                arr[j+1] = arr[j]
                j = j-1
            arr[j+1] = key 
```
* `Merge sort` is stable (two array with same value, the left one goes first)
* `Quick sort` no it is not stable (because we swap values)

* `Java` uses quicksort for primitives and merge-sort for objects to keep stability
* `Timsort` is stable and python use it

# Which of the following algorithms are stable?
* Bubble, Insertion, Merge

### Mergesort
```javascript
- take midpoint, split into half
- recurse on each half, until we left element of size 1
- then merge them, take two pointers and put smallest in first index
- Time: O(nlogn)
- Space: O(n)
- Stability: true, 
```
### Quicksort
```python
- select a pivot
- compare all elements with pivot
- set a pointer to left most index, 
- if smaller, put in the left most index and increase one the index
- then decrease the left most index by one, swap with pivot and return it as final pivot
- time O(nlogn)
- worst case if it is sorted and you take the last one as pivot, it would be O(n^2)
- Space: O(1) 
- stability: false
```

## Trees 
### BST Binary Search Tree (at trees)
* create, insert, delete and traverse 
  * treavers inorder, preorder, levelorder (did this example)

### BFS and DFS
 * Write BFS traversal
 * Write DFS and 3 versions 
 * Bottom up level order traversal (associate with dfs)

### Time Complexity
* DFS time complexity is O(n) -> need to touch each node once, space complexity - > O(logn) height of tree
* BFS space complexity - > O(n) number of leaves
  
Difference between Binary Tree & Binary Search Tree
```
Binary Tree has only two childs
Binary Search Tree left child is less than root, right child bigger than root
```
```
this pseudocode compute the sum of all the keys in a t

def computesum(TreeNode root):
    if root is null, return 0
    leftsum = computesum(root.left)
    rightsum = computesum(root.right)
    return root.key + leftsum + rightsum
```
* What is the worst-case time complexity of searching for an element in the following data structures with n nodes: unbalanced binary tree/ balanced binary tree/ unbalanced binary search tree / balanced binary search tree / binary search in a sorted array
```
n/n/n/logn/logn
```

### Binary Heap (priority queue)
* Is a basic binary tree, which the most important element is the root(min or max) could be. 
* Sorting in binary heap takes logn and extract is 1. So extract n elements from a binray heap and insert into array takes nlogn to create a sorted array   
```javascript
time: O(nlogn) : no worse case 
space: O(1)
```

4+6/2 = 5, 4 + 6-4/2 = 5 

merge sort 
```javascript
helper_merge(arr, start, end)
   
   if(arr.length<2)
      return 
   pivot = start+ (end-start)/2
   rightpart = helper_merge(arr,pivot+, end)
   leftpart = helper_merge(arr,start, pivot)
  
  k=0
  i=0
  j=0
  while(i < rightpart.length && j < leftpart.length)
     if(rightpart[i]< leftpart[j])
       result[k] = rightpart[i
       i++
       k++
  ...

  while(i < rightpart.length)
       result[k] = rightpart[i
       i++


  

  pivot(arr, left, right)

  if(arr>1)
  privot = left
  leftmostindex = left+1

  for i in range(left+1, right+1)


    helper_qs(arr, left, right)
    if(left < right)
    pivot = partition(arr, left, right)
    helper_qs(arr, left, pivot-1)
    helper_qs(arr, pivot+1, right)
     
     if()
    pivot = partition(arr, pivot)


qs(arr)
{
 
  helper_qs(arr, 0,arr.length)
}
```
## Sample Questions

### Array Manipulation

<details> 
  <summary> Move Zeros to Center </summary>

* Traverse array `[0, 2, 3, 0, 0, 4, 5, 0, 6]`, 
* Find zeros length `const zeroCount = arr.filter(item => item===0 ).length;`
* Create result array, define zeros left, then traverse via array push to result and finally add zeros to right
* Time and space complexity is O(n).
* To improve using O(1) spaces, we can use two pointers, 
* `i` check index, if not equal to zero in leftzeros or right zeros zone, move `j` to right and swap with the first `0` occurance,
* if it is in after leftzone index, then swap with the last index and decrease `j` by one

</details>

<details> 
  <summary> Find all the words in any direction in 2d array, varicent </summary>

* 

</details>



<details>
   <summary> Move zeros to center in 2d array, varicent</summary>

* Travers trough each row, col by col, if zero is not in the eachside zeros, then put zero there
* 
</details>

<details>
   <summary> Given a an array of objects find all possible ways they connect each other, aws</summary>

* 

</details>


<details>
   <summary> Given an array of monyes with values, give us change with biggest moneys </summary>

* 
</details>


#### System

<details>
   <summary> Design a waiting room, aws</summary>

</details>
<details>
   <summary> Design an app to show current location of cars </summary>

</details>

<details>
   <summary> Design an live camera detector</summary>

</details>

#### FE

<details>
   <summary> Design a todo with modules which can inheritate from each other state using context</summary>

</details>

<details>
   <summary> Design a list to retrieve from third pary and sort them b ased on name, date</summary>

</details>



