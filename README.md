# DataStructures

## Stacks
### [Stack-Array](Stack-Array.js)

In the above code, we define a Stack class that utilizes an array to store elements. The peek() method allows us to view the top element without removing it, push() adds elements to the top of the stack, and pop() removes the top element from the stack. We create an instance of the Stack class named myStack and perform operations to test its functionality.

### [Stack-Linked Lists](Stack-LinkList.js)

The above code defines a Stack class utilizing a linked list to manage elements. It has methods like peek() to view the top element, push() to add elements to the stack, and pop() to remove elements from the stack. An instance myStack is created, and various stack operations are performed for testing purposes.

### Exercise 1 - [Valid Paremthesis](Stack-ValidParanthesis.py)

Leetcode exercise 20
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.
* Every close bracket has a corresponding open bracket of the same type.

This Python solution uses a dictionary to map opening brackets to their corresponding closing brackets and simulates a stack using a list. It iterates through each character in the input string, pushing closing brackets onto the stack when opening brackets are encountered. When a closing bracket is encountered, it checks if it matches the last element in the stack. If the stack becomes empty after iterating through all characters, it indicates that all opening brackets have been closed properly, and the function returns True. Otherwise, it returns False.

## Queues
### [Queue-Linked Lists](Queue-LinkList.js)

In the above code, we define a Queue class that utilizes a linked list to store elements. The peek() method allows us to view the first element without removing it, enqueue() adds elements to the end of the queue, and dequeue() removes the first element from the queue. We create an instance of the Queue class named myQueue and perform operations to test its functionality.

### Queue-Array

While arrays are efficient for accessing elements by index, adding or removing elements from the beginning of an array (which is required for queue operations like dequeue) can be inefficient. Every time you dequeue an element, all other elements need to be shifted by one position, resulting in a time complexity of O(n), where n is the number of elements in the array.
Also, arrays in many programming languages are implemented as dynamic arrays, which means they automatically resize themselves when needed. This resizing operation can be expensive, especially when the array needs to grow.