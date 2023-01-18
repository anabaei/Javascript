
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



def find_max_bst(node):
    if node is None:
        return 
    # while(node.left):
    #     node = node.left
    # print(node.value)
    while(node.right):
        node = node.right
    print(node.value)


#### Successor of a node is another node with the next largest key (could be serveral level down)
#### If node has right subtree, then next largest key is inside the right child  
####  -- and the closest of that would be the min number in right subtree
#### If node doesn't have right child, look at parents. 
##### --- If node is the left child of its parent, then its parent is successer
##### --- If node is the right child, go back til you find a node is left child of acestor then that is successor
##### -------- first travers from root to the node, then save the last time you  node.left as ancestor var. 


#### Predecessor is same as Successor, just need to change left to right
### If node has left subtree, then it would be the max value of that subtree 





arr = [7,5,9,4,1,5,7,99,3]
root = insert_bst(arr)



#travers_bst(root)
find_max_bst(root)