
###################################### Run & Exit ##############################
# Assume dictionary.txt is in the same folder
# Execute in terminal by this script:
#              python solution1.py
# Exit by typing exit 

###################################### Solution One #########################
# Make a hash map of all listed words and find the word based on keys with O(1) time
## O(n) + O(mlogm) Time complexity to make a hash map
### O(mlogm) time complexity to sort words in dictionary with the length of max m 
### O(n) time complexity to traverse all dictionary with max n words
#################################################################################

import collections
import time

def timeProcessing(end, start):
     return round((end-start) * 1000)

def loadDictionary(): 
     start = time.clock()   
     fileObj = open('./dictionary.txt', 'r')
     dictionary = fileObj.read().splitlines()
     fileObj.close()

     groups= collections.defaultdict(list)
     for word in dictionary:
       if len(word) == 1:
          groups[word].append(word)
       elif len(word) > 1:
          groups["".join(sorted(word))].append(word)
     process = timeProcessing(time.clock(), start)
     return groups, process

def AnagramWords():
     print("Welcome to the Anagram Finder")
     print("-----------------------------")
     groups, proccessingTime = loadDictionary()
     print("Dictionary loaded in "+ str(proccessingTime) +" ms")
     while True:
          input_word = raw_input('AnagramFinder>')
          start = time.clock() 
          if (input_word) == 'exit':
               break 
          result = groups[input_word]
          timePassed = timeProcessing(time.clock(), start)
          if not result:
               print("No anagrams found for "+str(input_word) +" in "+ str(timePassed))
          else:
               print(str(len(result))+ " Anagrams found for "+str(input_word) +" in "+  str(timePassed) + "ms")
               print (','.join(result))

AnagramWords()
