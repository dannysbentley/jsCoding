let arr = ['a', 'b', 'c', 'd', 'e'];
function shuffel(arr){
    for(let i = arr.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

let results = shuffel(arr);
console.log(results);


/*
O(n)
start from the back. 
swap the number. 
exclude 0
a b c d e   random number 2
        ^
a b e d c   random number 1
      ^
d b e a c   random number 
    ^
*/