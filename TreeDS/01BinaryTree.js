class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // adding****************************************************
  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }
      if (!current.right) {
        current.right = newNode;
        console.log(this.root);

        return;
      } else {
        queue.push(current.right);
      }
    }
    console.log(queue);
  }

  // searching*************************************************
  search(valueSearch) {
    if (!this.root) {
      return false;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.value === valueSearch) {
        return true;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return false;
  }

  // level-Order**********************************************
  levelOrder() {
    if (!this.root) {
      return;
    }

    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  //   pre_Order************************************************
  preOrder(node = this.root) {
    if (node) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // in_order***************************************************
  inOrder(node = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  // post_order*************************************************
  postOrder(node = this.root) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }
}

const tree = new BinaryTree();
tree.add(10);
tree.add(20);
tree.add(30);
tree.add(40);
tree.add(50);
console.log(tree.search(30));
tree.levelOrder();
console.log("pre_order");
tree.preOrder();
console.log("in_order");
tree.inOrder();
console.log("post_order");
tree.postOrder();

