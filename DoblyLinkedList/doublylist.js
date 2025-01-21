class Node {
  constructor(data) {
    this.previous = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentLastNode = this.tail;
      currentLastNode.next = newNode;
      newNode.previous = currentLastNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    let newNode = new Node(data);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentStartNode = this.head;
      newNode.next = currentStartNode;
      currentStartNode.previous = newNode;
      this.head = newNode;
    }
  }

  TraverseFromStart() {
    if (this.head === null) {
      return "Nothing To Traverse";
    }

    let current = this.head;
    // console.log("curr",current.data);

    do {
      console.log(current.data);
      current = current.next;
    } while (current !== null);
  }

  TraverseFromEnd() {
    if (this.tail === null) {
      return "Nothing To Traverse";
    }

    let current = this.tail;

    do {
      console.log(current.data);
      current = current.previous;
    } while (current !== null);
  }

  DeleteData(datatodelete) {
    if (this.head === null) {
      return "Nothing To Delete";
    }

    let current = this.head;
    while (current !== null) {
      if (current.data === datatodelete) {
        if (current === this.head) {
          this.head = current.next;
          this.head.previous = null;
        }
        if (current === this.tail) {
          this.tail = current.previous;
          this.tail.next = null;
        }

        if (current.previous) {
          current.previous.next = current.next;
        }
        if (current.next) {
          current.next.previous = current.previous;
        }
      }
      current = current.next;
    }
  }

  Search(value) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;
    do {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    } while (current !== null);
    return false;
  }

  Length() {
    if (this.head === null) {
      return 0;
    }
    let result = 0;
    let current = this.head;
    do {
      current = current.next;
      result++;
    } while (current !== null);
    return result;
  }
}

let list = new DoublyLinkedList();
list.append(2);
list.append(3);
list.append(3);
// list.DeleteData(2)
list.TraverseFromStart();
list.TraverseFromEnd();

console.log(list.Search(2));
console.log(list.Length())
