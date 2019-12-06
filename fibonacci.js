function fib(idx) {
    arrFib = [];
    i = 1;
    arrFib.push(0);
    arrFib.push(1);
    while(idx > i){
        arrFib.push(arrFib[i - 1] + arrFib[i])
        i++;
    }
    console.log(arrFib);
    return arrFib[idx];
    
}

var result = fib(10);
console.log('result: '+result);


// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34