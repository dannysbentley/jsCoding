/**
 * @param {string} s
 * @return {curNumber}
 */

class Symbol{
    constructor(x, v){
        this.symbol = x;
        this.value = v;
    }
}

class Stack{
    constructor(){
        this.items = [];
    }    
}

Stack.prototype.push = function(item){
    this.items.push(item);
}

Stack.prototype.pop = function(){
    return this.items.pop();
}

Stack.prototype.peek = function(){
    return this.items[this.items.length -1]
}

Stack.prototype.isEmpty = function(){
    return this.items.length == 0
}

var romanToInt = function(s) {
    var symArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var valArr = [1, 5, 10, 50, 100, 500, 1000]
    var tbl = []
    for(i = 0; i < symArr.length; i++){
        var sym = new Symbol(symArr[i], valArr[i]);
        tbl.push(sym);
    }
    s = s.split('');
    
    var stack = new Stack();
    var result = 0;
    
    for(i = 0; i < s.length; i++){
        var idx = tbl.findIndex(x => x.symbol == s[i]);        
        var curNum = tbl[idx].value;
        //console.log(curNum);
        if(stack.isEmpty()){
            console.log('empty ' + curNum);
            stack.push(curNum);
            continue;
        }
        var preNum = stack.peek();
        console.log(preNum + ' > '+ curNum);
        console.log(stack.isEmpty());
        if(preNum > curNum){            
            while(!stack.isEmpty()){
                console.log(result + ' + '+ largeNum);
                var largeNum = stack.pop()
                result = result + largeNum;
            }
            stack.push(curNum);
        }

        if(curNum == preNum){
            console.log('eq ' + curNum);
            stack.push(curNum);
            continue;
        }
        
        if(preNum < curNum){
            var smallNum = stack.pop();
            stack.push(curNum);
            console.log(stack);
            while(!stack.isEmpty()){
                var largeNum = stack.pop();                                
                curNum = largeNum - smallNum;
            }
            //console.log(stack);
            result = result + curNum;
        }
    }
    
    if(!stack.isEmpty()){        
        while(!stack.isEmpty()){ 
            //console.log(result)           
            var add = stack.pop();
            
            result = result + add;
            console.log(result)
        }
    }
    return result;
};

var result = romanToInt('MCMXCIV')

console.log('result: '+ result);