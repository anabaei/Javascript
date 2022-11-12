####### Quick sort is nlogn time 
####### It is divide and conqure 
####### There is Hoare's Partitioning with linear time and in place space


class Solution:

    def hoares(self, arr, start, end):
        
        pivot = (start+end)//2
        print( start, end, arr)
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
            self.quicksortHelper(start, pivot, arr)
            self.quicksortHelper(pivot+1, end, arr)

       print(arr)   # 0, 1, [3, 3] , 0


    def quickSort(self, arr):
        end = len(arr)-1
        self.quicksortHelper(0, end, arr)
        

arr = [3,4,2,3,55,3,1,11,3,44,7]
Solution().quickSort(arr)
