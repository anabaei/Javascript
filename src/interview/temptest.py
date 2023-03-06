


a = {}
a["aa"] = []
a["aa"].append("bb")
a["aa"].append("cc")
print(a)

def cycle():
    b = [[0] for _ in range(4)]
    print(b)
    sa = [(1,2),(2,4)]
    def findCycle(sa):
        for edge in sa:
            print(edge[0], edge[1])
    findCycle(sa)

cycle()
