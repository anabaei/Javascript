# class Solution():
#     def pal(self, num):
#         if(len(num)<2):
#             return num
#         start = 0
#         end = len(num) - 1
#         accurance = {}
#         for index, item in enumerate(num):
#            if item in accurance:
#                start = accurance[item] + 1
#                ind = index -1
#                # check one by one from index to start
#                while True: 

#                    if(num[start] != num[ind]):
#                        continue
#                    if( start == ind):
#                        return (accurance[item] , index)
#                    else:
#                     start +=1 
#                     ind = index -1
                    
#            accurance[item] = index


#         return accurance  





# print(Solution().pal(["a","b","c","b","a"]))




def rec(a):
    if (len(a) < 2 ):
        return a
    c = a.pop()
    
    rec(a)
    print(c)


rec([1,2,3,4,5])