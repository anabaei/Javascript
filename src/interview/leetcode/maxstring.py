
# max: show the longest strings that are identical 
# max2: show the longest strings that is not repeated 

def max(str):
    i = 0
    maxresult= ''
    result = ''
    for i in range(len(str)):
        j = i + 1  
    
        if(len(result) > len(maxresult)):
            print('->',len(maxresult), maxresult, len(result), result)
            maxresult = result

        while j < len(str):
            result =''
            while j < len(str):
                if (str[i] == str[j]):
                    result += str[i]
                    i +=1
                    j +=1
                else:
                    j +=1
        
    print('=>', maxresult)  




max("12abc32abc12")


def testme(str):
    i = 0
    maxresult= ''
    result = ''
    for i in range(len(str)):
        if(len(str) == 1):
            print(1)
        j = i + 1  
        
        if(len(result) > len(maxresult)):
            print('->',len(maxresult), maxresult, len(result), result)
            maxresult = result

        result = str[i]

        while j < len(str) and str[i] != str[j] and str[j] not in result:
            print('->', str[i], str[j] )
            result += str[j]
            j +=1
                

    print('=>', maxresult, len(maxresult))  


testme("pwkepw")