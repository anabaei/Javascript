class Solution(object):
  def _permuteHelper(self, nums, start=0):
    if start == len(nums) - 1:
      print("99- End of start", start, nums)
      return [nums[:]]

    result = []
    for i in range(start, len(nums)):
      print("1- start=", start)
      print("2- i=", i)
      nums[start], nums[i] = nums[i], nums[start]
      print("3- nums=", nums)
      print("4- reuslt=,", result)
      result += self._permuteHelper(nums, start + 1)
      print("5- nums", nums)
      print("6- reuslt=,", result)
    return result

  def permute(self, nums):
    return self._permuteHelper(nums)


print(Solution().permute(["a", "b", "c"]))




# [1,2,3,4,5]
# 5!, 4!, 3!, 2!, 1!

# for each index like 0, have to travers from left to right and take each one and replace it with that value

# 1
# 2
# 3
# 4
# 5
# take that value raplce it with other inndex
# so 
# for i in range(0, len(arr))
#    arr[0], arr[i] = arr[i], arr[0] 

# this is only for one index(0) how I could do it for the rest of the indexes?
# recursively call that function just increase one index 

# for i in range(start, len(arr))
#    arr[start], arr[i] = arr[i], arr[start] 
#    doperm(arr, start +1)

# we do that until start reach to the end line so base case would be 

# if start == len(start) -1 
#  return arr

