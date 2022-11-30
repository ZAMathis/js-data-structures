import Node from "./Node";

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    
    const currentHead = this.head;

    this.head = newHead;
    
    if (currentHead) this.head.setNextNode(currentHead);
  }

  addToTail(data) {
    let tail = this.head;

    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }

  }

  findNodeIteratively(data) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode()
    }
  }

  removeHead() {
    const removedHead = this.head;
    
    if (!removedHead) return;

    this.head = removedHead.getNextNode();

    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';

    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }

    output += '<tail>';

    console.log(output);
  }

}