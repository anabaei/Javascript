
# Python program to demonstrate 

# Dictionary: A map hash table
# Dict = {1: 'Geeks', 2: 'For', 3: [{1:'Geeks'}]}  
# #print(Dict[2][0][1]) 
# print(Dict[2]) 

#Set
# thisset = {"apple", "banana", "cherry"}
# if "apple" in thisset:
#      print("yes")



class Node:
  def __init__(self, x):
    self.val = x
    self.next = None


class Solution:
  def addTwoNumbers(self, l1, l2):
    # return self.addTwoNumbersRecursive(l1, l2, 0)
    # return self.addTwoNumbersIterative(l1, l2)
    return 2; 
 

l1 = Node(2)
l1.next = Node(4)
l1.next.next = Node(3)
print(l1.val)
l2 = Node(5)
l2.next = Node(6)
l2.next.next = Node(4)

answer = Solution().addTwoNumbers(l1, l2)
# while answer:
#   print(answer.val, end=' ')
#   answer = answer.next
# 7 0 8
print(answer)