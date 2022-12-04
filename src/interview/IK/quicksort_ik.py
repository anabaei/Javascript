####### Quick sort is nlogn time 
####### It is divide and conqure 
####### There is Hoare's Partitioning with linear time and in place space


### Notice: 
# hoares is using in place but not working with duplicate values

class Solution:
    def hoares(self, arr, start, end):
        pivot = start
        while True:
            while arr[pivot] >= arr[start] and pivot != start and start < end:
                start +=1
            while arr[pivot] < arr[end] and end > start:
                end -=1
            if start >= end:
                #arr[pivot], arr[end] = arr[end], arr[pivot]
                return end
            #swap
            arr[start], arr[end] = arr[end], arr[start]
            end -=1
            start +=1

    def quicksortHelper(self, start, end, arr):
        if(start < end ):
            pivot = self.hoares(arr, start, end)
            print("3>", start, pivot -1, arr)
            self.quicksortHelper(start, pivot-1, arr)
            #self.quicksortHelper(pivot+1, end, arr)

    def quickSort(self, arr):
        end = len(arr)-1
        self.quicksortHelper(0, end, arr)
        print(arr)
        



def partion(arr, left, right):
    pivot = left 
    leftMostBiggestIndex = left + 1
    for i in range(left +1 , right+1):
        if(arr[i]< arr[pivot]):
            arr[i], arr[leftMostBiggestIndex] = arr[leftMostBiggestIndex],arr[i]
            leftMostBiggestIndex +=1
    finalePivot = leftMostBiggestIndex - 1
    arr[left], arr[finalePivot] = arr[finalePivot],arr[left]
    return finalePivot

def _helper(arr, left, right):
    
    if(left < right):
        pivot = partion(arr, left, right)
        _helper(arr, left, pivot-1)
        _helper(arr, pivot+1, right)


def quick_sort(arr):
    # Write your code here.
    _helper(arr, 0, len(arr)-1)
    print(">>",arr)

arr = [3,3,5,2,1,55,3,3,31,9,-1,3]
arr1 = [3,2,1]
#Solution().quickSort(arr)
quick_sort(arr);
#print(partion(arr, 0, len(arr)-1))