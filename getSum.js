/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry;
    while(b){
        carry = a & b;
        a= a ^= b;
        b = carry << 1;
    }
    return a;
};

console.log(getSum(1, 2));