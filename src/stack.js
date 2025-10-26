import { NotImplementedError } from "../extensions/index.js";

/*
Implement the Stack with a given interface via array.
 */

export default class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
}