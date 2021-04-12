# # Input: nums1 = [1,3], nums2 = [2]
# # Output: 2.00000
# # Merge two sorted array
# # Input: nums1 = [1,2], nums2 = [3,4]
# # Output: 2.50000

# class Solution:
#     def findMedianSortedArrays(self, nums1, nums2):
#         result = []
#         i = 0
#         j = 0
#         a = len(nums1)
#         b = len(nums2)
#         odd = False
#         if(a+b)%2 == 0:
#             odd = False
      
#         while True:
#             if i > len(nums1)  and j > len(nums2):
#                 print(i, j)
#                 break
#             elif i > len(nums1) -1:
#                 result = result + nums2[j:]
#                 break
#             elif j > len(nums2) -1:
#                 result = result + nums1[i:]
#                 break
#             elif nums1[i] < nums2[j]:
#                 result.append(nums1[i])
#                 i +=  1
#             else:
#                 result.append(nums2[j])
#                 j +=  1 
                
#         if(odd):
#             res = result[(a+b)//2]
#         else: 
#             res = (result[(a+b)//2] + result[(a+b)//2+1])/2
#         return res


# nums1 = [1,3]
# nums2 = [2]
# print(Solution().findMedianSortedArrays(nums1, nums2))

def a():
    i = 1
    for a in [2, 4]:
        print(a,i , a^i)
        i ^= a
    return i

print(a())