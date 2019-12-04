class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

Tree.prototype.insert = function(data) {
  let node = new Node(data);
  if (this.root == null) {
    this.root = node;
  } else {
    this.root.insertNode(node);
  }
};

Node.prototype.insertNode = function(node) {
  if (node.data < this.data) {
    if (this.left === null) {
      this.left = node;
    } else {
      this.left.insertNode(node);
    }
  } else {
    if (this.right === null) {
      this.right = node;
    } else {
      this.right.insertNode(node);
    }
  }
};

Tree.prototype.traverse = function(node) {
  this.root.visit();
};

Node.prototype.visit = function() {
  if (this.left != null) {
    this.left.visit();
  }

  console.log(this.data);
  if (this.right != null) {
    this.right.visit();
  }
};

let bts = new Tree();
bts.insert(9);
bts.insert(3);
bts.insert(20);
bts.insert(15);
bts.insert(7);
bts.traverse(this.root);
