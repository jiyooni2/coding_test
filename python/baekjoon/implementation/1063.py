

K, S, N = input().split()

K = list(K)
K[0] = ord(K[0])-ord("A")+1
K[1] = int(K[1])

S = list(S)
S[0] = ord(S[0])-ord("A")+1
S[1] = int(S[1])

temp = {
    "R": [1, 0],
    "L": [-1, 0],
    "B": [0, -1],
    "T": [0, 1],
    "RT": [1, 1],
    "LT": [-1, 1],
    "RB": [1, -1],
    "LB": [-1, -1]
}

moves = []


for i in range(int(N)):
    moves.append(input())

for move in moves:
    diff = (temp.get(move))

    NK = K[:]
    NS = S[:]

    NK[0] = K[0] + diff[0]
    NK[1] = K[1] + diff[1]

    if(NK[0] == S[0] and NK[1] == S[1]):
        NS[0] = S[0] + diff[0]
        NS[1] = S[1] + diff[1]

    if(1 <= NK[0] and NK[0] <= 8 and 1 <= NK[1] and NK[1] <= 8 and 1 <= NS[0] and NS[0] <= 8 and 1 <= NS[1] and NS[1] <= 8):
        K = NK[:]
        S = NS[:]


K[0] = chr(K[0]+ord("A")-1)
K[1] = str(K[1])
S[0] = chr(S[0]+ord("A")-1)
S[1] = str(S[1])

print(''.join(K))
print(''.join(S))
