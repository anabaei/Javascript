
# 247 + 321 = 768 
# l1 = Node(7)
# l1.next = Node(4)
# l1.next.next = Node(2)

# l2 = Node(1)
# l2.next = Node(2)
# l2.next.next = Node(3)

# answer = Solution().addTwoNumbers(l1, l2)
# while answer:
#   print(answer.val, end=' ')
#   answer = answer.next
# # 7 6 8

# 0 + 10000
class Node:
  def __init__(self, x):
    self.val = x
    self.next = None


class Solution:
  def addToNumbers(self, l1,l2):
      remainer = 0
      res = 0
      cnt = 0
      total = 0
      while l1.val and l2.val:
        res = l1.val + l2.val + remainer 
        if(res > 9): 
          res = res%10
          remainer = res/10
        total = pow(10, cnt) * res + total
        l1 = l1.next
        l2 = l2.next
        cnt = cnt +1
        if not l1 or not l2:
          return total
     



l1 = Node(7)
l1.next = Node(4)
l1.next.next = Node(2)

l2 = Node(1)
l2.next = Node(2)
l2.next.next = Node(3)
result = Solution().addToNumbers(l1, l2)
print(result)
