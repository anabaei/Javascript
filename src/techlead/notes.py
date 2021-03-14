
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

To have dictionary with list 
import collections
groups= collections.defaultdict(list)
      groups["key"].append(word)
{'key': [word]}




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
