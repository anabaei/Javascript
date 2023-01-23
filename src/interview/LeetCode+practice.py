
a = ['a','b','c','d']

for i in range(1,len(a)):
    print(a[i])

print(len(a))


## LeetCode test 


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(l1, l2):
        l1arr = []
        l2arr = []
        root = ListNode(0)
        while l1:
            l1arr.append(l1.val)
            l1 = l1.next
        while l2:
            l2arr.append(l2.val)
            l2 = l2.next
        print(l2arr, l1arr)
        cnt = 0
        carryOver = 0
        prev = None
        while cnt < 3:
            cnt +=1
            result = l2arr.pop() + l1arr.pop() + carryOver
            carryOver = 1 if result >= 10 else 0

            print(cnt, result, carryOver)
            ListNode(result)
            if prev is not None:
                prev.next = ListNode(result)
            else:
                root = prev
            prev = ListNode(result)
        while cnt < len(l2arr):
            cnt +=1
            result = l2arr.pop() + carryOver
            carryOver = 1 if result >= 10 else 0
            if prev is not None:
                prev.next = ListNode(result)
            else:
                root = ListNode(result)
            prev = ListNode(result)
        while cnt < len(l1arr):
            cnt +=1
            result = l1arr.pop() + carryOver
            carryOver = 1 if result >= 10 else 0
            if prev is not None:
                prev.next = ListNode(result)
            else:
                root = ListNode(result)
            prev = ListNode(result)
        if(carryOver):
            if prev is not None:
                prev.next = ListNode(result)
            prev = ListNode(carryOver)
        
        # while ListNode:
        #     print(ListNode.val)
        #     ListNode = ListNode.next
        return root


l1 = ListNode(1)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)

print(Solution.addTwoNumbers(l1,l2))