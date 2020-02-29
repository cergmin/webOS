import os
a = int(input())
b = int(input())
for i in range(a, b):
	print(i)
	if os.path.isfile(str(i)):
		os.rename(str(i), str(i) + '.png')