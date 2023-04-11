// Stack Data Structure using Linked List
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.top) {
//       return null;
//     }
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     // const holdingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("udemy");
// myStack.push("discord");
// myStack.push("youtube");
// myStack.peek();
// myStack.pop();
// myStack.pop();
// console.log(myStack);

// Stack Data Structure using Arrays
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.push("youtube");
myStack.pop();
myStack.pop();
myStack.peek();
console.log(myStack);
