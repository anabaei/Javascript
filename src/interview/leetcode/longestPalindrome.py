
def longestPalindrome(str):
    
  
    maxLength = None
    for i in str:
        palin = ''
        stak1 = []
        stack2 = []
        for j in range(len(str)-1, 1, -1):
            if(str[i]== str[j]):
                stack1.append(str[i])
                stack2.append(str[j])


            print(str[j])

    return str 




print(longestPalindrome("babad"))