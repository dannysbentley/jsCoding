class Stack{
    constructor(){
        this.items = []
    }
}

Stack.prototype.push = function (item) {
    this.items.push(item);
}

Stack.prototype.pop = function () {
    if(this.items.length == 0){
        return 'empty'
    }
    this.items.pop();
}

Stack.prototype.peek = function () {
    return console.log(this.items[this.items.length - 1]);
}

Stack.prototype.isEmpty = function () {
    return this.items.length == 0;
}

Stack.prototype.print = function () {
    this.items.forEach(i => {
        console.log(i);
    });  
}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
// s.pop()
// console.log(s.isEmpty());
s.peek();
// s.print();