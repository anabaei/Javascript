
# 247 + 321 = 768 
# l1 = Node(7)
# l1.next = Node(4)
# l1.next.next = Node(2)

# l2 = Node(1)
# l2.next = Node(2)
# l2.next.next = Node(3)

# # 7 6 8

# 0 + 10000
class Node:
  def __init__(self, x):
    self.val = x
    self.next = None


# class Solution:
#   def addToNumbers(self, l1,l2):
#       remainer = 0
#       res = 0
#       cnt = 0
#       total = 0
#       while l1.val and l2.val:
#         res = l1.val + l2.val + remainer 
#         if(res > 9): 
#           res = res%10
#           remainer = res/10
#         total = pow(10, cnt) * res + total
#         l1 = l1.next
#         l2 = l2.next
#         cnt = cnt +1
#         if not l1 or not l2:
#           return total
     
class Solution:
 
  def addNumbers(self, l1, l2):
    
    return self.addToNumbers(l1, l2, 0)

  def addToNumbers(self, l1, l2, val3):
    result = l1.val + l2.val + val3
    
    ret = Node(result%10)
    c = result/10
    
    if l1.next or l2.next:
      l1.next = Node(0) if not l1.next else l1.next
      l2.next = Node(0) if not l2.next else l2.next
      ret.next = self.addToNumbers(l1.next, l2.next, c)
    elif c:
      ret.next = Node(c)
    print(l1.val , l2.val , val3)
    return ret
   

# [2,4,3], l2 = [5,6,4]
#  342 + 465 = 807.
l1 = Node(2)
l1.next = Node(4)
l1.next.next = Node(3)

l2 = Node(5)
l2.next = Node(6)
l2.next.next = Node(4)
result = Solution().addNumbers(l1, l2)
print(result.val, result.next.val)
print(11.9//3)

