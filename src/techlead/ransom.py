# print(Solution().canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'bed'))
# # True

# print(Solution().canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'cat'))
# # False


class Solution(object):
  def canSpell(self, magazine, note):
    # while magazine:
    #   return magazine.pop()
    b ={}
    b['q']= 3
    b['a']= 2
    print(b)
    return True

print(Solution().canSpell(['a','a', 'b', 'c', 'd', 'e', 'f'], 'cat'))