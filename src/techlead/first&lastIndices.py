## 6
# First and Last Indices of an Element in a Sorted Array
# arr = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15]
# x = 9
# print(Solution().getRange(arr, 9))
# [6, 8]

class Solution:
    def getRange(self, arr, target):
        first = self.bst(arr, 0, len(arr), target, True)
        second = self.bst(arr, 0, len(arr), target, False)
        return first,second
    
    def bst(self, arr, low, high, target, findFirst):
        
        if findFirst:
            if low > high:
                return -1
            mid = low + (high - low) // 2
            if (mid == 0 or target > arr[mid-1]) and target == arr[mid]:
                return mid
            if target > arr[mid]:
                return self.bst(arr, mid+1, high, target, True)
            else: 
                return self.bst(arr, low, mid-1, target, True)
        else:
            if low > high:
                return -1
            mid = low + (high - low) // 2
            if (mid == len(arr) -1 or target < arr[mid+1]) and target == arr[mid]:
                return mid
            if target > arr[mid]:
                return self.bst(arr, mid+1, high, target, False)
            else: 
                return self.bst(arr, low, mid-1, target, False)     


arr = [1, 3, 3, 5, 7, 8, 9, 9, 9, 15]
x = 9
print(Solution().getRange(arr, 9))
