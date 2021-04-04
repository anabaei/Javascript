#longest subscription without repeatation

class solution:
 def lengthOfLongestSubstring(self, s):
        result = ""
        max = ""
        for ch in s:
            if ch  in result:
                print(result)
                result = ""
                result = result + ch 
                print(result)
                if len(result) > len(max):
                    max = result
                   
            
            
            else:
                result = result + ch
                if len(result) > len(max):
                    max = result
            
        print(len(max))

solution().lengthOfLongestSubstring("dvdf")