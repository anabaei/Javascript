
# Notice: nested function in python is acceptable:
# def oneLayer:
#     def secondLayer:

class BinaryTreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def search_node_in_bst(root, value):
        print(root)

# one class to create node on each insert
# one node to keep connected
# leetcode example 
def insert_bst(arr):
    def insert_array(root, item):
        if root is None:
            root = BinaryTreeNode(item)
            return root
        if (root.value is not None):
            if(item > root.value):
                root.right = insert_array(root.right, item)
            else:
                root.left = insert_array(root.left, item)
            return root

    root = BinaryTreeNode(arr[0])
    for item in range(1, len(arr)):
        insert_array(root,arr[item])
    return root
        

def travers_bst(node):
    if(node is None):
        return 
    travers_bst(node.left)
    print("node = ",node.value)
    travers_bst(node.right)
        
arr = [7,5,9]
root = insert_bst(arr)

travers_bst(root)
