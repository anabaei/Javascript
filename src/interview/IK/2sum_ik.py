# hash Table  Approach
# When you propose a solution always ask tradeoffs:
# Can I use extra memory? if yes then hash table is okay
# If not allow to use extra memory then use brute force


def twoSum(arr, sum):
    hashTable= {}
    for i in range(len(arr)):
        if arr[i] in hashTable:
            print(i,hashTable[arr[i]])
        hashTable[sum-arr[i]] = i
    
    print(hashTable)









arr = [5,3,1,9]
sum = 6
twoSum(arr, sum)