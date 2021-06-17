
# 12 because 3 + 4 + 5 = 12

class ListFastSum:
  def __init__(self, nums):
    self.nums = nums

  def sum(self, start_idx, end_idx):
    result = 0
    while(start_idx < end_idx):
        result += self.nums[start_idx]
        start_idx += 1
    return result


print(ListFastSum([1, 2, 3, 4, 5, 6, 7]).sum(2, 5))


