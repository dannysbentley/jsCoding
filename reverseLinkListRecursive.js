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

// recursive reverse linked list.
LinkList.prototype.reverse = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let temp = this.reverse(head.next);
  head.next.next = head;
  head.next = undefined;
  return temp;
};

function print(head) {
  var node = head;

  while (node) {
    node.next != null
      ? console.log(node.data + " | " + node.next.data)
      : console.log(node.data + " | " + "null");
    node = node.next;
  }
}

var linkList = new LinkList();

linkList.insertAtEnd(1);
linkList.insertAtEnd(2);
linkList.insertAtEnd(3);
linkList.insertAtEnd(4);

linkList.print();
let head = linkList.head;
let newHead = linkList.reverse(head, null);
print(newHead);
