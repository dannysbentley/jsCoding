var repeat = 'dAnNyBentley';
// create an object to add char and count
class counter{
    constructor(){
        this.char = null;
        this.count = 0;
    }
}

function countRepeat(str) {
    // convert string to lowercase, split to array and sort array. 
    var str = str.toLocaleLowerCase().split('').sort();    
    console.log(str);
    // array to hold objects. 
    var arr = []
    // iterate over the input
    for( i = 0; i < str.length; i++){
        // search array of objects to find object with char
        var found = arr.findIndex(x => x.char == str[i]);
        // if found add to count
        if(found > 0){            
            arr[found].count = arr[found].count + 1;
        }
        // if not found create new object add char and count to 1.
        // add to array
        if(found == -1){            
            var item = new counter()
            item.char = str[i];
            item.count = 1;
            arr.push(item);
        }

    }
    console.log(arr);
    return arr;
}

var count = countRepeat(repeat);
console.log(count);