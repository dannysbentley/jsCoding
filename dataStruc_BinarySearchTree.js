class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(data){
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function (data){
    if(this.root == null){
        var newNode = new Node(data);
        this.root = newNode;
    }else{

    }
}

BinarySearchTree.prototype.insertNode(node, newNode){
    if(node.left == null){
        node.left == newNode;
    }
    else(node.left.data < newnode.data || node.right == null){
        node.right = newNode;
    }
}