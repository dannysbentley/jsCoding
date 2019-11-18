//Create Node 
class Node{
    constructor(data) {
        this.data = data;
        this.next = null;        
    }
}
//Create link list 
class LinkList{
    constructor(){
        this.head = null;
    }
}

//insertAtBeginning
LinkList.prototype.insertAtBeginning = function (data) {
    var node = new Node(data);
    
    node.next = this.head;
    this.head = node;
}

//insertAtEnd
LinkList.prototype.insertAtEnd = function (data) {
    var node = new Node(data);
    if(!this.head){
        this.head = node;
    }
    var currentNode = this.head;

    while(currentNode.next != null){
        currentNode = currentNode.next;
    }
    currentNode.next = node;
}

//getAt
LinkList.prototype.getAt = function (index) {
    var count = 0;
    var currentNode = this.head;
    
    while(currentNode){
        if(count == index){
            return currentNode;
        }
        count++
        currentNode = currentNode.next;
    }
    return null;
}

//print index
LinkList.prototype.print = function () {
    var node = this.head;
    while(node){
        node.next != null ? console.log(node.data + " | "+ node.next.data) : console.log(node.data + " | "+ "null")
        node = node.next;
    }    
}

//insertAtIndex
LinkList.prototype.insertAtIndex = function (data, index) {
    var node = new Node(data);
    if(!this.head){
        this.head = node;
        return;
    }
    if(index == 0){
        this.head = node;
        return
    }
    let previous = this.getAt(index - 1);
    node.next = previous.next;
    previous.next = node;
}

//deleteFirstNode

//deleteLastNode

//deleteAt

//deleteList

var linkList = new LinkList();

linkList.insertAtBeginning('01');
linkList.insertAtBeginning('00');
linkList.insertAtEnd('02')
linkList.insertAtIndex('new 02', 2);
linkList.insertAtIndex('new 01', 1);

var item = linkList.getAt(1);

linkList.print();
