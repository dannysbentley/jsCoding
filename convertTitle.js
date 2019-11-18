var convertToTitle = function(n) {
    if(n<=26){        
        var letter = (n+9).toString(36).toUpperCase();
        return letter;
    }
    // 1.038461538461538 = 27/26
    var full = n/26;
    full = Math.round(full*100)/100;
    // 0 = 27 - 1.038461538461538 *26
    var currentChar = (n-full) * 26;

    console.log(n + " - " + full + "X" + 26 + " is " + currentChar);
    if(n %26 != 0){
        full--;
        currentChar = 26 - (currentChar % 26);
    }
    return convertToTitle(full) + (currentChar+9).toString(36).toUpperCase()
}

console.log(convertToTitle(27));

// AB = 28
// [1, 2]
// [26, 1]
// CV = 100
// [3,22] 
// AAB = 704
// [1, 1, 2]
// [676, 26, 1]
// AAZ = 701
// [1, 1, 26]
// ABA = 729
// ADT = 800
// [1, 4, 20]
// [676, 26, 1]
// BAA = 1379
// [2, 1, 1]