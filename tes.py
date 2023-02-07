class BinaryTreeNode: 
    def __init__(self, val):
        self.val = val 
        self.left = None 
        self.right = None 


# [
# [2],
# [5, 4],
# [0, 1, 3, 6]
# ]
a = BinaryTreeNode(2)
a.left = BinaryTreeNode(5)
a.right = BinaryTreeNode(4)
a.left.left = BinaryTreeNode(0)
a.left.right = BinaryTreeNode(1)
a.right.left = BinaryTreeNode(3)
a.right.right = BinaryTreeNode(6)




def bfs(num, root):
    
    finalArrayWhichIndexIsLevel = []
    queue = []
    queue.append(root)
    while(queue):
        sizeOfqueueBeforePops = len(queue)
        currList = []
        while(sizeOfqueueBeforePops > 0):
            sizeOfqueueBeforePops -=1
            node = queue.pop(0)
            currList.append(node.val)
            if(node.val == num):
                print(num, len(finalArrayWhichIndexIsLevel))
                break 
            if(node.left):
                queue.append(node.left) 
            if(node.right):
                queue.append(node.right)
        finalArrayWhichIndexIsLevel.append(currList)


    print(finalArrayWhichIndexIsLevel)    
        
# bfs(6, a)


## dfs 

def dfs(root):
    
    # -- preorder -> print(root.val)
    if(root.left):
        dfs(root.left)
    print(root.val) # inorder 
    if(root.right): 
        dfs(root.right)
    # -- post order -> print(root.val)


#dfs(a)


# [
# [2],
# [5, 4],
# [0, 1, 3, 6]
# ]
aa = BinaryTreeNode(300)
aa.left = BinaryTreeNode(200)
aa.right = BinaryTreeNode(400)
aa.left.left = BinaryTreeNode(100)
aa.left.right = BinaryTreeNode(400)


# check root value with left
# check root value with right 
# do it recursively


def isBST(root):
    
    if(not root):
        return True

    if(root.left):
        print("left= ",root.left.val, root.val)
        if(root.val <= root.left.val):
            return False
        else:
            isBST(root.left) 
    
    if(root.right):
        print("right= ",root.right.val, root.val)
        if(root.val >= root.right.val):
            return False
        else:
            isBST(root.right) 
    return True 

print(isBST(aa))