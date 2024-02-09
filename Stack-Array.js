// Define a class Stack to implement the stack data structure.
class Stack {
    constructor() {
      this.array = []; // Initialize an array to store stack elements
    }

    // Method to view the top element of the stack without removing it.
    peek() {
      console.log(this.array[this.array.length-1]); // Log the top element of the stack
    }

    // Method to add a new element to the top of the stack.
    push(value) {
      this.array.push(value); // Add the value to the end of the array
    }
    
    // Method to remove the top element from the stack.
    pop() {
      this.array.pop(); // Remove the last element from the array
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
console.log(myStack.peek());           // View the top element of the stack
console.log(myStack.pop());            // Pop the top element from the stack
