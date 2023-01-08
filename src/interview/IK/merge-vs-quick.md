
* Quick sort average and best O(nlogn), worse O(n^2)
* Merge sort average, best, worst O(nlogn)
* Quick-sort is in place sorting which doesn't need axillary array but merge-sort need it
* Both quick-sort and merge-sort are recursive which needs call stack space
* If array size is billions then quick sort takes 12 min, merge-sort takes 18 minutes and insertion-sort takes 317 years!!

### some facts

* quick sort works better in big inputs
* quick sort is in place but merge-sort is not
* Merge sort does have advantage of stability
  
### Stability
* It means if two items in have same key values, when sorting their location stay with no change
* `Selection sorting` is not stable (because we swap values)
* `Bubble sorring` is stable 
* `Insertion sort` is stable (check one by one push to right )
* `Merge sort` is stable (two array with same value, the left one goes first)
* `Quick sort` no it is not stable (because we swap values)

* `Java` uses quicksort for primitives and merge-sort for objects to keep stability
* `Timsort` is stable and python use it

# Which of the following algorithms are stable?
* Bubble, Insertion, Merge
  