

################## BST Advantage over Sorted Array ####################
# - Insert is faster
# - Delete is faster 
##########################################################################
# - BST uses more space than array
# - BST search is not faster than sorted array
# - A none balance BST has no advantage over sorted array
# - A newly inserted node will always be a leaf in a BST
# - The successor of a node in a BST must always be found in its right subtree. If it has no right subtree, there is no successor. ?????
########################################################################


### Check null in python
   # key.data != None 

# predecessor : yeki ghabl az the node, the largest that is smaller than the root
# successor: yeki baed az node, the smalest that is bigger than the node.

# Find successor -> bigger element of a key
# Find predecessor -> smaller element of a key

class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.data = data

############################################       
################ BST INSERT #################
################################################
    def insert(self, data):
    # Compare the new value with the parent node
      if self.data:
         if data < self.data:
            if self.left is None:
               self.left = Node(data)
            else:
               self.left.insert(data)        
         elif data > self.data:
               if self.right is None:
                  self.right = Node(data)
               else:
                  self.right.insert(data)
      else:
         self.data = data

    # Print the tree Min
    def PrintTreeInOrder(self):
        if self.left:
            self.left.PrintTreeInOrder()
        print( self.data)
        if self.right:
            self.right.PrintTreeInOrder()   
   # Print the tree Max
   # Print the tree Min would be self.left = left instead
   #  def PrintTreeMax(self):
   #      while self.right:
   #             self = self.right
   #      print(self.data)
   #      return None 
   # # Print the NofMin
   #  def findNmMin(self, n):
   #        cnt = 0
   #        self.findNmMinHelper(n, cnt)
   #  def findNmMinHelper(self, n, cnt):
   #      if self.left:
   #          self.left.findNmMinHelper(n, cnt)
   #      print(self.data, n, cnt)
   #      cnt +=1
   #      if self.right:
   #          self.right.findNmMinHelper(n, cnt) 
        
       
##############################################       
################ BST Search ###################
################################################
    def searchTree(self, key):
         # while current is not null  
            # if root = key return key
            # else if key < node.key 
            # key = node.left
            # else 
            # key = node.right
         while(self and self.data != None):
            
            print(self.data)
            if (self.data == key):
                  return key
            if (self.data == None):
                  return None
            elif(self.data > key):
               self = self.left 
            elif(self.data < key):
               self = self.right
         
         
         if self == None or self.data == None:
            return None
         print(key)




def delete(node, key):
 
      root = node 
      #search
      prev= None
      while(node != None and node.data != key): 
         if( key > node.data):
               prev = node 
               node = node.right  
         elif(key < node.data):
               prev = node 
               node = node.left 
         
      if(node == None):
            return False
      
      

      # Delete A Leaf Node
      elif(node.data == key and node.left == None and node.right == None):
            ## delete it
            
            if(prev.left == node):
                  prev.left = None
            elif(prev.right == node):
                  prev.right = None 
            # when it is root
            elif(prev.data == None):
                  root.data = key 
            return True 
      # Delete a node with one Child               
      elif(node.data == key and (node.left == None or node.right == None)):
            
            if(node.left != None):
               # root
               if(prev == None):
                     root = node.left
               elif(prev.left == node):
                     prev.left = node.left
               elif(prev.right == node):
                     prev.right = node.left
            elif(node.right != None):
                  # root
                  if(prev == None):
                        root = node.right
                  elif(prev.left == node):
                     prev.left = node.right 
                  elif(prev.right == node):
                     prev.right = node.right
         # Delete node with two subtrees, replace it with successor and remove successor
            else:
                  #find successor
                  successor = node  
                  nodelefprev = None 
                  if(node.data == key):
                     prev = node 
                     node = node.right 
                     while(node.left != None):
                           nodelefprev = node 
                           node = node.left
                     successor = node.data
                     #remove successor if successor doesnt have right child
                     # remmeber, successor (node here) don't have any left child, either has right or not
                     if(nodelefprev.right == node):
                        nodelefprev.right = node.right  
                     elif(nodelefprev.left == node):
                         nodelefprev.left = node.right 

root = Node(44)
root.insert(17)
root.insert(88)
root.insert(8)
root.insert(32)
root.insert(65)
root.insert(97)
root.insert(28)
root.insert(54)
root.insert(82)
root.insert(93)
root.insert(29)
root.insert(76)
root.insert(68)
root.insert(80)
#print(root.searchTree())
#root.PrintTreeInOrder()
#root.PrintTreeMax()
#root.findNmMin(2)
# delete(root, 97)
delete(root, 44)
root.PrintTreeInOrder()
#print("ss")

