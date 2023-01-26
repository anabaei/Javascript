# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

# The overall run time complexity should be O(log (m+n)).

def findMedianSortedArrays(arr1, arr2):
    i =0
    j =0
    result=[]
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            result.append(arr1[i])
            i +=1
        else:
            result.append(arr2[j])
            j +=1
    while i < len(arr1):
        result.append(arr1[i])
        i +=1
    while j < len(arr2):
        result.append(arr2[j])
        j +=1
    if len(result)%2 == 1:
        return result[len(result)//2]
    else:
        medium = len(result)//2
        average = (result[medium] + result[medium-1])/2
        return average

    return result

print(findMedianSortedArrays([1,2], [3,4]))