// Define a class Node to represent individual elements in the stack.
class Node {
    constructor(value) {
      this.value = value; // Value of the node
      this.next = null;   // Pointer to the next node
    }
  }
  
// Define a class Stack to implement the stack data structure.
class Stack {
    constructor() {
      this.top = null;    // Reference to the top element of the stack
      this.bottom = null; // Reference to the bottom element of the stack
      this.length = 0;    // Number of elements in the stack
    }

    // Method to view the top element of the stack without removing it.
    peek() {
      return console.log(this.top); // Log the top element
    }

    // Method to add a new element to the top of the stack.
    push(value) {
      let new_node = new Node(value); // Create a new node with the given value
      if (this.isEmpty()) {
        this.bottom = new_node; // If stack is empty, set the bottom to the new node
        this.top = new_node;    // Set the top to the new node
      } else {
        new_node.next = this.top; // Set the next of the new node to the current top
        this.top = new_node;      // Update the top to the new node
      }
      this.length++; // Increment the length of the stack
      return this;   // Return the updated stack
    }
    
    // Method to remove the top element from the stack.
    pop() {
      if (this.isEmpty())
        return null; // If stack is empty, return null
      else {
        if (this.top === this.bottom)  
          this.bottom = null; // If only one element, set bottom to null
        this.top = this.top.next; // Update the top to the next element
        this.length--; // Decrement the length of the stack
        return this; // Return the updated stack
      }
    }
    
    // Method to check if the stack is empty.
    isEmpty() {
      if (this.bottom === null)
        return true; // If bottom is null, stack is empty
      else
        return false; // Otherwise, stack is not empty
    }
  }
  
// Create an instance of the Stack class.
const myStack = new Stack();

// Test the stack methods.
console.log(myStack.push("google"));  // Push "google" onto the stack
console.log(myStack.push("youtube")); // Push "youtube" onto the stack
console.log(myStack.push("wiki"));    // Push "wiki" onto the stack
console.log(myStack.peek());          // View the top element of the stack
console.log(myStack.pop());            // Pop the top element from the stack
console.log(myStack.pop());            // Pop the top element from the stack
