class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    peek() {
      return console.log(this.top);
    }

    push(value) {
      let new_node = new Node(value);
      if (this.isEmpty()) {
        this.bottom = new_node;
        this.top = new_node;
      } else {
        new_node.next = this.top; 
        this.top = new_node;
      }
      this.length++;
      return this;
    }
    
    pop() {
      if (this.isEmpty())
        return null;
      else
        if (this.top === this.bottom)  
          this.bottom = null; 
        this.top = this.top.next;
        this.length--;
        return this;
    }
    
    isEmpty() {
      if (this.bottom === null)
        return true
      else
        return false
    }
  }
  
  const myStack = new Stack();
  console.log(myStack.push("google"));
  console.log(myStack.push("youtube"));
  console.log(myStack.push("wiki"));
  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.pop());