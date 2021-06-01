
# # Python program to demonstrate 

# Set
# thisset = {"apple", "banana", "cherry"}
# if "apple" in thisset:
#      print("yes")

# a = set(array)
# a = {5}
#     a.add(6)
#     print(4 in a) 

# Default is dictionary for b. hash map shows number of occurance
# b = {} 
# b['q']= 3
# b['a']= 2
# {'q': 3, 'a': 2}

# 'q' in b # return true
# To have dictionary with list 

# import collections
# groups= collections.defaultdict(list)
#       groups["key"].append(word)
# {'key': [word]}

# # len(string) return length 
# array = ["a","b","c"]
# for index, item in enumerate(array):
#     q[index] = item


# # Count number of repeatations
#     occurrence = {}
#     for n in nums:
#       occurrence[n] = occurrence.get(n, 0) + 1 

# # check key and value of a hash dictionary
#  for key, value in occurrence.items():
#       if value == 1:
#         return key

# # XOR 
# unique = unique ^ n

# class Node:
#   def __init__(self, x):
#     self.val = x
#     self.next = None

# # float('-inf')  unlimted -
# # I/O Read form user input

# import time

# start = time.clock()   
# fileObj = open('./dictionary.txt', 'r')
# dictionary = fileObj.read().splitlines()
# fileObj.close()
# input_word = raw_input('input your word')


# # ternary
# l1 = 4 if condition else 2

# number // digit return with no 


# # best search on sorted array is binary search recursive and iterative
#         first = self.bst(arr, 0, len(arr), target)
#         second = self.bstIterative(arr, 0, len(arr), target)
    
#     def bst(self, arr, low, high, target):
#         print(low, high)
#         if low > high:
#             return -1
#         mid = low + (high - low) // 2
#         if target == arr[mid]:
#             return mid
#         if target > arr[mid]:
#             return self.bst(arr, mid+1, high, target)
#         else: 
#             return self.bst(arr, low, mid-1, target)     

#     def bstIterative(self, arr, low, high, target):
#         while True:
#             print(low, high)
#             if low > high:
#                 return -1
#             mid = low + (high - low) // 2
#             if target == arr[mid]:
#                 return mid
#             if target > arr[mid]:
#                 low = mid +1
#             else: 
#                 high = mid -1  

  
#   # PERMUTATION
#   * make recursive inside a for loop then increment the start of for loop give you permutation

# base case: 
# if start == len(arr)-1 
#   return arr

#   for i in range(start, len(arr)):
#     # do something like swap
#     self.callitSlef(start+1, arr)

# if arr = ['a', 'b', 'c'] 3! posibilites of combinations
# 3 * 2 * 1 

# def solution(A):
#     # write your code in Python 3.6
#     result = 1
#     for i in range(0, len(A)):
#         if( A[i] == 0):
#             return 0
#         elif( A[i] < 0): 
#             result *= -1
        

#     return result



# print(solution([1,-2, -3 ]))



class Tree:
  def __init__(self, x):
    self.x = x
    self.l = None
    self.r = None


class Solution:
    def s(self, a):
      print(a.x)

    def _findHelper(self, tree, result, max):
         if not tree:
          return result
         print(tree.x, result, max)
         val = tree.x  
         if(val < max):
             result +=1
         max = tree.x
         self._findHelper(tree.l, result, max)
         self._findHelper(tree.r, result, max)
         return result

    def find(self, n):
     return self._findHelper(n, 1, 0)

tree = Tree(5)
tree.r = Tree(10)
tree.r.l = Tree(1)
tree.l = Tree(3)
tree.l.r = Tree(21)
tree.l.l = Tree(20)

# print(Solution().find(tree))

## write permutation of an array 
class Solution2:
    def perm(self, nums):
        stack = []
        result = []
        i = 0
        stack = [(nums, [])]
        while len(stack):
            # if stack:
            #     n, v = stack.pop()
            #     print(n, v)
         
            stack.append((nums[:i]+nums[i+1:], [nums[i]]))
            #result.append(arr[i:])
            i+=1
            n, v = stack.pop()
            result += [n + v]
    
        print(result)
        return True
    def permute2Iterative(self, nums):
        results = []
        stack = [(nums, [])]
        while len(stack):
            nums, values = stack.pop()
           
            if not nums:
                print(">>", values)
                results += [values]
            for i in range(len(nums)):
              print("val= ", values)
              print("nums=", nums)  
              print("stack= ", stack)
              stack.append((nums[:i]+nums[i+1:], values+[nums[i]]))
              print("After Appends:", stack)
        print(results)
        return results



arr = [1,2,3]
Solution2().permute2Iterative(arr)







const _ = require('lodash');

// Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum. 
// For array [-2, -3, 4, -1, -2, 1, 5, -3] the max contiguous sum is 7 (4 + -1 + -2 + 1 + 5)

function maxSubArraySum(a)
{
  if(!a)
    return undefined
  else if(a.length === 1)
    return a[0]
  else if(a.length === 0)
    return 0
   
  else{
    let globalMax=0;
    let singleMax;
    let maxNumber;
    let sumSubArray=0
       for(let num of  a){ 
       sumSubArray += num
      
      if(num < 0)
      {
        if(!singleMax)
        {
          singleMax = num
        }
        else if (num >  singleMax){
        singleMax = num 
        }
      }
      if( sumSubArray < 0)
      {
       sumSubArray=0
      }
      
      else  {

       if(sumSubArray > globalMax)
       {
        globalMax = sumSubArray
       }
      }
    }
      return   globalMax ||  singleMax
  } 
    
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let b = [-2, -3, -4, -1, -2, -1, -5, -3];
console.debug(maxSubArraySum(a))
console.debug(maxSubArraySum(b))
if (maxSubArraySum(a) === 7){
  console.log("Well done!!!")
} else {
  console.error("Got some error in the solution.")
}
