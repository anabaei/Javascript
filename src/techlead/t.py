
import collections

    # for i, num in enumerate(nums):
    #   diff = target - num
    #   if diff in values:
    #     return [i, values[diff]]
    #   values[num] = i

def solution(a):
     
    for i, num in enumerate(a):
         value = {}
         value[num] = i
         if i in value:
             print(i)
         print(value)

    groups = collections.defaultdict(list)
    groups["A"].append(1)
    groups["A"].append(2)
    GEEK = {''}
    GEEK.add('s')
    # write your code in Python 3.6

    h = a
     #return solution(a-1) 
    #print(GEEK,groups)

#print(solution([1,2,3,4,5]))

