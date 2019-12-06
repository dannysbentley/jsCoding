function longestConsecutive(arr){
    let map = new Map(arr.map(k => [k, false]));
    let result = 0;
    for(const[key] of map){
        let count = 0;
        if(!map.has(key - 1)){
            let idx = key;
            while(map.has(idx++)){
                count++
            }
        }
        result = Math.max(result, count);
    }
    return result;
}


var arr = [100, 4, 1, 3, 2, 99];

var result = longestConsecutive(arr);
console.log("result: ",result);

// 100 