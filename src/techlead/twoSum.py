#print(Solution().twoSumB([2, 7, 11, 15], 18))
# 7 + 11 = 18
# input : ([2, 7, 11, 15], 18)
# output : [1,2]

class Solution:
    def twoSumB(self, arr, target):
        hashMap = {}
        for i, item in enumerate(arr):
            num = target - item
            if num in hashMap:
                return [i,hashMap[num]]
            hashMap[item] = i
        return []


print(Solution().twoSumB([2, 7, 11, 15], 18))
