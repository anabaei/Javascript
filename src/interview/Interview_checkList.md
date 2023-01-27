
* Quick sort average and best O(nlogn), worse O(n^2)
* Merge sort average, best, worst O(nlogn)
* Quick-sort is in place sorting which doesn't need axillary array but merge-sort need it
* Both quick-sort and merge-sort are recursive which needs call stack space
* If array size is billions then quick sort takes 12 min, merge-sort takes 18 minutes and insertion-sort takes 317 years!!

### Hidden Facts in Job Description
* Always read job description carefully, find hidden facts in it, optional requirements and yrs of experience on specific languages
* AWS SA is presentations. 
* STAR answer with behavirial questions:
  * Situation: Context surrounding the event, what happened the problem started
  * Task: What was the problem/goal you face
  * Action: What did you do to solve that problem
  * Result: quantify the result of your action

### some facts

* quick sort works better in big inputs
* quick sort is in place but merge-sort is not
* Merge sort does have advantage of stability
  
### Stability
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
  
### Binary Heap (priority queue)
* Is a basic binary tree, which the most important element is the root(min or max) could be. 
* Sorting in binary heap takes logn and extract is 1. So extract n elements from a binray heap and insert into array takes nlogn to create a sorted array   
```javascript
time: O(nlogn) : no worse case 
space: O(1)
```


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
```javascript
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
