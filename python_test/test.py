# Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, print Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. You can use any language.

#Get the range from 1 to 100
for number in range(1,101):
    # If divisible by both 3 and 5
    if number % 3 == 0 and number % 5 == 0:
        print("CracklePop")
    # If divisible by 3
    elif number % 3 == 0:
        print("Crackle")
    # If divisible by 5
    elif number % 5 == 0:
        print("Pop")
    # Print number
    else:
        print(number)