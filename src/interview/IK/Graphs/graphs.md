
# Graphs 
* Epic example is salesman. To solve a graph problem you need to do the following
```
Could the problem be model as a graph
Would a simple graph traverse solve it
Would some popular extensions helps to solve it
Code it
```
### Degree of Vertex
* Is a number of vertices that are adjacent to the vertex
* A complete graph is a graph that all edges are connected 
* G(V,E) . V is vertex and E is Edge.
* The sum of Vertex degrees is 2E
* Directed Graph has Out-degree and In-degree 

#### Eulerian (Visit All Edges Once)

* Passing all edges exactly once and back to same place -> Euler Cycle
* Passing all edges exactly once and end to another vertice -> Euler Graph 
* To have Euler Cycle there should not be any odd degree vertices all should be even degree 
* If there are exactly two odd degree vertices, and start from one of the odds and end to another it is Euler Path
*  If there is one or more odd degree vertices, then there is no Euler Cycle nor Euler path

* A Hamiltonian graph is a connected graph that contains a Hamiltonian cycle, which is a cycle that passes through every vertex exactly once

* An Eulerian graph is a connected graph that contains an Eulerian cycle, which is a path that passes through every edge exactly once and ends at the starting vertex.

* The main difference between Hamiltonian and Eulerian graphs is that a Hamiltonian graph focuses on visiting each vertex exactly once, while an Eulerian graph focuses on visiting each edge exactly once. Additionally, a Hamiltonian cycle must visit each vertex exactly once and end at the starting vertex, while an Eulerian cycle must visit each edge exactly once and end at the starting vertex

## 1 - Edge List
```
Edge1 -> 1,2
Edge2 -> 3,2
Edge3 -> 1,3   
```
* If you have 4 balls and wants to make pairs of them you can have chose 2 of n as nC2 = n(n-1)/2 where n is 4
* If you have n vertices, number of edges are nC2 or O(n^2)
* A graph with n nodes, with no self loops maximum number of edge are n(n-1)/2
* Put an array list of vertices, put another array list of objects, each object is an edge including their vertices or vertices ids from another list, weight. 

### Traverse 
* Start from one vertice, find edges connected, and go to another vertice 
* Give me list of all neighbors of one vertice,  so traverse the edge list, check each node.
```javascript
Time-> E * n  where E is number of edges and n number of vertices
Max E = n(n-1)/2 
-> Tim O(n^3)

Space 
n space for vertices, edge m --> O(n+m) 
```
## 2 - Adjacency List
* you can put id of each vertice into a list, then on each vertice add the adjacent edges
```javascript
0 -> 1,4,8
1 -> 0,4,6,9
2 -> 3   
```
* If they are not directional, there would be u and v into v and u vertices adjacents list. but if it is directional, then only from u to v then only in u are the list 
```
O(n) -> of array , O(m) -> spaces O(m+n)
```
* Also there would be cases when you look at hashtable of vertices, they point to an object which one of their attribute is adjacent vertices, the rest are other infos
```
0 -> {edgesofCities:1,4,8, edgesofRailroads:3,2,5 }
1 -> {edges:0,4,6,9
2 -> {edges:3   
```

### 3 - Adjacency Matrix
* Another way to store edges is a n*n matrix
* If it is undirected graph, then it should symmetric 
* Add wieght on each eadge, for example put 50 on arr[2][0] = 50
* Advantage is accessing to an edge is O(1)
#### Travers
* To find what are the adjacent to this vertice, need to check the index of the vertice and each one is 1 means in that vertice there is connection and 0 means no connection
* So time complexity on each node is O(n), 
* Space complexity is O(n^2), it doesn't matter how many edges have it is always fix
* So it is good when we have `dense` graph. (means has many edges)
* If number of edges are `sparse` it means number of edges are way more smaller. 
  * Like facebook has more than 2 billion people, average is afew hundereds, so matrix doesn't make sense since total among of storage is 2 billion * 2 billion 
  * Since most graph are `spares` so it is good to use `adjacent list`
  * To quickly tell `spares` tell in O(1) if u is connected to v
```python
import numpy
numpy.zeros((5, 5))
numpy.empty((5, 5))                      # allocate, but don't initialize
numpy.ones((5, 5))
```
### 4 - Adjacency Maps

```javascript
u -> {v:e, w:g}
v -> {u:e, w:f}
```
* It takes O(1) to find out what is adjacent of a vertice to get edge wieght
* 
* A list of array or hash table instead of pointing to list of nodes (adjacent list), it points to object of keys and pairs, where key are vertices and values are edges between that key and the first vertice in index. So if there is weight this edge could be weight 
* Adjacency matrics provides O(1) time, Adjacency map combines the advantage of Adjacency lists(in space) and Adjacency matrics (in time)
* Usually Adjancy map is suggested 
* Adjacency matrixs and map have O(1) access time in query "Is vertex i directly connected to verex j"
* Adjacency list and map have O(degree(i)) in time on "Get all neighbors of vertex i"
* Spaces is O(m+n), where m is number of edges and n vertices on all  3 list expect matrix which is n^2
* If we have 10 vertices and 20 edges and memory is expensive what you select in between two list and martix
  * In general -> Adjacency list 
  * If there is no auxillary data -> Adjacency Matrix


### Python 
* Initial an array with empty array or any object
```python
adjacency_list = [[] for _ in range(n)]
```