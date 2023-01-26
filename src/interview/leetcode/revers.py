def revers(num):

    queue = []
    while (num > 10):
        u = num%10
        print(u)
        queue.append(u)
        num = num//10 
        # print(num)
    print(num)
    queue.append(num)
    
    result = 0
    cnt = len(queue) -1
    
    while len(queue) > 0:
        n = queue.pop(0)
        result += n * pow(10,cnt)
        cnt -=1
    
    print("->",result)
revers(124)

# 124 ->  12, 1, 