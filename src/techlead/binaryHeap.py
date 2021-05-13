# https://www.youtube.com/watch?v=AE5I0xACpZs

# Binary heap is structure as binary tree. Each node pointed out to two other nodes
# Heap variant means all nodes satisfy the conditions like smaller than their childs
# heapify is a funciton to make sure it satisfies invariant

# 4,3,2,1

class Solution():
    def heapSort(self, n):
        for index, item in enumerate(n):
            self.heapify(n, 1)
            print(index, item)
            
       
    def heapify(self, arr, index):
        while True:
         # get left child
         left_index = self.__get_left_child(index, arr)
         right_index = self.__get_right_child(index, arr)
         # take which one smaller replace it
       
         # check this one
         if left_index and right_index and arr[index] <= arr[left_index] and arr[index] <= right_index:
            break
         if left_index and arr[index] > arr[left_index]:
            print('>> ', arr[index])
            arr[index], arr[left_index] = arr[left_index], arr[index]
         if right_index and arr[index] > arr[right_index]:
            print('<< ',arr[index])
            arr[index], arr[right_index] = arr[right_index], arr[index]
         print('arr= ',arr)
         break
        # continue as long as i = of array
        
        return arr

    def __get_left_child(self, index, arr):
        j = index * 2 + 1
        if(j > len(arr) -1):
            return None
        return j
    def __get_right_child(self, index, arr):
        j = index * 2 + 2
        if(j > len(arr) -1):
            return None
        return j


print(Solution().heapSort([4,3,2,1]))


