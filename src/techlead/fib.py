def fib(n):
    if(n==0):
        return 0
    if(n==1):
        return 1
    return fib(n-1) + fib(n-2)



def fib_iterative(n):
    a, b = 0, 1
    while n > 0:
        print(a,b)
        a, b = b, a + b
        n -= 1
    return a

print(fib_iterative(8))

