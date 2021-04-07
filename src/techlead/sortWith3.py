

def sortNums2(num):
    index_one = 0
    index_three = len(num) - 1
    index = 0
    while index <= index_three:
        if(num[index]== 3):
            num[index], num[index_three] = num[index_three], num[index]
            index_three -=1
          
        elif(num[index]== 2):
            index +=1
        elif num[index] == 1:
             num[index], num[index_one] = num[index_one], num[index]
             index_one +=1
             index +=1
        
    print(num)


print(sortNums2([3, 3, 2, 1, 3, 2, 1]))