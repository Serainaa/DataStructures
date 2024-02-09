// Define a class Node to represent individual elements in the queue.
class Node {
    constructor(value) {
      this.value = value; // Value of the node
      this.next = null;   // Pointer to the next node
    }
  }
  
// Define a class Queue to implement the queue data structure.
class Queue {
    constructor() {
      this.first = null;  // Reference to the first element of the queue
      this.last = null;   // Reference to the last element of the queue
      this.length = 0;    // Number of elements in the queue
    }

    // Method to view the first element of the queue without removing it.
    peek() {
      return console.log(this.first); // Log the first element
    }

    // Method to add a new element to the end of the queue.
    enqueue(value) {
      let new_node = new Node(value); // Create a new node with the given value
      if (this.isEmpty()) {
        this.first = new_node; // If queue is empty, set both first and last to the new node
        this.last = new_node;
      } else { 
        this.last.next = new_node; // Set the next of the last node to the new node
        this.last = new_node;      // Update the last to the new node
      }
      this.length++; // Increment the length of the queue
      return this;   // Return the updated queue
    }
    
    // Method to remove the first element from the queue.
    dequeue() {
      if (this.isEmpty())
        return null; // If queue is empty, return null
      else {
        if (this.first === this.last)  
          this.last = null; // If only one element, set last to null
        this.first = this.first.next; // Update the first to the next element
        this.length--; // Decrement the length of the queue
        return this; // Return the updated queue
      }
    }
    
    // Method to check if the queue is empty.
    isEmpty() {
      if (this.first === null)
        return true; // If first is null, queue is empty
      else
        return false; // Otherwise, queue is not empty
    }
  }
  
// Create an instance of the Queue class.
const myQueue = new Queue();

// Test the queue methods.
console.log(myQueue.enqueue("song1")); // Enqueue "song1" into the queue
console.log(myQueue.enqueue("song2")); // Enqueue "song2" into the queue
console.log(myQueue.enqueue("song3")); // Enqueue "song3" into the queue
console.log(myQueue.enqueue("song4")); // Enqueue "song4" into the queue
console.log(myQueue.peek());           // View the first element of the queue
console.log(myQueue.dequeue());        // Dequeue the first element from the queue
console.log(myQueue.dequeue());        // Dequeue the first element from the queue
console.log(myQueue.peek());           // View the first element of the queue
