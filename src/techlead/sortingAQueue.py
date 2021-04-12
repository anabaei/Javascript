# Queue Reconstruction By Height

# input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
# print(Solution().reconstructQueue(input))
# [[5,0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]

class Solution:
    def reconstructQueue(self, input):
        input.sort(key= lambda x: (-x[0], x[1]))
        
        for person in input:
          print(person[1])




input = [[7, 0], [4, 4], [7, 1]]
print(Solution().reconstructQueue(input))