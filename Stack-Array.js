class Stack {
    constructor() {
      this.array = [];
    }

    peek() {
      console.log(this.array[this.array.length-1]);
    }

    push(value) {
      this.array.push(value)
    }
    
    pop() {
      this.array.pop()
    } 
  }
  
  const myStack = new Stack();
  console.log(myStack.push("google"));
  console.log(myStack.push("youtube"));
  console.log(myStack.push("wiki"));
  console.log(myStack.peek());
  console.log(myStack.pop());
  console.log(myStack.peek());
  console.log(myStack.pop());