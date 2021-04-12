
# Python program to demonstrate 

Set
thisset = {"apple", "banana", "cherry"}
if "apple" in thisset:
     print("yes")

a = set(array)
a = {5}
    a.add(6)
    print(4 in a) 

Default is dictionary for b. hash map shows number of occurance
b = {} 
b['q']= 3
b['a']= 2
{'q': 3, 'a': 2}

'q' in b # return true
To have dictionary with list 
import collections
groups= collections.defaultdict(list)
      groups["key"].append(word)
{'key': [word]}

# len(string) return length 
array = ["a","b","c"]
for index, item in enumerate(array):
    q[index] = item


# Count number of repeatations
    occurrence = {}
    for n in nums:
      occurrence[n] = occurrence.get(n, 0) + 1 

# check key and value of a hash dictionary
 for key, value in occurrence.items():
      if value == 1:
        return key

# XOR 
unique = unique ^ n

class Node:
  def __init__(self, x):
    self.val = x
    self.next = None

# float('-inf')  unlimted -
# I/O Read form user input

import time

start = time.clock()   
fileObj = open('./dictionary.txt', 'r')
dictionary = fileObj.read().splitlines()
fileObj.close()
input_word = raw_input('input your word')


# ternary
l1 = 4 if condition else 2

number // digit return with no 


# best search on sorted array is binary search recursive and iterative
        first = self.bst(arr, 0, len(arr), target)
        second = self.bstIterative(arr, 0, len(arr), target)
    
    def bst(self, arr, low, high, target):
        print(low, high)
        if low > high:
            return -1
        mid = low + (high - low) // 2
        if target == arr[mid]:
            return mid
        if target > arr[mid]:
            return self.bst(arr, mid+1, high, target)
        else: 
            return self.bst(arr, low, mid-1, target)     

    def bstIterative(self, arr, low, high, target):
        while True:
            print(low, high)
            if low > high:
                return -1
            mid = low + (high - low) // 2
            if target == arr[mid]:
                return mid
            if target > arr[mid]:
                low = mid +1
            else: 
                high = mid -1  

  
  # PERMUTATION
  * make recursive inside a for loop then increment the start of for loop give you permutation

base case: 
if start == len(arr)-1 
  return arr

  for i in range(start, len(arr)):
    # do something like swap
    self.callitSlef(start+1, arr)

if arr = ['a', 'b', 'c'] 3! posibilites of combinations
3 * 2 * 1 