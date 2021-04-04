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

arr = [0] * 26
print(ord('z'))

# to make hashed map with collection
# word = "ab" or "abc" ...
# groups= collections.defaultdict(list)
# groups[word].append(word)
# groups["".join(sorted(word))].append(word)
# groups = {
#   "abc": ['abc', 'cab', 'bca'],
#   "ab": ['ba']
# }