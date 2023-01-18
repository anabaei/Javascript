
## BFS search takes o(n) space and time o(n)
## Insert BFS
class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None



## Create BFS
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

### Level order traversal
# BFS 
def levelOrder(root):
    
    if root is None:
        return None 
    node = root 
    result = []
    finalResult = []
    queue = []
    
    queue.append(root)
    level = 0
    index = 0
    while queue:
        currSize = len(queue)
        currList = []
        while currSize > 0:
            currNode = queue.pop(0)
            currList.append(currNode.value) 
            currSize -= 1
            queue.append(currNode.left) if currNode.left else None 
            queue.append(currNode.right)  if currNode.right else None 
        result.append(currList)
    print(result) 

levelOrder(a)


