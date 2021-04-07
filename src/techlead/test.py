# Input: nums1 = [1,3], nums2 = [2]
# Output: 2.00000
# Merge two sorted array
# Input: nums1 = [1,2], nums2 = [3,4]
# Output: 2.50000

class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        result = []
        i = 0
        j = 0
        a = len(num1)
        b = len(num2)
        odd = False
        if(a+b)%2 == 0:
            odd = True
      
        while True:
            if i > len(num1)  and j > len(num2):
                print(i, j)
                break
            elif i > len(num1) -1:
                result = result + num2[j:]
                break
            elif j > len(num2) -1:
                result = result + num1[i:]
                break
            elif num1[i] < num2[j]:
                result.append(num1[i])
                i +=  1
            else:
                result.append(num2[j])
                j +=  1 
                
        if(odd):
            res = result[(a+b)/2] + result[(a+b)/2+1] 
        return result


num1 = [1,2]
num2 = [0,3,4]
print(Solution().findMedianSortedArrays(num1, num2))

