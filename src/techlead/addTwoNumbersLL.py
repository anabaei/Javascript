
# 247 + 321 = 768 
# l1 = Node(2)
# l1.next = Node(4)
# l1.next.next = Node(3)

# l2 = Node(5)
# l2.next = Node(6)
# l2.next.next = Node(4)

# answer = Solution().addTwoNumbers(l1, l2)
# while answer:
#   print(answer.val, end=' ')
#   answer = answer.next
# # 7 0 8

class Node:
  def __init__(self, x):
    self.val = x
    self.next = None