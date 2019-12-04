//Create Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//Create link list
class LinkList {
  constructor() {
    this.head = null;
  }
}

//insertAtBeginning
LinkList.prototype.insertAtBeginning = function(data) {
  var node = new Node(data);

  node.next = this.head;
  this.head = node;
};

//insertAtEnd
LinkList.prototype.insertAtEnd = function(data) {
  var node = new Node(data);
  if (!this.head) {
    this.head = node;
    return this.head;
  }

  current = this.head;
  while (current.next != null) {
    current = current.next;
  }
  current.next = node;
};

//print index
LinkList.prototype.print = function() {
  var node = this.head;

  while (node) {
    node.next != null
      ? console.log(node.data + " | " + node.next.data)
      : console.log(node.data + " | " + "null");
    node = node.next;
  }
};

LinkList.prototype.reverse = function() {
  console.log(this.head);
  let previous = null;
  let current = this.head;
  let next = null;
  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  this.head = previous;
  return this.head;
};

var linkList = new LinkList();

linkList.insertAtEnd(1);
linkList.insertAtEnd(2);
linkList.insertAtEnd(3);
linkList.insertAtEnd(4);

linkList.print();
var item = linkList.reverse();

linkList.print();
