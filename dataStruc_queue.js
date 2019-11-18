class Queue{
    constructor(){
        this.item = [];
    }
}

Queue.prototype.enqueue = function (item) {
    this.item.push(item);
}

Queue.prototype.dequeue = function () {
    
    this.item.shift();
}

Queue.prototype.front = function () {
    return this.item[0];
}

Queue.prototype.isEmpty = function () {
    return this.item.length == 0;
}

Queue.prototype.printQueue =function () {
    this.item.forEach(i => {
        console.log(i);
    });
}

var q = new Queue();

q.dequeue();

q.printQueue();