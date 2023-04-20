


a = {}
a["aa"] = []
a["aa"].append("bb")
a["aa"].append("cc")
print(a)

# def cycle():
#     b = [[0] for _ in range(4)]
#     print(b)
#     sa = [(1,2),(2,4)]
#     def findCycle(sa):
#         for edge in sa:
#             print(edge[0], edge[1])
#     findCycle(sa)

# cycle()

def base10_to_base64(num):
    # Define the base 64 alphabet
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

    # Initialize the result string
    result = ''
    print("alphabet ",alphabet)
    # Convert the number to base 64
    while num > 0:
        remainder = num % 64
        print("alphabet[remainder]", alphabet[remainder])
        result = alphabet[remainder] + result
        num //= 64
    print(result)
    return result

base10_to_base64(127)


# position
#leftmostindex = 1
# for i in range(1, leng(arr)):
    # if (arr[i]<arr[0]):
    #  arr[i], arr[leftmostindex] = arr[leftmostindex], arr[i]
    # leftmostindex +=1

# helper(arr, start, end)

# if len > 1
# pivot = position(arr, start,end)
# helper(arr, start, pivot-1)
# helper(arr, pivot+1, end)


# helper(arr, 0, len)

# pivot = position()







a = [4,1,4,6,3]
# print(a)
# a.append(12)
# print(a)
#qsort

# mergesort
# pivot = len(arr)//2
# left = merg(:pivot)
# righ = merg(pivot:)
# arr[:pivot]
